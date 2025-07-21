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

      <p className="italic text-center text-gray-600 mt-6">
        “To care for those who once cared for us is one of the highest honors in life.” — Tia Walker
      </p>

        {/* Palliative Care */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Palliative Care</h2>
            <p>
              Palliative care is specialized medical care for people living with serious illnesses. It focuses on providing relief from symptoms, pain, and stress, regardless of the diagnosis or stage of illness.
            </p>
            <p className="mt-4">
              The goal is to improve quality of life for both patients and families through an interdisciplinary, collaborative approach that includes physical, emotional, psychological, and spiritual support.
            </p>
            <p className="mt-4">
              Palliative care can be provided alongside curative treatment at any age and stage of illness. It offers an extra layer of support and has been shown to reduce re-hospitalizations and hospital costs.
            </p>
            <p className="mt-4 font-semibold text-gray-800">Common Conditions:</p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Frailty, recurrent falls</li>
              <li>Dementia, Parkinson’s Disease, ALS</li>
              <li>Cancer, COPD, CHF, liver or renal disease</li>
              <li>Chronic infections, wounds, fatigue, pain</li>
            </ul>
          </div>
        </div>

        {/* Hospice Care */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Hospice Care</h2>
            <p>
              Hospice care is designed for individuals with a terminal illness who have a life expectancy of 6 months or less if the disease runs its natural course. Its focus is on comfort and dignity during the final stages of life.
            </p>
            <p className="mt-4">
              Services include nursing, home health aides, chaplains, social workers, and volunteers — delivered at home, in hospitals, or dedicated hospice facilities.
            </p>
            <p className="mt-4 font-semibold text-gray-800">Levels of Hospice Care:</p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Routine home care</li>
              <li>General inpatient (GIP)</li>
              <li>Respite care for caregivers</li>
            </ul>
            <p className="mt-4 text-blue-600 font-semibold">All hospice care is palliative care, but not all palliative care is hospice.</p>
          </div>
        </div>

        {/* Barriers Section */}
        <div className="text-lg text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Barriers to Care</h2>
          <p>
            Access to palliative and hospice care is often limited by misconceptions, lack of training, and cultural or religious beliefs. Common myths include:
          </p>
          <ul className="list-disc ml-6 mt-4 text-gray-600">
            <li>“Palliative care is only for cancer patients”</li>
            <li>“Hospice means giving up”</li>
            <li>“Opioids always lead to addiction”</li>
            <li>“It’s only for the dying”</li>
          </ul>
          <p className="mt-4">
            Education, communication, and collaboration are key to overcoming these barriers and ensuring patients and families get the support they need.
          </p>
        </div>

        {/* Referral Process */}
        <div className="text-lg text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Referral Process</h2>
          <p>
            Referrals to palliative or hospice care typically involve the following steps:
          </p>
          <ul className="list-disc ml-6 mt-4 text-gray-600">
            <li>Discuss with patient and family</li>
            <li>Obtain MD or NP order</li>
            <li>Fax referral documents (face sheet, medications, progress notes)</li>
            <li>Intake team reviews info, verifies insurance, and follows up with patient/family</li>
          </ul>
        </div>

        {/* PDF Download Link */}
        <div className="text-center mt-20">
          <a
            href="public/PalliativeCare.pptx .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Download Full PDF Presentation
          </a>
        </div>
      </section>
    </div>
  );
}

export default TypesOfCare;
