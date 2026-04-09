import { useState } from "react";
import Hero from "./Hero";
import Footer from "./Footer";

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
      <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function ResourceCard({
  title,
  description,
  href,
  buttonText = "Learn More",
  accent = "blue",
  external = false,
  onClick,
  isButton = false,
}) {
  const accentMap = {
    blue: {
      title: "text-blue-700",
      button: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-400",
    },
    green: {
      title: "text-green-700",
      button: "bg-green-600 hover:bg-green-700 focus:ring-green-400",
    },
    purple: {
      title: "text-purple-700",
      button: "bg-purple-600 hover:bg-purple-700 focus:ring-purple-400",
    },
  };

  const styles = accentMap[accent] || accentMap.blue;

  const baseCard =
    "group h-full rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl";

  if (isButton) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseCard} w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
      >
        <div className="flex h-full flex-col">
          <div>
            <h3 className={`mb-3 text-xl font-semibold ${styles.title}`}>{title}</h3>
            <p className="min-h-[72px] leading-7 text-gray-600">{description}</p>
          </div>

          <span
            className={`mt-6 inline-flex w-fit items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white transition ${styles.button}`}
          >
            View Chart
          </span>
        </div>
      </button>
    );
  }

  return (
    <div className={baseCard}>
      <div className="flex h-full flex-col">
        <div>
          <h3 className={`mb-3 text-xl font-semibold ${styles.title}`}>{title}</h3>
          <p className="min-h-[72px] leading-7 text-gray-600">{description}</p>
        </div>

        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={`mt-6 inline-flex w-fit items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.button}`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

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

      <main className="mx-auto max-w-6xl space-y-16 px-4 py-12 sm:px-6 sm:py-16 sm:space-y-20">
        <section id="equipment">
          <SectionHeader
            title="Medical Equipment"
            subtitle="Explore options for finding equipment through free programs, low-cost local sources, or direct purchase."
          />

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <ResourceCard
              title="Free"
              description="Discover places and programs that offer medical equipment at no cost to caregivers and patients."
              href="/equipment/free"
              accent="blue"
            />

            <ResourceCard
              title="Thrift Stores"
              description="Browse local thrift stores where affordable or gently used medical equipment may be available."
              href="/equipment/thrift"
              accent="green"
            />

            <ResourceCard
              title="For Purchase"
              description="Explore additional equipment providers and services available for purchase to support ongoing care needs."
              href="/equipment/purchase"
              accent="purple"
            />
          </div>
        </section>

        <section id="care">
          <SectionHeader
            title="Caregiving Support"
            subtitle="Find practical caregiver tools and community connections that can help families feel more supported and less alone."
          />

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <ResourceCard
              title="Caregivers"
              description="Find caregiver resources, providers, and helpful networks that support daily care needs."
              accent="blue"
              isButton
              onClick={() => setOpenModal("caregivers")}
            />

            <ResourceCard
              title="Support Groups"
              description="Explore support groups where caregivers can connect, share, and find encouragement."
              accent="blue"
              isButton
              onClick={() => setOpenModal("support-groups")}
            />
          </div>
        </section>

        <section id="legal-help">
          <SectionHeader
            title="Legal Help"
            subtitle="Learn about trusted legal professionals who may be able to help families navigating long-term care, estate, injury, or related concerns."
          />

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <ResourceCard
              title="Kelly Sabo"
              description="Kelly Sabo Gaden is a dedicated advocate for individuals and families affected by long-term care abuse, medical malpractice, birth injuries, and serious accidents."
              href="https://www.levinperconti.com/attorneys/kelly-sabo-gaden/"
              accent="blue"
              external
            />

            <ResourceCard
              title="Frank Ryan"
              description="Frank Ryan is an experienced attorney with decades of practice across real estate, family matters, probate and estates, personal injury, civil litigation, and more."
              href="https://www.attorneyfrankryan.com/"
              accent="blue"
              external
            />
          </div>
        </section>
      </main>

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