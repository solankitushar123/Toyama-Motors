import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Button from "../components/Button";

const faqs = [
  {
    q: "What does Toyama Motors do?",
    a: "Toyama Motors is a Japan-based business that sources and exports new and used vehicles and machinery for international customers, mainly focused on buying and selling used cars.",
  },
  {
    q: "Can I buy a vehicle directly through this website?",
    a: "No. This website is a corporate information site rather than an online store. To inquire about a vehicle or machinery, please contact us directly and our team will follow up with you.",
  },
  {
    q: "Does Toyama Motors handle machinery as well as vehicles?",
    a: "Yes. Alongside vehicle sourcing and export, Toyama Motors also sources and exports machinery from Japan.",
  },
  {
    q: "How does the export process work?",
    a: "Our process runs from initial inquiry through requirement understanding, sourcing, confirmation and preparation, to international export. See the Export Process page for details.",
  },
  {
    q: "How can I contact Toyama Motors?",
    a: "You can reach us by phone, telephone, fax, or email — all listed on our Contact page — or by submitting the contact form there.",
  },
  {
    q: "Where is Toyama Motors based?",
    a: "Toyama Motors is based in Toyama, Japan, and works with customers internationally.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="FAQ | Toyama Motors"
        description="Frequently asked questions about Toyama Motors, our vehicle and machinery sourcing, export process, and how to get in touch."
      />
      <PageHero
        eyebrow="FAQ"
        heading="Frequently Asked Questions"
        supporting="Common questions about Toyama Motors and how we work with international customers."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page max-w-2xl">
          <div className="divide-y divide-line border-t border-b border-line">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display font-medium text-[15px] tracking-tight">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                    style={{ display: "grid" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[14.5px] text-slate-muted leading-relaxed max-w-lg">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <p className="text-slate-muted mb-5">Still have a question?</p>
            <Button to="/contact" variant="accent" icon>
              Contact Toyama Motors
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
