import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "city-cars",
    label: "City Cars",
    description: "Compact, fuel-efficient, easy to park",
    icon: "🚗",
    count: 12,
    gradient: "from-blue-900/60 to-blue-950/80",
    accent: "blue",
  },
  {
    id: "family-cars",
    label: "Family Cars",
    description: "Spacious interiors for the whole family",
    icon: "🚙",
    count: 8,
    gradient: "from-emerald-900/60 to-emerald-950/80",
    accent: "emerald",
  },
  {
    id: "luxury-cars",
    label: "Luxury Cars",
    description: "Premium rides for special occasions",
    icon: "🏎️",
    count: 6,
    gradient: "from-amber-900/60 to-amber-950/80",
    accent: "amber",
  },
  {
    id: "suvs",
    label: "SUVs",
    description: "Powerful and versatile for all roads",
    icon: "🛻",
    count: 10,
    gradient: "from-slate-700/60 to-slate-900/80",
    accent: "slate",
  },
  {
    id: "scooters",
    label: "Scooters",
    description: "Quick & easy city mobility",
    icon: "🛵",
    count: 15,
    gradient: "from-purple-900/60 to-purple-950/80",
    accent: "purple",
  },
  {
    id: "sport-motorcycles",
    label: "Sport Bikes",
    description: "Thrill & performance on every ride",
    icon: "🏍️",
    count: 7,
    gradient: "from-red-900/60 to-red-950/80",
    accent: "red",
  },
  {
    id: "commuter-bikes",
    label: "Commuter Bikes",
    description: "Reliable daily commuting partner",
    icon: "🏍️",
    count: 11,
    gradient: "from-zinc-700/60 to-zinc-900/80",
    accent: "zinc",
  },
  {
    id: "mpv",
    label: "MPV / Minivans",
    description: "High-capacity group travel",
    icon: "🚌",
    count: 5,
    gradient: "from-teal-900/60 to-teal-950/80",
    accent: "teal",
  },
];

const accentColors: Record<string, { badge: string; count: string }> = {
  blue: { badge: "border-blue-500/30 text-blue-400", count: "text-blue-400" },
  emerald: { badge: "border-emerald-500/30 text-emerald-400", count: "text-emerald-400" },
  amber: { badge: "border-amber-500/30 text-amber-400", count: "text-amber-400" },
  slate: { badge: "border-slate-400/30 text-slate-300", count: "text-slate-300" },
  purple: { badge: "border-purple-500/30 text-purple-400", count: "text-purple-400" },
  red: { badge: "border-red-500/30 text-red-400", count: "text-red-400" },
  zinc: { badge: "border-zinc-400/30 text-zinc-300", count: "text-zinc-300" },
  teal: { badge: "border-teal-500/30 text-teal-400", count: "text-teal-400" },
};

export default function VehicleCategories() {
  return (
    <section
      id="categories"
      className="py-24 relative"
      style={{ background: "#0d0d0d" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Browse by Category
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Every Type of <span className="gradient-text-blue">Vehicle</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whatever you need — city mobility, family travel, luxury rides, or
            two-wheeled adventures — Engenz has you covered.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const accent = accentColors[cat.accent] || accentColors.blue;
            return (
              <div
                key={cat.id}
                className="category-card group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-all duration-500 group-hover:opacity-80`}
                />

                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "25px 25px",
                  }}
                />

                {/* Dark vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
                  {/* Large emoji icon */}
                  <span
                    className="text-5xl mb-3 category-icon transition-transform duration-300"
                    style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
                  >
                    {cat.icon}
                  </span>

                  <h3 className="text-white font-black text-base leading-tight mb-1">
                    {cat.label}
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 leading-snug">
                    {cat.description}
                  </p>

                  {/* Count badge */}
                  <div
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border bg-black/30 text-xs font-semibold ${accent.badge}`}
                  >
                    <span className={accent.count}>{cat.count}</span>
                    <span className="text-gray-500">vehicles</span>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-3 right-3 w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <ArrowRight size={13} className="text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white font-semibold rounded-xl transition-all hover:bg-blue-600/10 text-sm">
            Explore All Categories
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
