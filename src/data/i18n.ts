/**
 * i18n Phase 1 — pt-BR + es dictionaries for the 3 localized routes
 * (home / codes / tier-list). Game data (codes, units, tiers, item names)
 * stays English in the source data files; only UI copy lives here.
 * Translations: native-quality draft, pending native review pass (ops rule).
 */

/** Rich-text segment: plain text or a link. Keeps inline links translatable. */
export type Seg = { t: string; href?: never; label?: never } | { t?: never; href: string; label: string };

export interface LocaleDict {
  base: "/pt-br" | "/es";
  hreflang: "pt-BR" | "es";
  monthYear: string; // e.g. "setembro de 2026" — build-time, kept fresh by rebuilds
  stampLabel: string;
  copy: string;
  copied: string;
  home: {
    title: string;
    description: string;
    heroSub: string;
    heroP: string;
    ctaCodes: string;
    ctaUnits: string;
    statsLabels: [string, string, string];
    workingCodes: string;
    allCodes: string;
    mostWanted: string;
    howToGetPrefix: string;
    allUnits: string;
    exploreTitle: string;
    hubs: { href: string; title: string; blurb: string }[];
    whatIsTitle: string;
    whatIsP: string;
    whyTrustTitle: string;
    whyTrustP: Seg[];
    faqTitle: string;
    faq: { q: string; a: string }[];
    jumpTo: string;
    jumpLinks: { href: string; label: string }[];
  };
  codes: {
    title: string;
    description: string;
    h1: string;
    intro: string;
    workingTitle: string;
    spendTitle: string;
    spendItems: { lead: string; rest: Seg[] }[];
    expiredTitle: string;
    expiredP: string;
    redeemTitle: string;
    redeemImgAlt: string;
    redeemCaption: string;
    redeemSteps: string[];
    redeemNote: Seg[];
    sourcesTitle: string;
    sourcesP: string;
    sourceWhats: [string, string, string]; // same order as CODE_SOURCES in codes.ts
    sourcesFoot: string;
    faqTitle: string;
    workingA: (list: string, date: string) => string;
    dailyA: (date: string) => string;
    faqStatic: { q: string; a: string }[]; // entries 3-7 (1, 2 and 8 are dynamic)
    bottomNav: Seg[];
  };
  tierList: {
    title: string;
    description: string;
    h1: string;
    intro: string;
    noun: string;
    tierLabels: [string, string, string, string, string]; // S A B C D
    footer: Seg[];
  };
}

const ptMonth = new Date().toLocaleString("pt-BR", { month: "long", year: "numeric" });
const esMonth = new Date().toLocaleString("es", { month: "long", year: "numeric" });

export const PT_BR: LocaleDict = {
  base: "/pt-br",
  hreflang: "pt-BR",
  monthYear: ptMonth,
  stampLabel: "Última verificação:",
  copy: "Copiar",
  copied: "Copiado!",
  home: {
    title: `Códigos de Dungeon Lootr (${ptMonth}) - Códigos Roblox Ativos`,
    description:
      "Todos os códigos ativos de Dungeon Lootr, verificados e datados. Além de tier lists de classes e aspects e guias de como conseguir cada unidade.",
    heroSub: "códigos, tier lists e guias de unidades",
    heroP:
      "Todos os códigos ativos, as melhores classes e aspects, e como conseguir Gojo, Sukuna e cada unidade de anime. Verificado e datado.",
    ctaCodes: "Códigos Ativos",
    ctaUnits: "Como Conseguir Unidades",
    statsLabels: ["Visitas", "Jogando agora", "Aprovação"],
    workingCodes: "Códigos Ativos",
    allCodes: "Todos os códigos →",
    mostWanted: "Unidades Mais Desejadas",
    howToGetPrefix: "Como conseguir ",
    allUnits: "Todas as unidades →",
    exploreTitle: "Explore o Hub",
    hubs: [
      { href: "/tier-list/", title: "Tier List de Classes", blurb: "Quais classes realmente valem como main." },
      { href: "/aspect-tier-list/", title: "Tier List de Aspects", blurb: "Os melhores aspects para rolar e montar build." },
      { href: "/beginner-guide/", title: "Guia do Iniciante", blurb: "Sua primeira dungeon e a progressão." },
      { href: "/updates/", title: "Atualizações", blurb: "As últimas notas de patch e o que mudou." },
    ],
    whatIsTitle: "O que é Dungeon Lootr?",
    whatIsP:
      "Dungeon Lootr é um RPG de dungeon de crossover de anime no Roblox: explore dungeons, desbloqueie classes e aspects e gire por unidades poderosas de anime como Gojo, Sukuna e Asta. O jogo lançou há pouco tempo e atualiza rápido, então novas unidades, códigos e mudanças de balanceamento chegam com frequência.",
    whyTrustTitle: "Por que confiar em nós",
    whyTrustP: [
      { t: "Tudo aqui é verificado por jogadores. Os códigos são cruzados antes de serem listados e carimbados com a data de confirmação. Quando ainda não conseguimos verificar algo, dizemos isso em vez de inventar. " },
      { href: "/about/", label: "Como verificamos →" },
    ],
    faqTitle: "FAQ de Dungeon Lootr",
    faq: [
      {
        q: "Existem códigos ativos de Dungeon Lootr?",
        a: "Sim. Novos códigos aparecem em marcos da comunidade e atualizações, e verificamos cada um antes de listar - favorite a página de códigos e confira antes de cada sessão.",
      },
      {
        q: "Como conseguir o Gojo em Dungeon Lootr?",
        a: "Gojo é a classe Honored One. Você a desbloqueia farmando o Infinity Core e usando-o para obter a classe. O passo a passo completo está na página da unidade Gojo.",
      },
      {
        q: "Qual é a melhor classe de Dungeon Lootr?",
        a: "Cursed King (Sukuna) é a classe mais citada como a melhor. Ranqueamos todas as classes na tier list de classes e reavaliamos a cada patch.",
      },
    ],
    jumpTo: "Ir para:",
    jumpLinks: [
      { href: "/pt-br/codes/", label: "Códigos" },
      { href: "/pt-br/tier-list/", label: "Tier List" },
      { href: "/units/", label: "Unidades" },
      { href: "/aspect-tier-list/", label: "Aspects" },
      { href: "/beginner-guide/", label: "Guia do Iniciante" },
      { href: "/updates/", label: "Atualizações" },
    ],
  },
  codes: {
    title: `Códigos de Dungeon Lootr (${ptMonth}) - Recompensas Grátis`,
    description: `Todos os códigos ativos de Dungeon Lootr para ${ptMonth}, verificados. Como resgatar, onde os novos códigos aparecem e o que fazer quando um código falha.`,
    h1: "Códigos de Dungeon Lootr",
    intro: `Todos os códigos ativos de Dungeon Lootr para ${ptMonth}, cruzados e datados. Resgate rápido - códigos de Roblox expiram depressa.`,
    workingTitle: "Códigos Ativos",
    spendTitle: "Resgatou? Gaste Bem",
    spendItems: [
      {
        lead: "Luck Potions →",
        rest: [
          { t: " guarde-as para giros de classe em massa - o que você quer tirar são os " },
          { href: "/pt-br/tier-list/", label: "picks S-tier da tier list de classes" },
          { t: "." },
        ],
      },
      {
        lead: "Aspect Gems →",
        rest: [
          { t: " role um passivo para o seu main - veja primeiro os " },
          { href: "/aspect-tier-list/", label: "efeitos de aspects ranqueados" },
          { t: "." },
        ],
      },
      {
        lead: "Coins & Stones →",
        rest: [
          { t: " equipe-se e comece os " },
          { href: "/units/", label: "desbloqueios de classe do Boss Rush" },
          { t: " (Sukuna, Gojo e Asta são farmáveis)." },
        ],
      },
    ],
    expiredTitle: "Códigos Expirados",
    expiredP:
      "Mantidos visíveis de propósito: estes códigos estão confirmados como mortos, então você pode pulá-los em vez de digitar um por um. Se um código que você viu em outro site está listado aqui, também não vai funcionar para você.",
    redeemTitle: "Como Resgatar Códigos em Dungeon Lootr",
    redeemImgAlt:
      "Como resgatar códigos de Dungeon Lootr: entre no grupo, toque no botão Codes à esquerda, digite o código e toque em Submit",
    redeemCaption:
      "O fluxo completo de resgate, passo a passo. O botão Codes fica no lado esquerdo da tela do jogo.",
    redeemSteps: [
      "Entre no grupo ClickBytes no Roblox (os códigos não funcionam antes disso).",
      "Abra Dungeon Lootr no Roblox.",
      "Toque no botão Codes no lado esquerdo da tela.",
      "Digite o código exatamente como mostrado - os códigos diferenciam maiúsculas de minúsculas.",
      "Toque em Submit para resgatar sua recompensa.",
    ],
    redeemNote: [
      { t: "Travou em algum passo? A falha mais comum é pular o primeiro - " },
      { href: "https://www.roblox.com/communities/110427303/ClickBytes", label: "entrar no grupo ClickBytes" },
      { t: " é obrigatório, e o jogo rejeita todos os códigos até você entrar. As recompensas caem no inventário assim que o Submit funciona; se nada aparecer, troque de servidor uma vez antes de assumir que o código morreu." },
    ],
    sourcesTitle: "Onde os Novos Códigos Aparecem",
    sourcesP:
      "Os códigos de Dungeon Lootr não são aleatórios - a lista acima mostra o padrão. Códigos de marco (8KLIKE, 10KFAV, 20KPLAYERS) celebram metas da comunidade, e códigos de atualização (FULLRELEASE, LOOTRISBACK) chegam com patches. Estes são os canais que publicam primeiro, ranqueados por velocidade:",
    sourceWhats: [
      "Canal mais rápido. Novos códigos são anunciados nos canais de update/anúncios, geralmente junto com as notas de patch.",
      "Códigos de marco (likes, favoritos, número de jogadores) celebram metas do grupo - e você precisa ser membro para resgatar qualquer coisa mesmo.",
      "Grandes patches e relançamentos chegam com um código (FULLRELEASE, LOOTRISBACK). Confira a descrição do jogo após cada atualização.",
    ],
    sourcesFoot:
      "Monitoramos essas fontes diariamente e cruzamos cada código em dois lugares antes de ganhar o selo de ativo acima - por isso esta página às vezes lista um código horas depois do Discord, mas nunca lista um falso.",
    faqTitle: "FAQ",
    workingA: (list, date) => `Em ${date}, os códigos ativos são: ${list}.`,
    dailyA: (date) =>
      `Re-checamos a lista diariamente e re-verificamos cada código nos canais oficiais do jogo antes de marcá-lo como ativo. O selo no topo desta página mostra o dia exato da última verificação - atualmente ${date}. Tudo que não conseguimos confirmar fica na seção de não confirmados em vez de ser apresentado como fato.`,
    faqStatic: [
      {
        q: "Por que meu código não funciona?",
        a: "Os códigos diferenciam maiúsculas de minúsculas e expiram rápido. Digite-os exatamente como mostrados e volte aqui - re-verificamos a lista regularmente.",
      },
      {
        q: "Por que meu código diz inválido ou não faz nada?",
        a: "Quatro causas comuns, em ordem: você não entrou no grupo ClickBytes no Roblox (nada resgata antes disso); uma letra maiúscula está errada - os códigos diferenciam maiúsculas, copie e cole desta página em vez de digitar; o código acabou de expirar e foi para a nossa lista de expirados; ou você já o resgatou nesta conta, já que cada código funciona uma vez por jogador.",
      },
      {
        q: "Quando saem novos códigos de Dungeon Lootr?",
        a: "Dois gatilhos confiáveis. Marcos da comunidade - códigos como 8KLIKE, 10KFAV e 20KPLAYERS caíram quando o jogo bateu metas de likes, favoritos e número de jogadores, então o próximo marco está sempre se aproximando. E atualizações de conteúdo - FULLRELEASE e LOOTRISBACK chegaram com grandes patches. Acompanhar o Discord oficial no dia de update captura quase todos os códigos em poucas horas.",
      },
      {
        q: "Quais recompensas os códigos de Dungeon Lootr dão?",
        a: "Coins para o progresso inicial, Luck Potions que aumentam as chances nos giros de classe, Forge e Reforge Stone Bundles para rolagens de equipamento, Aspect Gems e ocasionais GM Blessings. Códigos de marco geralmente combinam várias de uma vez - por isso resgatar na hora importa mais do que guardar.",
      },
      {
        q: "Os códigos de Dungeon Lootr expiram?",
        a: "Sim, e mais rápido que na maioria dos jogos de Roblox. Códigos de marco tendem a morrer quando o próximo marco chega, e códigos de update costumam durar só um ciclo de patch. Nossa lista de expirados abaixo existe para você nunca perder tempo com código morto - se está listado lá, não volta.",
      },
    ],
    bottomNav: [
      { t: "Gaste bem seus códigos: veja as " },
      { href: "/pt-br/tier-list/", label: "melhores classes do meta atual" },
      { t: ", " },
      { href: "/aspect-tier-list/", label: "quais aspects valem rolar" },
      { t: " ou " },
      { href: "/units/", label: "como conseguir cada unidade" },
      { t: ", incluindo " },
      { href: "/units/gojo/", label: "Gojo" },
      { t: " e " },
      { href: "/units/sukuna/", label: "Sukuna" },
      { t: ". Novo no jogo? Comece pelo " },
      { href: "/beginner-guide/", label: "guia do iniciante" },
      { t: " e acompanhe as " },
      { href: "/updates/", label: "notas de atualização" },
      { t: " - dia de update é dia de código." },
    ],
  },
  tierList: {
    title: `Tier List de Classes de Dungeon Lootr (${ptMonth})`,
    description:
      "As melhores classes de Dungeon Lootr no Roblox, ranqueadas de S a D por consenso de criadores e dados de patch.",
    h1: "Tier List de Classes",
    intro:
      "Todas as classes de Dungeon Lootr ranqueadas de S a D como consenso de duas fontes: as tier lists da IGN e do GameRant. Quando elas divergem, a classe fica no tier mais baixo e a divergência é marcada no cartão - você vê a diferença real, não uma média maquiada. Reavaliamos a cada patch.",
    noun: "classe",
    tierLabels: ["Meta - escolha primeiro", "Forte", "Viável", "Situacional", "Pule"],
    footer: [
      { t: "Os caminhos de desbloqueio dos picks mais cobiçados estão nos " },
      { href: "/units/", label: "guias de unidades" },
      { t: " (crafts do Boss Rush, a quest do Toji, drops do Nightmare). Veja também a " },
      { href: "/aspect-tier-list/", label: "tier list de aspects" },
      { t: "." },
    ],
  },
};

export const ES: LocaleDict = {
  base: "/es",
  hreflang: "es",
  monthYear: esMonth,
  stampLabel: "Última comprobación:",
  copy: "Copiar",
  copied: "¡Copiado!",
  home: {
    title: `Códigos de Dungeon Lootr (${esMonth}) - Códigos Roblox Activos`,
    description:
      "Todos los códigos activos de Dungeon Lootr, verificados y fechados. Además de tier lists de clases y aspects y guías de cómo conseguir cada unidad.",
    heroSub: "códigos, tier lists y guías de unidades",
    heroP:
      "Todos los códigos activos, las mejores clases y aspects, y cómo conseguir a Gojo, Sukuna y cada unidad de anime. Verificado y fechado.",
    ctaCodes: "Códigos Activos",
    ctaUnits: "Cómo Conseguir Unidades",
    statsLabels: ["Visitas", "Jugando ahora", "Aprobación"],
    workingCodes: "Códigos Activos",
    allCodes: "Todos los códigos →",
    mostWanted: "Unidades Más Buscadas",
    howToGetPrefix: "Cómo conseguir a ",
    allUnits: "Todas las unidades →",
    exploreTitle: "Explora el Hub",
    hubs: [
      { href: "/tier-list/", title: "Tier List de Clases", blurb: "Qué clases realmente valen como main." },
      { href: "/aspect-tier-list/", title: "Tier List de Aspects", blurb: "Los mejores aspects para rolear y armar build." },
      { href: "/beginner-guide/", title: "Guía del Principiante", blurb: "Tu primera mazmorra y la progresión." },
      { href: "/updates/", title: "Actualizaciones", blurb: "Las últimas notas del parche y qué cambió." },
    ],
    whatIsTitle: "¿Qué es Dungeon Lootr?",
    whatIsP:
      "Dungeon Lootr es un RPG de mazmorras de crossover de anime en Roblox: recorre mazmorras, desbloquea clases y aspects y gira por poderosas unidades de anime como Gojo, Sukuna y Asta. El juego se lanzó hace poco y se actualiza rápido, así que nuevas unidades, códigos y cambios de balance llegan a menudo.",
    whyTrustTitle: "Por qué confiar en nosotros",
    whyTrustP: [
      { t: "Todo aquí está verificado por jugadores. Los códigos se cruzan antes de listarse y llevan la fecha de confirmación. Cuando aún no podemos verificar algo, lo decimos en lugar de inventarlo. " },
      { href: "/about/", label: "Cómo verificamos →" },
    ],
    faqTitle: "FAQ de Dungeon Lootr",
    faq: [
      {
        q: "¿Hay códigos activos de Dungeon Lootr?",
        a: "Sí. Los códigos nuevos aparecen en hitos de la comunidad y actualizaciones, y verificamos cada uno antes de listarlo - guarda la página de códigos y revísala antes de cada sesión.",
      },
      {
        q: "¿Cómo conseguir a Gojo en Dungeon Lootr?",
        a: "Gojo es la clase Honored One. La desbloqueas farmeando el Infinity Core y usándolo para obtener la clase. Los pasos completos están en la página de la unidad Gojo.",
      },
      {
        q: "¿Cuál es la mejor clase de Dungeon Lootr?",
        a: "Cursed King (Sukuna) es la clase más citada como la mejor. Rankeamos todas las clases en la tier list de clases y reevaluamos en cada parche.",
      },
    ],
    jumpTo: "Ir a:",
    jumpLinks: [
      { href: "/es/codes/", label: "Códigos" },
      { href: "/es/tier-list/", label: "Tier List" },
      { href: "/units/", label: "Unidades" },
      { href: "/aspect-tier-list/", label: "Aspects" },
      { href: "/beginner-guide/", label: "Guía del Principiante" },
      { href: "/updates/", label: "Actualizaciones" },
    ],
  },
  codes: {
    title: `Códigos de Dungeon Lootr (${esMonth}) - Recompensas Gratis`,
    description: `Todos los códigos activos de Dungeon Lootr para ${esMonth}, verificados. Cómo canjear, dónde aparecen los códigos nuevos y qué hacer cuando un código falla.`,
    h1: "Códigos de Dungeon Lootr",
    intro: `Todos los códigos activos de Dungeon Lootr para ${esMonth}, cruzados y fechados. Canjéalos rápido - los códigos de Roblox caducan enseguida.`,
    workingTitle: "Códigos Activos",
    spendTitle: "¿Canjeaste? Gástalos Bien",
    spendItems: [
      {
        lead: "Luck Potions →",
        rest: [
          { t: " guárdalas para tiradas de clase en masa - lo que quieres sacar son los " },
          { href: "/es/tier-list/", label: "picks S-tier de la tier list de clases" },
          { t: "." },
        ],
      },
      {
        lead: "Aspect Gems →",
        rest: [
          { t: " rolea un pasivo para tu main - mira primero los " },
          { href: "/aspect-tier-list/", label: "efectos de aspects rankeados" },
          { t: "." },
        ],
      },
      {
        lead: "Coins & Stones →",
        rest: [
          { t: " equípate y empieza los " },
          { href: "/units/", label: "desbloqueos de clase del Boss Rush" },
          { t: " (Sukuna, Gojo y Asta se pueden farmear)." },
        ],
      },
    ],
    expiredTitle: "Códigos Caducados",
    expiredP:
      "Se mantienen visibles a propósito: estos códigos están confirmados como muertos, así puedes saltarlos en vez de escribirlos uno por uno. Si un código que viste en otro sitio está listado aquí, tampoco te funcionará.",
    redeemTitle: "Cómo Canjear Códigos en Dungeon Lootr",
    redeemImgAlt:
      "Cómo canjear códigos de Dungeon Lootr: únete al grupo, pulsa el botón Codes a la izquierda, escribe el código y pulsa Submit",
    redeemCaption:
      "El flujo completo de canje, paso a paso. El botón Codes está en el lado izquierdo de la pantalla del juego.",
    redeemSteps: [
      "Únete al grupo ClickBytes en Roblox (los códigos no funcionan hasta que lo hagas).",
      "Abre Dungeon Lootr en Roblox.",
      "Pulsa el botón Codes en el lado izquierdo de la pantalla.",
      "Escribe el código exactamente como se muestra - los códigos distinguen mayúsculas y minúsculas.",
      "Pulsa Submit para reclamar tu recompensa.",
    ],
    redeemNote: [
      { t: "¿Atascado en algún paso? El fallo más común es saltarse el primero - " },
      { href: "https://www.roblox.com/communities/110427303/ClickBytes", label: "unirse al grupo ClickBytes" },
      { t: " es obligatorio, y el juego rechaza todos los códigos hasta que entres. Las recompensas caen en tu inventario en cuanto el Submit funciona; si no aparece nada, cambia de servidor una vez antes de asumir que el código murió." },
    ],
    sourcesTitle: "Dónde Aparecen los Códigos Nuevos",
    sourcesP:
      "Los códigos de Dungeon Lootr no son aleatorios - la lista de arriba muestra el patrón. Los códigos de hito (8KLIKE, 10KFAV, 20KPLAYERS) celebran metas de la comunidad, y los códigos de actualización (FULLRELEASE, LOOTRISBACK) llegan con parches. Estos son los canales que los publican primero, rankeados por velocidad:",
    sourceWhats: [
      "El canal más rápido. Los códigos nuevos se anuncian en los canales de updates/anuncios, normalmente junto a las notas del parche.",
      "Los códigos de hito (likes, favoritos, número de jugadores) celebran metas del grupo - y de todos modos debes ser miembro para canjear cualquier cosa.",
      "Los parches grandes y relanzamientos traen un código (FULLRELEASE, LOOTRISBACK). Revisa la descripción del juego tras cada actualización.",
    ],
    sourcesFoot:
      "Monitoreamos estas fuentes a diario y cruzamos cada código en dos lugares antes de que gane el sello de activo - por eso esta página a veces lista un código horas después de Discord, pero nunca lista uno falso.",
    faqTitle: "FAQ",
    workingA: (list, date) => `A ${date}, los códigos activos son: ${list}.`,
    dailyA: (date) =>
      `Revisamos la lista a diario y reverificamos cada código en los canales oficiales del juego antes de marcarlo como activo. El sello en la parte superior de esta página muestra el día exacto de la última verificación - actualmente ${date}. Todo lo que no podemos confirmar se queda en la sección de no confirmados en lugar de presentarse como un hecho.`,
    faqStatic: [
      {
        q: "¿Por qué no funciona mi código?",
        a: "Los códigos distinguen mayúsculas de minúsculas y caducan rápido. Escríbelos exactamente como se muestran y vuelve aquí - reverificamos la lista con regularidad.",
      },
      {
        q: "¿Por qué mi código dice inválido o no hace nada?",
        a: "Cuatro causas habituales, en orden: no te has unido al grupo ClickBytes en Roblox (nada se canjea hasta que lo hagas); una mayúscula está mal - los códigos distinguen mayúsculas, copia y pega desde esta página en vez de escribir; el código acaba de caducar y pasó a nuestra lista de caducados; o ya lo canjeaste en esta cuenta, ya que cada código funciona una vez por jugador.",
      },
      {
        q: "¿Cuándo salen códigos nuevos de Dungeon Lootr?",
        a: "Dos disparadores fiables. Los hitos de la comunidad - códigos como 8KLIKE, 10KFAV y 20KPLAYERS cayeron cuando el juego alcanzó metas de likes, favoritos y número de jugadores, así que el próximo hito siempre está acercándose. Y las actualizaciones de contenido - FULLRELEASE y LOOTRISBACK llegaron con parches grandes. Seguir el Discord oficial el día del parche captura casi todos los códigos en pocas horas.",
      },
      {
        q: "¿Qué recompensas dan los códigos de Dungeon Lootr?",
        a: "Coins para el progreso inicial, Luck Potions que mejoran las probabilidades de las tiradas de clase, Forge y Reforge Stone Bundles para tiradas de equipo, Aspect Gems y algún GM Blessing ocasional. Los códigos de hito suelen combinar varias a la vez - por eso canjear al momento importa más que ahorrar.",
      },
      {
        q: "¿Los códigos de Dungeon Lootr caducan?",
        a: "Sí, y más rápido que en la mayoría de los juegos de Roblox. Los códigos de hito tienden a morir cuando llega el siguiente hito, y los códigos de actualización suelen durar solo un ciclo de parche. Nuestra lista de caducados existe para que nunca pierdas tiempo con un código muerto - si está listado ahí, no volverá.",
      },
    ],
    bottomNav: [
      { t: "Gasta bien tus códigos: mira las " },
      { href: "/es/tier-list/", label: "mejores clases del meta actual" },
      { t: ", " },
      { href: "/aspect-tier-list/", label: "qué aspects vale la pena rolear" },
      { t: " o " },
      { href: "/units/", label: "cómo conseguir cada unidad" },
      { t: ", incluyendo " },
      { href: "/units/gojo/", label: "Gojo" },
      { t: " y " },
      { href: "/units/sukuna/", label: "Sukuna" },
      { t: ". ¿Nuevo en el juego? Empieza con la " },
      { href: "/beginner-guide/", label: "guía del principiante" },
      { t: " y sigue las " },
      { href: "/updates/", label: "notas del parche" },
      { t: " - el día del parche es el día del código." },
    ],
  },
  tierList: {
    title: `Tier List de Clases de Dungeon Lootr (${esMonth})`,
    description:
      "Las mejores clases de Dungeon Lootr en Roblox, rankeadas de S a D por consenso de creadores y datos de parche.",
    h1: "Tier List de Clases",
    intro:
      "Todas las clases de Dungeon Lootr rankeadas de S a D como consenso de dos fuentes: las tier lists de IGN y GameRant. Cuando no coinciden, la clase queda en el tier más bajo y la diferencia se marca en la tarjeta - ves la discrepancia real, no un promedio maquillado. Reevaluamos en cada parche.",
    noun: "clase",
    tierLabels: ["Meta - elige primero", "Fuerte", "Viable", "Situacional", "Omitir"],
    footer: [
      { t: "Las rutas de desbloqueo de los picks más buscados están en las " },
      { href: "/units/", label: "guías de unidades" },
      { t: " (crafteos del Boss Rush, la misión de Toji, drops de Nightmare). Mira también la " },
      { href: "/aspect-tier-list/", label: "tier list de aspects" },
      { t: "." },
    ],
  },
};

/** Full hreflang set for a localized route family (en + pt-BR + es + x-default). */
export function i18nLanguages(path: string): Record<string, string> {
  const suffix = path === "/" ? "/" : path;
  return {
    en: path,
    "pt-BR": `/pt-br${suffix}`.replace(/\/\//g, "/"),
    es: `/es${suffix}`.replace(/\/\//g, "/"),
    "x-default": path,
  };
}
