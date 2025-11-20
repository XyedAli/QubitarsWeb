'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { homeImages } from '@/../public/assets/images'
import { areaExpertServices } from '@/data/home'
import { h2, h6, p1 } from '@/commonStyles/styles'
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
            className="relative w-full min-h-screen overflow-hidden pt-14 pl-16 pr-0 xl:pl-32"
        >
            {/* Prominent Background Lines */}
            <div className="absolute inset-0 w-full h-full z-0 flex justify-end">
                <div className="relative w-full h-full max-w-[60%] flex">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div
                            key={num}
                            className="relative flex-1 h-full bg-cover bg-center bg-no-repeat opacity-100 brightness-[1.2] contrast-[1.3] saturate-[1.1]"
                            style={{
                                backgroundImage: `url('/images/line${num}.png')`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-8xl ml-auto pr-0 lg:min-h-[96vh]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Section - Heading and Description */}
                    <div className="lg:col-span-4 flex flex-col justify-center items-start pt-0">
                        <h1 className="text-4xl lg:text-5xl xl:text-[46px] font-satoshi font-black text-black mb-6 leading-tight">
                            Our Areas of Expertise
                        </h1>
                        <p className={`${h6} text-gray-600 font-fjalla-one leading-snug max-w-xs`}>
                            Whether you are an industry leader seeking website maintenance or a startup looking to make waves with AI, Qubitars has got you covered.
                        </p>
                    </div>

                    {/* Middle Section - Numbered Services List */}
                    <div className="lg:col-span-3 flex flex-col justify-center items-start gap-6 pt-0">
                        {expert.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedService(index)}
                                className="text-left transition-all duration-300 group w-full"
                            >
                                <div className="flex flex-col ">
                                    {/* ID Number - First Row */}
                                    <span className={`text-[20px] font-bold font-fjalla-one transition-all duration-300 ${
                                        selectedService === index
                                            ? 'text-black text-base'
                                            : 'text-black group-hover:text-[#FF8415] group-hover:opacity-100'
                                    }`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    {/* Title - Second Row */}
                                    <span
                                        className={`text-lg lg:text-[26px] font-normal border-b-2 pb-1 transition-all duration-300 w-fit ${
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
                    <div className="lg:col-span-5 flex justify-end ms-7">
                        <div 
                            className="relative flex flex-col rounded-3xl p-6 lg:p-8 overflow-hidden w-full max-w-[520px] lg:sticky lg:top-28 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('${homeImages.bg5}')`,
                            }}
                        >
                            {/* Service Image - Top of Card */}
                            <div className="relative w-[235px] h-[240px] lg:h-[160px] mb-6 rounded-3xl overflow-hidden mt-2">
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
                                className={`${h2} font-bold mb-2 bg-gradient-to-br from-[#F05C22] via-[#F58220] to-[#EA4D24] bg-clip-text text-transparent`}
                            >
                                {currentService.name}
                            </h2>

                            {/* Service Description */}
                            <p className={`${p1} font-medium text-black leading-sung mb-11 max-w-sm`}>
                                {currentService.description}
                            </p>

                            {/* Read More Button */}
                            <button className="inline-flex items-center text-[19px] gap-2 px-6 py-3 bg-white border-2 border-black text-black font-semibold  hover:bg-black hover:text-white transition-all duration-300 w-fit mb-8">
                                Read More
                            </button>

                            {/* Next Service Preview - Bottom Right */}
                            <div className="mt-auto flex items-center justify-end gap-3 pt-4">
                                <button
                                    onClick={() => setSelectedService(nextServiceIndex)}
                                    className="flex items-center gap-2 text-base text-black hover:text-[#FF8415] transition-colors duration-300"
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
