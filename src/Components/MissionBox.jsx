import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-cover bg-center">

      {/* Video Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          {/* Replace src with your video file or embed URL */}
          <video
            src="https://res.cloudinary.com/dnpu71stc/video/upload/v1767995065/P2P_v5_zwo4pb.mp4"
            controls
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

        </div>

        {/* Optional caption */}
        
      </section>

      {/* 3 Feature Boxes */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Resources */}
        <NavLink
          to="/resources"
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Resources</h2>
          <p className="text-gray-600">
            Explore tools, support groups, and caregiver connections.
          </p>
        </NavLink>

        {/* Types of Care */}
        <NavLink
          to="/typesofcare"
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Types of Care</h2>
          <p className="text-gray-600">
            Understand palliative and hospice care and how they can help.
          </p>
        </NavLink>

        {/* Contact Us */}
        <NavLink
          to="/contact"
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-gray-600">
          You are not alone on your caregiving journey.
          </p>
        </NavLink>
      </section>
    </div>
  );
}

export default HomePage;
