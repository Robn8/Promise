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

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-32">
        {/* === Equipment Section === */}
        <section id="equipment" className="space-y-16">
          <h2 className="text-4xl font-bold text-center text-blue-600">Medical Equipment</h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <img
                src="/table1.png"
                alt="Medical Equipment"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
              <p>
                Access to durable medical equipment can make caregiving easier and safer. We provide recommendations for beds,
                wheelchairs, walkers, and other tools that support mobility, comfort, and independence at home.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="w-full md:w-1/2">
              <img
                src="/table2.png"
                alt="Thrift Store Equipment"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
              <p>
                You can often find affordable or even free equipment through local thrift stores, nonprofits, and lending
                libraries. These resources help reduce the financial burden for families caring for loved ones.
              </p>
            </div>
          </div>
        </section>

        {/* === Caregivers Section === */}
        <section id="care" className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-blue-600">Caregiver Support</h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
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
        <section id="support-groups" className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-blue-600">Support Groups</h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <img
                src="/table4.png"
                alt="Support Groups"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
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
