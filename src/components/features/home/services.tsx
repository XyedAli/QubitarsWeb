"use client";

import { useState, useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { servicesData, ServiceData } from "@/data/home";
import ServiceModal from "@/components/shared/ui/ServiceModal";

const Services = () => {
  const [activeCardRow1, setActiveCardRow1] = useState<number>(0);
  const [activeCardRow2, setActiveCardRow2] = useState<number>(3);
  const [activeCardRow3, setActiveCardRow3] = useState<number>(4);
  const [activeCardRow1Lg, setActiveCardRow1Lg] = useState<number>(0);
  const [activeCardRow2Lg, setActiveCardRow2Lg] = useState<number>(5);
  const [isLgScreen, setIsLgScreen] = useState<boolean>(false);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [activeMobileCard, setActiveMobileCard] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width < 768);
      setIsLgScreen(width >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    servicesData.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleCardHover = (index: number) => {
    // Don't handle hover on mobile - only first card is active
    if (isMobileScreen) return;

    if (isLgScreen) {
      if (index < 3) {
        setActiveCardRow1Lg(index);
      } else {
        setActiveCardRow2Lg(index);
      }
    } else {
      if (index < 2) {
        setActiveCardRow1(index);
      } else if (index < 4) {
        setActiveCardRow2(index);
      } else {
        setActiveCardRow3(index);
      }
    }
  };

  const handleCardLeave = () => {
    // Don't handle leave on mobile - only first card is active
    if (isMobileScreen) return;

    if (isLgScreen) {
      setActiveCardRow1Lg(0);
      setActiveCardRow2Lg(5);
    } else {
      setActiveCardRow1(0);
      setActiveCardRow2(3);
      setActiveCardRow3(4);
    }
  };

  const handleCardClick = (index: number) => {
    // On mobile, clicking a card makes it active
    if (isMobileScreen) {
      setActiveMobileCard(index);
    }
  };

  const handleExploreMore = (service: ServiceData, e?: React.MouseEvent) => {
    // Prevent card click when clicking Explore More button
    if (e) {
      e.stopPropagation();
    }

    // Only show modal for AI & ML Development and Digital Transformation
    if (service.title === "AI & ML Development" || service.title === "Digital Transformation") {
      setSelectedService(service);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="bg-blue-50">
      <div className={`${styles.sectionPadding} ${styles.sectionPaddingY}`}>
        <SectionHeading
          subtitle="OUR SERVICES"
          title="Growth-Focused Digital Services"
        />

        <div className="flex flex-wrap gap-6 lg:gap-4 xl:gap-8">
          {servicesData.map((service, index) => {
            let isActive = false;

            // On mobile, use activeMobileCard state
            if (isMobileScreen) {
              isActive = activeMobileCard === index;
            } else if (isLgScreen) {
              if (index < 3) {
                isActive = activeCardRow1Lg === index;
              } else {
                isActive = activeCardRow2Lg === index;
              }
            } else {
              if (index < 2) {
                isActive = activeCardRow1 === index;
              } else if (index < 4) {
                isActive = activeCardRow2 === index;
              } else {
                isActive = activeCardRow3 === index;
              }
            }

            // Width calculation to ensure exactly 3 cards per row
            // Active card: 50%, Inactive cards: 25% each
            // For 3 cards with 2 gaps: subtract gap proportionally
            // gap-6 (1.5rem): Active subtracts 1.5rem, Inactive subtracts 0.75rem each
            // gap-4 (1rem): Active subtracts 1rem, Inactive subtracts 0.5rem each
            // gap-8 (2rem): Active subtracts 2rem, Inactive subtracts 1rem each
            let cardWidth = "w-full"; // mobile: full width
            if (!isMobileScreen && !isLgScreen) {
              // Medium screens: gap-6 = 1.5rem
              cardWidth = isActive
                ? "md:w-[calc(50%-1.5rem)]" // 50% - 1.5rem (full gap)
                : "md:w-[calc(25%-0.75rem)]"; // 25% - 0.75rem (half gap)
            } else if (isLgScreen) {
              // Large screens: lg gap-4 (1rem), xl gap-8 (2rem)
              cardWidth = isActive
                ? "lg:w-[calc(50%-1rem)] xl:w-[calc(50%-2rem)]"
                : "lg:w-[calc(25%-0.5rem)] xl:w-[calc(25%-1rem)]";
            }

            return (
              <div
                key={index}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                onClick={() => handleCardClick(index)}
                className={`${cardWidth} flex-shrink-0 relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer group ${isActive
                  ? "bg-[#010101] shadow-2xl scale-[1.02] border border-transparent"
                  : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg"
                  }`}
              >
                <div className={`relative ps-4 lg:ps-5 xl:ps-5 h-full ${isActive ? "min-h-[270px] lg:min-h-[310px] xl:min-h-[330px]" : "min-h-[270px] lg:min-h-[290px] xl:min-h-[270px]"} ${isActive ? "flex flex-col justify-between py-4" : "flex flex-col justify-between py-4 pe-3 xl:pe-0"
                  }`}>
                  <div
                    className={`absolute inset-0 ps-4 lg:ps-5 xl:ps-5 flex flex-col justify-between gap-3 lg:gap-4 xl:gap-3 w-full h-full transition-opacity duration-300 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    style={{
                      backgroundImage: (isMobileScreen || !isActive) ? 'none' : `url(${service.image})`,
                      backgroundPosition: 'right center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}
                  >
                    <div className={`flex-1 flex flex-col justify-between py-4 transition-opacity duration-300 ease-in-out ${isMobileScreen && isActive ? 'pr-0' : 'pr-[41%] lg:pr-[44%] xl:pr-[44%]'}`}>
                      <div>
                        <h3 className={`text-[24px] md:text-[26px] lg:text-[26px] xl:text-[28px] leading-tight font-semibold text-white font-outfit mb-3 xl:mb-4`}>
                          {service.title}
                        </h3>
                        <p className={`${styles.p3} text-white/90 leading-relaxed font-inter pe-3 md:pe-0`}>
                          {service.description}
                        </p>
                      </div>
                      <div
                        className="group/btn flex items-center gap-2 mt-9 cursor-pointer transition-all duration-300 hover:gap-3"
                        onClick={(e) => handleExploreMore(service, e)}
                      >
                        <span className={`${styles.p3} font-semibold text-white transition-all duration-300 group-hover/btn:translate-x-1`}>Explore More</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white/20 group-hover/btn:rotate-45 group-hover/btn:scale-110">
                          <MoveUpRight className="w-4 h-4 text-accent transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`relative pe-2 flex flex-col justify-between w-full h-full transition-opacity duration-300 ease-in-out ${isActive ? "opacity-0 z-0 pointer-events-none absolute inset-0" : "opacity-100 z-10"
                    }`}>
                    <div className="pt-0">
                      <h3 className={`text-[24px] md:text-[26px] lg:text-[26px] xl:text-[28px] font-semibold text-blue font-outfit transition-colors duration-300 group-hover:text-blue-600 mt-0`}>
                        {service.title}
                      </h3>
                      {/* Short description - Show on all screens for non-active cards */}
                      {!isActive && (
                        <p className={`${styles.p3} text-blue/80 leading-relaxed font-inter mt-3 line-clamp-2 md:line-clamp-5`}>
                          {service.description}
                        </p>
                      )}
                    </div>
                    <div
                      className="group/btn flex items-center gap-2 pb-1 cursor-pointer transition-all duration-300 hover:gap-3"
                      onClick={(e) => handleExploreMore(service, e)}
                    >
                      <span className={`${styles.p3} font-semibold text-blue transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-blue-600`}>Explore More</span>
                      <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-blue/20 group-hover/btn:rotate-45 group-hover/btn:scale-110">
                        <MoveUpRight className="w-4 h-4 text-blue transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </section>
  );
};

export default Services;
