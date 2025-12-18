"use client";

import { Home, Briefcase, Building } from "lucide-react";
import { styles } from "@/styles/style";

const businessTypes = [
  {
    icon: Home,
    title: "Startups",
    description: "Transform your innovative software ideas into reality with our tailored and scalable solutions designed specifically for startups ready to make their mark.",
  },
  {
    icon: Briefcase,
    title: "Small Business",
    description: "We understand and tackle the unique challenges faced by SMEs with tailored software solutions that drive growth and operational efficiency.",
  },
  {
    icon: Building,
    title: "Enterprise",
    description: "Drive innovation, optimize operations, and ensure seamless scalability for your enterprise with our comprehensive software development services.",
  },
];

const BusinessTypes = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-4 lg:mx-7 xl:mx-12">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className={`${styles.h1} font-bold text-blue mb-5 md:mb-6 leading-tight font-outfit`}>
            Driving Success for All Business Types
          </h2>
          <p className={`${styles.p2} text-blue max-w-3xl mx-auto leading-relaxed`}>
            Being the leading software development agency, we help all kinds of businesses, whether budding startups or established enterprises, overcome challenges through our top-notch software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {businessTypes.map((business, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl p-8 lg:p-8 transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="absolute top-4 right-4 lg:-top-8 lg:right-6">
                <div className="relative">
                  <div className="w-16 h-16 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <business.icon className="w-8 h-8 lg:w-8 lg:h-8 text-[#F05C22]" strokeWidth={2} />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#F05C22] m-[-4px]"></div>
                </div>
              </div>
              <h3 className={`${styles.h4} font-bold mb-4 text-blue pr-20`}>
                {business.title}
              </h3>
              <p className={`${styles.p3} text-blue leading-relaxed`}>
                {business.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;

