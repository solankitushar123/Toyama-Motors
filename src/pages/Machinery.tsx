import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import MachineryCard from "../components/MachineryCard";
import Button from "../components/Button";
import { machineryCategories } from "../data/machinery";

export default function Machinery() {
  return (
    <>
      <SEO
        title="Japanese Machinery Export | Toyama Motors"
        description="Toyama Motors sources and exports construction, industrial, agricultural and commercial machinery from Japan for international customers."
      />
      <PageHero
        eyebrow="Machinery"
        heading="Japanese Machinery"
        supporting="Toyama Motors also handles machinery sourcing and export from Japan, alongside our vehicle business."
      />

      <section className="py-14">
        <div className="container-page">
          <div className="border border-line rounded-card bg-mist px-6 py-5 text-[14px] leading-relaxed text-slate-muted">
            The categories below illustrate the types of machinery Toyama
            Motors sources. For specific models, specifications or current
            availability, please{" "}
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
            {machineryCategories.map((c) => (
              <MachineryCard key={c.id} category={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-ink text-paper">
        <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight max-w-md">
            Sourcing machinery for a project?
          </h2>
          <Button to="/contact" variant="accent" size="lg" icon>
            Machinery Inquiry
          </Button>
        </div>
      </section>
    </>
  );
}
