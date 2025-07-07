import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Hero from "./Hero";

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero section (full-width) */}
      <Hero
        title="Frequently Asked Questions"
        subtitle="Get quick answers to the most common inquiries from our community."
        bgClass="bg-blue-600"
        textClass="text-white"
      />

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Animated answer area */}
              <div
                className={`px-6 pb-4 text-gray-600 text-sm transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FAQ;
