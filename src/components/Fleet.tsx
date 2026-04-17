"use client";

import { useState } from "react";
import { Users, Fuel, Settings2, Star, ArrowRight, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

type FilterKey = "All" | "Cars" | "SUVs" | "Luxury" | "Motorcycles" | "Sport Bikes" | "Economy";

const vehicles = [
  {
    id: 1,
    name: "Toyota Camry",
    type: "Sedan",
    category: "Cars",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 350,
    badge: "Popular",
    available: true,
    gradient: "from-slate-800 to-slate-900",
    accentColor: "blue",
    icon: "🚗",
  },
  {
    id: 2,
    name: "Honda CR-V",
    type: "SUV",
    category: "SUVs",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 450,
    badge: "Available Now",
    available: true,
    gradient: "from-zinc-800 to-zinc-900",
    accentColor: "emerald",
    icon: "🚙",
  },
  {
    id: 3,
    name: "BMW 5 Series",
    type: "Luxury Sedan",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 900,
    badge: "Premium",
    available: true,
    gradient: "from-neutral-800 to-neutral-900",
    accentColor: "blue",
    icon: "🏎️",
  },
  {
    id: 4,
    name: "Dacia Logan",
    type: "Economy Sedan",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    fuel: "Diesel",
    price: 200,
    badge: "Best Value",
    available: true,
    gradient: "from-stone-800 to-stone-900",
    accentColor: "green",
    icon: "🚗",
  },
  {
    id: 5,
    name: "Yamaha NMAX",
    type: "Scooter",
    category: "Motorcycles",
    seats: 2,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 120,
    badge: "Popular",
    available: true,
    gradient: "from-gray-800 to-gray-900",
    accentColor: "blue",
    icon: "🏍️",
  },
  {
    id: 6,
    name: "Honda CBR 600",
    type: "Sport Bike",
    category: "Sport Bikes",
    seats: 2,
    transmission: "Manual",
    fuel: "Gasoline",
    price: 280,
    badge: "Available Now",
    available: true,
    gradient: "from-red-950 to-gray-900",
    accentColor: "red",
    icon: "🏍️",
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    type: "Luxury Sedan",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    price: 1200,
    badge: "Premium",
    available: false,
    gradient: "from-gray-800 to-black",
    accentColor: "silver",
    icon: "🏎️",
  },
  {
    id: 8,
    name: "Renault Duster",
    type: "SUV",
    category: "SUVs",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    price: 380,
    badge: null,
    available: true,
    gradient: "from-zinc-800 to-zinc-900",
    accentColor: "blue",
    icon: "🚙",
  },
];

const filters: FilterKey[] = ["All", "Cars", "SUVs", "Luxury", "Motorcycles", "Sport Bikes", "Economy"];

const badgeColors: Record<string, string> = {
  Popular: "bg-blue-600/20 text-blue-400 border-blue-500/30",
  "Available Now": "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
  Premium: "bg-amber-600/20 text-amber-400 border-amber-500/30",
  "Best Value": "bg-purple-600/20 text-purple-400 border-purple-500/30",
};

const formatPrice = (price: number) =>
  `${price} DH`;

export default function Fleet() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const filtered =
    activeFilter === "All"
      ? vehicles
      : vehicles.filter((v) => v.category === activeFilter);

  return (
    <section id="fleet" className="py-24 relative" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)" }}>
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Star size={10} className="text-blue-400" />
            Our Fleet
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Choose Your <span className="gradient-text-blue">Perfect Ride</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From daily city drives to luxury business trips — explore our
            curated fleet of premium, well-maintained vehicles.
          </p>
          <div className="section-divider mt-6" />
        </AnimateOnScroll>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "glass text-gray-400 hover:text-white hover:bg-white/5 border border-white/8"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((vehicle) => (
            <div
              key={vehicle.id}
              className="vehicle-card rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #141414, #111111)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Vehicle Visual */}
              <div
                className={`relative h-40 bg-gradient-to-br ${vehicle.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 80%, rgba(37,99,235,0.15) 0%, transparent 60%)`,
                  }}
                />
                {/* Vehicle icon */}
                <span className="text-7xl relative z-10 filter drop-shadow-lg float">
                  {vehicle.icon}
                </span>

                {/* Badge */}
                {vehicle.badge && (
                  <div
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold border ${
                      badgeColors[vehicle.badge] || "bg-blue-600/20 text-blue-400 border-blue-500/30"
                    }`}
                  >
                    {vehicle.badge}
                  </div>
                )}

                {/* Available tag */}
                <div
                  className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
                    vehicle.available
                      ? "bg-emerald-600/15 text-emerald-400 border border-emerald-500/20"
                      : "bg-red-600/15 text-red-400 border border-red-500/20"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      vehicle.available ? "bg-emerald-400" : "bg-red-400"
                    }`}
                  />
                  {vehicle.available ? "Available" : "Booked"}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-white font-bold text-base leading-tight">
                    {vehicle.name}
                  </h3>
                </div>
                <p className="text-gray-500 text-xs mb-3">{vehicle.type}</p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/3 border border-white/5">
                    <Users size={12} className="text-gray-500" />
                    <span className="text-gray-300 text-xs font-medium">
                      {vehicle.seats} Seats
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/3 border border-white/5">
                    <Settings2 size={12} className="text-gray-500" />
                    <span className="text-gray-300 text-xs font-medium truncate w-full text-center">
                      {vehicle.transmission === "Automatic" ? "Auto" : "Manual"}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/3 border border-white/5">
                    <Fuel size={12} className="text-gray-500" />
                    <span className="text-gray-300 text-xs font-medium">{vehicle.fuel.slice(0, 3)}</span>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-black text-lg leading-none">
                      {formatPrice(vehicle.price)}
                    </div>
                    <div className="text-gray-500 text-xs">/day</div>
                  </div>
                  <button
                    disabled={!vehicle.available}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      vehicle.available
                        ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-600/25 active:scale-95"
                        : "bg-white/5 text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    {vehicle.available ? (
                      <>
                        Rent Now <ArrowRight size={12} />
                      </>
                    ) : (
                      "Unavailable"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <CheckCircle size={16} className="text-blue-400" />
            <span className="text-gray-400 text-sm">
              All vehicles fully insured, cleaned, and safety-checked before every rental
            </span>
          </div>
          <button className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 font-semibold rounded-xl transition-all text-sm">
            View Full Fleet
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
