function Resources() {
    return (
      <div className="px-4 py-8 max-w-6xl mx-auto space-y-20">
        {/* === Equipment Section === */}
        <section id="equipment">
          <h1 className="text-4xl font-bold text-center mb-12 underline text-blue-600">Equipment</h1>
  
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/table1.png"
                alt="Medical Equipment"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
  
            {/* Right: Text */}
            <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">Medical Equipment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
                nunc neque pellentesque massa, a sagittis libero dolor in risus.
              </p>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
            {/* Left: Text */}
            <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">Thrift Store Equipment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                Cras venenatis euismod malesuada. Mauris ut consequat erat. Duis vehicula, libero eget fermentum interdum,
                nunc neque pellentesque massa, a sagittis libero dolor in risus.
              </p>
            </div>
  
            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/table2.png"
                alt="Thrift Store Equipment"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* === Caregivers Section === */}
        <section id="care">
          <h1 className="text-4xl font-bold underline text-center mb-12 text-blue-600">Caregivers</h1>
  
          <div className="flex flex-col items-center gap-8">
            <div className="w-full md:w-[700px] text-lg text-gray-700 leading-relaxed">
              {/* Image */}
              <div className="w-full">
                <img
                  src="/table3.png"
                  alt="Caregivers"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
  
              {/* Text */}
              <p className="mt-8">
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
  
  export default Resources;
  