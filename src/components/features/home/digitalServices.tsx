"use client";

import { useState, useRef, useEffect } from "react";
import { MoveUpRight, ChevronDown } from "lucide-react";
import { styles } from "@/styles/style";
import { engagementOptions } from "@/data/home/index";
import { SectionHeading } from "@/components/shared/headings";

const DigitalServices = () => {
  const [activeOption, setActiveOption] = useState<string>("product-development");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["product-development"]));
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

  const handleMobileSectionToggle = (optionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(optionId)) {
        newSet.delete(optionId);
      } else {
        newSet.add(optionId);
      }
      return newSet;
    });
    setActiveOption(optionId);
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

  // Position the active bar as options change.
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
    // Only enable fixed behavior on desktop (md and above).
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsFixed(false);
      setScrollStep(0);
      return;
    }

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
        // Only apply fixed behavior on desktop
        if (window.innerWidth >= 768) {
          if (entry.isIntersecting) {
            updateSectionHeight();
            setScrollStep(1);
            setIsFixed(true);
          } else {
            setScrollStep(0);
            setIsFixed(false);
          }
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
    // Only enable wheel handler on desktop (md and above).
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return;
    }

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
      <section ref={sectionRef} className={`bg-white md:min-h-screen md:flex md:items-center transition-all duration-500 ${isFixed ? "md:fixed md:top-0 md:bottom-0 md:left-0 md:right-0 md:z-40" : "relative"}`}>
        <div className={`${styles.sectionPadding} w-full py-6 md:py-12 lg:py-16`}>
          <div className="mx-4 md:mx-0 mb-4 md:mb-6 lg:mb-8">
            <SectionHeading
              subtitle="Engagement Model"
              title="Growth-Focused Digital Services"
            />
          </div>

          {/* Mobile accordion */}
          <div className="md:hidden">
            {engagementOptions.map((option) => {
              const isExpanded = expandedSections.has(option.id);
              return (
                <div
                  key={option.id}
                  className="transition-all duration-300 overflow-hidden mx-4"
                >
                  <button
                    onClick={() => handleMobileSectionToggle(option.id)}
                    className="w-full flex items-center justify-between py-4 text-left border-b border-gray-400 transition-colors"
                  >
                    <h3 className="text-[20px] font-semibold text-blue font-outfit">
                      {option.title}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-blue transition-transform duration-300 flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pt-4 pb-4 bg-[#EDEFF880] rounded-2xl mt-3">
                      <div className="px-3">
                        <h3 className="text-[20px] font-bold text-blue mb-3 font-outfit">{option.title}</h3>
                        {option.description[0] && (
                          <p className="text-base font-medium text-gray-800 mb-3 font-outfit">
                            {option.description[0]}
                          </p>
                        )}

                        <div className="text-sm text-gray-700 leading-relaxed mb-4 font-inter">
                          {option.description.slice(1).map((item, index) => (
                            <p key={index} className="mb-2">
                              {item}
                            </p>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-[16px] font-semibold text-gray-700 mb-2 font-outfit">
                              What this includes:
                            </h4>
                            <ul className="space-y-2">
                              {option.includes.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-gray-600 font-bold text-xl leading-none mt-0.5 flex-shrink-0">•</span>
                                  <span className="text-sm text-gray-700 leading-relaxed font-inter flex-1">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-[16px] font-semibold text-gray-700 mb-2 font-outfit">
                              Best Suited for:
                            </h4>
                            <ul className="space-y-2">
                              {option.bestSuitedFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-gray-600 font-bold text-xl leading-none mt-0.5 flex-shrink-0">•</span>
                                  <span className="text-sm text-gray-700 leading-relaxed font-inter flex-1">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <a href="#" className="inline-flex items-center gap-2 group">
                            <div className="w-6 h-6 rounded-full bg-blue group-hover:bg-[#F05C22]/10 flex items-center justify-center transition-colors duration-300">
                              <MoveUpRight className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <span className="text-sm font-semibold text-blue group-hover:text-[#F05C22] transition-colors duration-300 font-outfit">
                              Learn More
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-12 gap-7 lg:gap-10 xl:gap-16">
            <div className="md:col-span-4">
              <div ref={containerRef} className="relative flex flex-col gap-6 py-9 lg:py-12 xl:py-15 pl-0 xl:pl-2 lg:sticky lg:top-24 lg:self-start transition-all duration-300">
                <div className="absolute right-0 top-0 h-full w-[2px] bg-gray-300" />
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
              <div className={`transition-all duration-500 ease-in-out ${isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <div className="bg-[#EDEFF880] rounded-2xl lg:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-5 lg:p-6">
                  <h3 className={`${styles.h4} font-bold text-blue mb-2 lg:mb-3 font-outfit`}>
                    {selectedOption.title}
                  </h3>

                  {selectedOption.description[0] && (
                    <p className="text-base md:text-lg font-medium text-gray-800 mb-3 font-outfit">
                      {selectedOption.description[0]}
                    </p>
                  )}

                  <div className="text-sm md:text-base xl:text-lg text-gray-700 leading-relaxed mb-4 md:mb-5 font-inter">
                    {selectedOption.description.slice(1).map((item, index) => (
                      <p key={index} className="mb-2">
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-4 md:space-y-4 lg:space-y-5">
                    <div>
                      <h4 className={`${styles.h6} font-semibold text-gray-700 mb-2 md:mb-3 font-outfit`}>
                        What this includes:
                      </h4>
                      <ul className="space-y-2 md:space-y-1.5">
                        {selectedOption.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-gray-600 font-bold text-xl md:text-2xl leading-none mt-0.5">•</span>
                            <span className="text-sm md:text-[15px] lg:text-base xl:text-lg text-gray-700 leading-relaxed font-inter flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className={`${styles.h6} font-semibold text-gray-700 mb-2 md:mb-3 font-outfit`}>
                        Best Suited for:
                      </h4>
                      <ul className="space-y-2 md:space-y-1.5">
                        {selectedOption.bestSuitedFor.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-gray-600 font-bold text-xl md:text-2xl leading-none mt-0.5">•</span>
                            <span className="text-sm md:text-base xl:text-lg text-gray-700 leading-relaxed font-inter flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-5 lg:mt-6 pt-4 md:pt-5 border-t border-gray-100">
                    <a href="#" className="inline-flex items-center gap-2 group">
                      <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue group-hover:bg-[#F05C22]/10 flex items-center justify-center transition-colors duration-300">
                        <MoveUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-sm md:text-base font-semibold text-blue group-hover:text-[#F05C22] transition-colors duration-300 font-outfit">
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
