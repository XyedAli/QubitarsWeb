"use client";
import Image from "next/image";
import Link from "next/link";
import { navbarImages, homeImages } from "@/lib/assets/images";
import { ChevronDown, Menu, MoveRight, MoveUpRight, X } from "lucide-react";
import { Button } from "@/components/shared/ui";
import TopNav from "@/components/layout/topNav";
import { navItems } from "@/data";
import { useNavbar } from "@/lib/hooks";
import { styles, combine } from "@/styles/style";
import { MobileDropdownContent } from "./MobileDropdownContent";
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


  return (
    <main className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <TopNav />
      {/* Main header */}
      <div className="mx-4 lg:mx-7 xl:mx-16 mx-1700-260">
        <div ref={headerRef} className={combine(styles.flexBetween, "py-3 md:py-2")}>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/images/home/logo3.png"
              alt="Qubitars Technology Logo"
              width={450}
              height={120}
              sizes="(max-width: 768px) 240px, 300px"
              className="cursor-pointer w-[135px] md:w-[125px] h-[36px] md:h-[36px] lg:h-[40px] xl:h-[44px] lg:w-[135px] xl:w-[160px]"
              priority
            />
          </Link>

          <div className={combine(styles.flexitems, "gap-4")}>
            {/* Desktop nav */}
            <div className={combine("hidden md:flex", styles.flexitems, "gap-7 lg:gap-14")}>
              <div className={combine(styles.flexitems, "gap-4 lg:gap-8")}>
                {navItems.map(({ id, label, DropdownComponent }) => (
                  <div
                    key={id}
                    className="relative group"
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
                className="group hover:bg-transparent border border-accent"
              >
                <Link href="/contact">
                Contact Us
                </Link>
                <div className="relative">
                  <MoveUpRight className="w-5 h-5 mx-1 text-white transition-opacity duration-300 group-hover:opacity-0" />
                  <MoveRight className="w-5 h-5 mx-1 text-white font-bold absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
              <Link href="/">
                <Image
                  src="/assets/images/home/logo3.png"
                  alt="Qubitars Technology Logo"
                  width={150}
                  height={35}
                  className="cursor-pointer"
                  priority
                  sizes="170px"
                />
              </Link>
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
                      <MobileDropdownContent dropdownId={id} />
                    </div>
                  )}
                </div>
              ))}
              {/* Contact button */}
              <Button
                variant="accent"
                size="lg"
                className="w-45 justify-center gap-3 text-base font-semibold mt-5 z-10"
                onClick={closeMenu}
              >
                <Link href="/contact">
                  Contact Us
                </Link>
                <MoveUpRight className="h-5 w-5" />
              </Button>
              {/* Social links */}
              <div className={combine(styles.flexCenter, "mt-3 gap-3 border-t border-gray-400 pt-3")}>
                {socialLinks.map((link) => {
                  const Icon = link.icon!;
                  return (
                    <Link
                      key={link.id}
                      href={link.href || "#"}
                      aria-label={link.name}
                      className="flex h-10 w-10 border border-gray-400 p-2 items-center justify-center rounded-full text-gray-400 hover:text-accent hover:border-accent transition-colors duration-200"
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
