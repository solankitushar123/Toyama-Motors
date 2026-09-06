// All fields below are the verified details supplied by Toyama Motors.
// Do not add unverified figures (customer counts, branch counts, awards, etc.)
// to this file — see project README for the content-accuracy policy.

export const company = {
  name: "Toyama Motors",
  nameJp: "トヤマ モータース",
  ceoNameJp: "モハメド シャリフ",
  established: "2023",
  industry: "New / Used Car & Machinery Business",
  businessType: "Used / New Car Buying, Purchasing and Selling",
  businessTagline: "Exporter of New/Used Cars & Machinery",
  businessTaglineJp: "新車/中古車および機械 の輸出業者",
  location: "Toyama, Japan",
  ceo: "Mohammed Sharif",
  ceoTitle: "CEO",
  phone: "090-4321-9367",
  phoneHref: "+819043219367",
  tel: "0766-50-9826",
  telHref: "+81766509826",
  fax: "0766-50-9747",
  email: "Toyamamotors2023@gmail.com",
  website: "www.toyamamotor.com",
  addressPostal: "〒933-0018",
  addressJp: "富山県高岡市高陵町6-2",
  addressEn: "6-2 Koryocho, Takaoka-shi, Toyama, Japan",
  addressCity: "Toyama, Japan",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Vehicles", to: "/vehicles" },
  { label: "Machinery", to: "/machinery" },
  { label: "Export Process", to: "/export-process" },
  { label: "Why Choose Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "About Us", to: "/about" },
    { label: "Company Profile", to: "/company" },
    { label: "Why Choose Us", to: "/why-us" },
    { label: "FAQ", to: "/faq" },
  ],
  services: [
    { label: "Vehicle Sourcing", to: "/services" },
    { label: "Vehicle Export", to: "/services" },
    { label: "Machinery", to: "/machinery" },
    { label: "Export Process", to: "/export-process" },
  ],
};

export const companyHighlights = [
  { value: "2023", label: "Established" },
  { value: "Japan", label: "Based" },
  { value: "New & Used", label: "Vehicles" },
  { value: "Vehicles &\nMachinery", label: "Business Focus" },
] as const;
