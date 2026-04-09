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
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Helpful Resources"
        subtitle="Equipment, caregiver services, legal guidance, and support for every step of the journey."
        bgClass="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
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

            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <ActionCard
                title="Free"
                description="Discover places and programs that offer medical equipment at no cost to caregivers and patients."
                href="/equipment/free"
                accent="blue"
              />

              <ActionCard
                title="Thrift Stores"
                description="Browse local thrift stores where affordable or gently used medical equipment may be available."
                href="/equipment/thrift"
                accent="green"
              />

              <ActionCard
                title="For Purchase"
                description="Explore additional tools, equipment, and services available for purchase to support ongoing care needs."
                href="/equipment/purchase"
                accent="purple"
              />
            </div>
          </div>

          {/* Caregiving Support */}
          <div id="care">
            <SectionHeader
              title="Caregiving Support"
              subtitle="Find practical caregiver tools and community connections that can help families feel more supported and less alone."
            />

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-full flex-col">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-blue-700">
                      Caregivers
                    </h3>
                    <p className="min-h-[72px] leading-7 text-gray-600">
                      Find caregiver resources, providers, and helpful networks
                      that support daily care needs.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenModal("caregivers")}
                    className="mt-6 inline-flex w-fit items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  >
                    View Chart
                  </button>
                </div>
              </Card>

              <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-full flex-col">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-blue-700">
                      Support Groups
                    </h3>
                    <p className="min-h-[72px] leading-7 text-gray-600">
                      Explore support groups where caregivers can connect, share,
                      and find encouragement.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenModal("support-groups")}
                    className="mt-6 inline-flex w-fit items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  >
                    View Chart
                  </button>
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

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <ActionCard
                title="Kelly Sabo"
                description="Kelly Sabo Gaden is a dedicated advocate for individuals and families affected by long-term care abuse, medical malpractice, birth injuries, and serious accidents."
                href="https://www.levinperconti.com/attorneys/kelly-sabo-gaden/"
                accent="blue"
                external
              />

              <ActionCard
                title="Frank Ryan"
                description="Frank Ryan is an experienced attorney with decades of practice across real estate, family matters, probate and estates, personal injury, civil litigation, and more."
                href="https://www.attorneyfrankryan.com/"
                accent="blue"
                external
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
            className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6">
              <h3 className="text-lg font-bold text-blue-700 sm:text-xl">
                {current.title}
              </h3>
              <button
                className="rounded-md p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                onClick={() => setOpenModal(null)}
                aria-label="Close"
              >
                <span className="text-2xl leading-none">×</span>
              </button>
            </div>

            <div className="space-y-4 p-4 sm:p-6">
              <img
                src={current.img}
                alt={current.alt}
                className="w-full rounded-xl border border-gray-200 shadow-sm"
              />
              <p className="leading-7 text-gray-700">{current.text}</p>
              <p className="text-sm text-gray-500">
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