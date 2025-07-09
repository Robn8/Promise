import Hero from "./Hero";

function TypesOfCare() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero
        title="Types of Care"
        subtitle="Understanding Palliative and Hospice Care"
        bgClass="bg-blue-600"
        textClass="text-white"
      />

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* Palliative Care Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Palliative Care</h2>
            <p>
              Palliative care is specialized medical care focused on providing relief from the symptoms, pain, and
              stress of serious illnesses—no matter the diagnosis. It is appropriate at any age and any stage of illness
              and can be provided alongside curative treatment.
            </p>
            <br />
            <p>
              The goal is to improve quality of life for both the patient and their family. Palliative care teams work
              collaboratively with doctors to offer support, enhance comfort, and address emotional, psychological, and
              spiritual needs.
            </p>
          </div>

          
        </div>

        {/* Hospice Care Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Hospice Care</h2>
            <p>
              Hospice care is designed for individuals facing a life-limiting illness, when curative treatment is no longer
              effective or desired. Its focus is on comfort, dignity, and quality of life during the final stages of life.
            </p>
            <br />
            <p>
              Hospice teams offer physical, emotional, and spiritual support to both patients and their families—usually
              in the home, but also in hospitals or dedicated hospice facilities. The care is holistic, compassionate, and
              family-centered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TypesOfCare;
