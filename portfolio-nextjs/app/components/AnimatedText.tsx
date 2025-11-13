'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: 'fadeUp' | 'fadeIn';
}

export default function AnimatedText({ children, delay = 0, className = '', variant = 'fadeUp' }: AnimatedTextProps) {
  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

