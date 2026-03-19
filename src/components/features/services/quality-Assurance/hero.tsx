import Image from "next/image"
import { combine, styles } from "@/styles/style"
import { MdOutlineArrowOutward } from 'react-icons/md';
import { SectionHeading } from "@/components/shared/headings"
import { getQACloudinaryImages } from "@/lib/assets/images"
import Link from "next/link"
const HeroSection = () => {
        const qaImages = getQACloudinaryImages();
    return (
        <section className={combine(styles.flexCenter, styles.sectionPadding, "relative min-h-[55vh] md:min-h-[48vh] lg:min-h-[62vh] overflow-hidden bg-blue mt-4 lg:mt-8 xl:mt-10 rounded-2xl")}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 flex items-center">
                <div className={combine(styles.sectionPadding, "relative z-10")}>
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading
                            title="Prevent Failures in Advance"
                            subtitle="Quality Assurance"
                            titleColor="white"
                        />
                        <p className={combine(styles.p2, "text-white font-inter leading-relaxed xl:mb-6 max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto -mt-7")}>
                            From functional testing to performance validation, we detect issues early and keep your product reliable, secure, and scalable.</p>
                        <Link href="/conatct">
                            <button className='bg-white w-40 lg:w-48 px-3 lg:px-5 py-2 mt-6 text-blue text-base lg:text-lg font-bold rounded-lg flex items-center gap-2 cursor-pointer justify-start transition-colors'>
                                Get In Touch
                                <span className='w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-blue text-white'>
                                    <MdOutlineArrowOutward />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-end pe-17">
                    <Image
                        src={qaImages.QAimg1}
                        alt="Qubitars Technology quality assurance and software testing services"
                        width={500}
                        height={500}
                        className="h-full w-[260px] md:w-[300px] lg:w-[405px] xl:w-[400px] object-cover "
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
export default HeroSection