'use client';
import { combine, styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";

const Benefits = () => {
    const benefits = [
        {
            title: "Business - Aligned Delivery",
            description: "We align our development process with your business objectives, ensuring that every solution directly supports your growth targets and operational efficiency goals."
        },
        {
            title: "Business - Aligned Delivery",
            description: "We align our development process with your business objectives, ensuring that every solution directly supports your growth targets and operational efficiency goals."
        },
        {
            title: "Business - Aligned Delivery",
            description: "We align our development process with your business objectives, ensuring that every solution directly supports your growth targets and operational efficiency goals."
        },
        {
            title: "Business - Aligned Delivery",
            description: "We align our development process with your business objectives, ensuring that every solution directly supports your growth targets and operational efficiency goals."
        }
    ];

    return (
        <section className={combine( styles.sectionPadding,styles.sectionPaddingY)}>
            <div className="px-6 lg:px-12">
                <div className="text-center mb-14">    
                <SectionHeading
                title="Our DevOps Advantage"
                />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="p-1 pl-6 relative">
                            <div className="absolute left-0 top-0 w-1 h-full flex flex-col">
                                <div className="h-1/2 bg-[#1E274F] rounded-full"></div>
                                <div className="h-1/2 bg-gray-100 rounded-full"></div>
                            </div>
                            <h3 className={combine("font-bold text-gray-900 mb-4", styles.h5)}>
                                {benefit.title}
                            </h3>
                            <p className={combine("text-gray-700 leading-relaxed", styles.p2)}>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;