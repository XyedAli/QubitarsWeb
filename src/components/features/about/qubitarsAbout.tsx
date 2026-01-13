"use client";

const AboutIntroSection = () => {
  return (
    <section className="relative bg-[#F9FAFB] overflow-hidden">
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F05C22]/5 via-transparent to-transparent" />

      <div className="relative mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Label */}
            <span className="inline-flex items-center text-sm font-semibold tracking-wide uppercase text-[#F05C22]">
              Who We Are
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
              Building software with <br className="hidden sm:block" />
              purpose, precision, and scale
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              <span className="font-semibold text-slate-800">
                Qubitars Technologies
              </span>{" "}
              is a software and AI company focused on turning complex ideas into
              reliable, scalable digital products. We partner with teams that
              value clarity, long-term thinking, and clean execution.
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl">
              Our approach blends strong engineering fundamentals with modern
              technologies — helping startups move faster and enterprises
              modernize without disruption.
            </p>

            {/* Sub highlight */}
            <div className="mt-8 border-l-4 border-[#F05C22] pl-4">
              <p className="text-slate-700 text-base">
                We don’t just build software — we design systems that grow,
                adapt, and stay relevant.
              </p>
            </div>
          </div>

          {/* Right Visual / Stats */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-slate-200 p-8 shadow-md">
              <div className="space-y-8">
                
                <div>
                  <h4 className="text-3xl font-bold text-[#0F172A]">
                    6+ Years
                  </h4>
                  <p className="text-slate-600 mt-1">
                    Experience delivering production-ready software
                  </p>
                </div>

                <div className="h-px bg-slate-200" />

                <div>
                  <h4 className="text-3xl font-bold text-[#0F172A]">
                    Global Clients
                  </h4>
                  <p className="text-slate-600 mt-1">
                    Trusted by teams across startups and enterprises
                  </p>
                </div>

                <div className="h-px bg-slate-200" />

                <div>
                  <h4 className="text-3xl font-bold text-[#0F172A]">
                    AI-Focused
                  </h4>
                  <p className="text-slate-600 mt-1">
                    Leveraging AI to build smarter, future-ready systems
                  </p>
                </div>

              </div>

              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-[#F05C22] to-[#EA4D24]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
