function Resources() {
    return (
      <div className="px-4 py-10 max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Equipment</h1>
  
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/table1.png" // image path
              alt="Our Story"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
  
          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <h1 className="text-4xl underline font-bold text-center mb-8 text-blue-600">Medical Equipment</h1>
            <p>
              {/* Placeholder text – replace this with your actual story */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-25">
  
          {/* Left: Text */}
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
          <h1 className="text-4xl underline font-bold text-center mb-8 text-blue-600">Thrift Stores</h1>
            <p>
              {/* Placeholder text – replace this with your actual story */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
              nunc neque pellentesque massa, a sagittis libero dolor in risus.
              
            </p>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/table2.png" // image path
              alt="Our Story"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </div>
    );
  }
  
  export default Resources;
  