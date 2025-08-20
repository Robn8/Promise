import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const sliderImages = [
  "/IMG_2494.jpg",
  "/pic9.jpeg",
  "/hand1.jpg",
  "/about.jpg",
  "/pic4.jpg",
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        setFade(true);
      }, 1000); // fade duration
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Title */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 tracking-wide drop-shadow-sm">
          Promise 2 Papa
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Walking alongside caregivers with resources, support, and hope.
        </p>
      </div>

      {/* Image Slider */}
      <div className="relative mx-auto max-w-5xl h-[400px] rounded-2xl shadow-2xl overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slider ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex && fade ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

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

        {/* About Us */}
        <NavLink
          to="/aboutus"
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">About Us</h2>
          <p className="text-gray-600">
            Learn about our story and mission to support caregivers.
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
      </section>
    </div>
  );
}

export default HomePage;
