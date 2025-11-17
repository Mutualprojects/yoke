"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/**
 * TextHoverEffect — scroll-triggered color-reveal text (white variant)
 * @param text      the text to display
 * @param duration  animation speed (optional)
 * @param className additional Tailwind classes
 */
export const TextHoverEffect = ({
  text,
  duration = 0.4,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // --- scroll trigger ---
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.4, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ strokeDashoffset: 0 });
    } else {
      controls.start({ strokeDashoffset: 1000 });
    }
  }, [inView, controls]);

  // simple drifting mask (auto-moves slightly)
  useEffect(() => {
    const interval = setInterval(() => {
      const cx = `${50 + Math.sin(Date.now() / 1000) * 10}%`;
      const cy = `${50 + Math.cos(Date.now() / 1000) * 10}%`;
      setMaskPosition({ cx, cy });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 250"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none uppercase ${className ?? ""}`}
      >
        <defs>
          {/* White gradient for stroke reveal */}
          <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          {/* Moving radial mask */}
          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="25%"
            animate={maskPosition}
            transition={{ duration, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>

          <mask id="textMask">
            <rect width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>

        {/* Base outline (subtle white) */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="#ffffff"
          strokeWidth="0.25"
          className="fill-transparent font-[helvetica] text-7xl font-bold opacity-20"
        >
          {text}
        </text>

        {/* Animated white stroke drawing */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="#ffffff"
          strokeWidth="0.3"
          className="fill-transparent font-[helvetica] text-7xl font-bold"
          initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          animate={controls}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {text}
        </motion.text>

        {/* White gradient color reveal */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.4"
          mask="url(#textMask)"
          className="fill-transparent font-[helvetica] text-7xl font-bold"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};
