"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Empowering developers with AI-powered documentation search",
  "Making code generation accessible to everyone",
  "Bridging the gap between developers and official docs",
  "Accelerating development with instant, accurate answers",
];

export function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          About <span className="text-primary-600">DevDocs AI</span>
        </motion.h1>

        <div className="mt-6 h-16 sm:h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-lg leading-8 text-gray-600 sm:text-xl"
            >
              {messages[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="mt-8 flex gap-2 justify-center">
          {messages.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-12 bg-primary-600"
                  : "w-4 bg-gray-300"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
