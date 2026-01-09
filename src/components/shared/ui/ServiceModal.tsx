"use client";

import { X, ArrowRight } from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useEffect } from "react";
import { styles } from "@/styles/style";
import { ServiceData } from "@/data/home";
import Image from "next/image";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300" />

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-[24px] md:rounded-[32px] shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:rotate-90 group"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 md:w-5 md:h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
        </button>

        {/* Modal Body - Two Column Layout */}
        <div className=" h-full">

          {/* Right Column - Content (col-span-8) */}
          <div className="overflow-y-auto scrollbar-hide px-5 lg:px-8 py-6 md:py-8 lg:py-12">
            {/* Title */}
            <h2 className={`${styles.h3} font-semibold text-accent font-outfit mb-2 lg:mb-4 xl:mb-6`}>
              {service.title}
            </h2>

            {/* Description */}
            {service.modalDescription && service.modalDescription.length > 0 ? (
              <div className="mb-4 md:mb-6 lg:mb-8 space-y-2 lg:space-y-3 xl:space-y-4">
                {service.modalDescription.map((desc, index) => (
                  <p key={index} className={`${styles.p2} text-gray-700 font-inter leading-relaxed`}>
                    {desc}
                  </p>
                ))}
              </div>
            ) : (
              <div className="mb-6 md:mb-8">
                <p className={`${styles.p2} text-gray-700 font-inter leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            )}

            {/* Services List - 2 items per row */}
            {service.services && service.services.length > 0 ? (
              <div className="mb-6 md:mb-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                  {service.services.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-3 group ${index === (service.services?.length ?? 0) - 1 ? 'md:col-span-2' : ''}`}
                    >
                      <div className="w-6 h-6 rounded-full bg-blue flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <MdOutlineArrowOutward className="w-3 h-3 text-white" />
                      </div>
                      <span className={`${styles.p3} text-gray-700 font-inter font-semibold`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              /* Learn More Button - Show when no services */
              <div className="mb-6 md:mb-8">
                <div className="group/btn flex items-center gap-2 cursor-pointer transition-all duration-300 hover:gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue flex items-center justify-center transition-all duration-300 group-hover/btn:bg-accent group-hover/btn:rotate--45 group-hover/btn:scale-110">
                    <ArrowRight className="w-4 h-4 text-white transition-transform duration-300" />
                  </div>
                  <span className={`${styles.p3} font-semibold text-blue font-inter transition-colors duration-300 hover:text-accent`}>
                    Learn More
                  </span>
                </div>
              </div>
            )}

            {/* Technologies - Icon Images in 2 Rows */}
            {service.technologyIcons && service.technologyIcons.length > 0 ? (
              <div className="grid grid-cols-7 gap-3 md:gap-4">
                {service.technologyIcons.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 hover:scale-110 transition-transform duration-300"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain w-full h-full"
                      unoptimized
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="${styles.p4} text-gray-700 font-inter font-medium text-center">${tech.name}</span>`;
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : service.technologies && service.technologies.length > 0 ? (
              <div className="grid grid-cols-5 gap-3 md:gap-4">
                {service.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-10 px-3 md:px-4 bg-gray-50 rounded-lg border border-gray-200  transition-all duration-300"
                  >
                    <span className={`${styles.p4} text-gray-700 font-inter font-medium whitespace-nowrap`}>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;

