import { useEffect, useState } from 'react';

const sliderImages = [
  '/IMG_2494.jpg',  
  '/pic9.jpeg',
  '/yoke.jpeg',
  '/pic7.png',
  '/pic4.jpg'
];

function MissionBox() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        setFade(true); // Fade in new image
      }, 2000); // Match this to the fade-out duration
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-10"
      style={{ backgroundImage: `url('/pic2.png')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-sm"></div>

      {/* Card Content */}
      <div className="relative z-10 mt-15 flex flex-row w-[800px] h-[425px] rounded-lg shadow-md overflow-hidden">
        {/* Image Slider Area */}
        <div className="flex-2 relative w-full h-full">
          {sliderImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slider ${index}`}
              className={`absolute inset-0 w-full h-full object-center transition-opacity duration-5000 ease-in-out ${
                index === currentIndex && fade ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Static Right Side */}
        <div className="flex-1">
          <img src="pic3.png" alt="Image 2" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default MissionBox;
