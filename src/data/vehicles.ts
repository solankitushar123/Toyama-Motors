// Toyama Motors does not currently supply live inventory data.
// Every entry below is an illustrative, clearly-labeled SAMPLE so the showcase
// format can be reviewed. Replace `image` and `description` per category once
// real photography and stock details are provided — do not add invented
// brands, models, years, prices, or availability.

export type VehicleCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const vehicleCategories: VehicleCategory[] = [
  {
    id: "passenger-cars",
    name: "Passenger Cars",
    description:
      "Sedans and compact vehicles sourced from the Japanese domestic market.",
    image: "https://picsum.photos/seed/toyama-passenger/900/650",
  },
  {
    id: "suvs",
    name: "SUVs",
    description:
      "SUVs and crossover vehicles suited to a range of international requirements.",
    image: "https://picsum.photos/seed/toyama-suv/900/650",
  },
  {
    id: "commercial-vehicles",
    name: "Commercial Vehicles",
    description:
      "Vans, trucks and other commercial vehicles for business and fleet use.",
    image: "https://picsum.photos/seed/toyama-commercial/900/650",
  },
  {
    id: "luxury-vehicles",
    name: "Luxury Vehicles",
    description:
      "Premium Japanese and imported vehicles sourced on request.",
    image: "https://picsum.photos/seed/toyama-luxury/900/650",
  },
  {
    id: "used-vehicles",
    name: "Used Vehicles",
    description:
      "Quality used vehicles purchased and sourced through the Japanese market.",
    image: "https://picsum.photos/seed/toyama-used/900/650",
  },
  {
    id: "other-vehicles",
    name: "Other Vehicles",
    description:
      "Additional vehicle types sourced according to specific customer requirements.",
    image: "https://picsum.photos/seed/toyama-other/900/650",
  },
];
