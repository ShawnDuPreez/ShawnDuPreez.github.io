'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedText from './AnimatedText';

const subtitles = [
  'Full-Stack Developer',
  'Mobile Engineer',
  'Cloud Architect',
  'Entrepreneur',
];

export default function Hero() {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animated opacity-20" />
      
      {/* Subtle Particles/Glow Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan/20 blur-xl"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <AnimatedText delay={0.2}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6">
            <span className="text-gradient-signature">Shawn</span>
            <br />
            <span className="text-white">du Preez</span>
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="h-16 md:h-20 mb-6 flex items-center justify-center">
            <motion.div
              key={currentSubtitleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold text-gray-300"
            >
              {subtitles[currentSubtitleIndex]}
            </motion.div>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Building ideas that move — from cloud to client.
          </p>
        </AnimatedText>

        {/* Scroll Indicator */}
        <AnimatedText delay={0.8}>
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-400 hover:text-cyan transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </AnimatedText>
      </div>
    </section>
  );
}

