import SEO from "../components/SEO";
import PageHero from "../components/PageHero";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Toyama Motors"
        description="Privacy policy placeholder for Toyama Motors."
      />
      <PageHero eyebrow="Legal" heading="Privacy Policy" />
      <section className="py-20 sm:py-28">
        <div className="container-page max-w-2xl">
          <div className="border border-dashed border-line rounded-card bg-mist px-6 py-8 text-[14.5px] text-slate-muted leading-relaxed">
            [PLACEHOLDER — Toyama Motors' formal privacy policy will be added
            here. This page is a structural placeholder only and does not
            constitute a legal privacy policy.]
          </div>
        </div>
      </section>
    </>
  );
}
