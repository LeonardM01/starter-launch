"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

const directionOffsets = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: -32 },
  right: { x: 32 },
  none: {},
} as const;

interface FadeInProps {
  children: ReactNode;
  direction?: keyof typeof directionOffsets;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
