import SEO from "../components/SEO";
import Hero from "../components/Hero";
import CompanyStats from "../components/CompanyStats";
import SectionHeading from "../components/SectionHeading";
import ImageSection from "../components/ImageSection";
import ServiceCard from "../components/ServiceCard";
import VehicleCard from "../components/VehicleCard";
import MachineryCard from "../components/MachineryCard";
import Timeline from "../components/Timeline";
import Button from "../components/Button";
import { services } from "../data/services";
import { vehicleCategories } from "../data/vehicles";
import { machineryCategories } from "../data/machinery";
import { company } from "../data/company";
import { exportSteps } from "../data/exportProcess";
import { whyUsItems } from "../data/whyUs";
import { Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="Toyama Motors Japan | Japanese Vehicle & Machinery Export"
        description="Toyama Motors is a Japan-based company specializing in new and used vehicle and machinery sourcing and export for international customers."
      />
      <Hero />
      <CompanyStats />

      {/* Company introduction */}
      <ImageSection
        eyebrow="About Toyama Motors"
        heading="Connecting Japan's Automotive Excellence with the World."
        text="Toyama Motors is a Japan-based business specializing in new and used vehicles and machinery. Established in 2023, we focus on sourcing quality products and supporting customers with professional export services."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytuB2LMJYkJfbZ20VEJ-V3x7sA4nCiwyu00SqwqnOYpV-9Vk3_a_MsQ&s=10"
        imageAlt="Vehicles lined up in Japan, representing Toyama Motors' sourcing work"
      >
        <ul className="mt-6 space-y-2.5 text-sm text-ink/80">
          {["Japan-based sourcing", "International customer support", "Vehicle and machinery expertise"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-motor" />
                {item}
              </li>
            )
          )}
        </ul>
        <div className="mt-8">
          <Button to="/about" variant="secondary" icon>
            More About Us
          </Button>
        </div>
      </ImageSection>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-mist">
        <div className="container-page">
          <SectionHeading heading="What We Do" align="left" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle showcase */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading
              heading="Japanese Vehicles"
              supporting="Explore the quality and variety of vehicles available through Toyama Motors."
            />
            <Button to="/vehicles" variant="secondary" className="shrink-0">
              View All Vehicles
            </Button>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleCategories.slice(0, 3).map((c) => (
              <VehicleCard key={c.id} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Machinery showcase */}
      <section className="py-20 sm:py-28 bg-mist">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading
              heading="Japanese Machinery"
              supporting="Toyama Motors also handles machinery sourcing and export from Japan."
            />
            <Button to="/machinery" variant="secondary" className="shrink-0">
              View All Machinery
            </Button>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machineryCategories.slice(0, 3).map((c) => (
              <MachineryCard key={c.id} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Japan to the world */}
      <ImageSection
        dark
        heading="From Japan, To the World."
        text="Based in Japan, Toyama Motors connects international customers with the country's automotive and machinery market."
        image="https://www.shutterstock.com/shutterstock/videos/3861088931/thumb/12.jpg?ip=x480"
        imageAlt="A Japanese highway leading toward the coast, representing export logistics from Japan"
        reverse
      />

      {/* Export process (condensed) */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            heading="A Simple, Professional Export Process"
            supporting="From first inquiry to international shipment, in five clear stages."
          />
          <div className="mt-14">
            <Timeline steps={exportSteps} />
          </div>
          <div className="mt-12">
            <Button to="/export-process" variant="secondary" icon>
              See the Full Process
            </Button>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 sm:py-28 bg-mist">
        <div className="container-page">
          <SectionHeading heading="Why Toyama Motors?" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.slice(0, 6).map((item) => (
              <div key={item.title} className="bg-paper border border-line rounded-card p-7">
                <h3 className="font-display font-semibold text-[15px] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
            <div>
              <p className="label-eyebrow mb-4">Leadership</p>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight">
                {company.ceo}
              </h2>
              <p className="mt-1 text-red-motor font-medium">{company.ceoTitle}</p>
            </div>
            <div className="border-t lg:border-t-0 lg:border-l border-line pt-6 lg:pt-0 lg:pl-12">
              <p className="text-slate-muted leading-relaxed max-w-xl">
                Mohammed Sharif leads Toyama Motors as Chief Executive Officer,
                overseeing the company's vehicle and machinery sourcing and
                export operations from Toyama, Japan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sm:py-24 bg-ink text-paper">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight max-w-lg">
                Looking for a Vehicle or Machinery from Japan?
              </h2>
              <p className="mt-4 text-paper/60 max-w-lg leading-relaxed">
                Tell us what you are looking for and our team will get in
                touch with you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <Button to="/contact" variant="accent" size="lg" icon>
                Contact Toyama Motors
              </Button>
              <Button href={`mailto:${company.email}`} size="lg" className="!bg-transparent !text-paper !border-paper/40 hover:!bg-paper hover:!text-ink">
                <Mail size={16} /> Email Us
              </Button>
              <Button href={`tel:${company.phoneHref}`} size="lg" className="!bg-transparent !text-paper !border-paper/40 hover:!bg-paper hover:!text-ink">
                <Phone size={16} /> Call {company.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
