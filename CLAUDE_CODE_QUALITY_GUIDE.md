# Guide de qualité de code pour projets Next.js / React

> Ce guide est destiné à être fourni comme contexte à Claude Code (ou tout autre assistant IA)
> afin d'appliquer systématiquement les meilleures pratiques sur les projets web.
> Il couvre la sécurité, la performance, l'accessibilité, l'architecture et le nettoyage de code IA.

---

## 1. SÉCURITÉ

### 1.1 XSS et `dangerouslySetInnerHTML`

**Problème** : Tout contenu injecté via `dangerouslySetInnerHTML` sans échappement est un vecteur XSS.

**Règle** : Toujours échapper le HTML brut AVANT de le transformer en markup.

```typescript
// OBLIGATOIRE : fonction d'échappement HTML
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Utilisation dans un parser markdown custom :
function renderMarkdown(content: string): string {
  let html = escapeHtml(content); // ÉCHAPPER D'ABORD
  // Puis appliquer les transformations markdown
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  return html;
}
```

**Checklist** :
- [ ] Rechercher `dangerouslySetInnerHTML` dans tout le codebase
- [ ] Vérifier que chaque instance sanitize son contenu
- [ ] Pour le markdown, préférer une lib éprouvée (remark, rehype) plutôt qu'un parser regex custom
- [ ] Les injections JSON-LD via `JSON.stringify()` sont sûres (pas de XSS possible)

### 1.2 Content Security Policy (CSP)

**Problème** : `'unsafe-inline'` et `'unsafe-eval'` dans `script-src` neutralisent la CSP.

**Règle** : Supprimer `'unsafe-eval'` systématiquement. Garder `'unsafe-inline'` uniquement pour `style-src` si nécessaire.

```typescript
// next.config.ts
{
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' https://domaines-tiers-autorisés.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",  // inline OK pour styles
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https:",
    "object-src 'none'",       // TOUJOURS AJOUTER
    "base-uri 'self'",         // TOUJOURS AJOUTER
    "form-action 'self'",      // TOUJOURS AJOUTER
  ].join('; '),
}
```

**Checklist** :
- [ ] Supprimer `'unsafe-eval'` de script-src
- [ ] Ajouter `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`
- [ ] Vérifier que les domaines tiers (analytics, ads) sont explicitement listés

### 1.3 Pas de secrets dans le code

- [ ] Vérifier qu'aucun fichier `.env`, clé API ou token n'est committé
- [ ] Les IDs analytics (Umami, GA) sont publics et OK dans le code

---

## 2. PERFORMANCE

### 2.1 Séparation contenu / métadonnées

**Problème** : Charger le contenu complet des articles sur les pages de liste gaspille mémoire et bande passante.

**Règle** : Créer des variantes "metadata-only" des fonctions de récupération.

```typescript
// Types
export type ArticleMeta = Omit<ArticleData, 'content'>;

function stripContent(article: ArticleData): ArticleMeta {
  const { content, ...meta } = article;
  return meta;
}

// Fonctions pour les pages de liste (sans contenu)
export function getArticlesMetaByFranchise(franchise: string): ArticleMeta[] {
  return articles.filter(a => a.franchise === franchise).map(stripContent);
}

export function getRecentArticlesMeta(limit = 5): ArticleMeta[] {
  return [...articles]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit)
    .map(stripContent);
}

// Fonction pour les pages de détail (avec contenu)
export function getArticleBySlug(franchise: string, slug: string): ArticleData | undefined {
  return articles.find(a => a.franchise === franchise && a.slug === slug);
}
```

**Checklist** :
- [ ] Les pages de liste (index, hub, homepage) utilisent `*Meta` functions
- [ ] Seules les pages de détail article utilisent `getArticleBySlug` (contenu complet)
- [ ] Les composants de liste n'importent pas `ArticleData` mais `ArticleMeta`

### 2.2 Memoization React

**Problème** : Les calculs coûteux (tri, filtrage, groupement) s'exécutent à chaque render.

**Règle** : Utiliser `useMemo` pour les calculs dérivés, `React.memo` pour les composants répétés.

```typescript
// AVANT (recalculé à chaque render)
const articlesByCategory: Record<string, ArticleMeta[]> = {};
articles.forEach(a => { /* ... */ });

// APRÈS
const articlesByCategory = useMemo(() => {
  const grouped: Record<string, ArticleMeta[]> = {};
  articles.forEach(a => {
    if (!grouped[a.category]) grouped[a.category] = [];
    grouped[a.category].push(a);
  });
  return grouped;
}, [articles]);
```

**Checklist** :
- [ ] Tout `Array.sort()`, `.filter()`, `.reduce()` dans un composant → `useMemo`
- [ ] Composants rendus dans un `.map()` avec props stables → `React.memo`
- [ ] Handlers passés en props à des enfants → `useCallback`

### 2.3 Chargement des polices

**Problème** : Charger 15+ familles de polices alourdit le chargement initial.

**Règle** : Séparer polices critiques (body + display) des polices thématiques, et conditionner par locale.

```typescript
// Polices critiques : chargées en synchrone (2-3 familles max)
const CRITICAL_FONTS = '...family=Body+Font&family=Display+Font&display=swap';

// Polices thématiques : chargées en async
const DEFERRED_FONTS = '...family=Theme+Font+1&family=Theme+Font+2&display=swap';

// Polices spécifiques à une locale : conditionnelles
const KR_FONTS = '...family=Noto+Sans+KR&display=swap';

// Dans le layout :
{locale === 'ko' && <link href={KR_FONTS} rel="stylesheet" />}
```

**Checklist** :
- [ ] Maximum 3 familles en chargement synchrone
- [ ] Polices spécifiques à une locale → chargement conditionnel
- [ ] `display=swap` sur toutes les polices Google Fonts
- [ ] Vérifier que les polices non utilisées ne sont pas chargées

### 2.4 Nettoyage des dépendances

**Problème** : Les projets scaffoldés par IA incluent souvent des packages jamais utilisés.

**Règle** : Auditer `package.json` et supprimer tout package non importé dans le code.

```bash
# Rechercher les imports réels pour chaque dépendance
grep -r "from 'package-name'" --include='*.tsx' --include='*.ts' .
```

**Packages souvent ajoutés inutilement par les IA** :
- `@hookform/resolvers`, `react-hook-form`, `zod` (si pas de formulaires)
- `recharts` (si pas de graphiques)
- `react-day-picker`, `date-fns` (si pas de sélecteur de date)
- `cmdk` (si pas de command palette)
- `vaul` (si pas de drawer)
- `input-otp` (si pas d'OTP)
- `next-themes` (si thème custom via CSS variables)
- `sonner` (si pas de toasts)
- `embla-carousel-react` (si pas de carousel)
- `react-resizable-panels` (si pas de panneaux redimensionnables)

**Checklist** :
- [ ] Pour chaque dep dans package.json, vérifier qu'elle est importée quelque part
- [ ] Supprimer les dépendances sans import
- [ ] Vérifier aussi les packages Radix UI : souvent 25+ installés, 2-3 utilisés

---

## 3. ACCESSIBILITÉ (a11y)

### 3.1 Skip link

**Règle** : Toujours ajouter un lien "Passer au contenu" en premier élément du body.

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[var(--color-accent)] focus:text-white"
>
  {t('accessibility.skipToContent')}
</a>
```

### 3.2 Focus traps dans les modals

**Règle** : Tout modal/overlay doit :
- Avoir `role="dialog"` et `aria-modal="true"`
- Piéger le focus à l'intérieur (tab ne sort pas du modal)
- Restaurer le focus au bouton déclencheur à la fermeture
- Se fermer avec Escape

### 3.3 Navigation clavier dans les dropdowns

**Règle** : Les dropdowns doivent supporter :
- `ArrowDown` / `ArrowUp` pour naviguer entre les items
- `Enter` / `Space` pour sélectionner
- `Escape` pour fermer
- `Tab` pour sortir

### 3.4 Contrastes de couleur

**Règle** : Vérifier WCAG AA (4.5:1 texte normal, 3:1 grand texte).

**Checklist** :
- [ ] Tester les couleurs tertiaires/secondaires sur fond sombre ET clair
- [ ] Vérifier `--color-text-tertiary` spécifiquement
- [ ] Utiliser un outil comme axe DevTools ou Lighthouse

### 3.5 Labels et ARIA

- [ ] Chaque `<input>` a un `<label>` associé ou `aria-label`
- [ ] Les boutons toggle ont `aria-expanded`
- [ ] Les images ont des `alt` descriptifs (pas juste le nom de l'entité)
- [ ] Les `<nav>` multiples ont chacune un `aria-label` distinctif

---

## 4. RÉSILIENCE

### 4.1 Error boundaries

**Règle** : Toujours créer `error.tsx` et `not-found.tsx` dans l'app directory Next.js.

```
app/
  [locale]/
    error.tsx        ← OBLIGATOIRE : error boundary root
    not-found.tsx    ← OBLIGATOIRE : page 404
    [franchise]/
      error.tsx      ← Recommandé : error boundary par section
```

```tsx
// app/[locale]/error.tsx
'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <button onClick={reset} className="mt-4 px-4 py-2 bg-accent text-white rounded">
          Try again
        </button>
      </div>
    </div>
  );
}
```

### 4.2 Prévention du flash de thème

**Problème** : Le thème dark/light est lu depuis `localStorage` dans un `useEffect`, causant un flash.

**Règle** : Ajouter un script inline synchrone dans `<head>` qui applique le thème avant le premier paint.

```tsx
// Dans layout.tsx, dans <head>
<script dangerouslySetInnerHTML={{
  __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}})()`,
}} />
```

---

## 5. INTERNATIONALISATION (i18n)

### 5.1 Cohérence du système de traduction

**Problème** : L'IA génère souvent des ternaires inline au lieu d'utiliser le système i18n en place.

**Règle** : JAMAIS de ternaires de locale dans le JSX. Toujours utiliser la lib i18n configurée.

```tsx
// INTERDIT
{locale === 'en' ? 'Developer' : locale === 'ko' ? '개발사' : 'Développeur'}

// OBLIGATOIRE
{t('franchise.developer')}
```

**Checklist** :
- [ ] Rechercher `locale === '` dans tout le codebase (hors middleware/routing)
- [ ] Chaque occurrence → extraire vers un fichier de traduction
- [ ] Vérifier que TOUTES les locales ont la clé correspondante

### 5.2 Un seul système i18n

**Problème** : Coexistence de next-intl + objets de traduction en dur + ternaires = 3 systèmes concurrents.

**Règle** : Un seul système. Si `next-intl` est installé, tout passe par `useTranslations()`.

---

## 6. ARCHITECTURE — Patterns anti-IA

### 6.1 Pas de `// @ts-nocheck`

**Règle** : Interdit en production. Si TypeScript se plaint, corriger le type, pas désactiver le check.

```bash
# Trouver les fichiers avec @ts-nocheck
grep -r "// @ts-nocheck" --include='*.tsx' --include='*.ts' .
```

**Checklist** :
- [ ] Supprimer tous les `@ts-nocheck`
- [ ] Remplacer tous les `as any` par des types explicites
- [ ] Définir les interfaces dans un fichier partagé (`types/`)

### 6.2 Pas de duplication de code entre modules

**Problème** : L'IA génère chaque module (wiki, page) indépendamment → code copié-collé.

**Règle** : Factoriser les patterns répétés.

```
AVANT (IA typique) :
  gta-vi-wiki/App.tsx         (90 lignes)
  crimson-desert-wiki/App.tsx  (90 lignes identiques)
  fable-wiki/App.tsx           (90 lignes identiques)
  wolverine-wiki/App.tsx       (90 lignes identiques)

APRÈS (expert) :
  lib/wiki-engine/WikiApp.tsx  (90 lignes, paramétrique)
  gta-vi-wiki/App.tsx          (5 lignes, importe WikiApp avec config)
```

**Checklist** :
- [ ] Identifier les fichiers quasi-identiques entre modules
- [ ] Extraire un composant/utilitaire partagé paramétré
- [ ] Les interfaces de données identiques → fichier partagé dans `lib/types/`

### 6.3 Pas de SVG inline gigantesque

**Règle** : Les SVG de plus de 20 coordonnées → fichier `.svg` séparé ou composant dédié.

### 6.4 Pas de magic numbers

**Règle** : Tout nombre non trivial → constante nommée avec commentaire.

```typescript
// INTERDIT
delay: 0.8 + i * 0.15
duration: 20 + i * 4

// OBLIGATOIRE
const STAGGER_DELAY = 0.15;
const BASE_DELAY = 0.8;
const BASE_ORBIT_DURATION = 20;
delay: BASE_DELAY + i * STAGGER_DELAY
duration: BASE_ORBIT_DURATION + i * 4
```

### 6.5 Pas de code mort / contradictoire

```typescript
// INTERDIT : la 2e condition est inatteignable
color: isFable ? undefined : isFable ? secondaryColor : accentColor

// CORRIGÉ
color: isFable ? secondaryColor : isWolverine ? undefined : accentColor
```

### 6.6 README réaliste

**Règle** : Supprimer le README scaffold (`create-next-app`) et le remplacer par un README qui décrit le projet réel.

---

## 7. IMAGES

### 7.1 Utiliser `next/image`

**Règle** : Jamais de `<img>` brut dans un projet Next.js. Toujours `<Image>` de `next/image`.

```tsx
import Image from 'next/image';

<Image
  src={coverImage}
  alt="Description précise de l'image"
  width={1200}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"      // ou priority={true} pour LCP
/>
```

**Checklist** :
- [ ] Rechercher `<img ` dans tout le codebase
- [ ] Remplacer par `<Image>` de next/image
- [ ] Ajouter `sizes` pour le responsive
- [ ] Les images above-the-fold → `priority={true}`

---

## 8. CHECKLIST GLOBALE POST-GÉNÉRATION

Après avoir généré du code avec une IA, vérifier systématiquement :

### Sécurité
- [ ] Pas de `dangerouslySetInnerHTML` sans sanitization
- [ ] CSP sans `'unsafe-eval'`
- [ ] Pas de secrets dans le code

### Performance
- [ ] Contenu séparé des métadonnées sur les pages de liste
- [ ] `useMemo` sur les calculs coûteux
- [ ] Polices chargées conditionnellement par locale
- [ ] Dépendances inutilisées supprimées
- [ ] Pas de `<img>` brut (utiliser `next/image`)

### Accessibilité
- [ ] Skip link présent
- [ ] Focus traps dans les modals
- [ ] Navigation clavier dans les dropdowns
- [ ] Contrastes WCAG AA vérifiés
- [ ] Labels sur tous les inputs

### Résilience
- [ ] `error.tsx` et `not-found.tsx` présents
- [ ] Script anti-flash de thème dans `<head>`

### Qualité de code
- [ ] Zéro `// @ts-nocheck`
- [ ] Zéro `as any`
- [ ] Zéro ternaires de locale (tout via i18n)
- [ ] Pas de code dupliqué entre modules
- [ ] Pas de magic numbers
- [ ] README à jour
- [ ] Pas de SVG inline géants
- [ ] Pas de code mort / conditions contradictoires

---

## Comment utiliser ce guide

1. **Pour un nouveau projet** : Fournir ce guide en contexte dès le début
2. **Pour un projet existant** : Demander à Claude Code d'auditer le projet selon ce guide
3. **Commande suggérée** :
   ```
   Audite ce projet selon le guide CLAUDE_CODE_QUALITY_GUIDE.md
   et liste tous les problèmes trouvés par catégorie avec fichier:ligne.
   ```

---

*Généré à partir d'un audit réel du projet PopCodex — Mars 2026*
