"use client";
import React from "react";
import { styles } from "@/styles/style";

const Card = () => {
  const expertData = [
    {
      name: "Product Design",
      path1: "P",
      path2: "D",
      description: "We craft intuitive, user-first digital experiences that look stunning and function flawlessly—turning complex ideas into designs users love.",
    },
    {
      name: "Custom Software",
      path1: "C",
      path2: "S",
      description: "Tailor-made software that adapts to your business—not the other way around. Built to scale, secure by design, and optimized for performance.",
    },
    {
      name: "AI/ML Development",
      path1: "A",
      path2: "I",
      description: "From predictive analytics to intelligent bots, we turn complex data into scalable AI solutions that give your business a cutting edge.",
    },
    {
      name: "MVP Development",
      path1: "M",
      path2: "V",
      description: "Launch faster, smarter. We build lean, scalable MVPs that validate your idea, attract users, and prepare you for full product rollout.",
    },
    {
      name: "Mobile App Dev",
      path1: "M",
      path2: "A",
      description: "From iOS to Android, we build high-performance apps with sleek design and powerful backend—giving users seamless experiences on the go.",
    },
    {
      name: "Staff Augmentation",
      path1: "S",
      path2: "A",
      description: "Scale your team with vetted developers, designers, and AI experts—ready to plug in, deliver results, and adapt to your workflow.",
    },
  ];
  
  const getBackgroundColor = (index: number) => (index % 2 === 0 ? "#1E274F" : "#FC7E13");
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-10 p-4 px-30">
        {expertData.map((item, index) => (
          <div 
            key={index} 
            className="h-[300px] perspective-[1000px] mx-auto group"
            style={{ perspective: "1000px" }}
          >
            <div 
              className={`h-full rounded-[50px] transition-all duration-500 ease-in-out transform-style-3d shadow-[rgba(5,71,17,0)_40px_50px_25px_-40px,rgba(5,71,17,0.2)_0px_25px_25px_-5px] ${
                index % 2 === 0 ? 'bg-[#1E274F] text-lightGray' : 'bg-accent text-darkGray'
              } group-hover:[transform:rotate3d(1,1,0,30deg)] group-hover:shadow-[rgba(5,71,17,0.3)_30px_50px_25px_-40px,rgba(5,71,17,0.1)_0px_25px_30px_0px]`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute right-0 top-0" style={{ transformStyle: "preserve-3d" }}>
                <span 
                  className="block absolute aspect-square rounded-full top-0 right-0 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] transition-all duration-500 ease-in-out w-[170px] top-2 right-2"
                  style={{ 
                    backgroundColor: getBackgroundColor(index),
                    transform: "translate3d(0, 0, 20px)",
                  }}
                />
                <span 
                  className="block absolute aspect-square rounded-full top-0 right-0 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[1px] transition-all duration-500 ease-in-out delay-[400ms] w-[140px] top-[10px] right-[10px] group-hover:[transform:translate3d(0,0,60px)]"
                  style={{ 
                    backgroundColor: getBackgroundColor(index),
                    transform: "translate3d(0, 0, 40px)",
                  }}
                />
                <span 
                  className="block absolute aspect-square rounded-full top-0 right-0 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] transition-all duration-500 ease-in-out delay-[800ms] w-[110px] top-[17px] right-[17px] group-hover:[transform:translate3d(0,0,80px)]"
                  style={{ 
                    backgroundColor: getBackgroundColor(index),
                    transform: "translate3d(0, 0, 60px)",
                  }}
                />
                <span 
                  className="block absolute aspect-square rounded-full top-0 right-0 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] transition-all duration-500 ease-in-out delay-[1200ms] w-[80px] top-[23px] right-[23px] group-hover:[transform:translate3d(0,0,100px)]"
                  style={{ 
                    backgroundColor: getBackgroundColor(index),
                    transform: "translate3d(0, 0, 80px)",
                  }}
                />
                <span 
                  className="block absolute aspect-square rounded-full top-0 right-0 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] transition-all duration-500 ease-in-out delay-[1600ms] w-[50px] top-[30px] right-[30px] grid place-content-center group-hover:[transform:translate3d(0,0,120px)]"
                  style={{ 
                    backgroundColor: getBackgroundColor(index),
                    transform: "translate3d(0, 0, 100px)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="w-5 fill-white">
                    <text x="-1" y="20" className="text-2xl font-bold" fill="currentColor">{item.path1}</text>
                    <text x="14" y="20" className="text-2xl font-bold" fill="currentColor">{item.path2}</text>
                    <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                  </svg>
                </span>
              </div>
              <div 
                className="absolute inset-2 rounded-[55px] rounded-tr-full border-l border-b border-white transition-all duration-500 ease-in-out"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: "translate3d(0px, 0px, 25px)",
                }}
              />
              <div 
                className="pt-[100px] pr-[60px] pl-[30px]"
                style={{ transform: "translate3d(0, 0, 26px)" }}
              >
                <h2 className={`${styles.h6} font-bold mb-2 w-full border-b-2 pb-2 ${
                  index % 2 === 0 ? "text-lightGray border-lightGray" : "text-darkGray border-darkGray"
                }`}>{item.name}</h2>
                <div className="overflow-y-auto max-h-[100px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <p className={`${styles.p2} text-left ${
                    index % 2 === 0 ? "text-lightGray" : "text-darkGray"
                  }`}>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
