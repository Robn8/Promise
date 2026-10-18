import Hero from "./Hero";
import Footer from "./Footer";

function Veterans() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      {/* Hero */}
      <Hero
        title="Veterans"
        subtitle="Support and resources for veterans and their families."
        bgClass="bg-gradient-to-br from-brand-sage via-brand-primary to-brand-olive"
        textClass="text-white"
      />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-4xl font-bold text-brand-olive">
            Veterans Help
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Illinois VA */}
            <a
              href="https://www.va.gov/chicago-vet-center/locations/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-2xl border border-brand-sage/30 bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold text-brand-olive">
                Illinois VA Center
              </h3>

              <p className="text-gray-600">
                Find VA health care services, locations and resources across Illinois.
              </p>

              <div className="mt-6 inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 font-medium text-white transition hover:bg-brand-olive">
                Visit Site
              </div>
            </a>

            {/* Indiana VA */}
            <a
              href="https://www.va.gov/indiana-health-care/locations/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-2xl border border-brand-sage/30 bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold text-brand-olive">
                Indiana VA Center
              </h3>

              <p className="text-gray-600">
                Explore VA health care services, facilities and support across Indiana.
              </p>

              <div className="mt-6 inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 font-medium text-white transition hover:bg-brand-olive">
                Visit Site
              </div>
            </a>

            {/* VA Contact */}
            <a
              href="https://www.va.gov/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-2xl border border-brand-sage/30 bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold text-brand-olive">
                VA Contact Page
              </h3>

              <p className="text-gray-600">
                Need help fast? Use the VA’s official contact options and support channels.
              </p>

              <div className="mt-6 inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 font-medium text-white transition hover:bg-brand-olive">
                Contact VA
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Veterans;
