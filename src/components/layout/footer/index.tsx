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
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsMac(/macintosh|mac os x|macintel|ipad|iphone/.test(userAgent));
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  const footerTextClass = isMac
    ? "text-[100px] md:text-[90px] lg:text-[120px] xl:text-[168px] [1440px]:text-[176px] 2xl:text-[207px] [1920px]:text-[185px] 3xl:text-[188px]"
    : "text-[100px] md:text-[90px] lg:text-[120px] xl:text-[165px] [1440px]:text-[168px] 2xl:text-[174px] [1920px]:text-[172px] 3xl:text-[178px]";
  return (
    <footer className="bg-gradient-to-b from-[#1E274F] from-0% via-[#1E274F] via-85% to-[#171F3D] relative overflow-hidden">
      <div className={`relative z-10 pt-16 pb-7 ${styles.sectionPadding}`}>
      <div className="flex flex-col md:flex-row md:items-start justify-center md:justify-between gap-6 mb-6 lg:mb-7">
                <Image
                  src={rootImages.logo2}
                  alt="Qubitars Technologies Logo"
                  width={200}
                  height={50}
                  className="w-auto h-10 md:h-12 lg:h-14 xl:h-16 self-center md:self-start"
                  unoptimized
                />
                <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2.5 lg:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm min-w-[270px] lg:min-w-[325px] xl:min-w-[370px]"
                  />
                  <button
                    type="submit"
                    className="px-4 lg:px-8 xl:px-7 py-2.5 lg:py-3 bg-gradient-to-r from-[#F05C22] via-[#F58220] to-[#EA4D24] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 whitespace-nowrap text-base me-17"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-12 lg:gap-6 xl:gap-8 mb-7">
          <div className="lg:col-span-6 relative pr-5 md:mr-1 lg:mr-8 xl:mr-10">
            <div className="absolute right-0 top-0 h-full w-[1px] z-10" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.05) 100%)' }}></div>
            <Image
              src="/assets/images/home/footerbg.png"
              alt=""
              fill
              className="absolute top-0 h-full w-full object-contain object-left opacity-100 z-0"
              style={{ left: '-40px' }}
              unoptimized
            />
            <div className="mb-4 lg:mb-4 relative z-10">
              <h6 className={`text-lg font-bold text-white mb-3`}>Texas</h6>
              <div className="flex items-start gap-2 ">
                <MapPin className="w-4 h-4 text-white/90 mt-1 flex-shrink-0" />
                <p className="text-white/90 text-base mb-2">
                  Qubitars Technologies, Mumtaz Market,<br />
                  Gujranwala, Pakistan
                </p>
                </div>
                <a href="tel:+12094797184" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-4">
                  <US className="w-5 h-4 object-contain" />
                  +1 209 479 7184
                </a>
              
              <h6 className={`text-lg text-white font-bold mb-3`}>Gujranwala</h6>
              <div className=" gap-4 text-base ">
              <p className="text-white/90 text-base mb-2">
                  Qubitars Technologies, Mumtaz Market,<br />
                  Gujranwala, Pakistan
                </p>
                <a href="tel:+923026469153" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <PK className="w-5 h-4 object-contain" />
                  +92 302 6469 153
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 border-b-2 border-white/20 pb-3 md:border-b-0 md:pb-0">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm capitalize"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
          <h3 className="text-white font-bold text-lg mb-6 border-b-2 border-white/20 pb-3 md:border-b-0 md:pb-0">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm font-inter capitalize"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 ps-0 lg:ps-3 xl:ps-11">
          <h3 className="text-white font-bold text-lg mb-6 border-b-2 border-white/20 pb-3 md:border-b-0 md:pb-0">Industries</h3>
            <ul className="space-y-3 ">
              {industriesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm font-inter capitalize"
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

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-6 relative z-10">
            <div className="flex flex-row md:flex-col items-center md:items-start gap-0.3 text-white/50 text-sm text-center md:text-left order-2 md:order-1 self-center md:self-auto">
              <span>© 2023 Qubitars Technologies</span>
              <span>All Rights Reserved</span>
            </div>

            <div className={combine(styles.flexCenter, "gap-3 lg:gap-4 order-1 md:order-2 mt-4 md:mt-0 self-center md:self-auto")}>
              <Link href="https://www.facebook.com/qubitars" target="_blank" className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-transparent border border-white/50 hover:border-accent transition-all hover:scale-110">
                <Icons.Facebook className="w-5 h-5 lg:w-6 lg:h-6 text-white/40 hover:text-accent" />
              </Link>
              <Link href="https://www.instagram.com/qubitars" target="_blank" className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-transparent border border-white/50 hover:border-accent transition-all hover:scale-110">
                <Icons.Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-white/40 hover:text-accent" />
              </Link> 
              <Link href="https://www.linkedin.com/company/qubitars" target="_blank" className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-transparent border border-white/50 hover:border-accent transition-all hover:scale-110">
                <Icons.Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-white/40 hover:text-accent" />
              </Link>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end gap-0.3 text-sm order-3 self-center md:self-auto">
              <Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="block md:hidden text-white/50 mx-2">|</span>
              <Link href="/terms-conditions" className="text-white/50 hover:text-white transition-colors">
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
