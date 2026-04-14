"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+212 712-505-058",
    sub: "Mon–Sun, 08:00–21:00",
    href: "tel:+212712505058",
    color: "blue",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+212 712-505-058",
    sub: "Quick replies, 24/7",
    href: "https://wa.me/212712505058",
    color: "green",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lixiamodoshir@gmail.com",
    sub: "Response within 2 hours",
    href: "mailto:lixiamodoshir@gmail.com",
    color: "purple",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "123 Rue Mohammed V, Casablanca",
    sub: "Open daily 08:00–20:00",
    href: "#",
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-600/10", border: "border-blue-500/20", text: "text-blue-400" },
  green: { bg: "bg-green-600/10", border: "border-green-500/20", text: "text-green-400" },
  purple: { bg: "bg-purple-600/10", border: "border-purple-500/20", text: "text-purple-400" },
  amber: { bg: "bg-amber-600/10", border: "border-amber-500/20", text: "text-amber-400" },
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", phone: "", email: "", vehicle: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #050a14 0%, #080d1a 50%, #050a14 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(37,99,235,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageCircle size={10} />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Contact Engenz today and reserve the perfect car or motorcycle.
            Fast response, easy booking, no hassle.
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, sub, href, color }) => {
              const c = colorMap[color];
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl group transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(145deg, #141414, #111)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={20} className={c.text} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                      {label}
                    </div>
                    <div className="text-white font-semibold text-sm truncate">
                      {value}
                    </div>
                    <div className="text-gray-600 text-xs">{sub}</div>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-gray-700 group-hover:text-gray-400 transition-colors flex-shrink-0"
                  />
                </a>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212712505058?text=Hi%20Engenz!%20I%27d%20like%20to%20rent%20a%20vehicle."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-sm transition-all hover:shadow-xl hover:shadow-green-600/20 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #16a34a, #15803d)",
                boxShadow: "0 8px 25px rgba(22,163,74,0.25)",
              }}
            >
              <MessageCircle size={18} className="text-white" />
              <span className="text-white">Book via WhatsApp Now</span>
            </a>
          </div>

          {/* Booking Form */}
          <div
            className="lg:col-span-3 p-6 sm:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(145deg, #141414, #111)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3 className="text-white font-black text-xl mb-1">
              Book Your Ride
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Fill in your details and we&apos;ll get back to you within 30 minutes.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-600/15 border border-green-500/25 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h4 className="text-white font-black text-xl mb-2">
                  Request Sent!
                </h4>
                <p className="text-gray-400 text-sm">
                  We&apos;ll contact you via WhatsApp or email within 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="booking-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      placeholder="+62 ..."
                      className="booking-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="booking-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">
                    Vehicle Interested In
                  </label>
                  <input
                    type="text"
                    value={formState.vehicle}
                    onChange={(e) =>
                      setFormState({ ...formState, vehicle: e.target.value })
                    }
                    placeholder="e.g. Toyota Camry, Honda CBR, SUV..."
                    className="booking-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">
                    Message / Rental Details
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Dates, location, duration, any special requests..."
                    className="booking-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shine w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/25 active:scale-[0.98] text-sm"
                >
                  <Send size={16} />
                  Send Booking Request
                </button>

                <p className="text-gray-600 text-xs text-center">
                  By submitting, you agree to be contacted by Engenz via
                  WhatsApp or email regarding your rental inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
