export const LORE = {
  title: "La Ruptura Temporal",
  subtitle: "El fin del tiempo… o su reinicio",
  chapters: [
    {
      id: 1,
      title: "El Quiebre",
      icon: "⚡",
      text: "En el año 2247, un experimento en el Núcleo Cuántico de Nexarion desencadenó la Ruptura Temporal — un colapso en el tejido del espacio-tiempo que fusionó eras distintas en una sola realidad fragmentada. El pasado, el presente y el futuro colisionaron: pistoleros del lejano oeste conviven con cyborgs del futuro lejano, y entidades místicas de dimensiones olvidadas ahora caminan entre ruinas pixel.",
    },
    {
      id: 2,
      title: "Las Anomalías",
      icon: "🌀",
      text: "Las Anomalías son grietas vivas en la realidad — portales pulsantes que distorsionan la física, corrompen la memoria y convierten el tiempo en un laberinto sin salida. Cada zona del mapa es un fragmento de era atrapado en el caos: desiertos con satélites orbitales caídos, cantinas espaciales donde el whisky tiene propiedades cuánticas, y templos ancestrales que calculan el futuro.",
    },
    {
      id: 3,
      title: "Los Guardianes",
      icon: "🔮",
      text: "No todos fueron víctimas de la Ruptura. Algunos la absorbieron. Los Guardianes son seres que al contacto con la fractura temporal adquirieron poderes únicos ligados a su era de origen. Son la única esperanza de cerrar las Anomalías... o de explotarlas para su propio beneficio. Cada uno carga con un fragmento del tiempo mismo.",
    },
  ],
};

export const CHARACTERS = [
  {
    id: "vex",
    name: "Vex",
    title: "El Pistolero Cuántico",
    era: "Lejano Oeste · 1887",
    role: "DPS",
    roleIcon: "⚔️",
    difficulty: "⭐⭐",
    emoji: "🤠",
    color: "#c9a227",
    accent: "#0ea5e9",
    description: "Un forajido legendario cuya alma fue fusionada con un pistolero cibernético del año 3050. Sus revólveres disparan balas que viajan a través del tiempo.",
    lore: "Vex murió en el duelo de Sulfur Creek un martes de 1887. Cuatro segundos después, resucitó con un exoesqueleto de titanio y dos pistolas de plasma que no existían en su era. No le importó el porqué — en su mundo, los muertos no hacen preguntas. Vex opera bajo un código simple: protege a los que no pueden protegerse solos, y cobra lo justo por ello. Su mitad cibernética lo hace inmortal. Su mitad humana lo hace peligroso.",
    abilities: ["Bala Temporal", "Salto de Era", "Duelo Cuántico", "Último Cartucho"],
    skins: [
      { name: "Forajido Original", rarity: "Común",     color: "#c9a227" },
      { name: "Cyber Ghost",       rarity: "Raro",      color: "#0ea5e9" },
      { name: "Sombra del Desierto",rarity: "Épico",    color: "#8b2be2" },
      { name: "Leyenda Rota",      rarity: "Legendario",color: "#22d3a0" },
    ],
  },
  {
    id: "zara",
    name: "Zara",
    title: "La Oráculo Neon",
    era: "Neokyoto · 2187",
    role: "Support",
    roleIcon: "🛡️",
    difficulty: "⭐⭐⭐",
    emoji: "👾",
    color: "#22d3a0",
    accent: "#8b2be2",
    description: "Una hacker místico-cibernética que puede leer los flujos temporales como código fuente. Sus implantes neurales procesan el tiempo como datos.",
    lore: "Zara nació en las calles de Neokyoto cuando la Ruptura convirtió los servidores de datos en ojos que ven el futuro. Descubrió que su interfaz neural, diseñada para hackear corporaciones, ahora podía leer las líneas temporales como archivos corruptos. Cada visión tiene un precio: cada vez que ve el futuro, pierde un fragmento del pasado. Trabaja para restaurar el tiempo, pero teme que cuando lo logre, no recuerde quién era antes de empezar.",
    abilities: ["Visión de Flujo", "Parche Temporal", "Sobrecarga Mística", "Protocolo Oráculo"],
    skins: [
      { name: "Interfaz Base",  rarity: "Común",     color: "#22d3a0" },
      { name: "Glitch Fantasma",rarity: "Raro",      color: "#8b2be2" },
      { name: "Virus Eterno",   rarity: "Épico",     color: "#0ea5e9" },
      { name: "Oráculo Absoluto",rarity:"Legendario",color: "#c9a227" },
    ],
  },
  {
    id: "khal",
    name: "Khal",
    title: "El Guardián Estelar",
    era: "Dimensión Ø · Antigüedad",
    role: "Tank",
    roleIcon: "🔰",
    difficulty: "⭐",
    emoji: "🔮",
    color: "#8b2be2",
    accent: "#22d3a0",
    description: "Una entidad cósmica antigua atrapada en forma física por la Ruptura. Su cuerpo proyecta constelaciones y sus golpes resuenan a través de eras.",
    lore: "Khal existía antes del tiempo lineal, como la mayoría de los seres de la Dimensión Ø. La Ruptura no lo afectó — lo materializó. Por primera vez en eones, Khal tiene un cuerpo, un peso, una sombra. Lo experimenta todo con la curiosidad de un niño y la sabiduría de una estrella muerta. No comprende del todo el concepto de muerte, pero ha aprendido que a los humanos les importa mucho. Por eso los protege.",
    abilities: ["Escudo Estelar", "Pulso Cósmico", "Núcleo de Singularidad", "Colisión de Eras"],
    skins: [
      { name: "Forma Primordial", rarity: "Común",     color: "#8b2be2" },
      { name: "Nebulosa Viva",    rarity: "Raro",      color: "#0ea5e9" },
      { name: "Colapso Estelar",  rarity: "Épico",     color: "#c9a227" },
      { name: "Vacío Absoluto",   rarity: "Legendario",color: "#22d3a0" },
    ],
  },
  {
    id: "dusk",
    name: "Dusk",
    title: "La Cazadora de Anomalías",
    era: "Frontera Neo-Oeste · 2089",
    role: "Assassin",
    roleIcon: "🗡️",
    difficulty: "⭐⭐⭐⭐",
    emoji: "🎯",
    color: "#0ea5e9",
    accent: "#c9a227",
    description: "Una mercenaria que combina tecnología del futuro con rituales del oeste. Caza Anomalías como negocio, pero su verdadera misión es personal.",
    lore: "Dusk perdió a su hermano cuando una Anomalía de Clase-Omega devoró su ciudad entera. Desde entonces, convierte en hobby y profesión cerrar cada grieta temporal que encuentra. Su arsenal mezcla trampas de energía cuántica con amuletos de cuero crudo grabados con código binario. La Ruptura le quitó todo — y ella usa eso como combustible. No busca restaurar el tiempo. Busca el momento exacto en que todo salió mal, y quiere estar ahí para cambiarlo.",
    abilities: ["Trampa Cuántica", "Sombra de Frontera", "Salto de Anomalía", "Rompe-Grieta"],
    skins: [
      { name: "Mercenaria",        rarity: "Común",     color: "#0ea5e9" },
      { name: "Espectro del Oeste",rarity: "Raro",      color: "#c9a227" },
      { name: "Cazadora de Vacíos",rarity: "Épico",     color: "#22d3a0" },
      { name: "Paradoja Viviente", rarity: "Legendario",color: "#8b2be2" },
    ],
  },
];

export const RARITY_COLORS = {
  Común:      "#9d94c4",
  Raro:       "#0ea5e9",
  Épico:      "#8b2be2",
  Legendario: "#c9a227",
};

export function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
