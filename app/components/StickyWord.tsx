"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyWord({ word }: { word: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.25, 1, 0.25]);
  return (
    <div ref={ref} className="h-[120vh] grid place-items-center">
      <motion.h2 style={{ scale, opacity }}
        className="text-[16vw] leading-none font-display font-semibold select-none">
        {word}
      </motion.h2>
    </div>
  );
}
