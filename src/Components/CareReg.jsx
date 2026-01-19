import Hero from "./Hero";

function CareReg() {
    return (
        <div className="min-h-screen bg-gray-50">
              {/* Hero */}
              <Hero
                title="Coming Soon"
                subtitle="'Come to me, all you who are weary and burdened, and I will give you rest.' Matthew 11:28"
                bgClass="bg-blue-600"
                textClass="text-white"
              />

            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
                Caregiver's Registry
                </h2>
                <p className="text-center">
                Part of our mission is to nourish and support caregivers. 
                Through our upcoming Caregiver Registry, we hope to connect with you and learn more about your caregiving journey. 
                You will have the opportunity to share your caregiving needs, whether they are personal support needs or supplies that would help you care for your loved one.
                </p>
                <br />
                <p className="text-center">
                Please check back soon for a personal opportunity to apply for a caregiving grant designed to help support you and ease the demands of caregiving. 
                You are not alone. We are here to walk alongside you.
                </p>
            </section>
        </div>
    );
}

export default CareReg;