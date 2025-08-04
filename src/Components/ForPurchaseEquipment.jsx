import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";

function ForPurchaseEquipment() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero
        title="For Purchase Medical Equipment"
        subtitle="Explore retail and supplier options for purchasing medical equipment"
        bgClass="bg-blue-600"
        textClass="text-white"
      />

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <NavLink
          to="/resources"
          className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          ← Back to Resources
        </NavLink>
      </div>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Chart */}
        <div
          className="relative cursor-pointer animate-fadeIn w-full md:w-1/2"
          onClick={() => setShowModal(true)}
        >
          <img
            src="/t3.png"
            alt="For Purchase Equipment Chart"
            className="rounded-lg shadow-xl w-full hover:opacity-90 transition"
          />
          <p className="text-sm text-gray-500 mt-2 text-center md:text-left">
            Click chart to enlarge
          </p>
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed animate-fadeIn delay-200">
          <p>
            This chart outlines medical equipment suppliers where items can be purchased outright. These resources are best
            suited for long-term care solutions or for individuals who require specialized or brand-new equipment. Purchasing 
            ensures the highest quality, warranty options, and reliable customer support.
          </p>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <img
            src="/t3.png"
            alt="For Purchase Equipment Chart Enlarged"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default ForPurchaseEquipment;
