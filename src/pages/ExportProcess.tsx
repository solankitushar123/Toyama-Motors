import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Timeline from "../components/Timeline";
import Button from "../components/Button";
import { exportSteps } from "../data/exportProcess";

export default function ExportProcess() {
  return (
    <>
      <SEO
        title="Export Process | Toyama Motors Japan"
        description="A simple, professional five-step process for sourcing and exporting vehicles and machinery from Toyama Motors, Japan."
      />
      <PageHero
        eyebrow="Export Process"
        heading="A Simple, Professional Export Process"
        supporting="From your first inquiry to international shipment, here is how Toyama Motors approaches each request."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Timeline steps={exportSteps} />
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-mist">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-display font-semibold tracking-tight">
            A note on our process
          </h2>
          <p className="mt-4 text-slate-muted leading-relaxed">
            Toyama Motors follows the stages above for vehicle and machinery
            inquiries. Specific documentation, timelines and logistics
            arrangements depend on the product, destination and applicable
            regulations, and are confirmed directly with each customer during
            the sourcing and confirmation stages.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-ink text-paper">
        <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight max-w-md">
            Ready to start with an inquiry?
          </h2>
          <Button to="/contact" variant="accent" size="lg" icon>
            Contact Toyama Motors
          </Button>
        </div>
      </section>
    </>
  );
}
