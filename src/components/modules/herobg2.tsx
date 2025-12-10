/** Hero background that mirrors the wavy line layout from the Figma hero. */
"use client";

import Threads from "./Threads";

const HeroBg2 = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#1f2754]">
      {/* Deep navy base and subtle glow to match the Figma artboard */}
      <div
        className="absolute inset-0 bg-gradient-to-bl from-[#121836] via-[#1f2754] to-[#0f1228]"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 80% at 60% 50%, rgba(255,255,255,0.06), transparent 55%)",
        }}
        aria-hidden
      />

      {/* Bell-like wave cluster anchored on right side with a custom cutout shape */}
      <div
        className="pointer-events-none threads-pan-x absolute inset-y-[-240px] right-[-40px] w-[1150px] md:w-[1280px] lg:w-[720px]"
        style={{
          clipPath:
            "polygon(36% 2%, 100% 12%, 96% 58%, 76% 82%, 42% 100%, 6% 84%, 0% 26%)",
        }}
      >
        <div
          className="threads-rotated"
          style={{
            transform: "rotate(4deg) scale(1.12)",
            maskImage:
              "radial-gradient(115% 120% at 68% 18%, #000 0%, #000 58%, transparent 78%), radial-gradient(140% 150% at 70% 74%, #000 0%, #000 66%, transparent 86%), linear-gradient(94deg, transparent 0%, #000 22%, #000 76%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(115% 120% at 68% 18%, #000 0%, #000 58%, transparent 78%), radial-gradient(140% 150% at 70% 74%, #000 0%, #000 66%, transparent 86%), linear-gradient(94deg, transparent 0%, #000 22%, #000 76%, transparent 100%)",
            maskRepeat: "no-repeat, no-repeat, no-repeat",
            WebkitMaskRepeat: "no-repeat, no-repeat, no-repeat",
            maskSize: "cover, cover, cover",
            WebkitMaskSize: "cover, cover, cover",
            filter: "drop-shadow(-30px 40px 120px rgba(44, 86, 219, 0.35))",
          }}
        >
          <Threads
            className="threads-container w-full h-full opacity-90"
            color={[0.82, 0.88, 0.96]}
            amplitude={1.1}
            distance={0.26}
            enableMouseInteraction={false}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBg2;

