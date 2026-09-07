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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGGC5tyWDt_i5Xlc-lr1UmxiX7r8IRSzodqTjbyzGaWxI-h4y72T-Hlc&s=10",
  },
  {
    id: "suvs",
    name: "SUVs",
    description:
      "SUVs and crossover vehicles suited to a range of international requirements.",
    image: "https://article.images.consumerreports.org/image/upload/t_article_tout/v1771605364/prod/content/dam/CRO-images-2026/Cars/CR-Cars-InlineHero-2026-Toyota-Grand-Highlander-Limited-f-driving-2-26",
  },
  {
    id: "commercial-vehicles",
    name: "Commercial Vehicles",
    description:
      "Vans, trucks and other commercial vehicles for business and fleet use.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPi7_C9-7sEzwvBtI31wSD-kgN8-Ps1cHq6rotTvxFdwOJrA6p7noMUk&s=10",
  },
  {
    id: "luxury-vehicles",
    name: "Luxury Vehicles",
    description:
      "Premium Japanese and imported vehicles sourced on request.",
    image: "https://news.dupontregistry.com/cdn/shop/articles/rr-main-scaled_616570e4-c63a-47b1-9d6b-0344363c097e.jpg?v=1785853091",
  },
  {
    id: "used-vehicles",
    name: "Used Vehicles",
    description:
      "Quality used vehicles purchased and sourced through the Japanese market.",
    image: "https://media.istockphoto.com/id/1701951821/photo/cars-in-a-row-used-car-sales.jpg?s=612x612&w=0&k=20&c=OX0sxpY6E9Z_1TPLpu0BaH8F05oWU-FRxsOmV32yuSg=",
  },
  {
    id: "other-vehicles",
    name: "Other Vehicles",
    description:
      "Additional vehicle types sourced according to specific customer requirements.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVgZoevBgCQQvB9HOv7hXCTWKpFuyxeFaVnKoipICCrle-AP-pNgQniI&s=10",
  },
];
