"use client";

import { useState } from "react";
import { Car, Bike, MapPin, Calendar, Search, ChevronDown } from "lucide-react";

const categories = ["All Vehicles", "Economy", "Standard", "SUV", "Luxury", "Motorcycle", "Sport Bike"];

export default function QuickBooking() {
  const [vehicleType, setVehicleType] = useState<"car" | "motorcycle">("car");
  const [category, setCategory] = useState("All Vehicles");

  return (
    <section className="relative z-20 -mt-4 pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(17,17,17,0.95) 0%, rgba(26,26,26,0.95) 100%)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Top header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/5">
            <div>
              <h3 className="text-white font-bold text-lg">Find Your Perfect Ride</h3>
              <p className="text-gray-500 text-sm mt-0.5">
                Search from 100+ available vehicles
              </p>
            </div>

            {/* Vehicle type toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/8">
              <button
                onClick={() => setVehicleType("car")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  vehicleType === "car"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Car size={15} />
                Cars
              </button>
              <button
                onClick={() => setVehicleType("motorcycle")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  vehicleType === "motorcycle"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Bike size={15} />
                Bikes
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Location */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="City or address"
                    className="booking-input w-full pl-9 pr-3 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="date"
                    className="booking-input w-full pl-9 pr-3 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">
                  Return Date
                </label>
                <div className="relative">
                  <Calendar
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="date"
                    className="booking-input w-full pl-9 pr-3 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">
                  Category
                </label>
                <div className="relative">
                  <ChevronDown
                    size={15}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="booking-input w-full px-3 py-3 rounded-xl text-sm appearance-none pr-8"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-gray-900 text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex items-end">
                <button className="btn-shine w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/25 active:scale-95 text-sm">
                  <Search size={16} />
                  Check Availability
                </button>
              </div>
            </div>

            {/* Quick filters */}
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              <span className="text-gray-500 text-xs">Quick select:</span>
              {["Today", "This Weekend", "Next Week", "This Month"].map((opt) => (
                <button
                  key={opt}
                  className="px-3 py-1 rounded-lg text-xs text-gray-400 hover:text-white border border-white/6 hover:border-white/15 hover:bg-white/5 transition-all"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
