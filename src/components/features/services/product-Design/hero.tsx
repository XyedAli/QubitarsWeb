"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ProductHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const borderBoxRef = useRef<HTMLDivElement>(null);

  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isVideoPinned, setIsVideoPinned] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [boxTop, setBoxTop] = useState(0);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const mouseX = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const PIN_START = 0.62;
      const PIN_END = 0.9;
      setIsVideoPinned(v >= PIN_START && v < PIN_END);
      setIsVideoVisible(v < PIN_END);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  /* ===============================
     GET BORDER BOX POSITION
  =============================== */
  useEffect(() => {
    const updateLayout = () => {
      if (!borderBoxRef.current || !containerRef.current) return;

      const containerRect = containerRef.current
        .querySelector(".sticky-area")!
        .getBoundingClientRect();

      const boxRect = borderBoxRef.current.getBoundingClientRect();

      setBoxTop(boxRect.top - containerRect.top);
      setBoxSize({
        width: boxRect.width,
        height: boxRect.height,
      });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    window.addEventListener("scroll", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("scroll", updateLayout);
    };
  }, []);

  /* ===============================
     🔥 FASTER GROW + MOVE ANIMATION
  =============================== */

  const maxScale =
    boxSize.width && boxSize.height
      ? Math.min(boxSize.width / 50, boxSize.height / 245)
      : 1;

  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 1], // 🔥 Faster growth
    [1, maxScale * 1.05, maxScale]
  );

  const moveDown = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0, (boxTop - 180) * 2, boxTop - 220]
  );

  const borderRadius = useTransform(scrollYProgress, [0, 1], [20, 0]);

  /* ===============================
     MOUSE MOVE
  =============================== */

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current
      .querySelector(".sticky-area")!
      .getBoundingClientRect();

    const boxWidth = 400;
    const relativeX = e.clientX - rect.left;

    const minX = 0;
    const maxX = rect.width - boxWidth;

    const clamped = Math.max(
      minX,
      Math.min(maxX, relativeX - boxWidth / 2)
    );

    mouseX.set(clamped);
  };

  /* =============================== */

  return (
    <div className={`relative bg-blue ${isVideoPinned ? 'h-[190vh]' : 'h-[120vh]'}`}>
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      <div className="sticky-area sticky top-0 h-screen mx-16 relative">

        {/* TEXT */}
        <div className="relative z-10 max-w-6xl w-full pt-40">
          <h1 className="text-6xl md:text-[90px] text-white leading-tight pt-40">
            We design what moves business forward
          </h1>
        </div>

        {/* BORDER BOX (Layout SAME) */}
        <div
          ref={borderBoxRef}
          className="mx-14 rounded-3xl h-[600px] "
        />

        {/* VIDEO BOX */}
        {isVideoVisible && (
          <motion.div
            style={{
              x: isVideoPinned ? 0 : smoothX,
              y: isVideoPinned ? 0 : moveDown,
              scale: isVideoPinned ? 1 : scale,
              borderRadius: isVideoPinned ? 0 : borderRadius,
            }}
            className={
              isVideoPinned
                ? "fixed left-0 top-0 w-screen h-screen z-50 overflow-hidden shadow-2xl group cursor-pointer"
                : "absolute left-0 top-40 -translate-y-1/2 w-[400px] h-[260px] z-50 overflow-hidden shadow-2xl group cursor-pointer"
            }
            onMouseEnter={() => setShowPlayButton(true)}
            onMouseLeave={() => setShowPlayButton(false)}
          >
            <video
              src="https://wearenotch.com/wp-content/uploads/2024/07/Iskon-245-979KB.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            <AnimatePresence>
              {showPlayButton && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40"
                >
                  <button className="px-6 py-3 bg-white text-black rounded-full text-lg font-semibold">
                    Play reel
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
    </div>
  );
}