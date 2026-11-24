import { useState } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import ActionCard from "./ActionCard";

function Resources() {
  const [openModal, setOpenModal] = useState(null);

  const modalContent = {
    caregivers: {
      title: "Caregivers",
      img: "/careTable.png",
      alt: "Caregivers Chart",
      text:
        "This chart provides a quick overview of caregiver resources, services, and support options available to families.",
    },
    "support-groups": {
      title: "Support Groups",
      img: "/supportTable.png",
      alt: "Support Groups Chart",
      text:
        "This chart highlights support groups and community resources where caregivers can connect, share, and find encouragement.",
    },
  };

  const current = openModal ? modalContent[openModal] : null;

  return (
    <div className="min-h-screen bg-brand-cream">
      <Hero
        title="Helpful Resources"
        subtitle="Equipment, caregiver services, legal guidance, and support for every step of the journey."
        bgClass="bg-gradient-to-br from-brand-sage via-brand-primary to-brand-olive"
        textClass="text-white"
      />

      <main>
        <Section className="space-y-16 sm:space-y-20">
          {/* Medical Equipment */}
          <div id="equipment">
            <SectionHeader
              title="Medical Equipment"
              subtitle="Explore options for finding equipment through free programs, low-cost local sources, or direct purchase."
            />

            <div className="grid gap-6 text-center sm:gap-8 md:grid-cols-3">
              <ActionCard
                title="Free"
                description="Discover places and programs that offer medical equipment at no cost to caregivers and patients."
                href="/equipment/free"
                accent="primary"
              />

              <ActionCard
                title="Thrift Stores"
                description="Browse local thrift stores where affordable or gently used medical equipment may be available."
                href="/equipment/thrift"
                accent="primary"
              />

              <ActionCard
                title="For Purchase"
                description="Explore additional tools, equipment, and services available for purchase to support ongoing care needs."
                href="/equipment/purchase"
                accent="primary"
              />
            </div>
          </div>

          {/* Caregiving Support */}
          <div id="care">
            <SectionHeader
              title="Caregiving Support"
              subtitle="Find practical resources, community connections, and emotional and spiritual guidance to support families throughout their caregiving journey."
            />

            <div className="grid gap-6 text-center sm:gap-8 md:grid-cols-2">
              {/* Caregivers and Support Groups */}
              <Card className="h-full text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-full flex-col">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-brand-olive">
                      Caregivers and Support Groups
                    </h3>

                    <p className="min-h-[72px] leading-7 text-gray-600">
                      Find caregiver resources, providers, and support groups
                      where families can connect, share experiences, and find
                      encouragement.
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap justify-center gap-3 pt-6">
                    <button
                      type="button"
                      onClick={() => setOpenModal("caregivers")}
                      className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-sage focus:ring-offset-2"
                    >
                      Caregiver Resources
                    </button>

                    <button
                      type="button"
                      onClick={() => setOpenModal("support-groups")}
                      className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-sage focus:ring-offset-2"
                    >
                      Support Groups
                    </button>
                  </div>
                </div>
              </Card>

              {/* Emotional and Spiritual Support */}
              <Card className="h-full text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-full flex-col">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-brand-olive">
                      Emotional and Spiritual Support
                    </h3>

                    <p className="min-h-[72px] leading-7 text-gray-600">
                      Discover resources that offer comfort, emotional guidance,
                      spiritual encouragement, and a sense of peace for
                      caregivers and their loved ones.
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap justify-center gap-3 pt-6">
                    <a
                      href="https://www.theheartofthecaregiver.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-sage focus:ring-offset-2"
                    >
                      Learn More
                    </a>

                    <a
                      href="https://www.theheartofthecaregiver.com/events/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-sage focus:ring-offset-2"
                    >
                      Events
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Legal Help */}
          <div id="legal-help">
            <SectionHeader
              title="Legal Help"
              subtitle="Learn about trusted legal professionals who may be able to help families navigating long-term care, estate, injury, or related concerns."
            />

            <div className="grid gap-6 text-center sm:gap-8 md:grid-cols-2">
              <ActionCard
                title="Kelly Sabo"
                description="Kelly Sabo Gaden is a dedicated advocate for individuals and families affected by long-term care abuse, medical malpractice, birth injuries, and serious accidents."
                href="https://www.ksg-law.com"
                accent="primary"
                external
              />

              <ActionCard
                title="Frank Ryan"
                description="Frank Ryan is an experienced attorney with decades of practice across real estate, family matters, probate and estates, personal injury, civil litigation, and more."
                href="tel:+17086339600"
                buttonText="Call Frank Ryan"
                accent="primary"
              />
            </div>
          </div>
        </Section>
      </main>

      {/* Modal */}
      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-brand-sage/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center border-b border-brand-sage/30 px-12 py-4">
              <h3 className="text-center text-lg font-bold text-brand-olive sm:text-xl">
                {current.title}
              </h3>

              <button
                type="button"
                className="absolute right-4 rounded-md p-1 text-brand-olive transition hover:bg-brand-cream hover:text-brand-forest"
                onClick={() => setOpenModal(null)}
                aria-label="Close"
              >
                <span className="text-2xl leading-none">×</span>
              </button>
            </div>

            <div className="space-y-4 p-4 text-center sm:p-6">
              {current.img && (
                <img
                  src={current.img}
                  alt={current.alt}
                  className="w-full rounded-xl border border-brand-sage/30 shadow-sm"
                />
              )}

              <p className="leading-7 text-gray-700">
                {current.text}
              </p>

              <p className="text-sm text-brand-olive/70">
                Tap or click outside the window to close.
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer showDisclaimer />
    </div>
  );
}

export default Resources;