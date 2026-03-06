import Image from "next/image"
import { combine, styles } from "@/styles/style"
import { cloudinaryImages } from "@/lib/assets/images"

const HeroSection = () => {
  const devOpsImages = cloudinaryImages.devops;

  return (
    <section className={combine(styles.flexCenter, styles.sectionPadding, "relative min-h-[55vh] md:min-h-[48vh] lg:min-h-[54vh] overflow-hidden bg-blue mt-4 lg:mt-8 xl:mt-10 rounded-2xl")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 flex items-center">
         <div className={combine(styles.sectionPadding, "relative z-10")}>
          <div className="max-w-4xl mx-auto">
            <h1 className={combine(styles.h1, "font-bold text-white leading-tight mb-4 lg:mb-6")}>
              Reliable DevOps For Every Platform
            </h1>

            <p className={combine(styles.p2, "text-white font-inter leading-relaxed xl:mb-6 max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto")}>
              We accelerate software delivery by automating workflows, optimizing CI/CD pipelines, and ensuring reliable, secure, high-performance systems at scale.
            </p>
          </div>

        </div>
        <div className="flex justify-center">
          <Image
            src={devOpsImages.hero}
            alt="DevOps Development"
            width={500}
            height={500}
            className="h-full w-[260px] md:w-[300px] lg:w-[405px] xl:w-[480px] object-cover "
            priority
          />
        </div>
      </div>
    </section>
  )
}
export default HeroSection