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
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
        </div>
    );
}

export default CareReg;