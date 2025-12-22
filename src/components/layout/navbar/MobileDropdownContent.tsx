import Image from "next/image";
import { BriefcaseBusiness, Building2, Lightbulb } from "lucide-react";
import { capabilitiesData, additionalServices, industries as industriesData, companyData, engagementData } from "@/data";
import { styles, combine } from "@/styles/style";

interface MobileDropdownContentProps {
  dropdownId: string;
}

export const MobileDropdownContent = ({ dropdownId }: MobileDropdownContentProps) => {
  switch (dropdownId) {
    case "capabilities":
      return (
        <div className="space-y-6">
          {capabilitiesData.map((section, index) => {
            const sectionContent = (
              <div className="space-y-4 flex-1 min-w-[180px]">
                <div className={combine(styles.flexitems, "gap-3")}>
                <h4 className="font-semibold text-base text-accent">{section.title}</h4>
                  {section.image && (
                    <Image
                      src={section.image}
                      alt={section.title || ""}
                      width={24}
                      height={24}
                      className="w-9 h-9 object-contain"
                      loading="lazy"
                      sizes="24px"
                      unoptimized
                    />
                  )}
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item.id}
                      className={combine(styles.flexitems, "gap-2 text-black mb-4")}
                    >
                      <div className="flex-shrink-0">
                        <item.icon.component width="20" height="20" />
                      </div>
                      <span >{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

            if (index === 0) {
              return (
                <div
                  key={section.id}
                  className="flex flex-wrap gap-6 items-start"
                >
                  <div className="flex-1 min-w-[220px] ">
                    {sectionContent}
                  </div>
                  <div className="flex-1 min-w-[80px] space-y-2">
                    <div className="space-y-2 text-[18px] font-bold text-accent">
                      {additionalServices.map((service) => (
                        <p key={service.id}>{service.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={section.id} className="space-y-4">
                {sectionContent}
              </div>
            );
          })}
        </div>
      );
    case "industries":
      return (
        <div className="space-y-2 text-sm text-[#1E274F]">
          {industriesData.map((industry) => (
            <div
              key={industry.id}
              className={combine(styles.flexitems, "gap-2 py-1")}
            >
              <span className={combine(styles.flexCenter, "h-6 w-6")}>
                <industry.icon width={22} height={22} className="" />
              </span>
              <span className="text-sm font-medium">{industry.name}</span>
            </div>
          ))}
        </div>
      );
    case "company":
      return (
        <div className="space-y-5 text-sm text-[#1E274F]">
          {[
            {
              title: "Company",
              icon: Building2,
              items: companyData.filter((item) => item.type === "companyLink"),
            },
            {
              title: "Inside Qubitars",
              icon: Lightbulb,
              items: companyData.filter((item) => item.type === "insideQubitarsLink"),
            },
            {
              title: "Careers",
              icon: BriefcaseBusiness,
              items: companyData.filter((item) => item.type === "careersLink"),
            },
          ].map((section) => (
            <div key={section.title} className="space-y-2">
               <div className={combine(styles.flexitems, "gap-2 text-base font-semibold")}>
                <section.icon className="h-6 w-6" />
                <span className="text-accent">{section.title}</span>
              </div>
              <ul className="space-y-1 pl-6 text-[14px] font-medium text-blackish/80">
                {section.items.map((item) => (
                  <li key={item.id}>{item.label}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "engagement":
      return (
        <div className="space-y-2">
          {engagementData
            .filter((item) => item.type === "service")
            .map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex items-start gap-3 pl-2 text-blackish/80"
                >
                  {IconComponent && (
                    <IconComponent
                      width={28}
                      height={28}
                      className="mt-1 text-base"
                    />
                  )}
                  <div>
                    <p className="font-medium text-sm text-accent">{service.title}</p>
                    <p className="text-xs text-blackish/90 max-w-xs">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      );
    default:
      return null;
  }
};

