"use client";

import { useState, useRef, useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { engagementOptions} from "@/data/home/index";
import { SectionHeading } from "@/components/shared/headings";

const DigitalServices = () => {
  const [activeOption, setActiveOption] = useState<string>("product-development");
  const [barStyle, setBarStyle] = useState<{ top: number; height: number; opacity: number }>({ top: 0, height: 0, opacity: 0 });
  const [isContentVisible, setIsContentVisible] = useState<boolean>(true);
  const [shownCards, setShownCards] = useState<Set<string>>(new Set(["product-development"]));
  const [isFixed, setIsFixed] = useState(false);
  const [scrollStep, setScrollStep] = useState(0);
  const [sectionHeight, setSectionHeight] = useState<number>(0);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isScrollingRef = useRef<boolean>(false);

  const selectedOption = engagementOptions.find(option => option.id === activeOption) || engagementOptions[0];

  const handleOptionChange = (optionId: string) => {
    if (optionId === activeOption) return;
    setIsContentVisible(false);
    setShownCards(prev => new Set(prev).add(optionId));
    setTimeout(() => {
      setActiveOption(optionId);
      setIsContentVisible(true);
    }, 200);
  };

  const updateBarPosition = () => {
    const activeButton = buttonRefs.current[activeOption];
    const container = containerRef.current;

    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setBarStyle({
        top: buttonRect.top - containerRect.top + container.scrollTop,
        height: buttonRect.height,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    updateBarPosition();
    const handleResizeOrScroll = () => requestAnimationFrame(updateBarPosition);
    window.addEventListener('resize', handleResizeOrScroll);
    if (!isFixed) {
      window.addEventListener('scroll', handleResizeOrScroll, { passive: true });
    }
    return () => {
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll);
    };
  }, [activeOption, isFixed]);

  useEffect(() => {
    const updateSectionHeight = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
    };

    updateSectionHeight();
    window.addEventListener('resize', updateSectionHeight);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          updateSectionHeight();
          setScrollStep(1);
          setIsFixed(true);
        } else {
          setScrollStep(0);
          setIsFixed(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateSectionHeight);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!sectionRef.current || !isFixed) return;

      event.preventDefault();

      if (isScrollingRef.current) return;

      isScrollingRef.current = true;
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);

      const currentIndex = engagementOptions.findIndex(opt => opt.id === activeOption);

      if (scrollStep === 1) {
        setScrollStep(2);
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else if (scrollStep === 2) {
        if (event.deltaY > 0 && currentIndex < engagementOptions.length - 1) {
          const nextOption = engagementOptions[currentIndex + 1];
          setIsContentVisible(false);
          setTimeout(() => {
            setActiveOption(nextOption.id);
            setShownCards(prev => new Set(prev).add(nextOption.id));
            setIsContentVisible(true);
          }, 200);
        } else if (event.deltaY < 0 && currentIndex > 0) {
          const prevOption = engagementOptions[currentIndex - 1];
          setIsContentVisible(false);
          setTimeout(() => {
            setActiveOption(prevOption.id);
            setShownCards(prev => new Set(prev).add(prevOption.id));
            setIsContentVisible(true);
          }, 200);
        }

        if (
          (currentIndex === engagementOptions.length - 1 && event.deltaY > 0) ||
          (currentIndex === 0 && event.deltaY < 0)
        ) {
          setIsFixed(false);
          setScrollStep(0);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeOption, isFixed, scrollStep]);

  // Initial bar position
  useEffect(() => {
    setIsContentVisible(true);
    requestAnimationFrame(updateBarPosition);
  }, []);

  return (
    <>
      {isFixed && <div style={{ height: `${sectionHeight}px` }} />}
      <section ref={sectionRef} className={`bg-white min-h-screen flex items-center transition-all duration-500 ${isFixed ? "fixed top-0 bottom-0 left-0 right-0 z-40" : "relative"}`}>
        <div className={`${styles.sectionPadding} w-full py-8 md:py-12 lg:py-16`}>
        <div className="mb-4 md:mb-6 lg:mb-8">
        <SectionHeading
            subtitle="Engagement Model"
            title="Growth-Focused Digital Services"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-10 xl:gap-16">
          <div className="md:col-span-4">
            <div ref={containerRef} className="relative flex flex-col gap-6 py-9 lg:py-12 xl:py-15 pl-0 xl:pl-2 lg:sticky lg:top-24 lg:self-start transition-all duration-300">
              {/* Vertical divider */}
              <div className="absolute right-0 top-0 h-full w-[2px] bg-gray-300" />
              {/* Active indicator */}
              <div
                className="absolute right-0 w-[4px] bg-[#2D2D2D] rounded-full transition-all duration-300"
                style={{
                  top: `${barStyle.top}px`,
                  height: `${barStyle.height}px`,
                  opacity: barStyle.opacity,
                }}
              />
              {engagementOptions.map((option) => {
                const isActive = activeOption === option.id;
                return (
                  <button
                    key={option.id}
                    ref={(el) => { buttonRefs.current[option.id] = el; }}
                    onClick={() => handleOptionChange(option.id)}
                    className="relative text-left"
                  >
                    <span className={`font-outfit text-[22px] lg:text-[26px] xl:text-[30px] leading-[1.23] transition-all duration-300 ${isActive ? "text-[#1F2A44] font-semibold" : "text-gray-500 font-normal hover:text-[#1F2A44]"}`}>
                      {option.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-8">
            <div className={`transition-all duration-500 ease-in-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-[#EDEFF880] rounded-2xl lg:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 lg:p-5 xl:p-6">
                <h3 className={`${styles.h4} font-bold text-blue mb-2 lg:mb-3 font-outfit`}>
                  {selectedOption.title}
                </h3>
                
                <p className={`text-base xl:text-lg text-gray-700 leading-relaxed mb-4 font-inter`}>
                  {selectedOption.description.map((item, index) => (
                    <p key={index} className="mb-1">
                      {item}
                    </p>
                  ))}
                </p>

                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <h4 className={`${styles.h6} font-semibold text-gray-700 mb-2 lg:mb-3 font-outfit`}>
                      What this includes:
                    </h4>
                    <ul className="space-y-1">
                      {selectedOption.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-gray-600 font-bold text-2xl">•</span>
                          <span className="text-[15px] lg:text-base xl:text-lg text-gray-700 leading-relaxed font-inter flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`${styles.h6} font-semibold text-gray-700 mb-2 lg:mb-3 font-outfit`}>
                      Best Suited for:
                    </h4>
                    <ul className="space-y-1">
                      {selectedOption.bestSuitedFor.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-gray-600 font-bold text-2xl">•</span>
                          <span className="text-base xl:text-lg text-gray-700 leading-relaxed font-inter flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-0 lg:mt-2 pt-4 mb-0 xl:mb-2 border-t border-gray-100">
                  <a href="#" className="inline-flex items-center gap-2 group">
                    <div className="w-7 h-7 rounded-full bg-blue group-hover:bg-[#F05C22]/10 flex items-center justify-center transition-colors duration-300">
                      <MoveUpRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className={`${styles.p3} font-semibold text-blue group-hover:text-[#F05C22] transition-colors duration-300`}>
                      Learn More
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default DigitalServices;
