import SEO from "../components/SEO";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Toyama Motors" description="This page could not be found." />
      <section className="py-32 text-center">
        <div className="container-page">
          <p className="label-eyebrow mb-4">404</p>
          <h1 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="mt-4 text-slate-muted">
            The page you're looking for doesn't exist or has moved.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/" variant="accent" icon>
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
