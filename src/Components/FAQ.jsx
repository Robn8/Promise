import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Hero from "./Hero";
import Footer from "./Footer";

function FAQ() {
  const faqs = [
    {
      question: "What types of care services do you offer?",
      answer:
        "We provide information on a wide range of care options, including in-home care, assisted living, respite care, and hospice support.",
    },
    {
      question: "How can I find a local caregiver?",
      answer:
        "Visit our Resources page and check the 'Caregivers' section for trusted providers and caregiver networks near you.",
    },
    {
      question: "Are your services free to use?",
      answer:
        "Yes, all our informational services and community support tools are completely free to use.",
    },
    {
      question: "Can I contribute to your support groups?",
      answer:
        "Absolutely. We welcome personal stories, resources, and experiences that help others in the caregiving community.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      {/* Hero Section */}
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common inquiries from our community."
        bgClass="bg-gradient-to-br from-brand-sage via-brand-primary to-brand-olive"
        textClass="text-white"
      />

      <main className="flex-1">
        {/* FAQ Content */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-brand-sage/30 bg-white shadow-md transition duration-300 hover:shadow-lg"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-brand-cream/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-primary"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-brand-olive">
                    {faq.question}
                  </span>

                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-brand-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-brand-primary" />
                  )}
                </button>

                
              {/* Animated answer area */}
              <div
                className={`px-6 pb-4 text-sm leading-7 text-gray-600 transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p>{faq.answer}</p>

                {/* Donation Link - Last FAQ Only */}
                {index === faqs.length - 1 && (
                  <NavLink
                    to="/donations"
                    className="mt-4 inline-flex items-center rounded-lg bg-brand-primary px-4 py-2.5 font-medium text-white shadow-sm transition hover:bg-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-sage focus:ring-offset-2"
                  >
                    Learn More About Donating →
                  </NavLink>
                )}
              </div>

              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer showDisclaimer />
    </div>
  );
}

export default FAQ;
