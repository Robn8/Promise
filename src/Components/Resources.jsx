import Hero from "./Hero";

function Resources() {
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
        {/* Medical Equipment Section */}
        <section id="equipment" className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Medical Equipment
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Free */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
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
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
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

              {/* Misc. */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
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


        {/* === Caregivers Section === */}
        <section id="care" className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-blue-700">Caregiver Support</h2>

          <div className="flex flex-col md:flex-row items-center gap-10 mb-0">
            <div className="w-full md:w-1/2">
              <img
                src="/table3.png"
                alt="Caregivers"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
              <p>
                Finding the right caregiver can transform the experience of at-home care. Explore our network of trusted
                local professionals, from home health aides to companions who provide emotional support and help with daily tasks.
              </p>
            </div>
          </div>
        </section>

        {/* === Support Groups Section === */}
        <section id="support-groups" className="space-y-12 py-20">
          <h2 className="text-4xl font-bold text-center text-blue-600">Support Groups</h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <img
                src="/table4.png"
                alt="Support Groups"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-lg text-gray-700  leading-relaxed">
              <p>
                You're not alone. Support groups offer a place to share experiences, ask questions, and find strength in
                community. Whether in-person or virtual, these groups can be a vital resource for caregivers and families alike.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resources;
