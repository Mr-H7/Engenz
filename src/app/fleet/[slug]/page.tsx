import { notFound } from "next/navigation";
import Link from "next/link";
import { vehicles, getVehicleBySlug, getSimilarVehicles } from "@/data/vehicles";
import {
  Users,
  Fuel,
  Settings,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Calendar,
  Briefcase,
  Gauge,
  Wind,
} from "lucide-react";
import ZNavbar from "@/components/ZNavbar";
import ZFooter from "@/components/ZFooter";

export async function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVehicleBySlug(slug);
  if (!v) return {};
  return {
    title: `${v.name} ${v.year} — ENGENZ Fleet`,
    description: v.description,
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const similar = getSimilarVehicles(vehicle);

  const specs = [
    { icon: Calendar, label: "Year", value: String(vehicle.year) },
    { icon: Settings, label: "Transmission", value: vehicle.transmission },
    { icon: Fuel, label: "Fuel Type", value: vehicle.fuel },
    { icon: Users, label: "Seats", value: `${vehicle.seats} Passengers` },
    { icon: Gauge, label: "Engine", value: vehicle.engine },
    { icon: Wind, label: "Air Conditioning", value: "Full A/C" },
    { icon: Briefcase, label: "Luggage", value: vehicle.luggage },
    { icon: CheckCircle, label: "Category", value: vehicle.category },
  ];

  const conditions = [
    "Minimum rental period: 1 day",
    "Valid national ID (CIN) or passport required",
    "Valid Egyptian or international driving license",
    "Refundable security deposit may apply",
    "Fuel policy: return with same fuel level",
    "Pickup & drop-off available in Greater Cairo and surrounding areas",
    "Additional driver allowed upon request",
  ];

  return (
    <>
      <ZNavbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          className="relative pt-28 pb-0 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #040610 0%, var(--bg) 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Color glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${vehicle.glowColor} 0%, transparent 70%)`,
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            {/* Back link */}
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-10 transition-colors hover:text-white"
              style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
            >
              <ArrowLeft size={13} /> BACK TO FLEET
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
              {/* Left — info */}
              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span
                    className="px-3 py-1 rounded-sm text-xs font-bold tracking-widest"
                    style={{
                      background: "rgba(0,212,255,0.12)",
                      border: "1px solid rgba(0,212,255,0.25)",
                      color: "var(--accent)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {vehicle.category.toUpperCase()}
                  </span>
                  {vehicle.available ? (
                    <span
                      className="px-3 py-1 rounded-sm text-xs font-bold tracking-widest"
                      style={{
                        background: "rgba(34,197,94,0.12)",
                        border: "1px solid rgba(34,197,94,0.3)",
                        color: "#22c55e",
                        letterSpacing: "0.1em",
                      }}
                    >
                      AVAILABLE NOW
                    </span>
                  ) : (
                    <span
                      className="px-3 py-1 rounded-sm text-xs font-bold tracking-widest"
                      style={{
                        background: "rgba(239,68,68,0.12)",
                        border: "1px solid rgba(239,68,68,0.3)",
                        color: "#ef4444",
                        letterSpacing: "0.1em",
                      }}
                    >
                      CURRENTLY RENTED
                    </span>
                  )}
                </div>

                <h1
                  className="font-display font-bold text-white leading-none mb-2"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "0.03em" }}
                >
                  {vehicle.name}
                </h1>
                <p
                  className="text-sm font-bold tracking-widest mb-6"
                  style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
                >
                  {vehicle.year} MODEL YEAR
                </p>

                <p
                  className="text-sm leading-relaxed mb-8 max-w-lg"
                  style={{ color: "#8892a4" }}
                >
                  {vehicle.description}
                </p>

                {/* Price */}
                <div
                  className="inline-block rounded-lg px-6 py-4 mb-8"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <div
                    className="font-display font-bold text-white"
                    style={{ fontSize: "2.5rem", letterSpacing: "-0.01em" }}
                  >
                    {vehicle.pricePerDay.toLocaleString("en-EG")}
                    <span
                      className="text-base ml-2 font-bold"
                      style={{ color: "var(--accent)" }}
                    >
                      EGP
                    </span>
                  </div>
                  <div
                    className="text-xs font-bold tracking-widest mt-1"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
                  >
                    PER DAY — ALL INCLUSIVE
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/booking?car=${vehicle.slug}`}
                    className="btn-accent px-7 py-3 rounded-md text-sm font-bold tracking-widest"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    BOOK THIS CAR
                  </Link>
                  <a
                    href={`https://wa.me/201152333633?text=I'm interested in renting the ${vehicle.name} ${vehicle.year}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline px-7 py-3 rounded-md text-sm font-bold tracking-widest flex items-center gap-2"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    <MessageCircle size={15} /> WHATSAPP
                  </a>
                </div>
              </div>

              {/* Right — visual */}
              <div
                className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  background: vehicle.bgGradient,
                  border: "1px solid rgba(255,255,255,0.07)",
                  minHeight: "360px",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 80%, ${vehicle.glowColor} 0%, transparent 70%)`,
                  }}
                />
                <span
                  className="select-none relative z-10"
                  style={{
                    fontSize: "clamp(140px, 20vw, 220px)",
                    filter: `drop-shadow(0 20px 60px ${vehicle.glowColor})`,
                    transform: "rotate(-5deg)",
                  }}
                >
                  {vehicle.emoji}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Specs + Features */}
        <section
          className="py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Specifications */}
              <div className="lg:col-span-2">
                <h2
                  className="font-display font-bold text-white mb-8"
                  style={{ fontSize: "1.5rem", letterSpacing: "0.06em" }}
                >
                  SPECIFICATIONS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specs.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 rounded-lg p-4"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(0,212,255,0.1)",
                          border: "1px solid rgba(0,212,255,0.2)",
                        }}
                      >
                        <Icon size={16} style={{ color: "var(--accent)" }} />
                      </div>
                      <div>
                        <div
                          className="text-xs font-bold tracking-widest mb-0.5"
                          style={{ color: "var(--text-dim)", letterSpacing: "0.1em" }}
                        >
                          {label.toUpperCase()}
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <h2
                  className="font-display font-bold text-white mt-12 mb-6"
                  style={{ fontSize: "1.5rem", letterSpacing: "0.06em" }}
                >
                  FEATURES & EQUIPMENT
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vehicle.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#8892a4" }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                {/* Rental Conditions */}
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <h3
                    className="font-display font-bold text-white mb-5"
                    style={{ fontSize: "1rem", letterSpacing: "0.08em" }}
                  >
                    RENTAL CONDITIONS
                  </h3>
                  <ul className="space-y-3">
                    {conditions.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <div
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
                        <span
                          className="text-xs leading-relaxed font-semibold"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA card */}
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(0,212,255,0.06)",
                    border: "1px solid rgba(0,212,255,0.15)",
                  }}
                >
                  <h3
                    className="font-display font-bold text-white mb-2"
                    style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
                  >
                    READY TO BOOK?
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Reserve your {vehicle.name} now. Our team confirms within
                    2 hours.
                  </p>
                  <Link
                    href={`/booking?car=${vehicle.slug}`}
                    className="btn-accent w-full flex items-center justify-center gap-2 py-3 rounded-md text-sm font-bold tracking-widest"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    BOOK NOW <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Contact */}
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <h3
                    className="font-display font-bold text-white mb-4"
                    style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
                  >
                    HAVE QUESTIONS?
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+201152333633"
                      className="flex items-center gap-2 text-xs font-bold tracking-widest transition-colors hover:text-white"
                      style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}
                    >
                      📞 +20 11 5233 3633
                    </a>
                    <a
                      href="https://wa.me/201152333633"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold tracking-widest transition-colors hover:text-white"
                      style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}
                    >
                      💬 WHATSAPP US
                    </a>
                    <a
                      href="mailto:info@engenz.com"
                      className="flex items-center gap-2 text-xs font-bold tracking-widest transition-colors hover:text-white"
                      style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}
                    >
                      ✉️ info@engenz.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar vehicles */}
        {similar.length > 0 && (
          <section
            className="py-16"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="flex items-end justify-between mb-8">
                <h2
                  className="font-display font-bold text-white"
                  style={{ fontSize: "1.5rem", letterSpacing: "0.06em" }}
                >
                  SIMILAR VEHICLES
                </h2>
                <Link
                  href="/fleet"
                  className="flex items-center gap-1 text-xs font-bold tracking-widest transition-colors hover:text-white"
                  style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
                >
                  VIEW ALL <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {similar.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/fleet/${v.slug}`}
                    className="group block rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: v.bgGradient,
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="h-36 flex items-center justify-center"
                      style={{
                        background: `radial-gradient(ellipse 80% 60% at 50% 70%, ${v.glowColor} 0%, transparent 70%)`,
                      }}
                    >
                      <span
                        className="select-none text-8xl transition-transform duration-500 group-hover:scale-110"
                        style={{ filter: `drop-shadow(0 10px 30px ${v.glowColor})` }}
                      >
                        {v.emoji}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3
                        className="font-display font-bold text-white mb-1"
                        style={{ fontSize: "1rem", letterSpacing: "0.04em" }}
                      >
                        {v.name} {v.year}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs font-bold tracking-widest"
                          style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}
                        >
                          {v.category}
                        </span>
                        <span
                          className="font-display font-bold text-white"
                          style={{ fontSize: "1rem" }}
                        >
                          {v.pricePerDay.toLocaleString("en-EG")}{" "}
                          <span style={{ color: "var(--accent)", fontSize: "0.75rem" }}>EGP</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <ZFooter />
    </>
  );
}
