import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { company, navLinks } from "../data/company";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled || open
            ? "bg-paper/95 backdrop-blur-sm shadow-nav border-b border-line"
            : "bg-paper/70 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="container-page">
          <div className="flex h-[72px] items-center justify-between">
            <Logo size={38} />

            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-[13.5px] font-medium tracking-wide transition-colors ${
                      isActive ? "text-red-motor" : "text-ink/80 hover:text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button to="/contact" variant="accent" size="md">
                Contact Us
              </Button>
            </div>

            <button
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — rendered as a sibling of <header>, not a descendant.
          A backdrop-blur ancestor establishes a containing block for
          position:fixed elements, which would otherwise collapse this
          panel's height when nested inside the blurred header. */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-[72px] bottom-0 z-40 bg-paper overflow-y-auto transition-opacity duration-300 ease-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="container-page pb-8 pt-2 flex flex-col gap-1 border-t border-line"
          aria-label="Mobile"
        >
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
              className={({ isActive }) =>
                `py-3.5 text-[15px] font-medium border-b border-line/70 transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                } ${isActive ? "text-red-motor" : "text-ink"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <Button to="/contact" variant="accent" size="md" className="w-full">
              Contact Us
            </Button>
            <Button href={`tel:${company.phoneHref}`} variant="secondary" size="md" className="w-full">
              <Phone size={16} className="mr-1" /> Call {company.phone}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
