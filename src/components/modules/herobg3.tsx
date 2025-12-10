"use client";

import Threads from "./Threads2";

const HeroBg3 = () => {
  return (
    <div className="relative w-full h-[950px] bg-black overflow-hidden flex items-start justify-center pt-10 pb-40 lg:pb-48">
      <div className="threads-pan-y relative w-full h-full max-w-xl">
        <Threads
          className="absolute inset-0 w-full h-full"
          amplitude={0.78}
          distance={0.18}
          color={[0.9, 0.92, 0.96]}
          phase={0}
          enableMouseInteraction
        />
        <Threads
          className="absolute inset-0 w-full h-full opacity-75"
          amplitude={-0.78}
          distance={-0.18}
          color={[0.82, 0.86, 1]}
          phase={3.14159}
          enableMouseInteraction
        />
      </div>
    </div>
  );
};

export default HeroBg3;