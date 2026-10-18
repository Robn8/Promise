import { useState } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Checkmark from "./Checkmark";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <Hero
        title="Contact Us"
        subtitle="We’d love to hear from you."
        bgClass="bg-gradient-to-br from-brand-sage via-brand-primary to-brand-olive"
        textClass="text-white"
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-2xl border border-brand-sage/30 bg-white p-8 shadow-lg">
          {!submitted ? (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1 block text-sm font-medium text-brand-olive"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-brand-sage/40 px-4 py-2 text-gray-800 transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1 block text-sm font-medium text-brand-olive"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-brand-sage/40 px-4 py-2 text-gray-800 transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-sm font-medium text-brand-olive"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can we help?"
                  required
                  rows={6}
                  className="w-full rounded-lg border border-brand-sage/40 px-4 py-2 text-gray-800 transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-3 font-medium text-white shadow transition hover:bg-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-sage focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          ) : (
            /* Thank You State */
            <div className="py-16 text-center">
              <Checkmark />

              <h2 className="mb-4 text-3xl font-bold text-brand-olive">
                Thank you for your submission
              </h2>

              <p className="text-gray-600">
                We’ve received your message and will be in touch soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
