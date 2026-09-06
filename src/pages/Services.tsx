import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | Toyama Motors Japan"
        description="Vehicle sourcing, vehicle export, used vehicle purchasing, machinery export and international customer support from Toyama Motors, Japan."
      />
      <PageHero
        eyebrow="Our Services"
        heading="Sourcing and export support, from inquiry to shipment."
        supporting="Toyama Motors supports customers across vehicle sourcing, export and machinery, with a single point of contact throughout."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-mist">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <SectionHeading
            eyebrow="How Services Connect"
            heading="Vehicles and machinery, sourced under one business."
            supporting="Whether you need a single vehicle or are sourcing machinery for a project, Toyama Motors coordinates sourcing and export from Japan through the same process."
          />
          <div className="flex flex-col justify-center gap-4">
            <Button to="/vehicles" variant="secondary" icon>
              Browse Vehicle Categories
            </Button>
            <Button to="/machinery" variant="secondary" icon>
              Browse Machinery Categories
            </Button>
            <Button to="/export-process" variant="secondary" icon>
              See the Export Process
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
