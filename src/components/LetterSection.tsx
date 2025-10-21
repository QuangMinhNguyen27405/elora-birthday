import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LetterSection() {
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

  return (
    <section
      id="letter"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-pink-100 via-white to-pink-50 relative">
      {/* Optional floating cow icon in corner */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 text-6xl opacity-30 hidden md:block">
        🐄
      </motion.div>

      {/* Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white rounded-lg shadow-2xl p-8 md:p-12 relative">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-pink-900 text-center mb-8 font-dancing-script">
          A Little Letter 💌
        </motion.h2>

        {/* Letter Body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-pink-900 first-letter:mr-1 first-letter:float-left">
            My dearest Elora,
          </p>

          <p>
            Chúc mừng em ngày phụ nữ Việt Nam 20 tháng 10. Chúc bé yêu luôn xinh
            đẹp, hạnh phúc và thành công trong cuộc sống.
          </p>

          <p>
            Sắp đến sinh nhật em rồi. Anh muốn tạo cho em thật nhiều những bất
            ngờ nhỏ trong ngày đặc biệt này để em cảm thấy được yêu thương và
            trân trọng.
          </p>

          <p>
            Vậy nên, hãy cùng anh tạo nên những khoảnh khắc thật đáng nhớ trong
            dịp sinh nhật đặc biệt này nhé!
          </p>

          <p className="font-semibold text-pink-900 text-center mt-8">
            Happy Birthday, my love. Let's make your day unforgettable.
          </p>

          <p className="text-right italic text-pink-800 mt-6">
            Forever meow meow,
            <br />
            <span className="font-dancing-script text-2xl">Minnie</span>
          </p>
        </motion.div>

        {/* Decorative hearts */}
        <div className="absolute -top-4 -right-4 text-4xl animate-pulse">
          💕
        </div>
        <div className="absolute -bottom-4 -left-4 text-4xl animate-pulse delay-500">
          💝
        </div>
      </motion.div>
    </section>
  );
}
