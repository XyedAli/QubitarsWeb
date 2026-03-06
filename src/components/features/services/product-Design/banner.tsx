import { combine, styles } from '@/styles/style';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const Banner = () => {
    return (
        <section className={combine(styles.sectionPadding, "min-h-[40vh] flex items-center")}>
            <div>
                <h2>Clear direction.
                    Smarter releases.
                    Real product impact.</h2>
                <Link href='/contact' className='bg-white w-40 lg:w-48 px-3 lg:px-5 py-2 mt-10 lg:mt-12 text-blue text-base lg:text-lg font-bold rounded-lg flex items-center gap-2 cursor-pointer block md:hidden'>
                    Get In Touch
                    <span className='w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-blue text-white'>
                        <MdOutlineArrowOutward />
                    </span>
                </Link>
            </div>

        </section>
    );
};

export default Banner;