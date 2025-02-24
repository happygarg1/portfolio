"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!animate) return;
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)" },
      { duration, delay: stagger(0.2) }
    );
  }, [scope,duration, filter]); // Removed animate from dependency array ✅

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope} className="leading-snug tracking-wide">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${idx > 3 ? "text-purple" : "dark:text-white text-black"} opacity-0`}
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
