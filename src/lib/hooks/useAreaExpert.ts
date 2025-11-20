import { useEffect, useRef, useState } from 'react';
import type { ExpertService } from '@/lib/types/home';

// Services Section Hooks

interface UseAreaExpertProps {
  services: ExpertService[];
}

interface UseAreaExpertReturn {
  selectedService: number;
  setSelectedService: (index: number) => void;
  isPinned: boolean;
  isDesktop: boolean;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  currentService: ExpertService;
  nextServiceIndex: number;
  nextService: ExpertService;
}

export const useAreaExpert = ({ services }: UseAreaExpertProps): UseAreaExpertReturn => {
  const [selectedService, setSelectedService] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const wheelLockRef = useRef(false);

  const currentService = services[selectedService];
  const nextServiceIndex = (selectedService + 1) % services.length;
  const nextService = services[nextServiceIndex];

  // Handle window resize to detect desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle IntersectionObserver for pinning detection
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPinned(entry.isIntersecting);
      },
      { threshold: 0.55 }
    );

    const element = sectionRef.current;
    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  // Handle wheel event for service navigation
  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (event: WheelEvent) => {
      if (!isPinned) return;

      const goingDown = event.deltaY > 0;
      const atStart = selectedService === 0;
      const atEnd = selectedService === services.length - 1;

      if ((goingDown && atEnd) || (!goingDown && atStart)) {
        return;
      }

      event.preventDefault();

      if (wheelLockRef.current) return;
      wheelLockRef.current = true;
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 520);

      setSelectedService((prev) =>
        goingDown ? Math.min(prev + 1, services.length - 1) : Math.max(prev - 1, 0)
      );
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [selectedService, services.length, isPinned, isDesktop]);

  return {
    selectedService,
    setSelectedService,
    isPinned,
    isDesktop,
    sectionRef,
    currentService,
    nextServiceIndex,
    nextService,
  };
};

