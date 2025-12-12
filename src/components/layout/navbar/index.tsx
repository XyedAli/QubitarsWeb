"use client";
import Image from "next/image";
import Link from "next/link";
import { navbarImages } from "@/lib/assets/images";
import { BriefcaseBusiness, Building2, ChevronDown, Lightbulb, Menu, MoveRight, MoveUpRight, X } from "lucide-react";
import { Button } from "@/components/shared/ui";
import TopNav from "@/components/layout/topNav";
import { capabilitiesData, additionalServices, industries as industriesData, companyData, engagementData, navItems } from "@/data/Navbar";
import { useNavbar } from "@/lib/hooks";
import { styles, combine } from "@/styles/style";

// Main navigation header component
const Navbar = () => {
  const {
    activeDropdown,        // Currently active desktop dropdown ID
    setActiveDropdown,     // Function to set active dropdown
    mobileDropdown,        // Currently open mobile dropdown ID
    isMenuOpen,            // Mobile menu open/close state
    setIsMenuOpen,         // Function to toggle mobile menu
    headerRef,             // Ref for header element (used for scroll detection)
    socialLinks,           // Array of social media links
    handleDropdownToggle, // Toggle desktop dropdown on click
    handleMobileToggle,    // Toggle mobile dropdown sections
    closeMenu,             // Close mobile menu handler
  } = useNavbar();

  // Render mobile dropdown content
  const renderMobileContent = (dropdownId: string) => {
    switch (dropdownId) {
      case "capabilities":
        return (
          <div className="space-y-6">
            {capabilitiesData.map((section, index) => {
              const sectionContent = (
                <div className="space-y-4 flex-1 min-w-[180px]">
                  <div className={combine(styles.flexitems, "gap-3")}>
                  <h4 className="font-semibold text-base text-accent">{section.title}</h4>
                    {section.image && (
                      <Image
                        src={section.image}
                        alt={section.title || ""}
                        width={24}
                        height={24}
                        className="w-9 h-9 object-contain"
                        loading="lazy"
                        sizes="24px"
                      />
                    )}
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item.id}
                        className={combine(styles.flexitems, "gap-2 text-black mb-4")}
                      >
                        <div className="flex-shrink-0">
                          <item.icon.component width="20" height="20" />
                        </div>
                        <span >{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );

              // First section shows additional services
              if (index === 0) {
                return (
                  <div
                    key={section.id}
                    className="flex flex-wrap gap-6 items-start"
                  >
                    <div className="flex-1 min-w-[220px] ">
                      {sectionContent}
                    </div>
                    <div className="flex-1 min-w-[80px] space-y-2">
                      <div className="space-y-2 text-[18px] font-bold text-accent">
                        {additionalServices.map((service) => (
                          <p key={service.id}>{service.name}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={section.id} className="space-y-4">
                  {sectionContent}
                </div>
              );
            })}
          </div>
        );
      case "industries":
        return (
          <div className="space-y-2 text-sm text-[#1E274F]">
            {industriesData.map((industry) => (
              <div
                key={industry.id}
                className={combine(styles.flexitems, "gap-2 py-1")}
              >
                <span className={combine(styles.flexCenter, "h-6 w-6")}>
                  <industry.icon width={22} height={22} className="" />
                </span>
                <span className="text-sm font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        );
      // Company dropdown: Displays three sections (Company, Inside Qubitars, Careers)
      case "company":
        return (
          <div className="space-y-5 text-sm text-[#1E274F]">
            {[
              {
                title: "Company",
                icon: Building2,
                items: companyData.filter((item) => item.type === "companyLink"),
              },
              {
                title: "Inside Qubitars",
                icon: Lightbulb,
                items: companyData.filter((item) => item.type === "insideQubitarsLink"),
              },
              {
                title: "Careers",
                icon: BriefcaseBusiness,
                items: companyData.filter((item) => item.type === "careersLink"),
              },
            ].map((section) => (
              <div key={section.title} className="space-y-2">
                 {/* Section header with icon and title */}
                 <div className={combine(styles.flexitems, "gap-2 text-base font-semibold")}>
                  <section.icon className="h-6 w-6" />
                  <span className="text-accent">{section.title}</span>
                </div>
                {/* Section items list */}
                <ul className="space-y-1 pl-6 text-[14px] font-medium text-blackish/80">
                  {section.items.map((item) => (
                    <li key={item.id}>{item.label}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case "engagement":
        return (
          <div className="space-y-2">
            {engagementData
              .filter((item) => item.type === "service")
              .map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="flex items-start gap-3 pl-2 text-blackish/80"
                  >
                    {IconComponent && (
                      <IconComponent
                        width={28}
                        height={28}
                        className="mt-1 text-base"
                      />
                    )}
                    <div>
                      <p className="font-medium text-sm text-accent">{service.title}</p>
                      <p className="text-xs text-blackish/90 max-w-xs">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <TopNav />

      {/* Main header */}
      <div className="mx-4 lg:mx-12 xl:mx-16">
        <div ref={headerRef} className={combine(styles.flexBetween, "py-2")}>
          {/* Logo */}
          <Image
            src={navbarImages.logoSvg}
            alt="Qubitars Technology Logo"
            width={150}
            height={40}
            sizes="(max-width: 768px) 130px, 150px"
            className="cursor-pointer w-[120px] h-auto lg:w-[150px]"
            priority
          />

          <div className={combine(styles.flexitems, "gap-4")}>
            {/* Desktop nav */}
            <div className={combine("hidden md:flex", styles.flexitems, "gap-7 lg:gap-14")}>
              <div className={combine(styles.flexitems, "gap-4 lg:gap-8")}>
                {navItems.map(({ id, label, DropdownComponent }) => (
                  <div
                    key={id}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => handleDropdownToggle(id)}
                      className={combine(styles.flexitems, "gap-1 lg:gap-2 text-[13px] lg:text-base cursor-pointer transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300", activeDropdown === id
                          ? "text-accent after:w-full"
                          : "text-blackish hover:text-accent after:w-0 hover:after:w-full"
                        )}
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === id ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {activeDropdown === id && <DropdownComponent />}
                  </div>
                ))}
              </div>

              {/* Contact button */}
              <Button
                variant="accent"
                size="md"
                className="group hover:bg-transparent hover:text-accent border border-accent"
              >
                Contact Us
                <div className="relative">
                  <MoveUpRight className="w-5 h-5 mx-1 bg-white rounded-full p-1 text-accent transition-opacity duration-300 group-hover:opacity-0" />
                  <MoveRight className="w-5 h-5 mx-1 bg-accent rounded-full p-1 text-white font-bold absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center text-blackish hover:text-accent transition-colors duration-200"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden overflow-y-auto">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />
            {/* Background image */}
            <div
                className={`pointer-events-none absolute inset-y-0 right-0 w-[39%] bg-no-repeat top-25 z-10 transition-opacity duration-300 ${mobileDropdown === "capabilities" ? "opacity-0" : "opacity-100"}`}
                style={{
                  backgroundImage: `url('${navbarImages.bg6}')`,
                  backgroundSize: "103% 102%",
                }}
              />
            <div className={combine(
              "absolute inset-0 bg-white shadow-2xl",
              styles.flexCol,
              "relative z-0"
            )}>
             
              <div className="md:hidden block flex-shrink-0">
                <TopNav />
              </div>
              {/* Mobile header */}
              <div className={combine(styles.flexBetween, "px-4 py-4 mb-6 flex-shrink-0")}>
              <Image
                src={navbarImages.logoSvg}
                alt="Qubitars Technology Logo"
                width={120}
                height={33}
                className="cursor-pointer"
                priority
                sizes="120px"
              />
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="rounded-full p-2 text-blackish hover:text-accent hover:border-accent transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile nav items */}
            <nav className="flex-1 overflow-y-auto overflow-x-hidden md:overflow-visible px-4 py-6 space-y-4 min-h-0">
              {navItems.map(({ id, label }) => (
                <div key={id} className="pb-4">
                  <button
                    type="button"
                    onClick={() => handleMobileToggle(id)}
                    className={combine(styles.flexitems, "w-fit gap-3 text-xl transition-colors duration-200", mobileDropdown === id
                        ? "font-bold text-accent underline underline-offset-4"
                        : "font-normal text-blackish"
                    )}
                  >
                    {label}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${mobileDropdown === id ? "rotate-180 text-accent" : ""
                        }`}
                    />
                  </button>
                  {mobileDropdown === id && (
                    <div className="mt-4 text-blackish">
                      {renderMobileContent(id)}
                    </div>
                  )}
                </div>
              ))}
              {/* Contact button */}
              <Button
                variant="accent"
                size="lg"
                className="w-full justify-center gap-3 text-base font-semibold mt-5 z-10"
                onClick={closeMenu}
              >
                Contact Us
                <MoveUpRight className="h-5 w-5" />
              </Button>
              {/* Social links */}
              <div className={combine(styles.flexCenter, "mt-3")}>
                {socialLinks.map((link) => {
                  const Icon = link.icon!;
                  return (
                    <Link
                      key={link.id}
                      href={link.href || "#"}
                      aria-label={link.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-blackish/80 hover:text-accent transition-colors duration-200"
                    >
                      <Icon width={18} height={18} className="h-7 w-7" />
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="px-6 pb-8"></div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Navbar;
