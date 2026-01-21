import Hero from "./Hero";
import Footer from "./Footer";

function Veterans() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
      <Hero
        title="Veterans"
        subtitle="Support and resources for veterans and their families."
        bgClass="bg-blue-600"
        textClass="text-white"
      />
      <main className="flex-1">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Veterans Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Illinois VA */}
          <a
            href="https://www.va.gov/chicago-vet-center/locations/"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-8 text-center border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              Illinois VA Center
            </h3>
            <p className="text-gray-600">
              Find VA health care services, locations and resources across Illinois.
            </p>
            <div className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Visit Site
            </div>
          </a>

          {/* Indiana VA */}
          <a
            href="https://www.va.gov/indiana-health-care/locations/"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-8 text-center border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              Indiana VA Center
            </h3>
            <p className="text-gray-600">
              Explore VA health care services, facilities and support across Indiana.
            </p>
            <div className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Visit Site
            </div>
          </a>

          {/* VA Contact */}
          <a
            href="https://www.va.gov/contact-us/"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-8 text-center border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              VA Contact Page
            </h3>
            <p className="text-gray-600">
              Need help fast? Use the VA’s official contact options and support channels.
            </p>
            <div className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Contact VA
            </div>
          </a>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default Veterans;
