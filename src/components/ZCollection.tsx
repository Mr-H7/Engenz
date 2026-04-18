import { ArrowRight } from "lucide-react";

const mainVehicle = {
  name: "PHANTOM X-1",
  badge: "EVO PERFORMANCE",
  price: "STARTING FROM $450/DAY",
  /* deep teal/midnight gradient to simulate a dark studio shoot */
  bg: "linear-gradient(160deg, #071a2e 0%, #0d2540 30%, #091e38 60%, #050f1e 100%)",
  /* car silhouette accent glow */
  glow: "radial-gradient(ellipse 70% 40% at 50% 80%, rgba(0,160,255,0.18) 0%, transparent 70%)",
};

const sideVehicles = [
  {
    name: "TITAN R-SERIES",
    sub: "SUPERBIKE MASTERY",
    bg: "linear-gradient(135deg, #0e1218 0%, #1a1f2e 50%, #0c1020 100%)",
    glow: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(180,120,0,0.15) 0%, transparent 70%)",
    icon: "🏍️",
    iconSize: "text-[80px]",
  },
  {
    name: "ONYX TERRAIN",
    sub: "ALL-TERRAIN LUXURY",
    bg: "linear-gradient(135deg, #0a1520 0%, #111c28 50%, #0c1820 100%)",
    glow: "radial-gradient(ellipse 80% 50% at 50% 70%, rgba(0,80,160,0.2) 0%, transparent 70%)",
    icon: "🚙",
    iconSize: "text-[75px]",
  },
];

export default function ZCollection() {
  return (
    <section
      id="collection"
      className="py-20 lg:py-28"
      style={{ background: "var(--bg)" }}
    >
      {/* Top divider */}
      <div
        className="w-full h-px mb-16"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <h2
              className="font-display font-bold italic leading-none"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", letterSpacing: "0.02em" }}
            >
              <span className="text-white block">THE VANGUARD</span>
              <span className="text-white block">COLLECTION</span>
            </h2>
            {/* Accent rule */}
            <div
              className="mt-3 h-[2px] w-10"
              style={{ background: "var(--accent)" }}
            />
            <p
              className="mt-4 text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Curated high-performance machinery. From twin-turbo V10 supercars
              to limited-edition racing superbikes.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-xs font-bold tracking-widest transition-colors hover:text-white whitespace-nowrap"
            style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
          >
            VIEW FULL INVENTORY <ArrowRight size={14} />
          </a>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">

          {/* ── Large feature card ── */}
          <div
            className="fleet-card rounded-xl"
            style={{
              background: mainVehicle.bg,
              border: "1px solid rgba(255,255,255,0.07)",
              minHeight: "420px",
            }}
          >
            {/* Inner glow */}
            <div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{ background: mainVehicle.glow }}
            />

            {/* Car emoji / illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="select-none"
                style={{
                  fontSize: "clamp(120px, 18vw, 200px)",
                  filter: "drop-shadow(0 20px 60px rgba(0,160,255,0.3))",
                  transform: "scaleX(-1) rotate(-5deg)",
                }}
              >
                🏎️
              </span>
            </div>

            {/* Overlay gradient at bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-48 rounded-b-xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(5,10,20,0.95) 0%, transparent 100%)",
              }}
            />

            {/* Card info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              {/* Badge */}
              <div
                className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-bold tracking-widest mb-3"
                style={{
                  background: "rgba(0,212,255,0.15)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                }}
              >
                {mainVehicle.badge}
              </div>
              <h3
                className="font-display font-bold text-white italic mb-1"
                style={{ fontSize: "1.9rem", letterSpacing: "0.04em" }}
              >
                {mainVehicle.name}
              </h3>
              <p
                className="text-xs font-semibold tracking-widest"
                style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
              >
                {mainVehicle.price}
              </p>
            </div>
          </div>

          {/* ── Right column: 2 stacked cards ── */}
          <div className="flex flex-col gap-4">
            {sideVehicles.map((v) => (
              <div
                key={v.name}
                className="fleet-card rounded-xl flex-1"
                style={{
                  background: v.bg,
                  border: "1px solid rgba(255,255,255,0.07)",
                  minHeight: "200px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{ background: v.glow }}
                />

                {/* Vehicle icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ paddingBottom: "40px" }}
                >
                  <span
                    className={`select-none ${v.iconSize}`}
                    style={{
                      filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.6))",
                    }}
                  >
                    {v.icon}
                  </span>
                </div>

                {/* Bottom gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28 rounded-b-xl"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,8,18,0.97) 0%, transparent 100%)",
                  }}
                />

                {/* Card label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className="font-display font-bold text-white italic text-lg leading-tight"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    {v.name}
                  </h3>
                  <p
                    className="text-xs font-semibold tracking-widest mt-0.5"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
                  >
                    {v.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
