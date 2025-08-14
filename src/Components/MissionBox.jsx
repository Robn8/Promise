import { useEffect, useState } from 'react';

const sliderImages = [
  '/IMG_2494.jpg',
  '/pic9.jpeg',
  '/yoke.jpeg',
  '/pic7.png',
  '/about.jpg',
  '/pic4.jpg'
];

function MissionBox() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        setFade(true);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{ backgroundImage: `url('/hand1.jpg')` }}
    >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      


      {/* Content Card */}
      <div className="relative z-10 flex w-full max-w-5xl h-[450px] bg-white/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md border border-white/30">
        
        {/* Image Slider - LEFT (Flexible width) */}
        <div className="relative flex-1 h-full">
          {sliderImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slider ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex && fade ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Static Image - RIGHT (Fixed 350px) */}
        <div className="h-full w-[350px] flex-shrink-0">
          <img
            src="/pic3.png"
            alt="Mission"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default MissionBox;
