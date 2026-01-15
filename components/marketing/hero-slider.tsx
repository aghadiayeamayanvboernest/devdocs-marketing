"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80",
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.2, x: 100 }}
          animate={{
            opacity: 1,
            scale: 1.05,
            x: 0,
            transition: {
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            x: -100,
            transition: {
              duration: 0.8,
              ease: "easeInOut"
            }
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: 0.3 }
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
