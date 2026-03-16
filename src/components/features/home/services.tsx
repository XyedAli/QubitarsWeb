"use client";

import { useState, useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { servicesData, ServiceData } from "@/data/home";
import ServiceModal from "@/components/shared/ui/ServiceModal";

const MD_DEFAULT_ACTIVE_INDICES = [0, 3, 4];

const Services = () => {
  const [activeCardRow1, setActiveCardRow1] = useState<number>(0);
  const [activeCardRow2, setActiveCardRow2] = useState<number>(3);
  const [activeCardRow3, setActiveCardRow3] = useState<number>(4);
  const [isLgScreen, setIsLgScreen] = useState<boolean>(false);
  const [isXlScreen, setIsXlScreen] = useState<boolean>(false);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [isMdHovering, setIsMdHovering] = useState<boolean>(false);
  const [activeCardRow1Xl, setActiveCardRow1Xl] = useState<number>(0);
  const [activeCardRow2Xl, setActiveCardRow2Xl] = useState<number>(5);
  const [activeMobileCard, setActiveMobileCard] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width < 768);
      setIsLgScreen(width >= 1024);
      setIsXlScreen(width >= 1280);
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
    if (isMobileScreen) return;

    if (isXlScreen) {
      // xl+: 3 cards per row
      setIsMdHovering(true);
      if (index < 3) setActiveCardRow1Xl(index);
      else setActiveCardRow2Xl(index);
    } else if (isLgScreen) {
      // lg: 2 cards per row
      setIsMdHovering(true);
      if (index < 2) setActiveCardRow1(index);
      else if (index < 4) setActiveCardRow2(index);
      else setActiveCardRow3(index);
    } else {
      setIsMdHovering(true);
      if (index < 2) setActiveCardRow1(index);
      else if (index < 4) setActiveCardRow2(index);
      else setActiveCardRow3(index);
    }
  };

  const handleCardLeave = () => {
    // Don't handle leave on mobile - only first card is active
    if (isMobileScreen) return;

    if (isLgScreen) {
      setIsMdHovering(false);
      setActiveCardRow1Xl(0);
      setActiveCardRow2Xl(5);
    } else {
      setIsMdHovering(false);
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

  const openModalForService = (service: ServiceData) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleExploreMore = (service: ServiceData, e?: React.MouseEvent) => {
    // Prevent card click from firing when clicking Explore More (avoid double open)
    if (e) {
      e.stopPropagation();
    }
    openModalForService(service);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="bg-blue-50">
      <div className={`${styles.sectionPadding} ${styles.sectionPaddingY}`}>
        <SectionHeading
          subtitle="Our Services"
          title="Growth-Focused Digital Services"
        />

        <div
          className="flex flex-wrap gap-6 lg:gap-6 xl:gap-8"
          onMouseLeave={() => !isMobileScreen && setIsMdHovering(false)}
        >
          {servicesData.map((service, index) => {
            let isActive = false;

            // On mobile, all cards show active style
            if (isMobileScreen) {
              isActive = true;
            } else if (isXlScreen) {
              // xl+: 3 per row; row1 only index 0 active, row2 only index 5 (last) active
              if (isMdHovering) {
                isActive = index < 3 ? activeCardRow1Xl === index : activeCardRow2Xl === index;
              } else {
                isActive = (index < 3 && index === 0) || (index >= 3 && index === 5);
              }
            } else if (isLgScreen) {
              // lg: 2 cards per row; default active 0, 3, 4
              if (isMdHovering) {
                if (index < 2) isActive = activeCardRow1 === index;
                else if (index < 4) isActive = activeCardRow2 === index;
                else isActive = activeCardRow3 === index;
              } else {
                isActive = MD_DEFAULT_ACTIVE_INDICES.includes(index);
              }
            } else {
              if (isMdHovering) {
                if (index < 2) isActive = activeCardRow1 === index;
                else if (index < 4) isActive = activeCardRow2 === index;
                else isActive = activeCardRow3 === index;
              } else {
                isActive = MD_DEFAULT_ACTIVE_INDICES.includes(index);
              }
            }
            // Per row only one card gets active width; xl+ = 3 per row, md/lg = 2 per row
            const isThreePerRowActiveWidth = isXlScreen && isActive && (index < 3 ? activeCardRow1Xl === index : activeCardRow2Xl === index);
            const rowStart = index < 2 ? 0 : index < 4 ? 2 : 4;
            const activeIndexInRow = !isXlScreen && (isMdHovering
              ? (rowStart === 0 ? activeCardRow1 : rowStart === 2 ? activeCardRow2 : activeCardRow3)
              : (MD_DEFAULT_ACTIVE_INDICES.includes(rowStart) ? rowStart : MD_DEFAULT_ACTIVE_INDICES.includes(rowStart + 1) ? rowStart + 1 : null));
            const getsActiveWidth = !isMobileScreen && (isXlScreen ? isThreePerRowActiveWidth : isActive && activeIndexInRow === index);
            let cardWidth = "w-full";
            if (!isMobileScreen) {
              const activeW = "md:w-[calc(62%-0.75rem)] lg:w-[calc(58%-0.75rem)] xl:w-[calc(45%-1.34rem)]";
              const inactiveW = "md:w-[calc(38%-0.75rem)] lg:w-[calc(42%-0.75rem)] xl:w-[calc(27.5%-1.34rem)]";
              cardWidth = getsActiveWidth ? activeW : inactiveW;
            }

            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                onClick={() => {
                  handleCardClick(index);
                  openModalForService(service);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModalForService(service);
                  }
                }}
                className={`${cardWidth} flex-shrink-0 relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer group ${isActive
                  ? "bg-[#010101] shadow-2xl md:scale-[1.02] border border-transparent"
                  : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg"
                  }`}
              >
                <div className={`relative ps-4 lg:ps-5 xl:ps-5 h-full ${isActive ? "min-h-[255px] lg:min-h-[270px] xl:min-h-[330px]" : "min-h-[255px] lg:min-h-[250px] xl:min-h-[270px]"} ${isActive ? "flex flex-col justify-between py-4" : "flex flex-col justify-between py-4 pe-3 xl:pe-0"
                  }`}>
                  <div
                    className={`absolute inset-0 ps-4 lg:ps-5 xl:ps-5 flex flex-col justify-between gap-3 lg:gap-4 xl:gap-3 w-full h-full transition-opacity duration-300 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    style={{
                      backgroundImage: !isActive ? 'none' : `url(${service.image})`,
                      backgroundPosition: 'right center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: isMobileScreen
                        ? (index === 3 ? '32%' : index === 5 ? '35%' : '42%')
                        : 'contain'
                    }}
                    role="img"
                    aria-label={`${service.title} service illustration`}
                  >
                    <div className={`flex-1 flex flex-col justify-between py-4 transition-opacity duration-300 ease-in-out ${isActive ? (isMobileScreen && (index === 3 || index === 5) ? 'pr-[39%] md:pr-[41%] lg:pr-[44%] xl:pr-[44%]' : 'pr-[42%] md:pr-[41%] lg:pr-[44%] xl:pr-[44%]') : 'pr-0'}`}>
                      <div>
                        <h3 className={`text-[24px] md:text-[26px] lg:text-[24px] xl:text-[28px] leading-none font-semibold text-white font-outfit mb-3 xl:mb-4`}>
                          {service.title}
                        </h3>
                        <p className={`${styles.p3} text-white/90 leading-relaxed font-inter pe-3 md:pe-0`}>
                          {service.description}
                        </p>
                      </div>
                      <div
                        className="group/btn flex items-center gap-2 mt-2 md:mt-5 xl:mt-9 cursor-pointer transition-all duration-300 hover:gap-3"
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
                      <h3 className={`text-[24px] md:text-[26px] lg:text-[26px] xl:text-[28px] leading-none font-semibold text-blue font-outfit transition-colors duration-300 group-hover:text-blue-600 mt-0`}>
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
