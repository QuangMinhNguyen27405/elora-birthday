import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import image from "../assets/image.png";

export default function InvitationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Floating cow icons animation
  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 10, -10, 0],
  };

  const floatingTransition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <section
      id="invitation"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background with overlay - Using a placeholder gradient, user can add actual restaurant image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating cow icons around edges */}
      <motion.div
        animate={floatingAnimation}
        transition={floatingTransition}
        className="absolute top-20 left-10 text-5xl hidden md:block z-10"
        style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}>
        🐄
      </motion.div>

      <motion.div
        animate={floatingAnimation}
        transition={{ ...floatingTransition, delay: 0.5 }}
        className="absolute top-40 right-10 text-6xl hidden md:block z-10"
        style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}>
        🐄
      </motion.div>

      <motion.div
        animate={floatingAnimation}
        transition={{ ...floatingTransition, delay: 1 }}
        className="absolute bottom-20 left-20 text-5xl hidden md:block z-10"
        style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}>
        🐄
      </motion.div>

      <motion.div
        animate={floatingAnimation}
        transition={{ ...floatingTransition, delay: 1.5 }}
        className="absolute bottom-32 right-16 text-6xl hidden md:block z-10"
        style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))" }}>
        🐄
      </motion.div>

      {/* Sparkle/heart particles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 text-3xl z-10">
        ✨
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 text-3xl z-10">
        💫
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 text-3xl z-10">
        ❤️
      </motion.div>

      {/* Invitation Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-2xl w-full bg-white/70 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-pink-900 mb-4 font-dancing-script">
          Dinner Invitation 🍽️
        </motion.h2>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-3 text-lg md:text-xl text-gray-800">
            <span className="text-3xl">📅</span>
            <span className="font-semibold">October 22, 2025</span>
          </div>

          <div className="flex items-center justify-center space-x-3 text-lg md:text-xl text-gray-800">
            <span className="text-3xl">🕖</span>
            <span className="font-semibold">8:00 PM</span>
          </div>

          <div className="flex items-center justify-center space-x-3 text-lg md:text-xl text-gray-800">
            <span className="text-3xl">📍</span>
            <span className="font-semibold">The Huntsman, Tallahassee</span>
          </div>
        </motion.div>

        {/* Special Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg italic text-pink-800 border-t-2 border-pink-200 pt-6">
          Cùng tạo nên những kỉ niệm thật đáng nhớ,
          <br />
          Những cuộc trò chuyện và tiếng cười không ngừng nhé 💕
        </motion.p>

        {/* Decorative elements */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">
          🎉
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-4xl">
          🎂
        </div>
      </motion.div>
    </section>
  );
}
