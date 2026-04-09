import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Card from "./Card";

function HomePage() {
  const featureCards = [
    {
      title: "Resources",
      description:
        "Explore tools, support groups, and caregiver connections designed to help families feel more supported.",
      to: "/resources",
    },
    {
      title: "Types of Care",
      description:
        "Understand palliative care, hospice care, and other support options that may help along the journey.",
      to: "/typesofcare",
    },
    {
      title: "Contact Us",
      description:
        "Reach out for support, questions, or guidance. You are not alone on your caregiving journey.",
      to: "/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Support for the caregiving journey"
        subtitle="Practical resources, compassionate guidance, and hope for families caring for loved ones."
        bgClass="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
        textClass="text-white"
      >
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NavLink
            to="/resources"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition hover:bg-gray-100"
          >
            Explore Resources
          </NavLink>
          <NavLink
            to="/aboutus"
            className="inline-flex items-center justify-center rounded-xl border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Our Story
          </NavLink>
        </div>
      </Hero>

      <main>
        {/* Video Section */}
        <Section className="pt-6 sm:pt-10">
          <SectionHeader
            title="Our Ministry in Motion"
            subtitle="Learn more about Promise 2 Papa and the heart behind the support we hope to provide families and caregivers."
          />

          <Card className="overflow-hidden p-0 shadow-xl">
            <div className="relative aspect-video w-full bg-black">
              <video
                src="https://res.cloudinary.com/dnpu71stc/video/upload/v1768610487/P2P_v6_hdctaq.mp4"
                autoPlay
                controls
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>

          </Card>
        </Section>

        {/* Feature Boxes */}
        <Section className="pt-0">
          <SectionHeader
            title="How We Can Help"
            subtitle="Whether you are looking for guidance, care information, or community support, we want to help you find the next step."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featureCards.map((item) => (
              <NavLink key={item.to} to={item.to} className="group block h-full">
                <Card className="flex h-full flex-col text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

                  <h2 className="mb-4 text-2xl font-bold text-blue-600">
                    {item.title}
                  </h2>

                  <p className="leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-flex items-center justify-center text-sm font-semibold text-indigo-600 transition group-hover:text-purple-700">
                    Learn More →
                  </span>
                </Card>
              </NavLink>
            ))}
          </div>
        </Section>

        {/* Closing Support Section */}
        <Section className="pt-0">
          <div className="rounded-3xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-gray-200 sm:px-8 sm:py-12">
            <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl">
              You Are Not Alone
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Caregiving can feel overwhelming, especially when it begins
              unexpectedly. Promise 2 Papa exists to walk alongside families with
              encouragement, practical resources, and hope through every stage of
              the journey.
            </p>

            <div className="mt-8">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Connect With Us
              </NavLink>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;