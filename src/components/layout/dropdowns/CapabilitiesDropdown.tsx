import React from "react";
import { capabilitiesData, additionalServices } from "@/data";
import Image from "next/image";
import { styles, combine } from "@/styles/style";

// Capabilities dropdown component
export const CapabilitiesDropdown = () => {
  return (
    <>
      <div className="fixed inset-x-0 top-[97px] max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-white backdrop-blur-sm rounded-lg rounded-bl-[48px] rounded-br-[48px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 ease-in-out">
        <div className="pl-5 lg:pl-9 xl:pl-16 pt-10 pb-7 relative">
          {/* Grid Columns */}
          <div className="grid grid-cols-3 gap-6 lg:gap-12 z-10 relative">
            {/* Capabilities sections */}
            {capabilitiesData.map((section) => (
              <div key={section.id} className="space-y-4">
                {/* Section header */}
                <div className={combine(styles.flexitems, "gap-0 lg:gap-2")}>
                <h4 className="font-bold text-[15px] lg:text-lg text-accent border-accent/20 pb-2">
                    {section.title}
                  </h4>
                  {section.image && (
                    <Image src={section.image || ""} alt={section.title || ""} width={20} height={20} className="w-10 h-10 object-contain" />
                  )}
                </div>
                {/* Capability items */}
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item.id}
                      className={combine(styles.flexitems, "gap-1 xl:gap-3 text-black transition-all duration-300 cursor-pointer group/item")}
                    >
                      <div className={combine("pl-0 p-1 lg:p-1.5 rounded-lg text-blue group-hover/item:text-accent transition-colors duration-300", styles.flexCenter)}>
                        <div className={combine("w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8", styles.flexCenter)}>
                          <item.icon.component />
                        </div>
                      </div>
                      <span className={combine(styles.p4, "font-medium group-hover/item:text-accent")}>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Additional services */}
            <div className="space-y-2 lg:space-y-3">
              {additionalServices.map((service) => (
                <div key={service.id} className="group/item cursor-pointer">
                  <h3 className="font-bold text-base lg:text-lg text-accent hover:text-accent/80 transition-colors duration-300 pb-2">
                    {service.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
