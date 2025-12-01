import { useEffect, useRef, useState } from 'react';

interface BoxDimensions {
  width: number;
  height: number;
}

interface ArrowOffset {
  x: number;
  y: number;
}

interface UseHeroReturn {
  iconSize: number;
  logoWidth: string;
  isMobile: boolean;
  boxDimensions: BoxDimensions;
  arrowOffset: ArrowOffset;
  hasAnimatedRef: React.MutableRefObject<boolean>;
}

export const useHero = (): UseHeroReturn => {
  const [iconSize, setIconSize] = useState(74);
  const [isMobile, setIsMobile] = useState(false);
  const [logoWidth, setLogoWidth] = useState("1200px");
  const [boxDimensions, setBoxDimensions] = useState<BoxDimensions>({ width: 240, height: 65 });
  const [arrowOffset, setArrowOffset] = useState<ArrowOffset>({ x: 240, y: 65 });
  // Track whether hero intro motion has already played (per mount)
  const hasAnimatedRef = useRef<boolean>(false);

  // Handle icon size and logo width based on viewport
  useEffect(() => {
    const updateIconSize = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;

      if (width >= 1280) {
        setIconSize(74);
        setLogoWidth("1200px");
      } else if (width >= 1024) {
        setLogoWidth("1200px");
        setIconSize(66);
      } else if (width >= 768) {
        setIconSize(46);
        setLogoWidth("1200px");
      } else {
        setIconSize(50);
        setLogoWidth(width >= 480 ? "1200px" : "240px");
      }

      setIsMobile(width < 768);
    };

    updateIconSize();
    window.addEventListener("resize", updateIconSize);
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  // Handle responsive box dimensions and arrow offset
  useEffect(() => {
    const updateResponsiveProps = () => {
      if (typeof window === "undefined") return;
      const viewportWidth = window.innerWidth;

      if (viewportWidth >= 1280) {
        setBoxDimensions({ width: 240, height: 65 });
        setArrowOffset({ x: 240, y: 65 });
      } else if (viewportWidth >= 1024) {
        setBoxDimensions({ width: 210, height: 60 });
        setArrowOffset({ x: 210, y: 60 });
      } else if (viewportWidth >= 768) {
        setBoxDimensions({ width: 190, height: 55 });
        setArrowOffset({ x: 192, y: 53 });
      } else {
        setBoxDimensions({ width: 170, height: 50 });
        setArrowOffset({ x: 173, y: 47 });
      }
    };

    updateResponsiveProps();
    window.addEventListener("resize", updateResponsiveProps);
    return () => window.removeEventListener("resize", updateResponsiveProps);
  }, []);

  return {
    iconSize,
    logoWidth,
    isMobile,
    boxDimensions,
    arrowOffset,
    hasAnimatedRef,
  };
};

