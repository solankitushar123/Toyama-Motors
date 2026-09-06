import SEO from "../components/SEO";
import PageHero from "../components/PageHero";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms | Toyama Motors"
        description="Terms of use placeholder for Toyama Motors."
      />
      <PageHero eyebrow="Legal" heading="Terms" />
      <section className="py-20 sm:py-28">
        <div className="container-page max-w-2xl">
          <div className="border border-dashed border-line rounded-card bg-mist px-6 py-8 text-[14.5px] text-slate-muted leading-relaxed">
            [PLACEHOLDER — Toyama Motors' formal terms of use will be added
            here. This page is a structural placeholder only and does not
            constitute legal terms.]
          </div>
        </div>
      </section>
    </>
  );
}
