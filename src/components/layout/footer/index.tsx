"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { US, PK } from "country-flag-icons/react/3x2";
import { rootImages } from "@/lib/assets/images";
import Icons from "@/lib/assets/icons";
import { styles, combine } from "@/styles/style";
import { companyLinks, servicesLinks, industriesLinks, partnerBadges } from "@/data";

const Footer = () => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsMac(/macintosh|mac os x|macintel|ipad|iphone/.test(userAgent));
    }
  }, []);

  const footerTextClass = isMac
    ? "text-[100px] md:text-[90px] lg:text-[120px] xl:text-[168px] [1440px]:text-[176px] 2xl:text-[182px] [1920px]:text-[185px] 3xl:text-[188px]"
    : "text-[100px] md:text-[90px] lg:text-[120px] xl:text-[165px] [1440px]:text-[168px] 2xl:text-[174px] [1920px]:text-[172px] 3xl:text-[178px]";
  return (
    <footer className="bg-gradient-to-b from-[#1E274F] from-0% via-[#1E274F] via-85% to-[#171F3D] relative overflow-hidden">
      <div className="relative z-10 mx-4 lg:mx-7 xl:mx-12 pt-16 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6 xl:gap-8 mb-7">
          <div className="lg:col-span-6">
            <div className="mb-4 lg:mb-4">
              <Image
                src={rootImages.logo2}
                alt="Qubitars Technologies Logo"
                width={200}
                height={50}
                className="mb-6 lg:mb-7 xl:mb-8 w-auto h-10 md:h-12 lg:h-14 xl:h-16"
                unoptimized
              />
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="w-4 h-4 text-white/90 mt-1 flex-shrink-0" />
                <p className="text-white/90 text-base">
                  Qubitars Technologies, Mumtaz Market,<br />
                  Gujranwala, Pakistan
                </p>
              </div>
              <div className="flex gap-4 text-base items-center">
                <a href="tel:+12094797184" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <US className="w-5 h-4 object-contain" />
                  +1 209 479 7184
                </a>
                <a href="tel:+923026469153" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <PK className="w-5 h-4 object-contain" />
                  +92 302 6469 153
                </a>
              </div>
            </div>

            <div className="mt-1">
              <h4 className="text-white font-semibold text-base mb-3">Subscribe to our Newsletter</h4>
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  className="px-3 lg:px-4 py-2 text-base font-medium bg-white text-[#1E274F] hover:text-[#5496D6] transition-all duration-300 rounded-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">SERVICES</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm font-inter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">INDUSTRIES</h3>
            <ul className="space-y-3">
              {industriesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm font-inter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="relative">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-90" />
          <div className="relative hidden md:block -mb-4">
            <h2 className={`${footerTextClass} font-bold bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent opacity-40 tracking-wide font-bebas-neue text-center`}>
              QUBITARS TECHNOLOGIES
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative z-10">
            <div className="flex flex-col items-center md:items-start gap-0.3 text-white/80 text-sm lg:text-base text-center md:text-left order-2 md:order-1">
              <span>© 2023 Qubitars Technologies</span>
              <span>All Rights Reserved</span>
            </div>

            <div className={combine(styles.flexCenter, "gap-3 lg:gap-4 order-1 md:order-2")}>
              <Link href="https://www.facebook.com/qubitars" target="_blank" className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-transparent border border-white/50 hover:border-[#60A5FA] hover:bg-[#60A5FA]/10 transition-all hover:scale-110">
                <Icons.Facebook className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </Link>
              <Link href="https://www.instagram.com/qubitars" target="_blank" className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-transparent border border-white/50 hover:border-[#60A5FA] hover:bg-[#60A5FA]/10 transition-all hover:scale-110">
                <Icons.Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </Link>
              <Link href="https://www.linkedin.com/company/qubitars" target="_blank" className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-transparent border border-white/50 hover:border-[#60A5FA] hover:bg-[#60A5FA]/10 transition-all hover:scale-110">
                <Icons.Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-end gap-0.3 text-sm lg:text-base order-3">
              <Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-white/80 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
