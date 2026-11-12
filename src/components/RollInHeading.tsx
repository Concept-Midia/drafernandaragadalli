import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface WordItem {
  text: string;
  isItalic?: boolean;
  colorClass?: string;
  hasLineBreak?: boolean;
}

interface RollInHeadingProps {
  words: WordItem[];
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
}

export const RollInHeading: React.FC<RollInHeadingProps> = ({
  words,
  className = '',
  as = 'h2',
  delay = 0.1,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: '100%',
      rotateX: -45,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: '0%',
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 90,
        duration: 0.8,
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`inline-block perspective-[800px] ${className}`}
    >
      {words.map((item, index) => (
        <React.Fragment key={index}>
          <span className="inline-block overflow-hidden py-1 leading-[1.12] -my-1">
            <motion.span
              variants={wordVariants}
              className={`inline-block transform-gpu ${
                item.isItalic ? 'font-serif italic' : ''
              } ${item.colorClass ? item.colorClass : ''}`}
            >
              {item.text}&nbsp;
            </motion.span>
          </span>
          {item.hasLineBreak && <br className="hidden sm:inline" />}
        </React.Fragment>
      ))}
    </Component>
  );
};
