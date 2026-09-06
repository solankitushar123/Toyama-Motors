import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { whyUsItems } from "../data/whyUs";

export default function WhyUs() {
  return (
    <>
      <SEO
        title="Why Choose Toyama Motors | Japan Vehicle & Machinery Exporter"
        description="Japan-based, quality-focused sourcing and professional communication — why international customers work with Toyama Motors."
      />
      <PageHero
        eyebrow="Why Choose Us"
        heading="Why Toyama Motors?"
        supporting="A Japan-based business focused on understanding what each customer needs before sourcing it."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item, i) => (
              <div key={item.title} className="bg-paper border border-line rounded-card p-7 hover:shadow-card transition-shadow duration-300">
                <span className="text-xs font-display font-semibold text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display font-semibold text-lg tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-ink text-paper">
        <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight max-w-md">
            Have a requirement in mind?
          </h2>
          <Button to="/contact" variant="accent" size="lg" icon>
            Contact Toyama Motors
          </Button>
        </div>
      </section>
    </>
  );
}
