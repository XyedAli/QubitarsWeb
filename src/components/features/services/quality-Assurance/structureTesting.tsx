"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { combine, styles } from "@/styles/style";
import { STRUCTURE_TESTING_STEPS, STRUCTURE_TESTING_CONSTANTS } from "@/data/qualityAssurance/structureTesting";
import { SectionHeading } from "@/components/shared/headings";

const STEPS = STRUCTURE_TESTING_STEPS;
const { LINE_MS, PAUSE_AFTER_LINE_MS, HOLD_ALL_MS, LINE_EASE, GRAD, H } = STRUCTURE_TESTING_CONSTANTS;
const LINE_SEC = LINE_MS / 1000;
const N = STEPS.length;
const MT = "mt-4 xl:mt-5";
const COL = combine(styles.flexCol, "items-center min-h-[250px] xl:min-h-[320px]");
const TICK_BG = "repeating-linear-gradient(90deg,#FF7A1A 0 2px,transparent 2px 7px)";
const MOB_LINE = "w-0.5 h-16 rounded-full bg-gradient-to-b from-[#F58220] to-[#EA4D24]";
const MOB_LINE_DIM = "w-0.5 h-16 rounded-full bg-gradient-to-b from-[#F58220] to-[#EA4D24]/60";

function usePhaseLoop() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (phase < N) {
      const t = window.setTimeout(() => setPhase((p) => p + 1), LINE_MS + PAUSE_AFTER_LINE_MS);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setPhase(0), HOLD_ALL_MS);
    return () => window.clearTimeout(t);
  }, [phase]);
  const past = (i: number) => i < phase || phase === N;
  return {
    phase,
    showText: past,
    drawing: (i: number) => i === phase && phase < N,
    lineOk: past,
    pillOk: past,
  };
}

function TickStrip({ className, active }: { className?: string; active?: boolean }) {
  return (
    <div
      className={combine(styles.flexCenter, "flex-1 min-w-[28px] h-5 mx-0.5 xl:mx-1 transition-opacity duration-700", active ? "opacity-100" : "opacity-25", className)}
      aria-hidden
    >
      <div className="w-full h-3.5 rounded-sm" style={{ backgroundImage: TICK_BG }} />
    </div>
  );
}

function Pill({ label, active, done }: { label: string; active: boolean; done: boolean }) {
  const on = done || active;
  return (
    <div
      className={combine(
        styles.flexBetween,
        "gap-3 sm:gap-4 pl-4 pr-3 py-2.5 sm:py-3 rounded-xl shrink-0 transition-all duration-500 bg-[#00001E]/40 border backdrop-blur-md",
        on ? "border-[#F58220]/50 shadow-[0_0_20px_rgba(252,126,19,0.2)]" : "border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] opacity-50"
      )}
    >
      <span className="text-white font-semibold text-xl lg:text-base tracking-tight whitespace-nowrap">{label}</span>
      <div
        className={combine(
          "w-8 h-8 sm:w-9 sm:h-9 rounded-lg shrink-0 bg-gradient-to-br from-[#FF9A3C] to-[#EA4D24]",
          active && "shadow-[0_0_16px_rgba(252,126,19,0.65)] scale-105",
          done && !active && "shadow-[0_0_10px_rgba(252,126,19,0.35)]"
        )}
        aria-hidden
      />
    </div>
  );
}

function DeskColumnLine({ phase, i, tall }: { phase: number; i: number; tall: boolean }) {
  const d = i === phase && phase < N;
  const done = (i < phase || phase === N) && !d;
  const hg = tall ? H.growTall : H.growShort;
  if (d) {
    return (
      <div className={combine(styles.flexCenter, "w-px overflow-hidden", MT, hg)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: LINE_SEC, ease: LINE_EASE, opacity: { duration: LINE_SEC * 0.4 } }}
            style={{ transformOrigin: "bottom" }}
            className={combine("h-full", GRAD)}
            aria-hidden
          />
        </AnimatePresence>
      </div>
    );
  }
  if (done) return <div className={combine("w-px", MT, hg, GRAD)} aria-hidden />;
  return <div className={tall ? H.emptyTall : H.emptyShort} aria-hidden />;
}

function StepCopy({ step, visible }: { step: (typeof STEPS)[number]; visible: boolean }) {
  return (
    <motion.div
      className={combine(styles.flexCol, "items-center max-w-[220px] xl:max-w-[240px] shrink-0 min-h-[110px] xl:min-h-[120px] text-center")}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <h3 className={combine(styles.h6, "text-white font-bold mb-2 leading-tight")} style={{ letterSpacing: "-0.02em" }}>
        {step.title}
      </h3>
      <p className={combine("text-gray-400 leading-tight xl:leading-relaxed text-[13px] xl:text-base")}>{step.description}</p>
    </motion.div>
  );
}

export default function TestingProcess() {
  const { phase, showText, drawing, lineOk, pillOk } = usePhaseLoop();

  return (
    <section className="mt-16">
      <div className="relative overflow-hidden min-h-[640px] md:min-h-[600px] lg:min-h-[590px] xl:min-h-[680px] mt-8">
        <div className="absolute inset-0 bg-[#000034]" aria-hidden />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          {[14, 32, 50, 68, 86].map((l) => (
            <div key={l} className="absolute inset-y-0 w-px opacity-[0.08] bg-gradient-to-b from-[#F58220] via-[#EA4D24]/50 to-transparent" style={{ left: `${l}%` }} />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" aria-hidden />

        <div className={combine("relative z-10", styles.sectionPaddingX, "pt-12 md:pt-14 lg:pt-16")}>
          <div className={combine(styles.flexCenter, styles.flexCol)}>
            <SectionHeading title="Structured testing for reliable delivery" titleColor="white" />
          </div>

          <div className="hidden lg:block mx-auto">
            <div className="grid grid-cols-5 gap-4 xl:gap-6">
              {STEPS.map((step, i) => {
                const high = i % 2 === 0;
                return (
                  <div key={step.title} className={COL}>
                    {!high && <div className="flex-1 min-h-[56px] xl:min-h-[72px]" aria-hidden />}
                    <StepCopy step={step} visible={showText(i)} />
                    <DeskColumnLine phase={phase} i={i} tall={high} />
                  </div>
                );
              })}
            </div>
            <div className={combine(styles.flexCenter, "flex-nowrap mt-5 xl:mt-7 w-full max-w-[1350px] mx-auto px-1 pb-1 overflow-x-auto scrollbar-hide")}>
              {STEPS.map((step, i) => (
                <Fragment key={step.title}>
                  <Pill label={step.timelineLabel} active={phase === i} done={pillOk(i)} />
                  {i < N - 1 && <TickStrip active={pillOk(i)} />}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="lg:hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-14 xl:pb-0">
              {STEPS.map((step, i) => (
                <Fragment key={step.title}>
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
                    <div className="mb-3">
                      <Pill label={step.timelineLabel} active={phase === i} done={pillOk(i)} />
                    </div>
                    <div className={combine(styles.flexitems, "gap-3")}>
                      <div className={combine(styles.flexCol, styles.flexitems, "w-3 pt-1")}>
                        {drawing(i) ? (
                          <motion.div
                            key={`m-${phase}`}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: LINE_SEC, ease: LINE_EASE }}
                            style={{ transformOrigin: "bottom" }}
                            className={MOB_LINE}
                            aria-hidden
                          />
                        ) : lineOk(i) && showText(i) ? (
                          <div className={MOB_LINE_DIM} aria-hidden />
                        ) : (
                          <div className="w-0.5 h-0" aria-hidden />
                        )}
                      </div>
                      <motion.div className="flex-1 min-w-0" initial={false} animate={{ opacity: showText(i) ? 1 : 0, y: showText(i) ? 0 : 8 }} transition={{ duration: 0.4 }}>
                        <h3 className={combine(styles.h5, "text-white font-bold mb-2")}>{step.title}</h3>
                        <p className={combine(styles.p3, "text-gray-400 leading-tight")}>{step.description}</p>
                      </motion.div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
