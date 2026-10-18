import Hero from "./Hero";
import Footer from "./Footer";

function SectionCard({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-sage/30 sm:p-8 ${className}`}
    >
      <h2 className="mb-4 text-2xl font-bold text-brand-olive sm:text-3xl">
        {title}
      </h2>

      <div className="space-y-4 text-base leading-8 text-gray-700 sm:text-lg">
        {children}
      </div>
    </div>
  );
}

function TypesOfCare() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Hero
        title="Types of Care"
        subtitle="Understanding palliative care, hospice care, and support options for families at home."
        bgClass="bg-gradient-to-br from-brand-sage via-brand-primary to-brand-olive"
        textClass="text-white"
      />

      <section className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:space-y-12 sm:px-6 sm:py-16">
        <p className="mx-auto max-w-3xl text-center italic text-brand-olive/80">
          “To care for those who once cared for us is one of the highest honors in life.” — Tia Walker
        </p>

        {/* Palliative Care */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-sage/30 sm:p-8">
          <div className="flex flex-col items-start gap-8 md:flex-row lg:gap-12">
            <div className="w-full md:w-2/3">
              <h2 className="mb-4 text-2xl font-bold text-brand-olive sm:text-3xl">
                Palliative Care
              </h2>

              <div className="space-y-4 text-base leading-8 text-gray-700 sm:text-lg">
                <p>
                  Palliative care is specialized medical care for people living with serious
                  illness. It focuses on relieving symptoms, pain, and stress, regardless of
                  diagnosis or stage of illness.
                </p>

                <p>
                  The goal is to improve quality of life for both patients and families through
                  a team-based approach that may include physical, emotional, psychological,
                  and spiritual support.
                </p>

                <p>
                  Palliative care can be provided alongside curative treatment at any age and
                  at any stage of illness. It offers an added layer of support and can help
                  families better manage care decisions over time.
                </p>

                <div>
                  <h3 className="mb-2 font-semibold text-brand-olive">
                    Common conditions
                  </h3>

                  <ul className="list-disc space-y-1 pl-5 text-gray-600">
                    <li>Frailty and recurrent falls</li>
                    <li>Dementia, Parkinson’s disease, and ALS</li>
                    <li>Cancer, COPD, CHF, liver disease, or renal disease</li>
                    <li>Chronic infections, wounds, fatigue, and pain</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:w-1/3">
              <img
                src="/drpic1.svg"
                alt="Doctor explaining palliative care"
                className="mx-auto h-auto w-full max-w-xs object-contain lg:max-w-sm"
              />
            </div>
          </div>
        </div>

        {/* Hospice + Home Health + Skilled Nursing */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SectionCard title="Hospice Care">
            <p>
              Hospice care is designed for individuals with a terminal illness who have a life
              expectancy of about 6 months or less if the disease follows its natural course.
              Its focus is on comfort, dignity, and support during the final stage of life.
            </p>

            <p>
              Services may include nursing, home health aides, chaplains, social workers,
              and volunteers. Care can be delivered at home, in a hospital, or in a dedicated
              hospice setting depending on the family’s needs.
            </p>

            <div>
              <h3 className="mb-2 font-semibold text-brand-olive">
                Levels of hospice care
              </h3>

              <ul className="list-disc space-y-1 pl-5 text-gray-600">
                <li>Routine home care</li>
                <li>General inpatient care (GIP)</li>
                <li>Respite care for caregivers</li>
              </ul>
            </div>

            <p className="font-semibold text-brand-primary">
              All hospice care is palliative care, but not all palliative care is hospice.
            </p>
          </SectionCard>

          <SectionCard title="Home Health Care & Skilled Nursing">
            <p>
              Home health care and skilled nursing can also play an important role in helping
              families care for loved ones safely and comfortably. These services are often
              part of the bigger picture when someone needs support at home but may not yet
              be ready for hospice.
            </p>

            <p>
              Home health care may include nursing visits, therapy services, medication
              support, wound care, and help after a hospital stay. It is often short-term and
              focused on recovery, stability, and preventing complications.
            </p>

            <p>
              Skilled nursing refers to a higher level of medical care provided by licensed
              professionals, whether in the home, a rehabilitation setting, or a skilled
              nursing facility. This can be especially important when someone has complex
              medical needs, ongoing monitoring, or frequent changes in condition.
            </p>

            <p>
              On this site, these types of care fit alongside palliative and hospice care as
              part of a family’s caregiving journey. Understanding the differences can help
              caregivers ask better questions, plan ahead, and find the right support at the
              right time.
            </p>
          </SectionCard>
        </div>

        {/* Barriers */}
        <SectionCard title="Barriers to Care">
          <p>
            Access to palliative and hospice care is often limited by misconceptions, lack of
            training, and cultural or religious beliefs.
          </p>

          <div>
            <h3 className="mb-2 font-semibold text-brand-olive">
              Common myths
            </h3>

            <ul className="list-disc space-y-1 pl-5 text-gray-600">
              <li>“Palliative care is only for cancer patients”</li>
              <li>“Hospice means giving up”</li>
              <li>“Opioids always lead to addiction”</li>
              <li>“It’s only for the dying”</li>
            </ul>
          </div>

          <p>
            Education, communication, and collaboration are key to overcoming these barriers
            and making sure patients and families get the support they need.
          </p>
        </SectionCard>

        {/* Referral Process */}
        <SectionCard title="Referral Process">
          <p>
            Referrals to palliative or hospice care often include a few common steps:
          </p>

          <ul className="list-disc space-y-1 pl-5 text-gray-600">
            <li>Discuss care goals with the patient and family</li>
            <li>Obtain an order from an MD or NP</li>
            <li>Send referral documents such as a face sheet, medication list, and progress notes</li>
            <li>Allow the intake team to review information, verify insurance, and follow up</li>
          </ul>
        </SectionCard>

        {/* Download */}
        <div className="pt-4 text-center">
          <a
            href="/PalliativeCare.pptx .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-6 py-3 font-semibold text-white shadow-md transition hover:bg-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-sage focus:ring-offset-2"
          >
            Download Full PDF Presentation
          </a>
        </div>
      </section>

      <Footer showDisclaimer />
    </div>
  );
}

export default TypesOfCare;
