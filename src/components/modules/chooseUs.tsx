"use client";
import React from "react";
import { LuRocket, LuScanEye } from "react-icons/lu";
import { chooseUsContent } from "@/data/home";
import type { ChooseUsCard } from "@/lib/types/home";
import { h2, p3, p4, h6 } from "@/commonStyles/styles";

const iconMap = {
    rocket: LuRocket,
    eye: LuScanEye,
};

const FeatureCard = ({ card }: { card: ChooseUsCard }) => {
    const IconComponent = card.icon ? iconMap[card.icon] : null;

    return (
        <div
            className="p-6 rounded-2xl mx-2 text-white"
            style={{ backgroundColor: card.accentColor }}
        >
            {IconComponent && <IconComponent size={50} className="mb-4" />}
            {!IconComponent && card.imageSrc && (
                <img src={card.imageSrc} alt={card.title} className="mb-4" />
            )}
            <p className={`${p3} font-bold`}>{card.title}</p>
            <p className={p4}>{card.description}</p>
        </div>
    );
};

const ChooseUs = () => {
    const [primaryCard, ...otherCards] = chooseUsContent.cards;
    const [firstSecondaryImage, secondSecondaryImage] = chooseUsContent.secondaryImages;

    return (
        <section className="relative w-full overflow-hidden bg-[#EDEFF8]/40 py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className={`${h2} font-black text-black font-satoshi`}>
                        {chooseUsContent.heading}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-5">
                    <div className="lg:col-span-6 flex items-center">
                        <p className={`${h6} font-normal leading-tight font-fjalla-one text-black max-w-lg`}>
                            {chooseUsContent.subheading}
                        </p>
                    </div>
                    <div className="col-span-3">
                        <FeatureCard card={primaryCard} />
                    </div>
                    <div className="col-span-3">
                        <img src={chooseUsContent.primaryImage} alt="Choose Us Primary" className="h-[270px] w-[270px]" />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                        <div className="flex justify-end">
                            <img src={firstSecondaryImage} alt="Choose Us secondary" className="h-[260px] w-[250px]" />
                        </div>
                        <div>
                            <FeatureCard card={otherCards[0]} />
                        </div>
                        <div>
                            <img src={secondSecondaryImage} alt="Choose Us secondary" className="h-[260px] w-[250px]" />
                        </div>
                        <div>
                            <FeatureCard card={otherCards[1]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
