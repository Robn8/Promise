import { useState } from "react";
import Hero from "./Hero";

function Resources() {
  const [openModal, setOpenModal] = useState(null); // "caregivers" | "support-groups" | null

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
      {/* Hero Section */}
      <Hero
        title="Helpful Resources"
        subtitle="Equipment, caregiver services, and community support for every step of the journey."
        bgClass="bg-blue-600"
        textClass="text-white"
      />

      <div className="max-w-6xl mx-auto px-4 space-y-32">
        {/* === Medical Equipment Section === */}
        <section id="equipment" className="py-10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
              Medical Equipment
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Free */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Free</h3>
                  <p className="text-gray-600 mb-6">
                    Discover places and programs that offer medical equipment at no cost to caregivers and patients.
                  </p>
                </div>
                <a
                  href="/equipment/free"
                  className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  Learn More
                </a>
              </div>

              {/* Thrift Stores */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition">
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Thrift Stores</h3>
                  <p className="text-gray-600 mb-6">
                    Browse local thrift stores where affordable or gently-used medical equipment may be available.
                  </p>
                </div>
                <a
                  href="/equipment/thrift"
                  className="mt-auto inline-block px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
                >
                  Learn More
                </a>
              </div>

              {/* For Purchase */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition">
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">For Purchase</h3>
                  <p className="text-gray-600 mb-6">
                    Explore various other resources, tools, or services that are available for purchase.
                  </p>
                </div>
                <a
                  href="/equipment/purchase"
                  className="mt-auto inline-block px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === Caregiving Support Section (NEW FLOW) === */}
        <section id="care" className="py-0 md:py-10">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
              Caregiving Support
            </h2>

            <div className="grid gap-5 md:gap-8 md:grid-cols-2">
              {/* Caregivers box */}
              <button
                type="button"
                onClick={() => setOpenModal("caregivers")}
                className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2 md:mb-3">
                    Caregivers
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    Find caregiver resources, providers, and helpful networks that support daily care needs.
                  </p>
                </div>
                <span className="mt-auto inline-block px-6 md:px-10 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                  View Chart
                </span>
              </button>

              {/* Support Groups box */}
              <button
                type="button"
                onClick={() => setOpenModal("support-groups")}
                className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2 md:mb-3">
                    Support Groups
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    Explore support groups where caregivers can connect, share, and feel less alone.
                  </p>
                </div>
                <span className="mt-auto inline-block px-6 md:px-10 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                  View Chart
                </span>
              </button>
            </div>
          </div>
        </section>


        {/* === Legal Help Section === */}
        <section id="legal-help" className="py-10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
              Legal Help
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Kelly Sabo */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Kelly Sabo</h3>
                  <p className="text-gray-600 mb-6">
                  Kelly Sabo Gaden is a dedicated advocate for individuals and families affected by long-term care abuse, medical malpractice, birth injuries, and serious accidents. Her work focuses on ensuring accountability for those harmed by neglect or misconduct.
                  </p>
                </div>
                <a
                  href="https://www.levinperconti.com/attorneys/kelly-sabo-gaden/" target ="blank"
                  className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  Learn More
                </a>
              </div>

              {/* Frank Ryan*/}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Frank Ryan</h3>
                  <p className="text-gray-600 mb-6">
                  Frank Ryan is a highly experienced and trusted attorney with over 36 years of legal practice across real estate and general law. His work spans many areas including family and domestic relations, probate and estates, personal injury, civil litigation and more.
                  </p>
                </div>
                <a
                  href="https://www.attorneyfrankryan.com/" target="blank"
                  className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* === Modal Popup (Chart) === */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold text-blue-700">{current.title}</h3>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                onClick={() => setOpenModal(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-4">
              <img
                src={current.img}
                alt={current.alt}
                className="w-full rounded-lg shadow-md"
              />
              <p className="text-gray-700">{current.text}</p>
              <p className="text-sm text-gray-500">
                Click outside the window to close.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resources;
