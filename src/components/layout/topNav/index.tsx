import Icons from "@/lib/assets/icons";
import { US, PK } from "country-flag-icons/react/3x2";
import Link from "next/link";
import { styles, combine } from "@/styles/style";

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/qubitars", Icon: Icons.Linkedin },
  { href: "https://www.facebook.com/qubitars", Icon: Icons.Facebook },
  { href: "https://wa.me/923026469153", Icon: Icons.Whatsapp, iconClass: "text-darkGray hover:text-accent transition-colors duration-200" },
  { href: "https://www.instagram.com/qubitars", Icon: Icons.Instagram },
];

const TopNav = () => (
  <div className="hidden md:block bg-[#C2C2C2]/10 md:bg-[#F7F7F7] shadow-mD py-2.5 ps-2">
    <div className={styles.sectionPadding}>
      <div className={styles.flexBetween}>
        <div className={combine(styles.flexitems, "gap-2 hover:text-accent transition-all duration-300 cursor-pointer group")}>
          <Icons.Mail width={20} height={20} />
          <p className={combine(styles.topNavText, "text-[12px] md:text-[13px]")}>info@qubitars.com</p>
        </div>
        <div className={combine(styles.flexitems, "gap-2 md:gap-4")}>
          <div className={styles.topNavContainer}>
            <PK title="Pakistan" className="h-5 w-5 object-contain" />
            <p className={styles.topNavText}>+92 302 6469153</p>
          </div>
          <div className={styles.topNavContainer}>
            <US title="United States" className="w-5 h-5 object-contain" />
            <p className={styles.topNavText}>+1 209 479 7184</p>
          </div>
          <div className="hidden sm:block h-5 w-[1px] bg-[#DFDFDF]" />
          <div className={combine("hidden md:flex", styles.flexitems, "gap-3 text-black")}>
            {SOCIAL_LINKS.map(({ href, Icon, iconClass }) => (
              <Link key={href} href={href} target="_blank">
                <Icon width={20} height={20} className={iconClass ?? "hover:text-accent"} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopNav;
