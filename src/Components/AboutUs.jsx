function AboutUs() {
    return (
      <div className="px-4 py-8 max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl  font-bold text-center mb-12 text-blue-600">Our Story</h1>
  
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/fam.jpg" // replace this path with your actual image path
              alt="Our Story"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
  
          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <p>
              {/* Placeholder text – replace this with your actual story */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.
              L
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutUs;
  