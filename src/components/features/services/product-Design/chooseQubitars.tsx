// components/WhyChooseUs.jsx
import Image from "next/image";
import { getProductDesignIcons } from "@/lib/assets/icons";
import { getDevOpsCloudinaryImages } from "@/lib/assets/images";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";

export default function WhyChooseUs() {
    const images = getDevOpsCloudinaryImages();
    const icons = getProductDesignIcons();

    const features = [
        {
            icon: icons.pdIcon8,
            title: "Strategic Thinking",
            description: "We look beyond features and focus on long-term value, aligning every initiative with measurable business objectives.",
            borderColor: "border-orange-400"
        },
        {
            icon: icons.pdIcon9,
            title: "Unified Execution",
            description: "Business goals, user expectations, and technical feasibility are integrated into one clear, actionable direction.",
            borderColor: "border-orange-500"
        },
        {
            icon: icons.pdIcon10,
            title: "Results–Driven Delivery",
            description: "Every milestone, sprint, and release is structured around performance, adoption, and growth.",
            borderColor: "border-orange-600"
        },
        {
            icon: icons.pdIcon11,
            title: "Structured Innovation",
            description: "Research-driven discovery paired with iterative execution for clear, fast progress.",
            borderColor: "border-orange-700"
        }
    ];

    return (
        <section className={`bg-[#F7F7F7] ${styles.sectionPaddingY}`}>
            <div className={`${styles.sectionPaddingX} grid grid-cols-12 gap-16 items-center`}>

                {/* ================= LEFT SIDE ================= */}
                <div className="col-span-12 lg:col-span-6">

                    <SectionHeading
                        title="Strategy Aligned With Execution Excellence"
                        subtitle="Why Choose Us"
                    />

                    {/* Feature List */}
                    <div className="space-y-7">
                        {features.map((feature, index) => (
                            <div key={index} className={`flex gap-5`}>
                                <div className={`w-12 h-12 ${styles.flexCenter} border-b-2 ${feature.borderColor} text-orange-500`}>
                                    <img src={feature.icon} alt="" className="w-9 h-9" />
                                </div>
                                <div>
                                    <h4 className={`text-[26px] font-semibold text-blue mb-2`}>
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
                <div className="col-span-12 lg:col-span-6 flex justify-end">

                    <div className="relative w-[520px] h-[600px]">
                        <Image
                            src={images.chooseQubitars1}
                            alt="Handshake"
                            fill
                            className="object-cover rounded-tr-4xl rounded-bl-4xl"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}