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
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FAQ;
  