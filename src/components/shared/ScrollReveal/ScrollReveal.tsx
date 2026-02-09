"use client";

import { useEffect, useRef, useMemo, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const STAGGER = 0.05;
const WORD_TRIGGER = { start: "top bottom-=20%", scrub: true };

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, i) =>
      /^\s+$/.test(word) ? word : <span className="word" key={i}>{word}</span>
    );
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    const scroller = scrollContainerRef?.current ?? (typeof window === "undefined" ? null : window);
    if (!el || !scroller) return;

    const st = (end: string, overrides?: object) => ({ trigger: el, scroller, end, ...overrides });

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      { ease: "none", rotate: 0, scrollTrigger: { ...st(rotationEnd), start: "top bottom", scrub: true } }
    );

    const words = el.querySelectorAll(".word");
    const wordSt = { ...st(wordAnimationEnd), ...WORD_TRIGGER };

    gsap.fromTo(
      words,
      { opacity: baseOpacity, willChange: "opacity" },
      { ease: "none", opacity: 1, stagger: STAGGER, scrollTrigger: wordSt }
    );

    if (enableBlur) {
      gsap.fromTo(
        words,
        { filter: `blur(${blurStrength}px)` },
        { ease: "none", filter: "blur(0px)", stagger: STAGGER, scrollTrigger: wordSt }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.trigger === el && t.kill());
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={containerClassName ? `scroll-reveal ${containerClassName}` : "scroll-reveal"}>
      <p className={textClassName ? `scroll-reveal-text ${textClassName}` : "scroll-reveal-text"}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
