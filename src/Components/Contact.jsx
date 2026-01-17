import { useState } from "react";
import Hero from "./Hero";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });

      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Contact Us"
        subtitle="We’d love to hear from you."
        bgClass="bg-blue-600"
        textClass="text-white"
      />

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {!submitted ? (
            <>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact"  />

                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    required
                    rows="6"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            /* THANK YOU STATE (same card) */
            <div className="py-16 text-center">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                Thank you for your submission
              </h2>
              <p className="text-gray-600">
                We’ve received your message and will be in touch soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;