export interface DinoSubCategory {
  name: string
  examples: string[]
}

export interface DinoCategory {
  id: number
  title: string
  description: string
  image: string
  subCategories?: DinoSubCategory[]
}

export const dinoCategories: DinoCategory[] = [
  {
    id: 1,
    title: "Theropods",
    description: "Fierce bipedal predators characterized by hollow bones and three-toed limbs, including some of history's most formidable hunters.",
    image: "/images/dinopedia/1.png",
    subCategories: [
      {
        name: "Notable Species",
        examples: ["Tyrannosaurus Rex", "Albertosaurus", "Velociraptor", "Deinonychus", "Allosaurus"]
      }
    ]
  },
  {
    id: 2,
    title: "Sauropods",
    description: "Long-necked herbivorous giants, known for their massive size and distinctive body shape with elongated necks and tails.",
    image: "/images/dinopedia/2.png",
    subCategories: [
      {
        name: "Notable Species",
        examples: ["Brachiosaurus", "Diplodocus", "Plateosaurus"]
      }
    ]
  },
  {
    id: 3,
    title: "Ornithischians",
    description: "Diverse group of herbivores including both armored and horned dinosaurs, known for their varied defensive adaptations.",
    image: "/images/dinopedia/3.png",
    subCategories: [
      {
        name: "Notable Species",
        examples: ["Triceratops", "Stegosaurus", "Parasaurolophus"]
      }
    ]
  },
  {
    id: 4,
    title: "Pterosaurs",
    description: "Flying reptiles that ruled the prehistoric skies, featuring lightweight bones and wing membranes for powered flight.",
    image: "/images/dinopedia/1.png",
    subCategories: [
      {
        name: "Notable Species",
        examples: ["Pteranodon", "Rhamphorhynchus"]
      }
    ]
  },
  {
    id: 5,
    title: "Stegosaurian",
    description: "Herbivorous dinosaurs known for their distinctive row of plates along their backs and spiked tails.",
    image: "/images/dinopedia/1.png",
    subCategories: [
      {
        name: "Notable Species",
        examples: ["Stegosaurus", "Kentrosaurus", "Huayangosaurus"]
      }
    ]
  },
  {
    id: 6,
    title: "Hadrosauridae", 
    description: "Duck-billed dinosaurs known for their complex tooth batteries and distinctive head crests.",
    image: "/images/dinopedia/2.png",
    subCategories: [
      {
        name: "Notable Species",
        examples: ["Parasaurolophus", "Edmontosaurus", "Maiasaura"]
      }
    ]
  },
  {
    id: 7,
    title: "Ornithopoda",
    description: "Bipedal herbivores ranging from small agile runners to large duck-billed dinosaurs.",
    image: "/images/dinopedia/3.png",
    subCategories: [
      {
        name: "Notable Species",
        examples: ["Iguanodon", "Hypsilophodon", "Dryosaurus"]
      }
    ]
  },
  {
    id: 8,
    title: "Sauropodomorpha",
    description: "Early relatives of sauropods, showing the transition from bipedal to quadrupedal stance.",
    image: "/images/dinopedia/1.png",
    subCategories: [
      {
        name: "Notable Species",
        examples: ["Plateosaurus", "Massospondylus", "Anchisaurus"]
      }
    ]
  },
  {
    id: 9,
    title: "Pachycephalosauria",
    description: "Bipedal herbivores with thick skull roofs, possibly used in head-butting contests.",
    image: "/images/dinopedia/2.png",
    subCategories: [
      {
        name: "Notable Species",
        examples: ["Pachycephalosaurus", "Stegoceras", "Homalocephale"]
      }
    ]
  },
] 
