import { dinoCategories } from './categories'

// Create a union type from the category titles
type DinoCategory = typeof dinoCategories[number]['title']

export interface Dinosaur {
  id: number
  name: string
  category: DinoCategory
  image: string
  description: string
  stats: {
    diet: string
    length: string
    weight: string
    speed: string
  }
}

export const dinosaurs: Dinosaur[] = [
  // Theropods
  {
    id: 1,
    name: "Tyrannosaurus Rex",
    category: "Theropods", 
    image: "/images/dinopedia/1.png",
    description: "The iconic apex predator of the Late Cretaceous period, T-Rex was one of the largest land carnivores of all time, with powerful jaws and bone-crushing bite force.",
    stats: {
      diet: "Carnivore",
      length: "12-13m",
      weight: "7,000kg", 
      speed: "30 km/h"
    }
  },
  {
    id: 2,
    name: "Albertosaurus",
    category: "Theropods",
    image: "/images/dinopedia/2.png", 
    description: "A smaller relative of T-Rex, Albertosaurus was a swift predator that hunted in the forests of Late Cretaceous North America.",
    stats: {
      diet: "Carnivore",
      length: "9m",
      weight: "2,500kg",
      speed: "40 km/h"
    }
  },
  {
    id: 3,
    name: "Velociraptor",
    category: "Theropods",
    image: "/images/dinopedia/3.png",
    description: "A swift and intelligent pack hunter, known for its sickle-shaped claws and feathered body.",
    stats: {
      diet: "Carnivore", 
      length: "2m",
      weight: "15kg",
      speed: "40 km/h"
    }
  },
  {
    id: 4,
    name: "Deinonychus",
    category: "Theropods",
    image: "/images/dinopedia/1.png",
    description: "A larger relative of Velociraptor, this agile predator hunted in packs and was one of the most intelligent dinosaurs.",
    stats: {
      diet: "Carnivore",
      length: "3.4m", 
      weight: "73kg",
      speed: "35 km/h"
    }
  },
  {
    id: 5,
    name: "Allosaurus",
    category: "Theropods",
    image: "/images/dinopedia/2.png",
    description: "The dominant predator of the Late Jurassic period, known for its powerful jaws and serrated teeth.",
    stats: {
      diet: "Carnivore",
      length: "8.5m",
      weight: "2,000kg",
      speed: "30 km/h"
    }
  },
  // Sauropods
  {
    id: 6,
    name: "Brachiosaurus",
    category: "Sauropods",
    image: "/images/dinopedia/3.png",
    description: "One of the tallest dinosaurs, this gentle giant used its long neck to reach high tree branches.",
    stats: {
      diet: "Herbivore",
      length: "30m",
      weight: "70,000kg",
      speed: "20 km/h"
    }
  },
  {
    id: 7,
    name: "Diplodocus",
    category: "Sauropods",
    image: "/images/dinopedia/1.png",
    description: "Known for its incredibly long neck and whip-like tail, Diplodocus was one of the longest dinosaurs.",
    stats: {
      diet: "Herbivore",
      length: "27m",
      weight: "25,000kg",
      speed: "24 km/h"
    }
  },
  {
    id: 8,
    name: "Plateosaurus",
    category: "Sauropods",
    image: "/images/dinopedia/2.png",
    description: "One of the earliest large plant-eating dinosaurs, helping to pave the way for the giant sauropods.",
    stats: {
      diet: "Herbivore",
      length: "8m",
      weight: "4,000kg",
      speed: "15 km/h"
    }
  },
  // Ornithischians
  {
    id: 9,
    name: "Triceratops",
    category: "Ornithischians",
    image: "/images/dinopedia/3.png",
    description: "Famous for its three horns and large frill, Triceratops was one of the last non-avian dinosaurs to exist.",
    stats: {
      diet: "Herbivore",
      length: "9m",
      weight: "12,000kg",
      speed: "25 km/h"
    }
  },
  {
    id: 10,
    name: "Stegosaurus",
    category: "Ornithischians",
    image: "/images/dinopedia/1.png",
    description: "Known for its row of distinctive back plates and spiked tail used for defense.",
    stats: {
      diet: "Herbivore",
      length: "9m",
      weight: "5,000kg",
      speed: "20 km/h"
    }
  },
  {
    id: 11,
    name: "Parasaurolophus",
    category: "Ornithischians",
    image: "/images/dinopedia/2.png",
    description: "Distinguished by its long, hollow cranial crest, which may have been used for communication.",
    stats: {
      diet: "Herbivore",
      length: "10m",
      weight: "3,500kg",
      speed: "25 km/h"
    }
  },
  // Pterosaurs
  {
    id: 12,
    name: "Pteranodon",
    category: "Pterosaurs",
    image: "/images/dinopedia/3.png",
    description: "A large flying reptile with a distinctive head crest and wingspan of up to 7 meters.",
    stats: {
      diet: "Carnivore",
      length: "2m",
      weight: "20kg",
      speed: "60 km/h"
    }
  },
  {
    id: 13,
    name: "Rhamphorhynchus",
    category: "Pterosaurs",
    image: "/images/dinopedia/1.png",
    description: "A long-tailed pterosaur with sharp teeth and a diamond-shaped tail vane.",
    stats: {
      diet: "Carnivore",
      length: "1.2m",
      weight: "2kg",
      speed: "45 km/h"
    }
  },
  // Stegosaurian
  {
    id: 14,
    name: "Kentrosaurus",
    category: "Stegosaurian",
    image: "/images/dinopedia/2.png",
    description: "A smaller relative of Stegosaurus with distinctive spikes along its back and tail.",
    stats: {
      diet: "Herbivore",
      length: "4.5m",
      weight: "1,100kg",
      speed: "15 km/h"
    }
  },
  {
    id: 15,
    name: "Huayangosaurus",
    category: "Stegosaurian",
    image: "/images/dinopedia/3.png",
    description: "One of the earliest stegosaurs, featuring the characteristic plates and spikes.",
    stats: {
      diet: "Herbivore",
      length: "4.5m",
      weight: "1,000kg",
      speed: "15 km/h"
    }
  },
  // Hadrosauridae
  {
    id: 16,
    name: "Edmontosaurus",
    category: "Hadrosauridae",
    image: "/images/dinopedia/1.png",
    description: "A large duck-billed dinosaur known for its complex tooth batteries.",
    stats: {
      diet: "Herbivore",
      length: "13m",
      weight: "4,000kg",
      speed: "28 km/h"
    }
  },
  {
    id: 17,
    name: "Maiasaura",
    category: "Hadrosauridae",
    image: "/images/dinopedia/2.png",
    description: "Known for nesting behavior and parental care of its young.",
    stats: {
      diet: "Herbivore",
      length: "9m",
      weight: "3,000kg",
      speed: "25 km/h"
    }
  },
  // Ornithopoda
  {
    id: 18,
    name: "Iguanodon",
    category: "Ornithopoda",
    image: "/images/dinopedia/3.png",
    description: "One of the first dinosaurs discovered, known for its distinctive thumb spikes.",
    stats: {
      diet: "Herbivore",
      length: "10m",
      weight: "4,500kg",
      speed: "20 km/h"
    }
  },
  {
    id: 19,
    name: "Hypsilophodon",
    category: "Ornithopoda",
    image: "/images/dinopedia/1.png",
    description: "A small, agile bipedal herbivore known for its speed and maneuverability.",
    stats: {
      diet: "Herbivore",
      length: "2.3m",
      weight: "20kg",
      speed: "35 km/h"
    }
  },
  // Sauropodomorpha
  {
    id: 20,
    name: "Massospondylus",
    category: "Sauropodomorpha",
    image: "/images/dinopedia/2.png",
    description: "An early dinosaur showing the transition to a quadrupedal stance.",
    stats: {
      diet: "Herbivore",
      length: "4m",
      weight: "1,000kg",
      speed: "15 km/h"
    }
  },
  {
    id: 21,
    name: "Anchisaurus",
    category: "Sauropodomorpha",
    image: "/images/dinopedia/3.png",
    description: "One of the earliest known sauropodomorphs from North America.",
    stats: {
      diet: "Herbivore",
      length: "2.5m",
      weight: "27kg",
      speed: "20 km/h"
    }
  },
  // Pachycephalosauria
  {
    id: 22,
    name: "Pachycephalosaurus",
    category: "Pachycephalosauria",
    image: "/images/dinopedia/1.png",
    description: "Known for its extremely thick skull roof used in head-butting contests.",
    stats: {
      diet: "Herbivore",
      length: "4.5m",
      weight: "450kg",
      speed: "30 km/h"
    }
  },
  {
    id: 23,
    name: "Stegoceras",
    category: "Pachycephalosauria",
    image: "/images/dinopedia/2.png",
    description: "A smaller dome-headed dinosaur with a thick skull used for combat.",
    stats: {
      diet: "Herbivore",
      length: "2.5m",
      weight: "40kg",
      speed: "25 km/h"
    }
  }
]

// Helper function to get all available categories
export function getCategories(): DinoCategory[] {
  return dinoCategories.map(category => category.title)
}

// Helper function to get dinosaurs by category
export function getDinosaursByCategory(category: DinoCategory | 'all'): Dinosaur[] {
  if (category === 'all') return dinosaurs
  return dinosaurs.filter(dino => dino.category === category)
}
