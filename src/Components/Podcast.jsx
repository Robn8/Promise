import Hero from "../Components/Hero";

function Podcast() {
    const episodes = [
      {
        title: "Navigating Senior Care Options",
        description: "An in-depth discussion on how to find the right care for your loved ones.",
        date: "May 2025",
        audioUrl: "#", // Replace with actual audio link
      },
      {
        title: "Talking with Caregivers",
        description: "Caregivers share their stories and tips from the field.",
        date: "April 2025",
        audioUrl: "#",
      },
      {
        title: "Understanding Home Medical Equipment",
        description: "A breakdown of what equipment is available and how to access it.",
        date: "March 2025",
        audioUrl: "#",
      },
    ];
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <Hero 
            title="🎙️ Our Podcast"
            subtitle="Stories, advice, and expert insights on caregiving, elder support, and healthcare topics."
            bgClass="bg-blue-600"
            textClass="text-white"
        />
  
        {/* Episode Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {episode.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{episode.date}</p>
              <p className="text-gray-700 mb-4">{episode.description}</p>
              <a
                href={episode.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Listen Now
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Podcast;
  