import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { VehicleCategory } from "../data/vehicles";

export default function VehicleCard({ category }: { category: VehicleCategory }) {
  return (
    <div className="group bg-paper border border-line rounded-card overflow-hidden hover:shadow-card transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <img
          src={category.image}
          alt={`${category.name} available through Toyama Motors`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wideish uppercase bg-ink/85 text-paper px-2.5 py-1 rounded-xs">
          Sample category
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-display font-semibold tracking-tight">{category.name}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-slate-muted">
          {category.description}
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-red-motor group/link"
        >
          Request Information
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
