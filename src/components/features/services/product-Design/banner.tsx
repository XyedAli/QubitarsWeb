import { combine, styles } from '@/styles/style';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Image from 'next/image';
import { getProductDesignCloudinaryImages } from "@/lib/assets/images";

const Banner = () => {
    const images = getProductDesignCloudinaryImages();

    return (
        <section className={combine("min-h-[32vh] lg:min-h-[37vh] md:flex md:justify-between bg-gray-50 px-5 lg:px-8 xl:px-11 py-9 md:py-0 mt-12 md:mt-0")}>
            <div className="w-full md:w-1/2 flex flex-col justify-center ps-0 lg:ps-2 xl:ps-14">
                <h2 className={combine(styles.h1, "text-blue font-bold max-w-[29rem] leading-tight flex justify-center")} >Clear direction.
                    Smarter releases.
                    Real product impact.</h2>
                <button className='bg-blue w-40 lg:w-48 px-3 lg:px-5 py-2 mt-10 lg:mt-12 text-white text-base lg:text-lg font-bold rounded-lg flex items-center gap-2 cursor-pointer justify-start hover:bg-blue-600 transition-colors'>
                    Get In Touch
                    <span className='w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-white text-blue'>
                        <MdOutlineArrowOutward />
                    </span>
                </button>
            </div>
            <div className="md:w-1/2 hidden md:flex justify-end">
                <div className="relative w-full max-w-[500px] h-[250px] lg:h-[320px] xl:h-[340px]">
                    <Image
                        src={images.bannerImage}
                        alt="Product Design Banner"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;