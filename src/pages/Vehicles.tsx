import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import VehicleCard from "../components/VehicleCard";
import Button from "../components/Button";
import { vehicleCategories } from "../data/vehicles";

export default function Vehicles() {
  return (
    <>
      <SEO
        title="Japanese Vehicles | Toyama Motors"
        description="Explore vehicle categories sourced through Toyama Motors, a Japan-based exporter of new and used vehicles. Contact us for current availability."
      />
      <PageHero
        eyebrow="Vehicles"
        heading="Japanese Vehicles"
        supporting="Explore the quality and variety of vehicles available through Toyama Motors. Contact us for current availability."
      />

      <section className="py-14">
        <div className="container-page">
          <div className="border border-line rounded-card bg-mist px-6 py-5 text-[14px] leading-relaxed text-slate-muted">
            The categories below illustrate the types of vehicles Toyama
            Motors sources. This page is not a live inventory system — for
            current availability, specifications and pricing, please{" "}
            <Link to="/contact" className="text-red-motor font-medium">
              contact Toyama Motors
            </Link>
            .
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleCategories.map((c) => (
              <VehicleCard key={c.id} category={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-ink text-paper">
        <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight max-w-md">
            Looking for a specific type of vehicle?
          </h2>
          <Button to="/contact" variant="accent" size="lg" icon>
            Request Information
          </Button>
        </div>
      </section>
    </>
  );
}
