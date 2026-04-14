import { CheckCircle, ArrowRight } from "lucide-react";

const values = [
  "Quality-first vehicle selection",
  "Transparent pricing, no surprises",
  "Customer satisfaction above all",
  "Fast, responsive support team",
  "Continuous fleet modernization",
  "Built for the modern traveler",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative" style={{ background: "#0d0d0d" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
            {/* Main card */}
            <div
              className="relative rounded-3xl overflow-hidden p-8"
              style={{
                background: "linear-gradient(145deg, #0f1a2e, #0a1020)",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center icon */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-blue-600/20 border border-blue-500/30 mb-6 text-5xl float">
                  🚗
                </div>
                <h3 className="text-white font-black text-2xl mb-2">
                  ENGENZ
                </h3>
                <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                  Premium Mobility Solutions
                </p>
              </div>

              {/* Stats inside card */}
              <div className="relative z-10 grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/8">
                {[
                  { n: "500+", l: "Rentals" },
                  { n: "100+", l: "Vehicles" },
                  { n: "5★", l: "Rating" },
                ].map(({ n, l }) => (
                  <div key={l} className="text-center">
                    <div className="text-blue-400 font-black text-xl">{n}</div>
                    <div className="text-gray-500 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl text-center"
              style={{
                background: "linear-gradient(135deg, #1e3a6e, #0f2040)",
                border: "1px solid rgba(37,99,235,0.3)",
                boxShadow: "0 10px 30px rgba(37,99,235,0.2)",
              }}
            >
              <div className="text-white font-black text-lg">Since</div>
              <div className="text-blue-400 font-black text-2xl">2020</div>
            </div>

            {/* Side card */}
            <div
              className="absolute -bottom-4 -left-4 p-4 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #141414, #111)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🏆</span>
                <span className="text-white font-bold text-sm">Top Rated</span>
              </div>
              <div className="text-gray-500 text-xs">Vehicle Rental Service</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-5">
              About Engenz
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Premium Mobility,{" "}
              <span className="gradient-text-blue">Built for You</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Engenz was founded with a single mission: to provide premium, accessible, and
              flexible vehicle rental solutions for customers who value convenience, quality,
              and style.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Whether you need a car for business travel, a family SUV for a holiday, a
              motorcycle for daily commuting, or a luxury vehicle for a special occasion —
              Engenz delivers the right ride with confidence, care, and professionalism.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We carefully curate our fleet to include only well-maintained, modern, and
              inspected vehicles. Our team is committed to making every rental experience
              smooth, transparent, and memorable.
            </p>

            {/* Values list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {values.map((v) => (
                <div key={v} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{v}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#fleet"
                className="btn-shine flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/25 text-sm"
              >
                Browse Fleet
                <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold rounded-xl transition-all hover:bg-white/5 text-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
