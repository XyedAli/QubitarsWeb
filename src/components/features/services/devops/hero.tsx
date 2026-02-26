import Image from "next/image"
import { combine, styles } from "@/styles/style"
import { cloudinaryImages } from "@/lib/assets/images"

const HeroSection = () => {
  const devOpsImages = cloudinaryImages.devops;

  return (
    <section className={combine(styles.flexCenter, styles.sectionPadding, "relative min-h-[40vh] md:min-h-[68vh] overflow-hidden bg-blue mt-4 lg:mt-8 xl:mt-10 rounded-2xl")}>
      <div className="grid grid-cols-2 gap-16 items-center">
        <div className={combine(styles.sectionPadding, "relative z-10")}>
          <div className="max-w-4xl mx-auto">
            <h1 className={combine(styles.h1, "font-bold text-white leading-tight mb-4 lg:mb-6")}>
              Reliable DevOps For Every Platform
            </h1>

            <p className={combine(styles.p2, "text-white font-inter leading-relaxed mb-8 max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto")}>
              We accelerate software delivery by automating workflows, optimizing CI/CD pipelines, and ensuring reliable, secure, high-performance systems at scale.
            </p>
          </div>

        </div>
        <div>
          <Image
            src={devOpsImages.hero}
            alt="DevOps Development"
            width={500}
            height={500}
            className="h-full w-[160px] md:w-[210px] lg:w-[355px] xl:w-[516px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
export default HeroSection