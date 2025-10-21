import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically import all images with IMG_ prefix from src/assets folder
const imageModules = import.meta.glob("../assets/IMG_*", {
  eager: true,
  as: "url",
});
const images =
  Object.keys(imageModules).length > 0
    ? (Object.values(imageModules) as string[])
    : ["/assets/image1.jpg", "/assets/image2.jpg", "/assets/image3.jpg"];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Carousel Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`Birthday moment ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center z-10">
        <h1
          className="text-2xl md:text-3xl font-bold italic text-white text-center px-4"
          style={{
            textShadow:
              "3px 3px 10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 0, 0, 0.5)",
          }}>
          Happy Birthday, my Love 💖
        </h1>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-2/3 lg:top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-3 transition-all backdrop-blur-sm"
        aria-label="Previous image">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-2/3 lg:top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-3 transition-all backdrop-blur-sm"
        aria-label="Next image">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
