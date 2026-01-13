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

        <div className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-6 lg:gap-4 xl:gap-8">
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
            
            return (
              <div
                key={index}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                onClick={() => handleCardClick(index)}
                className={`relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group ${
                  isActive
                    ? "bg-[#010101] shadow-2xl scale-[1.02] col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-6"
                    : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3"
                }`}
              >
                <div className={`relative ps-4 lg:ps-5 xl:ps-5 h-full ${isActive ? "min-h-[270px] lg:min-h-[310px] xl:min-h-[330px]" : "min-h-[270px] lg:min-h-[290px] xl:min-h-[270px]"} ${
                  isActive ? "flex items-center py-5 xl:py-6" : "flex flex-col justify-between py-4 pe-3 xl:pe-0"
                }`}>
                  <div 
                    className={`absolute inset-0 ps-4 lg:ps-5 xl:ps-7 flex items-center gap-3 lg:gap-4 xl:gap-3 w-full h-full transition-opacity duration-500 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                    style={{
                      backgroundImage: (isMobileScreen || !isActive) ? 'none' : `url(${service.image})`,
                      backgroundPosition: 'right center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain'
                    }}
                  >
                    <div className={`flex-1 flex flex-col justify-between py-4 xl:py-5 transition-opacity duration-500 ease-in-out ${isMobileScreen && isActive ? 'pr-0' : 'pr-[41%] lg:pr-[44%] xl:pr-[44%]'}`}>
                      <div>
                        <h3 className={`text-[24px] lg:text-[23px] xl:text-[27px] leading-tight font-semibold text-white font-outfit mb-3 xl:mb-4`}>
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
                  <div className={`relative pe-2 flex flex-col justify-between w-full h-full transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-0 z-0 pointer-events-none absolute inset-0" : "opacity-100 z-10"
                  }`}>
                    <div className="pt-1 group-hover:pt-0 transition-all duration-300">
                      <h3 className={`text-[24px] md:text-[26px] lg:text-[26px] xl:text-[30px] font-semibold text-blue font-outfit transition-colors duration-300 group-hover:text-blue-600 mt-4 md:mt-0`}>
                        {service.title}
                      </h3>
                      {/* Description - Only show on mobile for non-active cards */}
                      {isMobileScreen && !isActive && (
                        <p className={`${styles.p3} text-blue leading-relaxed font-inter mt-3`}>
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
