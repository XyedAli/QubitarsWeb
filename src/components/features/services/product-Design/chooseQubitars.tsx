// components/WhyChooseUs.jsx
import Image from "next/image";
import { getProductDesignIcons } from "@/lib/assets/icons";
import { getProductDesignCloudinaryImages } from "@/lib/assets/images";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { chooseQubitarsFeaturesData } from "@/data/product-design";

export default function WhyChooseUs() {
    const images = getProductDesignCloudinaryImages();
    const icons = getProductDesignIcons();
    const features = chooseQubitarsFeaturesData.map(feature => ({
        ...feature,
        icon: icons[feature.icon as keyof typeof icons]
    }));

    return (
        <section className={`bg-white ${styles.sectionPaddingY}`}>
            <div className={`${styles.sectionPaddingX} grid grid-cols-12 gap-9 lg:gap-12 xl:gap-16 items-center`}>

                {/* ================= LEFT SIDE ================= */}
                <div className="col-span-12 lg:col-span-6">

                    <SectionHeading
                        title="Strategy Aligned With Execution Excellence"
                        subtitle="Why Choose Us"
                    />

                    {/* Feature List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4 xl:gap-y-7">
                        {features.map((feature, index) => (
                            <div key={index} className={`flex gap-5`}>
                                <div className={`w-12 h-12 ${styles.flexCenter} border-b-2 ${feature.borderColor} text-orange-500`}>
                                    <img src={feature.icon} alt="" className="w-9 h-9" />
                                </div>
                                <div>
                                    <h4 className={`text-[20px] md:text-[24px] xl:text-[26px] font-semibold text-blue mb-1 xl:mb-2`}>
                                        {feature.title}
                                    </h4>
                                    <p className={`${styles.p2} text-blue leading-normal max-w-2xl `}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="col-span-12 lg:col-span-6 hidden lg:block">
                    <div className="flex justify-end ">

                        <div className="relative max-w-[520px] w-full h-[500px] xl:h-[600px] flex justify-end">
                            <Image
                                src={images.pdImg5}
                                alt="Handshake"
                                fill
                                className="object-cover rounded-tr-4xl rounded-bl-4xl"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}