"use client";

import { combine, styles } from "@/styles/style";
import { getQACloudinaryImages } from "@/lib/assets/images";
import { MdOutlineArrowOutward } from 'react-icons/md';
import Link from "next/link"

const Banner = () => {
    const { QABannerBg } = getQACloudinaryImages();

    return (
        <section
            className={combine(styles.sectionPadding, "bg-blue relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-xl")}
            style={{ backgroundImage: `url(${QABannerBg})` }}
        >
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-16 lg:py-24 flex flex-col justify-center items-center">
                <h2 className={combine(styles.h1, "text-white font-bold mb-6")}>
                    Ensure your product meets the higher standards       
                     </h2>

                <Link href="/conatct">
                    <button className='bg-white w-40 lg:w-48 px-3 lg:px-5 py-2 mt-6 text-blue text-base lg:text-lg font-bold rounded-lg flex items-center gap-2 cursor-pointer justify-center transition-colors'>
                        Get In Touch
                        <span className='w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-blue text-white'>
                            <MdOutlineArrowOutward />
                        </span>
                    </button>
                </Link>
            </div>
            
        </section>
    );
};

export default Banner;