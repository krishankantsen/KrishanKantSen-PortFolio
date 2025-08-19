import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-8 bg-teal-600 ml-1"
      />
    </motion.span>
  );
};

export default AnimatedText;