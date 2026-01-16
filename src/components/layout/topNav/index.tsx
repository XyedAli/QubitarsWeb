import Icons from "@/lib/assets/icons";
import { US, PK } from "country-flag-icons/react/3x2";
import Link from "next/link";
import { styles, combine } from "@/styles/style";

const TopNav = () => {
  return (
    <div className="hidden md:block bg-[#C2C2C2]/10 md:bg-[#F7F7F7] shadow-mD py-2.5 ps-2">
      <div className={styles.sectionPadding}>
        <div className={styles.flexBetween}>
          {/* Website Link */}
          <div className={combine(styles.flexitems, "gap-2 hover:text-accent transition-all duration-300 cursor-pointer group")}>
            <Icons.Mail width={20} height={20} />
            <p className={combine(styles.topNavText, "text-[12px] md:text-[13px]")}>info@qubitars.com</p>
          </div>
          <div className={combine(styles.flexitems, "gap-2 md:gap-4")}>
            {/* Pakistan Contact Number */}
            <div className={styles.topNavContainer}>
              <PK title="Pakistan" className="h-5 w-5 object-contain" />
              <p className={styles.topNavText}>+92 302 6469153</p>
            </div>
            {/* Us Contact Number */}
            <div className={styles.topNavContainer}>
              <US title="United States" className="w-5 h-5 object-contain" />
              <p className={styles.topNavText}>+1 209 479 7184</p>
            </div>
            <div className="hidden sm:block h-5 w-[1px] bg-[#DFDFDF]" />
            <div className={combine("hidden md:flex", styles.flexitems, "gap-3 text-black")}>
              {/* Linkedin */}
              <Link href="https://www.linkedin.com/company/qubitars" target="_blank">
                <Icons.Linkedin width={20} height={20} className="hover:text-accent" />
              </Link>
              {/* Facebook */}
              <Link href="https://www.facebook.com/qubitars" target="_blank">
                <Icons.Facebook width={20} height={20} className="hover:text-accent" />
              </Link>
              {/* Whatsapp */}
              <Link href="https://wa.me/923026469153" target="_blank">
                <Icons.Whatsapp width={20} height={20} className="text-darkGray hover:text-accent transition-colors duration-200" />
              </Link>
              {/* Instagram */}
              <Link href="https://www.instagram.com/qubitars" target="_blank">
                <Icons.Instagram width={20} height={20} className="hover:text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;