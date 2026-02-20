import amberGold from "@/assets/amber-gold.jpeg";
import fruitier from "@/assets/fruitier.jpeg";
import muskBlanc from "@/assets/musk-blanc.jpeg";
import coco from "@/assets/coco.jpeg";
import honey from "@/assets/honey.jpeg";
import vanille from "@/assets/vanille.jpeg";
import fleur from "@/assets/fleur.jpeg";
import exoticGarden from "@/assets/exotic-garden.jpeg";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  notes: string;
  image: string;
  volume: string;
  type: string;
  bestseller?: boolean;
}

export interface Pack {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  products: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: "amber-gold",
    name: "Amber Gold",
    tagline: "Chaleur enveloppante",
    description: "Une huile envoûtante aux notes d'ambre chaud et de résine précieuse. Profonde, sensuelle et inoubliable, elle laisse un sillage royal sur la peau.",
    notes: "Notes de tête : Résine dorée · Notes de cœur : Ambre chaud · Notes de fond : Bois précieux",
    image: amberGold,
    volume: "50ml",
    type: "Huile parfumée concentrée",
    bestseller: false,
  },
  {
    id: "fruitier",
    name: "Fruitier",
    tagline: "Éclat fruité enchanté",
    description: "Un bouquet vibrant de fruits rouges éclatants — framboises, cassis et groseilles — sublimé par une touche de rose fraîche. Pétillante et séduisante.",
    notes: "Notes de tête : Framboise · Notes de cœur : Cassis, groseille · Notes de fond : Rose",
    image: fruitier,
    volume: "50ml",
    type: "Huile parfumée concentrée",
    bestseller: false,
  },
  {
    id: "musk-blanc",
    name: "Musk Blanc",
    tagline: "Pureté aérienne",
    description: "La pureté absolue en huile. Le musc blanc le plus délicat, cristallin et aérien, enveloppant la peau d'une seconde nature invisible et irrésistible.",
    notes: "Notes de tête : Musc pur · Notes de cœur : Poudre de riz · Notes de fond : Ambre blanc",
    image: muskBlanc,
    volume: "50ml",
    type: "Huile parfumée concentrée",
    bestseller: true,
  },
  {
    id: "coco",
    name: "Coco",
    tagline: "Douceur tropicale",
    description: "Un voyage tropical en flacon. La noix de coco crémeuse et ensoleillée, mêlée à des effluves de sable chaud et de fleurs blanches, pour une féminité solaire.",
    notes: "Notes de tête : Coco fraîche · Notes de cœur : Fleurs tropicales · Notes de fond : Vanille, santal",
    image: coco,
    volume: "50ml",
    type: "Huile parfumée concentrée",
    bestseller: true,
  },
  {
    id: "honey",
    name: "Honey",
    tagline: "Douceur épicée",
    description: "Le miel le plus délicat, enrobé de notes épicées d'anis étoilé et de fleurs sauvages. Une composition gourmande et profonde à la fois.",
    notes: "Notes de tête : Miel doré · Notes de cœur : Fleurs sauvages, anis · Notes de fond : Bois caramel",
    image: honey,
    volume: "50ml",
    type: "Huile parfumée concentrée",
    bestseller: false,
  },
  {
    id: "vanille",
    name: "Vanille",
    tagline: "Gourmandise royale",
    description: "La vanille dans toute sa splendeur — ronde, gourmande et enveloppante. Une huile qui séduit dès le premier contact et demeure sur la peau comme une signature.",
    notes: "Notes de tête : Vanille bourbon · Notes de cœur : Fève tonka · Notes de fond : Musc blanc, bois",
    image: vanille,
    volume: "50ml",
    type: "Huile parfumée concentrée",
    bestseller: false,
  },
  {
    id: "fleur",
    name: "Fleur",
    tagline: "Bouquet floral délicat",
    description: "Un jardin en fleur capturé en flacon. Rose de mai, jasmin étoilé et lilas doux composent cette ode à la féminité douce et raffinée.",
    notes: "Notes de tête : Rose de mai · Notes de cœur : Jasmin, lilas · Notes de fond : Musc floral",
    image: fleur,
    volume: "50ml",
    type: "Huile parfumée concentrée",
    bestseller: true,
  },
  {
    id: "exotic-garden",
    name: "Exotic Garden",
    tagline: "Jardin tropical",
    description: "Un jardin tropical luxuriant — ananas juteux, mangue mûre et feuilles de palmier — pour une escapade olfactive sous les tropiques.",
    notes: "Notes de tête : Ananas, mangue · Notes de cœur : Fleurs tropicales · Notes de fond : Bois de cèdre",
    image: exoticGarden,
    volume: "50ml",
    type: "Huile parfumée concentrée",
    bestseller: false,
  },
];

export const bestsellers = products.filter(p => p.bestseller);

export const packs: Pack[] = [
  {
    id: "signature-royale",
    name: "Pack Signature Royale",
    subtitle: "L'alliance de l'or et de la fleur",
    description: "Trois huiles d'exception réunies pour créer une signature olfactive royale et inoubliable. Le prestige absolu en coffret.",
    products: ["amber-gold", "musk-blanc", "fleur"],
    images: [amberGold, muskBlanc, fleur],
  },
  {
    id: "escale-exotique",
    name: "Pack L'Escale Exotique",
    subtitle: "Un voyage sensoriel",
    description: "Laissez-vous emporter par un voyage olfactif entre jardins tropicaux et fruits enchantés. L'évasion en trois flacons.",
    products: ["exotic-garden", "coco", "fruitier"],
    images: [exoticGarden, coco, fruitier],
  },
  {
    id: "douceur",
    name: "Pack Douceur",
    subtitle: "Enveloppante et gourmande",
    description: "La douceur à l'état pur. Vanille royale et miel précieux réunis pour envelopper la peau d'une chaleur sucrée et addictive.",
    products: ["vanille", "honey"],
    images: [vanille, honey],
  },
  {
    id: "elegance-florale",
    name: "Pack Élégance Florale",
    subtitle: "Féminité en fleur",
    description: "Deux huiles florales raffinées qui célèbrent la féminité dans toute sa délicatesse — parfaites pour la femme qui rayonne.",
    products: ["fleur", "musk-blanc"],
    images: [fleur, muskBlanc],
  },
];

export const getProductById = (id: string) => products.find(p => p.id === id);
