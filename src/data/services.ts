export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "search" | "ship" | "car" | "wrench" | "compass" | "headset";
};

export const services: Service[] = [
  {
    id: "vehicle-sourcing",
    title: "Vehicle Sourcing",
    description:
      "Sourcing new and used vehicles from the Japanese automotive market according to customer requirements.",
    icon: "search",
  },
  {
    id: "vehicle-export",
    title: "Vehicle Export",
    description:
      "Supporting international customers with the export of vehicles from Japan.",
    icon: "ship",
  },
  {
    id: "used-vehicle-purchasing",
    title: "Used Vehicle Purchasing",
    description:
      "Purchasing and sourcing used vehicles through the Japanese market.",
    icon: "car",
  },
  {
    id: "machinery-export",
    title: "Machinery Export",
    description:
      "Sourcing and exporting machinery from Japan for international customers.",
    icon: "wrench",
  },
  {
    id: "vehicle-selection-support",
    title: "Vehicle Selection Support",
    description:
      "Helping customers identify suitable vehicles based on their requirements.",
    icon: "compass",
  },
  {
    id: "international-customer-support",
    title: "International Customer Support",
    description:
      "Professional communication and support throughout the inquiry and export process.",
    icon: "headset",
  },
];
