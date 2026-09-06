// Illustrative machinery categories. Replace images and descriptions once
// real machinery photography and specifications are supplied — do not add
// invented model numbers, brands, or specifications.

export type MachineryCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const machineryCategories: MachineryCategory[] = [
  {
    id: "construction-machinery",
    name: "Construction Machinery",
    description: "Excavators, loaders and related construction equipment.",
    image: "https://picsum.photos/seed/toyama-construction/900/650",
  },
  {
    id: "industrial-machinery",
    name: "Industrial Machinery",
    description: "Machinery used across industrial and manufacturing settings.",
    image: "https://picsum.photos/seed/toyama-industrial/900/650",
  },
  {
    id: "agricultural-machinery",
    name: "Agricultural Machinery",
    description: "Equipment suited to agricultural and farming operations.",
    image: "https://picsum.photos/seed/toyama-agriculture/900/650",
  },
  {
    id: "commercial-equipment",
    name: "Commercial Equipment",
    description: "Equipment sourced for commercial and business use.",
    image: "https://picsum.photos/seed/toyama-commercial-eq/900/650",
  },
  {
    id: "specialized-machinery",
    name: "Specialized Machinery",
    description: "Machinery sourced for specific or specialized requirements.",
    image: "https://picsum.photos/seed/toyama-specialized/900/650",
  },
];
