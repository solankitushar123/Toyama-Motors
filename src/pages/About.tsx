import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ImageSection from "../components/ImageSection";
import CompanyStats from "../components/CompanyStats";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function About() {
  return (
    <>
      <SEO
        title="About Toyama Motors | Japanese Vehicle & Machinery Exporter"
        description="Toyama Motors is a Japan-based company established in 2023, specializing in new and used vehicle and machinery sourcing and export."
      />
      <PageHero
        eyebrow="About Toyama Motors"
        heading="A Japan-based business built around sourcing and export."
        supporting="Established in 2023, Toyama Motors focuses on connecting international customers with quality vehicles and machinery from Japan."
      />

      <ImageSection
        eyebrow="Our Focus"
        heading="Quality Sourcing, Professional Communication."
        text="Toyama Motors is a Japan-based business specializing in new and used vehicles and machinery. We focus on sourcing quality products and supporting customers throughout the inquiry and export process, wherever they are based."
        image="https://picsum.photos/seed/toyama-about-focus/1000/750"
        imageAlt="A Japanese street scene representing Toyama Motors' local market presence"
      />

      <CompanyStats />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Guides Us"
            heading="A straightforward approach to vehicle and machinery sourcing."
            supporting="Rather than operating as an online marketplace, Toyama Motors works directly with customers to understand their requirements before sourcing suitable vehicles or machinery in Japan."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Japan-based sourcing",
                text: "Direct access to the Japanese vehicle and machinery market.",
              },
              {
                title: "Customer requirements first",
                text: "Sourcing is guided by what each customer is actually looking for.",
              },
              {
                title: "New and used experience",
                text: "Comfortable working across both new and used vehicles.",
              },
              {
                title: "One point of contact",
                text: "Clear, professional communication from inquiry through export.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-red-motor pt-5">
                <h3 className="font-display font-semibold text-[15px] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-ink text-paper">
        <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight max-w-md">
            Want to know more about how we work?
          </h2>
          <div className="flex gap-3">
            <Button to="/company" variant="secondary" className="!border-paper/40 !text-paper hover:!bg-paper hover:!text-ink">
              Company Profile
            </Button>
            <Button to="/contact" variant="accent">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
