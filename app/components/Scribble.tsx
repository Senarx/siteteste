"use client";
import { motion } from "framer-motion";

type Props = {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
  delay?: number;
};

export default function Scribble({ x, y, scale = 1, rotate = 0, delay = 0 }: Props) {
  return (
    <motion.svg
      className="absolute hand-draw"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      width={160*scale}
      height={80*scale}
      viewBox="0 0 160 80"
      style={{ left: x, top: y, rotate }}
      fill="none"
    >
      <path d="M5 40 C 30 5, 60 75, 90 10 S 140 50, 155 40"
        stroke="currentColor" strokeWidth="2" />
      <path d="M30 65 Q 80 30 130 60" stroke="currentColor" strokeWidth="2"/>
    </motion.svg>
  );
}
