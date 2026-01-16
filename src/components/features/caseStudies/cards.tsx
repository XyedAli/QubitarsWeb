"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { styles } from "@/styles/style";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  link?: string;
}

interface CaseStudyCardsProps {
  caseStudies: CaseStudy[];
}

const CaseStudyCards: React.FC<CaseStudyCardsProps> = ({ caseStudies }) => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className={`${styles.container} ${styles.sectionPadding}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.imageAlt || study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-[#FC7E13]" />
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <h3 className={`${styles.h5} font-bold text-gray-900 mb-3 group-hover:text-[#FC7E13] transition-colors duration-300`}>
                  {study.title}
                </h3>
                <p className={`${styles.p2} text-gray-600 leading-relaxed line-clamp-3`}>
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCards;

