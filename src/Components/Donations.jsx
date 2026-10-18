import Hero from "./Hero";
import Footer from "./Footer";

function Donations() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Hero
        title="Donations"
        subtitle="Support families and caregivers with practical resources, compassion, and hope."
        bgClass="bg-gradient-to-br from-brand-sage via-brand-primary to-brand-olive"
        textClass="text-white"
      />

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand-sage/30">
          <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
              Give with Purpose
            </p>

            <h2 className="text-center text-2xl font-bold text-brand-olive sm:text-3xl">
              Every donation helps us support caregivers and families
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-gray-700 sm:text-lg">
              Promise 2 Papa was created from lived experience and a deep desire to
              make caregiving feel less overwhelming. Your support helps us share
              resources, connect families with guidance, and continue building a
              place of comfort, clarity, and community.
            </p>

            {/* Donation Impact Cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-brand-cream/60 p-6 ring-1 ring-brand-sage/30">
                <h3 className="text-lg font-semibold text-brand-olive">
                  Caregiver Resources
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Help us expand access to practical information, tools, and
                  support for those caring for loved ones.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-cream/60 p-6 ring-1 ring-brand-sage/30">
                <h3 className="text-lg font-semibold text-brand-olive">
                  Community Support
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Your donation helps strengthen a space where families can feel
                  seen, supported, and less alone.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-cream/60 p-6 ring-1 ring-brand-sage/30">
                <h3 className="text-lg font-semibold text-brand-olive">
                  Future Growth
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Support the continued development of Promise 2 Papa so we can
                  serve more caregivers in meaningful ways.
                </p>
              </div>
            </div>

            {/* Donation Call to Action */}
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-brand-sage via-brand-primary to-brand-olive px-6 py-8 text-center text-white shadow-lg">
              <h3 className="text-xl font-bold sm:text-2xl">
                Make a Donation
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                Thank you for helping us turn love, loss, and lived experience
                into support for others.
              </p>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-cream px-6 py-3 font-semibold text-brand-olive shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-brand-primary"
                >
                  Contact Us About Giving
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer showDisclaimer />
    </div>
  );
}

export default Donations;
