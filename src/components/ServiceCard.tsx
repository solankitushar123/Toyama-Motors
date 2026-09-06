import { Search, Ship, Car, Wrench, Compass, Headset } from "lucide-react";
import type { Service } from "../data/services";

const icons = {
  search: Search,
  ship: Ship,
  car: Car,
  wrench: Wrench,
  compass: Compass,
  headset: Headset,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <div className="group bg-paper border border-line rounded-card p-7 hover:shadow-card hover:border-ink/15 transition-all duration-300">
      <div className="w-11 h-11 rounded-xs border border-line flex items-center justify-center text-red-motor group-hover:border-red-motor/40 group-hover:bg-red-motor/5 transition-colors">
        <Icon size={20} strokeWidth={1.6} />
      </div>
      <h3 className="mt-5 text-lg font-display font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-muted">
        {service.description}
      </p>
    </div>
  );
}
