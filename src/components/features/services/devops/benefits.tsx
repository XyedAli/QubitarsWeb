'use client';
import { combine, styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { benefitsData } from "@/data/devops/devops";

const Benefits = () => {
    return (
        <section className={combine(styles.sectionPadding, styles.sectionPaddingY)}>
            <div className="px-2 md:px-3 lg:px-12">
                <div className="text-left md:text-center mb-11 lg:mb-14">
                    <SectionHeading
                        title="Our DevOps Advantage"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
                    {benefitsData.map((benefit, index) => (
                        <div key={index} className="p-1 pl-6 relative">
                            <div className="absolute left-0 top-0 w-1 h-full flex flex-col">
                                <div className="h-1/2 bg-[#1E274F] rounded-full"></div>
                                <div className="h-1/2 bg-gray-100 rounded-full"></div>
                            </div>
                            <h3 className={combine("font-bold text-gray-900 mb-2 xl:mb-4", styles.h5)}>
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