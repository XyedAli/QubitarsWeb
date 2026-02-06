"use client";

import { styles } from "@/styles/style";

const EXPERT_DATA = [
  { name: "Product Design", path1: "P", path2: "D", description: "We craft intuitive, user-first digital experiences that look stunning and function flawlessly—turning complex ideas into designs users love." },
  { name: "Custom Software", path1: "C", path2: "S", description: "Tailor-made software that adapts to your business—not the other way around. Built to scale, secure by design, and optimized for performance." },
  { name: "AI/ML Development", path1: "A", path2: "I", description: "From predictive analytics to intelligent bots, we turn complex data into scalable AI solutions that give your business a cutting edge." },
  { name: "MVP Development", path1: "M", path2: "V", description: "Launch faster, smarter. We build lean, scalable MVPs that validate your idea, attract users, and prepare you for full product rollout." },
  { name: "Mobile App Dev", path1: "M", path2: "A", description: "From iOS to Android, we build high-performance apps with sleek design and powerful backend—giving users seamless experiences on the go." },
  { name: "Staff Augmentation", path1: "S", path2: "A", description: "Scale your team with vetted developers, designers, and AI experts—ready to plug in, deliver results, and adapt to your workflow." },
];

const CIRCLES: { w: string; top: string; right: string; z: number; hoverZ: number; delay: string; blur: string; hasSvg?: boolean }[] = [
  { w: "170px", top: "8px", right: "8px", z: 20, hoverZ: 0, delay: "0ms", blur: "5px" },
  { w: "140px", top: "10px", right: "10px", z: 40, hoverZ: 60, delay: "400ms", blur: "1px" },
  { w: "110px", top: "17px", right: "17px", z: 60, hoverZ: 80, delay: "800ms", blur: "5px" },
  { w: "80px", top: "23px", right: "23px", z: 80, hoverZ: 100, delay: "1200ms", blur: "5px" },
  { w: "50px", top: "30px", right: "30px", z: 100, hoverZ: 120, delay: "1600ms", blur: "5px", hasSvg: true },
];

const CIRCLE_BASE = "block absolute aspect-square rounded-full top-0 right-0 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out";
const CIRCLE_HOVER = ["", "group-hover:[transform:translate3d(0,0,60px)]", "group-hover:[transform:translate3d(0,0,80px)]", "group-hover:[transform:translate3d(0,0,100px)]", "group-hover:[transform:translate3d(0,0,120px)]"];
const CARD_SHADOW = "shadow-[rgba(5,71,17,0)_40px_50px_25px_-40px,rgba(5,71,17,0.2)_0px_25px_25px_-5px]";
const CARD_HOVER_SHADOW = "group-hover:shadow-[rgba(5,71,17,0.3)_30px_50px_25px_-40px,rgba(5,71,17,0.1)_0px_25px_30px_0px]";
const SCROLL_HIDE = "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

const Card = () => {
  const bg = (i: number) => (i % 2 === 0 ? "#1E274F" : "#FC7E13");
  const isEven = (i: number) => i % 2 === 0;
  const cardVariant = (i: number) => (isEven(i) ? "bg-[#1E274F] text-lightGray" : "bg-accent text-darkGray");
  const borderVariant = (i: number) => (isEven(i) ? "text-lightGray border-lightGray" : "text-darkGray border-darkGray");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-10 p-4 px-30">
        {EXPERT_DATA.map((item, index) => (
          <div key={index} className="h-[300px] perspective-[1000px] mx-auto group" style={{ perspective: "1000px" }}>
            <div
              className={`h-full rounded-[50px] transition-all duration-500 ease-in-out transform-style-3d ${CARD_SHADOW} ${cardVariant(index)} group-hover:[transform:rotate3d(1,1,0,30deg)] ${CARD_HOVER_SHADOW}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute right-0 top-0" style={{ transformStyle: "preserve-3d" }}>
                {CIRCLES.map((c, i) => (
                  <span
                    key={i}
                    className={`${CIRCLE_BASE} ${CIRCLE_HOVER[i]} ${c.hasSvg ? "grid place-content-center" : ""}`}
                    style={{
                      backgroundColor: bg(index),
                      transform: `translate3d(0, 0, ${c.z}px)`,
                      width: c.w,
                      top: c.top,
                      right: c.right,
                      backdropFilter: `blur(${c.blur})`,
                      transitionDelay: c.delay,
                    }}
                  >
                    {c.hasSvg && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="w-5 fill-white">
                        <text x="-1" y="20" className="text-2xl font-bold" fill="currentColor">{item.path1}</text>
                        <text x="14" y="20" className="text-2xl font-bold" fill="currentColor">{item.path2}</text>
                        <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                      </svg>
                    )}
                  </span>
                ))}
              </div>
              <div
                className="absolute inset-2 rounded-[55px] rounded-tr-full border-l border-b border-white transition-all duration-500 ease-in-out"
                style={{ transformStyle: "preserve-3d", transform: "translate3d(0px, 0px, 25px)" }}
              />
              <div className="pt-[100px] pr-[60px] pl-[30px]" style={{ transform: "translate3d(0, 0, 26px)" }}>
                <h2 className={`${styles.h6} font-bold mb-2 w-full border-b-2 pb-2 ${borderVariant(index)}`}>{item.name}</h2>
                <div className={`overflow-y-auto max-h-[100px] ${SCROLL_HIDE}`}>
                  <p className={`${styles.p2} text-left ${isEven(index) ? "text-lightGray" : "text-darkGray"}`}>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
