"use client";
import React from "react";
import { LuRocket, LuScanEye, LuGitCompareArrows } from "react-icons/lu";
import { chooseUsContent } from "@/data/home";
import type { ChooseUsCard } from "@/lib/types/home";
import { h2, p3, p4, h4} from "@/commonStyles/styles";

const iconMap = {
    rocket: LuRocket,
    eye: LuScanEye,
    LuGitCompareArrows: LuGitCompareArrows,
};

const FeatureCard = ({ card }: { card: ChooseUsCard }) => {
    const IconComponent = card.icon ? iconMap[card.icon] : null;

    return (
        <div
            className="p-3.5 xl:p-6 rounded-2xl mx-0 md:mx-2 text-white"
            style={{ backgroundColor: card.accentColor }}
        >
            {IconComponent && (
                <IconComponent className="mb-2 lg:mb-3 xl:mb-4 text-[40px] lg:text-[47px] lg:text-[52px]" />
            )}
            {!IconComponent && card.imageSrc && (
                <img src={card.imageSrc} alt={card.title} className="mb-2 lg:mb-3 xl:mb-4 w-[100px] h-[100px] lg:w-[170px] lg:h-[170px] xl:w-[250px] xl:h-[250px]" />
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
        <section className="relative w-full overflow-hidden bg-[#EDEFF8]/40 py-20 px-4 xl:px-8">
            <div className="relative mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className={`${h2} font-black text-black font-satoshi`}>
                        {chooseUsContent.heading}
                    </h2>
                </div>

                <div className="grid gap-3 lg:gap-5 xl:gap-8 grid-cols-12 lg:gap-5">
                    <div className="col-span-12 md:col-span-5 xl:col-span-6 flex items-center">
                        <p className={`${h4} font-normal leading-normal font-fjalla-one text-black max-w-md`}>
                            {chooseUsContent.subheading}
                        </p>
                    </div>
                    <div className="col-span-7 md:col-span-4 xl:col-span-3">
                        <FeatureCard card={primaryCard} />
                    </div>
                    <div className="col-span-5 md:col-span-3">
                        <img src={chooseUsContent.primaryImage} alt="Choose Us Primary" className="h-[190px] md:h-[220px] lg:h-[240px] xl:h-[265px] md:w-[270px]" />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-12 gap-3 md:gap-1 lg:gap-2 xl:gap-5 mt-6">
                        <div className="col-span-5 md:col-span-2 xl:col-span-3 flex justify-end mb-3 md:mb-0">
                            <img src={firstSecondaryImage} alt="Choose Us secondary" className="md:h-[200px] lg:h-[215px] xl:h-[260px] lg:w-[290px] xl:w-[250px]" />
                        </div>
                        <div className="col-span-7 md:col-span-4 xl:col-span-3 mb-3 md:mb-0">
                            <FeatureCard card={otherCards[0]} />
                        </div>
                        <div className="col-span-5 md:col-span-2 xl:col-span-3 order-2 md:order-none">
                            <img src={secondSecondaryImage} alt="Choose Us secondary" className="h-[185px] md:h-[200px] lg:h-[215px] xl:h-[260px] w-[290px] xl:w-[250px]" />
                        </div>
                        <div className="col-span-7 md:col-span-4 xl:col-span-3 order-1 md:order-none">
                            <FeatureCard card={otherCards[1]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
