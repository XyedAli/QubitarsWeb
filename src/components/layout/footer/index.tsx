import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { US, PK } from "country-flag-icons/react/3x2";
import { rootImages } from "@/lib/assets/images";
import Icons from "@/lib/assets/icons";
import { styles, combine } from "@/styles/style";
import { companyLinks, servicesLinks, industriesLinks, partnerBadges } from "@/data/footer";

const Footer = () => {
  return (
    <footer className="bg-[#1E274F] relative overflow-hidden">
      <div className="relative z-10 mx-4 lg:mx-7 xl:mx-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6 xl:gap-8 mb-12">
          <div className="lg:col-span-6">
            <div className="mb-4 lg:mb-6">
              <Image
                src={rootImages.logo2}
                alt="Qubitars Technologies Logo"
                width={200}
                height={50}
                className="mb-6 lg:mb-7 xl:mb-8 w-auto h-10 md:h-12 lg:h-14 xl:h-16"
                unoptimized
              />
              <div className="flex items-start gap-2 mb-5">
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

            <div className="flex gap-4">
              {partnerBadges.map((badge) => (
                <Image
                  key={badge.name}
                  src={badge.src}
                  alt={badge.name}
                  width={60}
                  height={30}
                  className="object-contain h-6 w-auto"
                  unoptimized
                />
              ))}
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
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-2" />
          <div className="relative -mb-2">
            <h1 className="text-[100px] md:text-[90px] lg:text-[120px] xl:text-[168px] 2xl:text-[173px] font-bold bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent opacity-40 font-bebas-neue tracking-wide">
              QUBITARS TECHNOLOGIES
            </h1>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 lg:gap-3 xl:gap-4 items-center relative z-10">
              <div className="col-span-5 text-white/60 text-[13px] lg:text-base text-center md:text-left ">
                © 2023 Qubitars Technologies | All Rights Reserved
              </div>

            <div className={combine(styles.flexCenter, "gap-4 col-span-3")}>
              <Link href="https://www.facebook.com/qubitars" target="_blank" className="text-white/80 p-2 rounded-full border border-white/80 hover:text-white transition-colors">
                <Icons.FaFacebook width={26} height={26} />
              </Link>
              <Link href="https://www.instagram.com/qubitars" target="_blank" className="text-white/80 p-2 rounded-full border border-white/80 hover:text-white transition-colors">
                <Icons.RiInstagramFill width={26} height={26} />
              </Link>
              <Link href="https://www.linkedin.com/company/qubitars" target="_blank" className="text-white/80 p-2 rounded-full border border-white/80 hover:text-white transition-colors">
                <Icons.FaLinkedin width={26} height={26} />
              </Link>
            </div>

            <div className="col-span-4 flex gap-3 justify-center md:justify-end text-[13px] lg:text-base">
              <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/60">|</span>
              <Link href="/terms-conditions" className="text-white/60 hover:text-white transition-colors">
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
