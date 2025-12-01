'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { homeImages } from '@/../public/assets/images'
import { areaExpertServices } from '@/data/home'
import { combine, styles } from '@/commonStyles/styles'
import { useAreaExpert } from '@/lib/hooks/useAreaExpert'

const AreaExpert = () => {
    const expert = areaExpertServices
    const {
        selectedService,
        setSelectedService,
        sectionRef,
        currentService,
        nextServiceIndex,
        nextService,
    } = useAreaExpert({ services: expert })

    return (
        <main
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden pb-14 xl:pb-0 pt-14 pl-4 pr-0 xl:pl-32"
        >

            {/* Content Container */}
            <div className="relative z-10 max-w-8xl ml-auto pr-0 lg:min-h-[96vh]">
                <div className="grid grid-cols-12 gap-0 md:gap-2 lg:gap-16">
                    {/* Left Section - Heading and Description */}
                    <div className={combine("col-span-12 md:col-span-4 justify-center items-start pt-0 mb-5 md:mb-0", styles.flexCol)}>
                        <h1 className={combine("font-satoshi font-black text-black mb-4 lg:mb-6 leading-tight",styles.h1)}>
                            Our Areas of Expertise
                        </h1>
                        <p className={combine(`text-gray-600 font-fjalla-one leading-snug max-w-xs`,styles.h6)}>
                            Whether you are an industry leader seeking website maintenance or a startup looking to make waves with AI, Qubitars has got you covered.
                        </p>
                    </div>

                    {/* Middle Section - Numbered Services List */}
                    <div className={combine("col-span-4 md:col-span-3 justify-center items-start gap-6 pt-0", styles.flexCol)}>
                        {expert.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedService(index)}
                                className="text-left transition-all duration-300 group w-full"
                            >
                                <div className={styles.flexCol}>
                                    {/* ID Number - First Row */}
                                    <span className={combine(styles.p3,`font-bold font-fjalla-one transition-all duration-300 ${
                                        selectedService === index
                                            ? 'text-black text-base'
                                            : 'text-black group-hover:text-[#FF8415] group-hover:opacity-100'
                                    }`)}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    {/* Title - Second Row */}
                                    <span
                                        className={`text-base md:text-xl xl:text-[26px] font-normal border-b-2 pb-1 transition-all duration-300 w-fit ${
                                            selectedService === index
                                                ? 'text-[#FF8415] font-semibold border-[#FF8415]'
                                                : 'text-black border-black '
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Section - Selected Service Details Card */}
                    <div className={combine("col-span-8 md:col-span-5 justify-end ms-5 xl:ms-7", styles.flexitems)}>
                        <div 
                            className={combine("relative rounded-3xl px-3 py-1 lg:px-6 lg:py-6 xl:px-8 xl:py-8 overflow-hidden w-full max-w-[520px] lg:sticky lg:top-28 bg-cover bg-center bg-no-repeat", styles.flexCol)}
                            style={{
                                backgroundImage: `url('${homeImages.bg5}')`,
                            }}
                        >
                            {/* Service Image - Top of Card */}
                            <div className="relative w-[200px] lg:w-[235px] h-[130px] lg:h-[160px] mb-6 rounded-3xl overflow-hidden mt-2">
                                <Image
                                    src={homeImages.aboutimg1}
                                    alt={currentService.name}
                                    fill
                                    className="object-cover rounded-3xl"
                                    onError={(e) => {
                                        // Fallback to a placeholder if image doesn't exist
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
                                    }}
                                />
                            </div>

                            {/* Service Title */}
                            <h2 
                                className={combine(`font-bold mb-2 bg-gradient-to-br from-[#F05C22] via-[#F58220] to-[#EA4D24] bg-clip-text text-transparent text-[24px] md:text-[28px] lg:text-[27px] xl:text-[36px]`)}
                            >
                                {currentService.name}
                            </h2>

                            {/* Service Description */}
                            <p className={combine("font-medium text-black leading-sung mb-8 lg:mb-11 max-w-sm",styles.p1)}>
                                {currentService.description}
                            </p>

                            {/* Read More Button */}
                            <button className={combine("inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white border-2 border-black text-black font-semibold  hover:bg-black hover:text-white transition-all duration-300 w-fit mb-2 lg:mb-6 xl:mb-8",styles.p3)}>
                                Read More
                            </button>

                            {/* Next Service Preview - Bottom Right */}
                            <div className={combine("mt-auto justify-end gap-3 pt-4", styles.flexitems)}>
                                <button
                                    onClick={() => setSelectedService(nextServiceIndex)}
                                    className={combine("gap-2 text-black hover:text-[#FF8415] transition-colors duration-300", styles.p4 ,styles.flexitems)}
                                >
                                    <span className="text-base font-semibold max-w-3xs">{nextService.name}</span>
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AreaExpert
