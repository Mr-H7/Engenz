import { Search, Calendar, CheckCircle, Key, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Choose Your Vehicle",
    description:
      "Browse our curated fleet of cars and motorcycles. Filter by type, budget, and availability to find the perfect match.",
    color: "blue",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Select Rental Period",
    description:
      "Pick your pickup date, return date, and preferred location. Flexible options for daily, weekly, or long-term needs.",
    color: "purple",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Confirm Your Booking",
    description:
      "Complete your booking online or via WhatsApp. Receive instant confirmation with all rental details and instructions.",
    color: "emerald",
  },
  {
    step: "04",
    icon: Key,
    title: "Pick Up & Drive",
    description:
      "Arrive at our location, complete a quick inspection, grab your keys, and hit the road. It's that simple.",
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; number: string }> = {
  blue: {
    bg: "bg-blue-600/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    number: "text-blue-600/20",
  },
  purple: {
    bg: "bg-purple-600/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    number: "text-purple-600/20",
  },
  emerald: {
    bg: "bg-emerald-600/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    number: "text-emerald-600/20",
  },
  amber: {
    bg: "bg-amber-600/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    number: "text-amber-600/20",
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 relative"
      style={{
        background:
          "linear-gradient(180deg, #0d0d0d 0%, #111111 50%, #0d0d0d 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Key size={10} className="text-blue-400" />
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Renting Made <span className="gradient-text-blue">Effortless</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Our streamlined process gets you on the road in no time — just 4
            simple steps from browse to drive.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, icon: Icon, title, description, color }, idx) => {
              const c = colorMap[color];
              return (
                <AnimateOnScroll key={step} delay={idx * 100} direction="up">
                <div className="relative group h-full">
                  <div
                    className="p-6 rounded-2xl h-full transition-all duration-400 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(145deg, #141414, #111)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Step number watermark */}
                    <div
                      className={`absolute top-4 right-5 font-black text-5xl ${c.number} select-none pointer-events-none`}
                    >
                      {step}
                    </div>

                    {/* Icon */}
                    <div
                      className={`relative z-10 w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}
                    >
                      <Icon size={26} className={c.text} />
                    </div>

                    <h3 className="text-white font-bold text-lg mb-3 relative z-10">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                      {description}
                    </p>
                  </div>

                  {/* Arrow connector (between cards) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 top-16 z-20 w-7 h-7 rounded-full items-center justify-center bg-black border border-white/8">
                      <ArrowRight size={12} className="text-gray-500" />
                    </div>
                  )}
                </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Ready to experience a smoother way to rent?
          </p>
          <a
            href="#fleet"
            className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/25 active:scale-95 text-sm"
          >
            Start Browsing Fleet
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
