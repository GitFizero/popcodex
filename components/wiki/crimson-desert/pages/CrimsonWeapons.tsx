'use client';

import { useState, useMemo, useCallback } from 'react';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';
import { glossaryEntries } from '@/lib/data/crimson-desert/glossary';

interface WeaponData {
  id: string;
  name: { en: string; fr: string; es: string; it: string; ko: string };
  icon: string;
  type: string;
  range: 'Melee' | 'Ranged' | 'Hybrid';
  speed: number;
  power: number;
  reach: number;
  description: { en: string; fr: string; es: string; it: string; ko: string };
  playstyle: { en: string; fr: string; es: string; it: string; ko: string };
  combos: string[];
  users: string[];
  image: string;
}

const weapons: WeaponData[] = [
  {
    id: 'longsword',
    name: { en: 'Longsword', fr: 'Épée longue', es: 'Espada larga', it: 'Spada lunga', ko: '장검' },
    icon: '\u2694\uFE0F',
    type: 'One-Handed',
    range: 'Melee',
    speed: 7,
    power: 6,
    reach: 5,
    description: {
      en: 'The quintessential balanced weapon. The longsword offers a perfect blend of speed, power, and defensive capability with its accompanying shield. Ideal for players who want versatility in every encounter.',
      fr: "L'arme équilibrée par excellence. L'épée longue offre un mélange parfait de vitesse, puissance et capacité défensive avec son bouclier. Idéale pour les joueurs recherchant la polyvalence.",
      es: 'El arma equilibrada por excelencia. La espada larga ofrece una mezcla perfecta de velocidad, potencia y capacidad defensiva con su escudo.',
      it: "L'arma equilibrata per eccellenza. La spada lunga offre un mix perfetto di velocità, potenza e capacità difensiva con il suo scudo.",
      ko: '가장 균형 잡힌 무기. 장검은 방패와 함께 속도, 힘, 방어력의 완벽한 조화를 제공합니다.',
    },
    playstyle: {
      en: 'Balanced fighter with strong parry options and reliable combos. The shield enables perfect parries that open devastating counter-attack windows.',
      fr: "Combattant équilibré avec de fortes options de parade et des combos fiables. Le bouclier permet des parades parfaites ouvrant des fenêtres de contre-attaque dévastatrices.",
      es: 'Luchador equilibrado con fuertes opciones de parada y combos fiables.',
      it: 'Combattente equilibrato con forti opzioni di parata e combo affidabili.',
      ko: '균형 잡힌 전투원. 강력한 패리 옵션과 신뢰할 수 있는 콤보 보유.',
    },
    combos: ['Slash → Thrust → Shield Bash', 'Parry → Riposte → Heavy Slash', 'Guard Counter → Combo Finisher'],
    users: ['Kliff'],
    image: '/images/crimson-desert/combat-action.jpg',
  },
  {
    id: 'dual-blades',
    name: { en: 'Dual Blades', fr: 'Doubles lames', es: 'Dobles espadas', it: 'Doppie lame', ko: '쌍검' },
    icon: '\u2720',
    type: 'Dual-Wield',
    range: 'Melee',
    speed: 9,
    power: 5,
    reach: 4,
    description: {
      en: 'Lightning-fast paired weapons for relentless aggression. Dual blades sacrifice raw power and reach for unmatched attack speed and evasive maneuvers, allowing combatants to weave through enemy defenses.',
      fr: "Armes jumelles ultra-rapides pour une agression sans relâche. Les doubles lames sacrifient la puissance brute pour une vitesse d'attaque inégalée et des manœuvres évasives.",
      es: 'Armas emparejadas ultrarrápidas para una agresión implacable. Las dobles espadas sacrifican potencia bruta por velocidad de ataque inigualable.',
      it: 'Armi gemelle ultraveloci per un\'aggressione implacabile. Le doppie lame sacrificano la potenza grezza per una velocità d\'attacco senza pari.',
      ko: '끊임없는 공격을 위한 초고속 쌍검. 순수한 힘을 속도와 회피 기동으로 대체합니다.',
    },
    playstyle: {
      en: 'Hit-and-run specialist with rapid chains and i-frame dodges. Best for players who thrive on speed and precise timing over raw power.',
      fr: "Spécialiste du hit-and-run avec des chaînes rapides et des esquives en i-frame. Pour les joueurs qui excellent dans la vitesse et le timing précis.",
      es: 'Especialista en hit-and-run con cadenas rápidas y esquivas con invulnerabilidad.',
      it: 'Specialista hit-and-run con catene rapide e schivate con i-frame.',
      ko: '빠른 체인과 무적 회피를 활용하는 히트앤런 전문가.',
    },
    combos: ['Flurry → Backstep → Lunge', 'Cross Slash → Spin Attack → Execute', 'Dodge → Counter Flurry'],
    users: ['Damiane'],
    image: '/images/crimson-desert/char-damiane.jpg',
  },
  {
    id: 'greatsword',
    name: { en: 'Greatsword', fr: 'Spadon', es: 'Espadón', it: 'Spadone', ko: '대검' },
    icon: '\uD83D\uDDE1\uFE0F',
    type: 'Two-Handed',
    range: 'Melee',
    speed: 4,
    power: 9,
    reach: 7,
    description: {
      en: 'A massive two-handed blade that trades speed for devastating sweeping attacks. The greatsword excels at crowd control and raw damage, cleaving through multiple enemies in a single, earth-shaking swing.',
      fr: "Une lame massive à deux mains qui échange la vitesse contre des attaques balayantes dévastatrices. Le spadon excelle dans le contrôle de foule et les dégâts bruts.",
      es: 'Una espada masiva a dos manos que intercambia velocidad por ataques devastadores. El espadón sobresale en control de masas y daño bruto.',
      it: 'Una lama massiccia a due mani che sacrifica la velocità per attacchi devastanti. Lo spadone eccelle nel controllo della folla e nel danno grezzo.',
      ko: '속도를 희생하여 파괴적인 광역 공격을 가하는 거대한 양손 검. 다수의 적을 한 번에 베어냅니다.',
    },
    playstyle: {
      en: 'Slow but devastating area-of-effect specialist. Requires careful timing and positioning but rewards patience with massive damage.',
      fr: "Spécialiste lent mais dévastateur des dégâts de zone. Nécessite un timing et un positionnement précis mais récompense la patience.",
      es: 'Especialista lento pero devastador en daño de área. Requiere timing y posicionamiento cuidadosos.',
      it: 'Specialista lento ma devastante nell\'area di effetto. Richiede timing e posizionamento precisi.',
      ko: '느리지만 파괴적인 광역 전문가. 정확한 타이밍과 위치 선정이 필요합니다.',
    },
    combos: ['Overhead Slam → Ground Shatter', 'Charged Sweep → Follow-up Cleave', 'Super Armor → Whirlwind'],
    users: ['Oongka'],
    image: '/images/crimson-desert/char-oongka.jpg',
  },
  {
    id: 'staff',
    name: { en: 'Staff', fr: 'Bâton', es: 'Bastón', it: 'Bastone', ko: '지팡이' },
    icon: '\uD83E\uDE84',
    type: 'Two-Handed',
    range: 'Hybrid',
    speed: 6,
    power: 7,
    reach: 8,
    description: {
      en: 'A channeling focus for elemental magic. The staff allows wielders to unleash devastating fire, ice, and wind spells at range while maintaining decent melee capability for close encounters.',
      fr: "Un catalyseur de magie élémentaire. Le bâton permet de déchaîner des sorts dévastateurs de feu, glace et vent à distance tout en conservant une capacité de mêlée correcte.",
      es: 'Un canalizador de magia elemental. El bastón permite lanzar hechizos devastadores de fuego, hielo y viento a distancia.',
      it: 'Un canalizzatore di magia elementale. Il bastone permette di scatenare incantesimi devastanti di fuoco, ghiaccio e vento.',
      ko: '원소 마법의 매개체. 지팡이는 원거리에서 불, 얼음, 바람 마법을 사용할 수 있게 합니다.',
    },
    playstyle: {
      en: 'Elemental caster with area denial and crowd control. Combine different elements for powerful synergies — freeze then shatter, burn then explode.',
      fr: "Lanceur de sorts élémentaires avec contrôle de zone. Combinez les éléments pour des synergies puissantes — geler puis briser, brûler puis exploser.",
      es: 'Lanzador elemental con control de área. Combina elementos para sinergias poderosas.',
      it: 'Incantatore elementale con controllo dell\'area. Combina diversi elementi per sinergie potenti.',
      ko: '광역 제어와 군중 통제를 위한 원소 시전자. 다양한 원소를 결합하여 강력한 시너지를 만듭니다.',
    },
    combos: ['Fireball → Ignite → Explosion', 'Ice Lance → Freeze → Shatter', 'Wind Gust → Lift → Slam'],
    users: ['Hexe Marie'],
    image: '/images/crimson-desert/char-hexe-marie.jpg',
  },
  {
    id: 'bow',
    name: { en: 'Bow', fr: 'Arc', es: 'Arco', it: 'Arco', ko: '활' },
    icon: '\uD83C\uDFF9',
    type: 'Two-Handed',
    range: 'Ranged',
    speed: 6,
    power: 7,
    reach: 10,
    description: {
      en: 'The ultimate ranged weapon for precision strikers. The bow allows for devastating charged shots, rapid volleys, and tactical retreating fire. Mastering the bow means controlling the battlefield from afar.',
      fr: "L'arme à distance ultime pour les tireurs de précision. L'arc permet des tirs chargés dévastateurs, des volées rapides et un tir de couverture tactique.",
      es: 'El arma a distancia definitiva para tiradores de precisión. El arco permite disparos cargados devastadores y ráfagas rápidas.',
      it: "L'arma a distanza definitiva per i tiratori di precisione. L'arco consente colpi caricati devastanti e raffiche rapide.",
      ko: '정밀 타격을 위한 궁극의 원거리 무기. 차지샷, 빠른 연사, 전술적 후퇴 사격이 가능합니다.',
    },
    playstyle: {
      en: 'Long-range precision striker with kiting potential. Charged shots deal massive single-target damage while rapid fire provides sustained DPS.',
      fr: "Tireur de précision longue portée avec potentiel de kiting. Les tirs chargés infligent des dégâts massifs sur cible unique.",
      es: 'Tirador de precisión a larga distancia con potencial de kiting.',
      it: 'Tiratore di precisione a lunga distanza con potenziale di kiting.',
      ko: '카이팅이 가능한 장거리 정밀 타격수. 차지샷은 막대한 단일 대상 피해를 줍니다.',
    },
    combos: ['Charged Shot → Quick Shot → Roll', 'Rain of Arrows → Pin Down', 'Headshot → Critical Follow-up'],
    users: ['Kliff'],
    image: '/images/crimson-desert/kliff-forest.jpg',
  },
  {
    id: 'lance',
    name: { en: 'Lance', fr: 'Lance', es: 'Lanza', it: 'Lancia', ko: '창' },
    icon: '\uD83D\uDD31',
    type: 'Two-Handed',
    range: 'Melee',
    speed: 5,
    power: 8,
    reach: 9,
    description: {
      en: 'A long-reaching polearm that dominates at mid-range. The lance combines powerful thrusting attacks with sweeping crowd control, excelling in mounted combat and keeping enemies at bay.',
      fr: "Une arme d'hast à longue portée dominant à mi-distance. La lance combine des attaques perçantes puissantes avec du contrôle de foule, excellant au combat monté.",
      es: 'Un arma de asta de largo alcance que domina a media distancia. La lanza combina ataques penetrantes con control de masas.',
      it: "Un'arma ad asta a lungo raggio che domina a media distanza. La lancia combina potenti attacchi di punta con il controllo della folla.",
      ko: '중거리를 지배하는 장창. 강력한 찌르기 공격과 광역 제어를 결합하며, 기마 전투에 탁월합니다.',
    },
    playstyle: {
      en: 'Mid-range control fighter with excellent reach. Excels on horseback where charge attacks become devastatingly powerful.',
      fr: "Combattant de contrôle à mi-portée avec une excellente allonge. Excelle à cheval où les charges deviennent dévastatrices.",
      es: 'Combatiente de control a media distancia con excelente alcance.',
      it: 'Combattente di controllo a media distanza con eccellente portata.',
      ko: '뛰어난 사거리의 중거리 제어 전투원. 기마 돌격이 파괴적으로 강력합니다.',
    },
    combos: ['Thrust Combo → Sweep → Vault', 'Mounted Charge → Dismount Strike', 'Polearm Spin → Knockback'],
    users: ['Kliff'],
    image: '/images/crimson-desert/combat-action.jpg',
  },
  {
    id: 'heavy-weapons',
    name: { en: 'Heavy Weapons', fr: 'Armes lourdes', es: 'Armas pesadas', it: 'Armi pesanti', ko: '중무기' },
    icon: '\uD83E\uDE93',
    type: 'Two-Handed',
    range: 'Melee',
    speed: 3,
    power: 10,
    reach: 6,
    description: {
      en: 'Warhammers, great axes, and other brutal implements of destruction. Heavy weapons deliver the highest raw damage in the game, with attacks that can stagger even the largest bosses and break through any guard.',
      fr: "Marteaux de guerre, grandes haches et autres instruments de destruction. Les armes lourdes infligent les dégâts bruts les plus élevés, capables d'étourdir même les plus grands boss.",
      es: 'Martillos de guerra, grandes hachas y otros instrumentos de destrucción. Las armas pesadas infligen el mayor daño bruto del juego.',
      it: 'Martelli da guerra, grandi asce e altri strumenti di distruzione. Le armi pesanti infliggono il danno grezzo più alto del gioco.',
      ko: '전쟁 망치, 대형 도끼 등 파괴의 도구. 게임 내 최고의 순수 피해를 제공하며 거대 보스도 경직시킵니다.',
    },
    playstyle: {
      en: 'Maximum damage dealer with hyper-armor attacks. Slow wind-ups are rewarded with earth-shattering impacts that can break boss stagger bars in one hit.',
      fr: "Infligeur de dégâts maximum avec des attaques en super-armure. Les préparations lentes sont récompensées par des impacts dévastateurs.",
      es: 'Máximo daño con ataques de hiperarmadura. Las preparaciones lentas se recompensan con impactos devastadores.',
      it: 'Massimo danno con attacchi in iper-armatura. Le preparazioni lente sono ricompensate con impatti devastanti.',
      ko: '하이퍼아머 공격으로 최대 피해를 주는 딜러. 느린 준비 동작이 파괴적인 충격으로 보상됩니다.',
    },
    combos: ['Overhead Crush → Ground Pound', 'Hyper Armor Swing → Execute', 'Guard Break → Devastating Blow'],
    users: ['Oongka'],
    image: '/images/crimson-desert/char-oongka.jpg',
  },
  {
    id: 'bare-hands',
    name: { en: 'Bare Hands', fr: 'Mains nues', es: 'Manos desnudas', it: 'Mani nude', ko: '맨손' },
    icon: '\u270A',
    type: 'Unarmed',
    range: 'Melee',
    speed: 8,
    power: 6,
    reach: 3,
    description: {
      en: 'Raw, primal combat using fists and grappling techniques. Bare-handed fighting offers unique throw and submission mechanics unavailable to any weapon, turning the battlefield into a wrestling arena.',
      fr: "Combat brut et primal utilisant les poings et les techniques de lutte. Le combat à mains nues offre des mécaniques uniques de projection et de soumission.",
      es: 'Combate crudo y primitivo usando puños y técnicas de agarre. La lucha a manos desnudas ofrece mecánicas únicas de lanzamiento y sumisión.',
      it: 'Combattimento grezzo e primordiale con pugni e tecniche di lotta. Il combattimento a mani nude offre meccaniche uniche di lancio e sottomissione.',
      ko: '주먹과 그래플링 기술을 사용하는 원초적 전투. 맨손 전투는 다른 무기에 없는 독특한 던지기와 제압 메카닉을 제공합니다.',
    },
    playstyle: {
      en: 'Grappler with unique grab and throw mechanics. Can seize enemies and use them as weapons, or perform devastating submission moves on humanoid foes.',
      fr: "Lutteur avec des mécaniques uniques de saisie et de projection. Peut attraper les ennemis et les utiliser comme armes, ou effectuer des prises dévastatrices.",
      es: 'Luchador con mecánicas únicas de agarre y lanzamiento. Puede agarrar enemigos y usarlos como armas.',
      it: 'Lottatore con meccaniche uniche di presa e lancio. Può afferrare i nemici e usarli come armi.',
      ko: '독특한 잡기와 던지기 메카닉을 가진 격투가. 적을 잡아 무기처럼 사용하거나 제압기를 시전합니다.',
    },
    combos: ['Grab → Suplex → Ground Pound', 'Punch Flurry → Uppercut → Slam', 'Counter Grab → Throw'],
    users: ['Oongka'],
    image: '/images/crimson-desert/combat-goblin.jpg',
  },
];

const statLabels: Record<string, Record<string, string>> = {
  speed: { en: 'SPEED', fr: 'VITESSE', es: 'VELOCIDAD', it: 'VELOCIT\u00C0', ko: '\uC18D\uB3C4' },
  power: { en: 'POWER', fr: 'PUISSANCE', es: 'POTENCIA', it: 'POTENZA', ko: '\uC704\uB825' },
  reach: { en: 'REACH', fr: 'PORT\u00C9E', es: 'ALCANCE', it: 'PORTATA', ko: '\uC0AC\uAC70\uB9AC' },
};

const uiStrings: Record<string, Record<string, string>> = {
  title: { en: 'ARSENAL OF PYWEL', fr: 'ARSENAL DE PYWEL', es: 'ARSENAL DE PYWEL', it: 'ARSENALE DI PYWEL', ko: '\uD30C\uC774\uC6F0\uC758 \uBB34\uAE30\uACE0' },
  subtitle: { en: 'EIGHT WAYS TO FIGHT', fr: 'HUIT FA\u00C7ONS DE COMBATTRE', es: 'OCHO FORMAS DE LUCHAR', it: 'OTTO MODI DI COMBATTERE', ko: '\uC5EC\uB35F \uAC00\uC9C0 \uC804\uD22C \uBC29\uBC95' },
  weaponSwitching: { en: 'WEAPON SWITCHING SYSTEM', fr: 'SYST\u00C8ME DE CHANGEMENT D\u2019ARME', es: 'SISTEMA DE CAMBIO DE ARMA', it: 'SISTEMA DI CAMBIO ARMA', ko: '\uBB34\uAE30 \uAD50\uCCB4 \uC2DC\uC2A4\uD15C' },
  combos: { en: 'SIGNATURE COMBOS', fr: 'COMBOS SIGNATURES', es: 'COMBOS INSIGNIA', it: 'COMBO SPECIALI', ko: '\uC2DC\uADF8\uB2C8\uCC98 \uCF64\uBCF4' },
  playstyle: { en: 'PLAYSTYLE', fr: 'STYLE DE JEU', es: 'ESTILO DE JUEGO', it: 'STILE DI GIOCO', ko: '\uD50C\uB808\uC774 \uC2A4\uD0C0\uC77C' },
  users: { en: 'USED BY', fr: 'UTILIS\u00C9 PAR', es: 'USADO POR', it: 'USATO DA', ko: '\uC0AC\uC6A9\uC790' },
  selectWeapon: { en: 'Select a weapon to learn more', fr: 'S\u00E9lectionnez une arme pour en savoir plus', es: 'Selecciona un arma para saber m\u00E1s', it: 'Seleziona un\'arma per saperne di pi\u00F9', ko: '\uBB34\uAE30\uB97C \uC120\uD0DD\uD558\uC5EC \uC790\uC138\uD788 \uBCF4\uAE30' },
  backToList: { en: '\u2190 Back to all weapons', fr: '\u2190 Retour aux armes', es: '\u2190 Volver a las armas', it: '\u2190 Torna alle armi', ko: '\u2190 \uBAA8\uB4E0 \uBB34\uAE30\uB85C \uB3CC\uC544\uAC00\uAE30' },
  range: { en: 'Range', fr: 'Port\u00E9e', es: 'Alcance', it: 'Portata', ko: '\uC0AC\uAC70\uB9AC' },
  type: { en: 'Type', fr: 'Type', es: 'Tipo', it: 'Tipo', ko: '\uC720\uD615' },
  melee: { en: 'Melee', fr: 'M\u00EAl\u00E9e', es: 'Cuerpo a cuerpo', it: 'Mischia', ko: '\uADFC\uC811' },
  ranged: { en: 'Ranged', fr: 'Distance', es: 'A distancia', it: 'A distanza', ko: '\uC6D0\uAC70\uB9AC' },
  hybrid: { en: 'Hybrid', fr: 'Hybride', es: 'H\u00EDbrido', it: 'Ibrido', ko: '\uD558\uC774\uBE0C\uB9AC\uB4DC' },
};

const CrimsonWeapons = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const [selectedWeapon, setSelectedWeapon] = useState<WeaponData | null>(null);

  const weaponSwitchingEntry = useMemo(() => {
    return glossaryEntries.find(e => e.id === 'weapon-switching');
  }, []);

  const s = useCallback((key: string) => {
    return uiStrings[key]?.[lang] || uiStrings[key]?.en || key;
  }, [lang]);

  const handleSelect = useCallback((w: WeaponData) => setSelectedWeapon(w), []);
  const handleBack = useCallback(() => setSelectedWeapon(null), []);

  const rangeLabel = useCallback((range: string) => {
    return uiStrings[range.toLowerCase()]?.[lang] || uiStrings[range.toLowerCase()]?.en || range;
  }, [lang]);

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={s('title')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--crimson-deep)/0.2) 0%, transparent 60%)' }} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/images/crimson-desert/combat-action.jpg"
              alt="Crimson Desert combat \u2014 \u00A9 Pearl Abyss"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
              loading="eager"
              width={1920}
              height={1080}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {s('title')}
              </h1>
              <p className="font-heading text-sm tracking-[0.2em] text-text-secondary mt-2">{s('subtitle')}</p>
              <div className="flex justify-center mt-6">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Weapon Switching Mechanic */}
          {weaponSwitchingEntry && (
            <RevealOnScroll>
              <div className="bg-surface-elevated rounded-lg border border-gold-mid/30 p-8 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(ellipse at top right, hsl(var(--gold-bright)) 0%, transparent 60%)' }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{'\u2694\uFE0F'}</span>
                    <h2 className="font-heading text-lg tracking-[0.15em] text-gold-bright">{s('weaponSwitching')}</h2>
                  </div>
                  <p className="font-body text-sm text-text-primary leading-[1.8]">
                    {tr(weaponSwitchingEntry.definition, lang)}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          )}

          <GoldDivider variant="section" title={t('nav.weapons')} />

          {selectedWeapon ? (
            /* Detail View */
            <RevealOnScroll>
              <div className="mt-8">
                <button
                  onClick={handleBack}
                  className="font-ui text-xs tracking-wider text-gold-mid hover:text-gold-bright transition-colors mb-6 inline-block"
                >
                  {s('backToList')}
                </button>

                <div className="bg-surface-elevated rounded-lg border border-border overflow-hidden">
                  {/* Weapon hero image */}
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={selectedWeapon.image}
                      alt={`${selectedWeapon.name[lang] || selectedWeapon.name.en} \u2014 \u00A9 Pearl Abyss`}
                      className="w-full h-full object-cover opacity-50"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="text-4xl mr-3">{selectedWeapon.icon}</span>
                      <h2 className="font-display text-2xl sm:text-4xl text-gold-bright inline-block align-middle" style={{ textShadow: '0 0 30px hsl(var(--gold-glow))' }}>
                        {selectedWeapon.name[lang] || selectedWeapon.name.en}
                      </h2>
                      <div className="flex gap-4 mt-3">
                        <span className="font-ui text-[0.65rem] tracking-wider px-3 py-1 rounded border border-gold-mid/30 bg-gold-mid/10 text-gold-mid">
                          {s('type')}: {selectedWeapon.type}
                        </span>
                        <span className="font-ui text-[0.65rem] tracking-wider px-3 py-1 rounded border border-gold-mid/30 bg-gold-mid/10 text-gold-mid">
                          {s('range')}: {rangeLabel(selectedWeapon.range)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Description */}
                    <p className="font-body text-base text-text-primary leading-[1.8] mb-8">
                      {selectedWeapon.description[lang] || selectedWeapon.description.en}
                    </p>

                    {/* Stat bars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                      {(['speed', 'power', 'reach'] as const).map(stat => (
                        <div key={stat}>
                          <div className="flex justify-between mb-1">
                            <span className="font-ui text-[0.65rem] tracking-[0.2em] text-gold-mid">
                              {statLabels[stat]?.[lang] || statLabels[stat]?.en}
                            </span>
                            <span className="font-ui text-[0.65rem] text-text-secondary">{selectedWeapon[stat]}/10</span>
                          </div>
                          <div className="h-2 bg-surface rounded-full overflow-hidden border border-border">
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: `${selectedWeapon[stat] * 10}%`,
                                background: `linear-gradient(90deg, hsl(var(--gold-dark)), hsl(var(--gold-bright)))`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <GoldDivider variant="short" />

                    {/* Playstyle */}
                    <div className="mt-8 mb-8">
                      <h3 className="font-heading text-sm tracking-[0.15em] text-gold-bright mb-3">{s('playstyle')}</h3>
                      <p className="font-body text-sm text-text-secondary leading-[1.8] border-l-2 border-gold-mid/30 pl-4 italic">
                        {selectedWeapon.playstyle[lang] || selectedWeapon.playstyle.en}
                      </p>
                    </div>

                    {/* Combos */}
                    <div className="mb-8">
                      <h3 className="font-heading text-sm tracking-[0.15em] text-gold-bright mb-3">{s('combos')}</h3>
                      <div className="space-y-2">
                        {selectedWeapon.combos.map((combo, i) => (
                          <div key={i} className="flex items-center gap-3 bg-surface rounded-lg border border-border px-4 py-3">
                            <span className="font-ui text-[0.6rem] tracking-wider text-gold-mid/60 w-6">{String(i + 1).padStart(2, '0')}</span>
                            <span className="font-body text-sm text-text-primary">{combo}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Used by */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <span className="font-ui text-[0.65rem] tracking-[0.2em] text-gold-mid">{s('users')}</span>
                      <div className="flex gap-2 mt-2">
                        {selectedWeapon.users.map(user => (
                          <span key={user} className="font-heading text-sm text-text-primary px-3 py-1 bg-surface rounded border border-border">
                            {user}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ) : (
            /* Grid View */
            <div className="mt-8">
              <p className="font-ui text-xs tracking-wider text-text-secondary mb-6 text-center">
                {s('selectWeapon')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {weapons.map((weapon, i) => (
                  <RevealOnScroll key={weapon.id} stagger={i * 80}>
                    <button
                      onClick={() => handleSelect(weapon)}
                      className="w-full text-left group relative rounded-lg overflow-hidden border border-border hover:border-gold-mid/40 transition-all duration-300"
                      style={{ boxShadow: 'var(--shadow-card)' }}
                    >
                      <div className="relative h-[180px] overflow-hidden">
                        <img
                          src={weapon.image}
                          alt={`${weapon.name[lang] || weapon.name.en} \u2014 \u00A9 Pearl Abyss`}
                          className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/50 to-transparent" />
                      </div>

                      <div className="p-5 -mt-8 relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{weapon.icon}</span>
                          <h3 className="font-heading text-base text-gold-bright group-hover:drop-shadow-[0_0_15px_hsl(var(--gold-glow))] transition-all duration-300">
                            {weapon.name[lang] || weapon.name.en}
                          </h3>
                        </div>
                        <div className="flex gap-2 mb-3">
                          <span className="font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded bg-gold-mid/10 border border-gold-mid/20 text-gold-mid">
                            {weapon.type}
                          </span>
                          <span className="font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded bg-surface border border-border text-text-secondary">
                            {rangeLabel(weapon.range)}
                          </span>
                        </div>

                        {/* Mini stat bars */}
                        <div className="space-y-1.5">
                          {(['speed', 'power', 'reach'] as const).map(stat => (
                            <div key={stat} className="flex items-center gap-2">
                              <span className="font-ui text-[0.5rem] tracking-wider text-text-secondary w-12">
                                {statLabels[stat]?.[lang] || statLabels[stat]?.en}
                              </span>
                              <div className="flex-1 h-1 bg-surface rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full"
                                  style={{
                                    width: `${weapon[stat] * 10}%`,
                                    background: 'linear-gradient(90deg, hsl(var(--gold-dark)), hsl(var(--gold-mid)))',
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-3 flex justify-between items-center">
                          <span className="font-ui text-[0.55rem] text-text-muted-custom">{weapon.users.join(', ')}</span>
                          <span className="font-ui text-[0.55rem] text-gold-mid group-hover:text-gold-bright transition-colors">{'\u2192'}</span>
                        </div>
                      </div>
                    </button>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <CrimsonFooter locale={locale} />
    </>
  );
};

export default CrimsonWeapons;
