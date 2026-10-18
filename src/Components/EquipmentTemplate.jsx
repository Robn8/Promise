import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";

function EquipmentTemplate({
  heroTitle,
  heroSubtitle,
  chartSrc,
  chartAlt,
  description,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        bgClass="bg-gradient-to-br from-brand-sage via-brand-primary to-brand-olive"
        textClass="text-white"
      />

      {/* Back Button */}
      <div className="mx-auto mt-6 max-w-5xl px-4">
        <NavLink
          to="/resources"
          className="inline-block rounded-full bg-brand-primary px-4 py-2 font-medium text-white shadow transition hover:bg-brand-olive"
        >
          ← Back to Resources
        </NavLink>
      </div>

      {/* Content Section - Side by Side */}
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-16 md:flex-row">
        {/* Chart with click-to-enlarge */}
        <div
          className="animate-fadeIn relative w-full cursor-pointer md:w-1/2"
          onClick={() => setShowModal(true)}
        >
          <img
            src={chartSrc}
            alt={chartAlt}
            className="w-full rounded-lg shadow-xl transition hover:opacity-90"
          />

          <p className="mt-2 text-center text-sm text-brand-olive/70 md:text-left">
            Click chart to enlarge
          </p>
        </div>

        {/* Description */}
        <div className="animate-fadeIn delay-200 w-full text-lg leading-relaxed text-gray-700 md:w-1/2">
          <p>{description}</p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <img
            src={chartSrc}
            alt={`${chartAlt} Enlarged`}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default EquipmentTemplate;
