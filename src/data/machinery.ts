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
    image: "https://engineeringlearn.com/wp-content/uploads/2022/07/Construction-Vehicles.jpg",
  },
  {
    id: "industrial-machinery",
    name: "Industrial Machinery",
    description: "Machinery used across industrial and manufacturing settings.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fRDXW0a95eHZtY2ILWiVJceXPenhvfOHWascdoxjR_9wywaygbGcbG3t&s=10",
  },
  {
    id: "agricultural-machinery",
    name: "Agricultural Machinery",
    description: "Equipment suited to agricultural and farming operations.",
    image: "https://www.fieldking.com/images/new-home/Portfolio_Harvesters.jpg",
  },
  {
    id: "commercial-equipment",
    name: "Commercial Equipment",
    description: "Equipment sourced for commercial and business use.",
    image: "https://image.made-in-china.com/2f0j00gPikplwFnHqD/Multifunctional-Catering-Equipment-Commercial-Kitchen-Equipment-Kitchen-Appliance-for-Hotel-and-Restaurant.webp",
  },
  {
    id: "specialized-machinery",
    name: "Specialized Machinery",
    description: "Machinery sourced for specific or specialized requirements.",
    image: "https://sanei-air.com/en/wp-content/themes/sanei_new_en/assets/img/specialized/intro_image.jpg",
  },
];
