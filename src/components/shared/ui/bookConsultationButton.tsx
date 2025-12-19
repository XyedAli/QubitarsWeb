"use client";

import { ChevronLeft } from "lucide-react";

const BookConsultationButton = () => {
  const handleClick = () => {
    console.log("Book consultation clicked");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 text-white shadow-xl transition-all duration-300 group"
      style={{
        padding: "24px 14px",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        background: "linear-gradient(180deg, #FF6B35 0%, #FC7E13 50%, #FF9F1C 100%)",
      }}
      aria-label="Book Consultation"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="text-sm font-bold tracking-wider uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.1em' }}>
          Book Consultation
        </div>
        <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" strokeWidth={3} />

      </div>
    </button>
  );
};

export default BookConsultationButton;

