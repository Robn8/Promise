import Hero from "./Hero";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full-width Hero Section */}
      <Hero
        title="Our Story"
        subtitle="How we got to where we are today."
        bgClass="bg-blue-600"
        textClass="text-white"
      />

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/fam.jpg"
              alt="Our Story"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.

              <br /><br />

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.

              <br /><br />

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
