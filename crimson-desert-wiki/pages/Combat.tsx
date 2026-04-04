// @ts-nocheck
import { useState } from 'react';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import { skillTree, typeLabels } from '@/crimson-desert-wiki/data/abilities';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

const bossStag = '/crimson-desert/boss-staglord.jpg';
const bossCrab = '/crimson-desert/boss-stoneback-crab.jpg';
const bossWhiteHorn = '/crimson-desert/boss-white-horn.jpg';
const enemyReedDevil = '/crimson-desert/enemy-reed-devil.jpg';
const combatAction = '/crimson-desert/combat-action.jpg';

import type { Lang } from '@/crimson-desert-wiki/context/I18nContext';

type L4 = Record<Lang, string>;

const weaponsData: { id: string; name: L4; desc: L4; combos: string[] }[] = [
  { id: 'sword', name: { fr: 'Épée longue', en: 'Longsword', es: 'Espada larga', it: 'Spada lunga', ko: '장검', pt: 'Espada longa', de: 'Langschwert' }, desc: { fr: 'Arme de mêlée équilibrée. Enchaîne des combos dévastateurs avec des transitions fluides.', en: 'Balanced melee weapon. Chain devastating combos with fluid transitions.', es: 'Arma cuerpo a cuerpo equilibrada. Encadena combos devastadores con transiciones fluidas.', it: 'Arma da mischia equilibrata. Concatena combo devastanti con transizioni fluide.', ko: '균형 잡힌 근접 무기. 유려한 전환으로 강력한 콤보를 연결합니다.', pt: 'Arma corpo a corpo equilibrada. Encadeie combos devastadores com transições fluidas.', de: 'Ausgewogene Nahkampfwaffe. Verkettet verheerende Kombos mit fließenden Übergängen.' }, combos: ['R1 → R1 → R2', 'R1 → R1 → R1 → R2', 'Hold R2 → R1'] },
  { id: 'lance', name: { fr: 'Lance', en: 'Spear', es: 'Lanza', it: 'Lancia', ko: '창', pt: 'Lança', de: 'Speer' }, desc: { fr: "Longue portée, contrôle l'espace. Excellente pour punir les ennemis trop agressifs.", en: 'Long range, space control. Excellent for punishing overly aggressive enemies.', es: 'Largo alcance, control del espacio. Excelente para castigar enemigos demasiado agresivos.', it: 'Lungo raggio, controllo dello spazio. Eccellente per punire nemici troppo aggressivi.', ko: '긴 사거리, 공간 제어. 과도하게 공격적인 적을 처벌하는 데 탁월합니다.', pt: 'Longo alcance, controle de espaço. Excelente para punir inimigos excessivamente agressivos.', de: 'Große Reichweite, Raumkontrolle. Hervorragend geeignet, um übermäßig aggressive Feinde zu bestrafen.' }, combos: ['R1 → R1 → R2', 'Hold R1 → R2', 'R2 → R2'] },
  { id: 'bow', name: { fr: 'Arc', en: 'Bow', es: 'Arco', it: 'Arco', ko: '활', pt: 'Arco', de: 'Bogen' }, desc: { fr: 'Combat à distance de précision. Chargez les tirs pour des dégâts dévastateurs.', en: 'Precision ranged combat. Charge shots for devastating damage.', es: 'Combate a distancia de precisión. Carga los disparos para daño devastador.', it: 'Combattimento a distanza di precisione. Carica i colpi per danni devastanti.', ko: '정밀 원거리 전투. 차지 샷으로 강력한 데미지를 입힙니다.', pt: 'Combate à distância de precisão. Carregue os tiros para dano devastador.', de: 'Präziser Fernkampf. Laden Sie Schüsse auf für verheerenden Schaden.' }, combos: ['Aim → R2', 'R1 → R1 → R1', 'Hold R2 (Charged)'] },
  { id: 'fists', name: { fr: 'Mains nues', en: 'Bare Fists', es: 'Puños', it: 'Pugni', ko: '맨손', pt: 'Punhos', de: 'Bloße Fäuste' }, desc: { fr: 'Puissance brute. Prises de lutte et coups brisant les armures.', en: 'Raw power. Wrestling grabs and armor-breaking strikes.', es: 'Poder bruto. Agarres de lucha y golpes que rompen armaduras.', it: 'Potenza bruta. Prese di lotta e colpi che spezzano armature.', ko: '순수한 힘. 레슬링 그랩과 방어구 파괴 공격.', pt: 'Poder bruto. Agarrões de luta e golpes que quebram armaduras.', de: 'Rohe Kraft. Ringkampfgriffe und rüstungsbrechende Schläge.' }, combos: ['R1 × 4', 'R2 (Grab)', 'R1 → R1 → R2'] },
  { id: 'robot', name: { fr: 'Robot de guerre', en: 'War Robot', es: 'Robot de guerra', it: 'Robot da guerra', ko: '전쟁 로봇', pt: 'Robô de guerra', de: 'Kriegsroboter' }, desc: { fr: 'Combinaison de combat mécanisée. Dégâts de zone dévastateurs au prix de la mobilité.', en: 'Mechanized combat suit. Devastating AoE damage at the cost of mobility.', es: 'Traje de combate mecanizado. Daño de área devastador a costa de movilidad.', it: 'Tuta da combattimento meccanizzata. Danni ad area devastanti a scapito della mobilità.', ko: '기계화 전투 슈트. 기동성을 대가로 강력한 광역 피해를 줍니다.', pt: 'Traje de combate mecanizado. Dano em área devastador ao custo de mobilidade.', de: 'Mechanisierter Kampfanzug. Verheerende Flächenschaden auf Kosten der Mobilität.' }, combos: ['R1 → R2', 'Hold R2 (Beam)', 'L1 + R2 (Barrage)'] },
  { id: 'dragon', name: { fr: 'Dragon', en: 'Dragon', es: 'Dragón', it: 'Drago', ko: '드래곤', pt: 'Dragão', de: 'Drache' }, desc: { fr: 'Monture et combat aérien. Pluie de destruction depuis les cieux.', en: 'Mount and aerial combat. Rain destruction from the skies.', es: 'Montura y combate aéreo. Lluvia de destrucción desde los cielos.', it: 'Cavalcatura e combattimento aereo. Pioggia di distruzione dai cieli.', ko: '탈것과 공중 전투. 하늘에서 파괴의 비를 내립니다.', pt: 'Montaria e combate aéreo. Chuva de destruição dos céus.', de: 'Reittier und Luftkampf. Regen der Zerstörung von den Himmeln.' }, combos: ['R1 (Breath)', 'R2 (Dive)', 'L1 + R1 (Barrel Roll)'] },
];

const bossesData: { name: string; location: L4; difficulty: number; mechanic: L4; status: string; image: string }[] = [
  { name: 'Staglord', location: { fr: 'Déméniss', en: 'Demeniss', es: 'Déméniss', it: 'Déméniss', ko: '데메니스', pt: 'Demeniss', de: 'Demeniss' }, difficulty: 4, mechanic: { fr: 'Charges dévastatrices et invocations de cerfs', en: 'Devastating charges and stag summons', es: 'Cargas devastadoras e invocaciones de ciervos', it: 'Cariche devastanti ed evocazioni di cervi', ko: '강력한 돌진과 사슴 소환', pt: 'Investidas devastadoras e invocações de cervos', de: 'Verheerende Anstürme und Hirschbeschwörungen' }, status: 'DOCUMENTED', image: bossStag },
  { name: 'Queen Stoneback Crab', location: { fr: 'Pailune', en: 'Pailune', es: 'Pailune', it: 'Pailune', ko: '파일룬', pt: 'Pailune', de: 'Pailune' }, difficulty: 3, mechanic: { fr: 'Carapace destructible, attaques sismiques', en: 'Destructible shell, seismic attacks', es: 'Caparazón destructible, ataques sísmicos', it: 'Guscio distruttibile, attacchi sismici', ko: '파괴 가능한 껍질, 지진 공격', pt: 'Carapaça destrutível, ataques sísmicos', de: 'Zerstörbarer Panzer, seismische Angriffe' }, status: 'DOCUMENTED', image: bossCrab },
  { name: 'White Horn', location: { fr: 'Pics du Nord', en: 'Northern Peaks', es: 'Picos del Norte', it: 'Picchi del Nord', ko: '북부 봉우리', pt: 'Picos do Norte', de: 'Nördliche Gipfel' }, difficulty: 5, mechanic: { fr: 'Tempêtes de neige et rage berserk', en: 'Snowstorms and berserk rage', es: 'Tormentas de nieve y furia berserker', it: 'Tempeste di neve e furia berserk', ko: '눈보라와 광폭화', pt: 'Tempestades de neve e fúria berserk', de: 'Schneestürme und Berserkerwut' }, status: 'DOCUMENTED', image: bossWhiteHorn },
  { name: 'Reed Devil', location: { fr: 'Marais de Pywel', en: 'Pywel Marshes', es: 'Pantanos de Pywel', it: 'Paludi di Pywel', ko: '파이웰 습지', pt: 'Pântanos de Pywel', de: 'Pywel-Sümpfe' }, difficulty: 3, mechanic: { fr: 'Embuscades soniques et illusions', en: 'Sonic ambushes and illusions', es: 'Emboscadas sónicas e ilusiones', it: 'Imboscate soniche e illusioni', ko: '음파 매복과 환영', pt: 'Emboscadas sônicas e ilusões', de: 'Schall-Hinterhalte und Illusionen' }, status: 'DOCUMENTED', image: enemyReedDevil },
];

const docLabel: L4 = { fr: '📋 DOCUMENTÉ', en: '📋 DOCUMENTED', es: '📋 DOCUMENTADO', it: '📋 DOCUMENTATO', ko: '📋 문서화됨', pt: '📋 DOCUMENTADO', de: '📋 DOKUMENTIERT' };

const CombatPage = () => {
  const { t, lang } = useI18n();
  const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const elements = [
    { name: t('combat.fire'), emoji: '🔥', color: '#E84A1A', gradient: 'from-[#4a1500] to-crimson-core', props: [t('combat.fire.1'), t('combat.fire.2'), t('combat.fire.3')] },
    { name: t('combat.ice'), emoji: '❄', color: '#4DB6AC', gradient: 'from-[#0a1929] to-[#1a5555]', props: [t('combat.ice.1'), t('combat.ice.2'), t('combat.ice.3')] },
    { name: t('combat.wind'), emoji: '💨', color: '#90A4AE', gradient: 'from-[#1a2a2a] to-[#2a4a4a]', props: [t('combat.wind.1'), t('combat.wind.2'), t('combat.wind.3')] },
  ];

  const nodeTypeColors: Record<string, { fill: string; border: string }> = {
    combat: { fill: '#C0392B', border: '#8B1A1A' }, magic: { fill: '#4DB6AC', border: '#1a5555' },
    exploration: { fill: '#C9A84C', border: '#5A4520' }, passive: { fill: '#6A5A42', border: '#4A3A28' },
  };

  const levelLabel: L4 = { fr: 'Niveau', en: 'Level', es: 'Nivel', it: 'Livello', ko: '레벨', pt: 'Nível', de: 'Stufe' };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.combat.title[lang]}
        description={seo.combat.desc[lang]}
        path="/combat"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.combat[lang], path: '/combat' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll>
          <div className="text-center mb-8 sm:mb-12 relative h-[200px] sm:h-[300px] flex items-center justify-center rounded-lg overflow-hidden border border-border">
            <img src={combatAction} alt="Combat Crimson Desert — © Pearl Abyss" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="eager" width={1200} height={300} fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-void via-transparent to-bg-void" />
            <div className="relative z-10 px-4">
              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl text-gold-bright drop-shadow-[0_0_20px_rgba(0,0,0,1)]">{t('combat.title')}</h1>
              <div className="mt-4 mx-auto h-px bg-gradient-to-r from-transparent via-crimson-bright to-transparent" style={{ width: 'min(300px, 80%)' }} />
            </div>
          </div>
        </RevealOnScroll>

        {/* Weapons */}
        <RevealOnScroll><GoldDivider variant="section" title={t('combat.weapons')} /></RevealOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
          {weaponsData.map((w, i) => (
            <RevealOnScroll key={w.id} stagger={i * 80}>
              <button onClick={() => setSelectedWeapon(selectedWeapon === w.id ? null : w.id)}
                className={`w-full p-4 rounded-lg border text-center transition-all duration-200 focus-gold
                  ${selectedWeapon === w.id ? 'bg-crimson-deep/30 border-gold-mid shadow-[var(--shadow-glow-gold)] scale-105' : 'bg-card-bg border-border hover:border-gold-mid/50 hover:scale-[1.03]'}`}>
                <div className="w-12 h-12 mx-auto rounded-full bg-raised/80 border border-border flex items-center justify-center mb-2"><span className="text-lg">⚔</span></div>
                <span className="font-heading text-xs text-text-primary">{w.name[lang]}</span>
              </button>
            </RevealOnScroll>
          ))}
        </div>
        {selectedWeapon && (() => {
          const w = weaponsData.find(x => x.id === selectedWeapon)!;
          return (
            <div className="mt-6 bg-card-bg border border-border rounded-lg p-6 animate-fade-in-up">
              <h3 className="font-heading text-lg text-gold-bright">{w.name[lang]}</h3>
              <p className="font-body text-sm text-text-secondary mt-2">{w.desc[lang]}</p>
              <h4 className="font-ui text-xs tracking-wider text-gold-mid mt-4 mb-2">{t('combat.combos')}</h4>
              <div className="flex flex-wrap gap-2">
                {w.combos.map(combo => (
                  <span key={combo} className="font-ui text-xs px-3 py-1.5 bg-raised/80 border border-border rounded text-text-secondary">{combo}</span>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Elements */}
        <div className="mt-16">
          <RevealOnScroll><GoldDivider variant="section" title={t('combat.elements')} /></RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {elements.map((el, i) => (
              <RevealOnScroll key={el.name} stagger={i * 150}>
                <div className={`relative rounded-lg p-5 sm:p-6 min-h-[280px] sm:min-h-[350px] bg-gradient-to-br ${el.gradient} border border-border overflow-hidden card-hover group`}>
                  <div className="text-4xl mb-4">{el.emoji}</div>
                  <h3 className="font-heading text-xl" style={{ color: el.color }}>{el.name}</h3>
                  <div className="mt-4 space-y-3">
                    {el.props.map(p => (
                      <div key={p} className="flex items-center gap-2">
                        <span className="text-[0.5rem]" style={{ color: el.color }}>◆</span>
                        <span className="font-body text-sm text-text-secondary">{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${el.color} 0%, transparent 70%)` }} />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Skill Tree */}
        <div className="mt-16">
          <RevealOnScroll><GoldDivider variant="section" title={t('combat.progression')} /></RevealOnScroll>
          <div className="mt-8 bg-surface/50 border border-border rounded-lg p-4 sm:p-8 overflow-x-auto">
            <div className="relative min-w-[600px] h-[500px]">
              <svg width="100%" height="100%" className="absolute inset-0" aria-hidden="true">
                {skillTree.map(node => node.connections.map(connId => {
                  const target = skillTree.find(n => n.id === connId);
                  if (!target) return null;
                  const isActive = hoveredNode === node.id || hoveredNode === connId;
                  return <line key={`${node.id}-${connId}`} x1={`${node.x}%`} y1={`${node.y}%`} x2={`${target.x}%`} y2={`${target.y}%`}
                    stroke={isActive ? '#C9A84C' : '#2A2018'} strokeWidth={isActive ? 2 : 1} strokeDasharray={isActive ? 'none' : '4 4'} style={{ transition: 'all 0.3s ease' }} />;
                }))}
              </svg>
              {skillTree.map(node => {
                const colors = nodeTypeColors[node.type]; const isHovered = hoveredNode === node.id;
                return (
                  <div key={node.id} className="absolute cursor-pointer" style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
                    onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${node.keystone ? 'w-12 h-12 sm:w-14 sm:h-14' : ''}`}
                      style={{ background: node.unlocked ? `${colors.fill}40` : 'hsl(var(--bg-raised))', borderColor: node.unlocked ? colors.fill : colors.border,
                        boxShadow: isHovered ? `0 0 20px ${colors.fill}60` : 'none', transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}>
                      <span className="text-[0.5rem] font-ui" style={{ color: node.unlocked ? colors.fill : '#4A3A28' }}>{node.level}</span>
                    </div>
                    {isHovered && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-card-bg border border-border rounded-md p-3 z-50 pointer-events-none animate-scale-in" style={{ boxShadow: 'var(--shadow-card)' }}>
                        <div className="font-heading text-xs text-text-primary">{node.name[lang]}</div>
                        <p className="font-body text-[0.65rem] text-text-secondary mt-1">{node.description[lang]}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-ui text-[0.5rem] tracking-wider text-text-muted-custom">{levelLabel[lang]} {node.level}</span>
                          <span className="font-ui text-[0.5rem] tracking-wider px-1.5 py-0.5 rounded" style={{ background: `${colors.fill}20`, color: colors.fill }}>{typeLabels[node.type]?.[lang] || node.type.toUpperCase()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="absolute bottom-2 right-2 flex flex-wrap gap-3">
                {Object.entries(nodeTypeColors).map(([type, colors]) => (
                  <div key={type} className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ background: colors.fill }} />
                    <span className="font-ui text-[0.5rem] tracking-wider text-text-muted-custom uppercase">{typeLabels[type]?.[lang] || type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bosses */}
        <div className="mt-16">
          <RevealOnScroll><GoldDivider variant="section" title={t('combat.bosses')} /></RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {bossesData.map((boss, i) => (
              <RevealOnScroll key={boss.name} stagger={i * 100}>
                <div className="rounded-lg bg-card-bg border border-border overflow-hidden card-hover">
                  <div className="h-48 relative overflow-hidden">
                    <img src={boss.image} alt={`${boss.name} boss Crimson Desert — © Pearl Abyss`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" width={380} height={192} />
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />
                    <span className={`absolute top-3 right-3 font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded
                      ${boss.status === 'DOCUMENTED' ? 'bg-gold-dark/70 text-gold-bright' : 'bg-crimson-deep/70 text-crimson-bright'}`}>
                      {boss.status === 'DOCUMENTED' ? docLabel[lang] : '?'}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-base text-text-primary">{boss.name}</h3>
                    <p className="font-ui text-[0.6rem] text-text-muted-custom mt-1">{boss.location[lang]}</p>
                    <div className="flex gap-0.5 my-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < boss.difficulty ? 'text-crimson-bright' : 'text-text-muted-custom'}>💀</span>
                      ))}
                    </div>
                    <p className="font-body text-xs text-text-secondary italic">"{boss.mechanic[lang]}"</p>
                    <p className="font-ui text-[0.5rem] text-text-muted-custom mt-2">Image © Pearl Abyss</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CombatPage;
