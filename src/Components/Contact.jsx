import Hero from "./Hero";

function Contact() {
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

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-5"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot (hidden) */}
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
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="6"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-sm hover:shadow-md"
            >
              Send Message
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Your message will be delivered securely.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;