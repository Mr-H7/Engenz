import { CheckCircle, Flame, Star, Briefcase, CalendarDays, ArrowRight } from "lucide-react";

const plans = [
  {
    id: "daily",
    icon: CalendarDays,
    title: "Daily Rental",
    subtitle: "Perfect for quick trips",
    price: "From 120 DH",
    period: "/day",
    badge: null,
    color: "blue",
    features: [
      "Minimum 1 day",
      "Full fuel at pickup",
      "Basic insurance included",
      "Free cancellation (24h)",
      "WhatsApp support",
    ],
  },
  {
    id: "weekend",
    icon: Star,
    title: "Weekend Plan",
    subtitle: "Fri–Sun at a great rate",
    price: "From 800 DH",
    period: "/weekend",
    badge: "Best Value",
    color: "purple",
    features: [
      "3-day package (Fri–Sun)",
      "10% discount applied",
      "Full insurance included",
      "Free cancellation (24h)",
      "Priority support",
    ],
  },
  {
    id: "weekly",
    icon: Flame,
    title: "Weekly Plan",
    subtitle: "Most popular choice",
    price: "From 1,800 DH",
    period: "/week",
    badge: "Most Popular",
    color: "emerald",
    featured: true,
    features: [
      "7 consecutive days",
      "15% off daily rate",
      "Comprehensive insurance",
      "Free delivery & pickup",
      "24/7 roadside support",
      "Flexible extension",
    ],
  },
  {
    id: "longterm",
    icon: CalendarDays,
    title: "Monthly Plan",
    subtitle: "Ideal for extended stays",
    price: "From 5,500 DH",
    period: "/month",
    badge: null,
    color: "amber",
    features: [
      "30 days rental",
      "Up to 25% discount",
      "Full comprehensive cover",
      "Free vehicle swap option",
      "Dedicated account manager",
      "Priority booking",
    ],
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate Rental",
    subtitle: "For business needs",
    price: "Custom Quote",
    period: "",
    badge: null,
    color: "rose",
    features: [
      "Multi-vehicle packages",
      "Monthly invoicing",
      "Dedicated fleet manager",
      "Driver available on request",
      "Priority booking",
      "Custom branding optional",
    ],
  },
];

const colorMap: Record<
  string,
  { bg: string; border: string; text: string; badge: string }
> = {
  blue: {
    bg: "bg-blue-600/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    badge: "bg-blue-600/20 text-blue-300 border-blue-500/30",
  },
  purple: {
    bg: "bg-purple-600/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    badge: "bg-purple-600/20 text-purple-300 border-purple-500/30",
  },
  emerald: {
    bg: "bg-emerald-600/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    badge: "bg-emerald-600/20 text-emerald-300 border-emerald-500/30",
  },
  amber: {
    bg: "bg-amber-600/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    badge: "bg-amber-600/20 text-amber-300 border-amber-500/30",
  },
  rose: {
    bg: "bg-rose-600/10",
    border: "border-rose-500/20",
    text: "text-rose-400",
    badge: "bg-rose-600/20 text-rose-300 border-rose-500/30",
  },
};

export default function SpecialOffers() {
  return (
    <section id="offers" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="absolute w-0 h-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Flame size={10} className="text-blue-400" />
            Rental Plans
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Plans That Fit <span className="gradient-text-blue">Your Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you need a car for a day or a month, Engenz offers flexible
            rental packages at competitive, transparent pricing.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-start">
          {plans.map((plan) => {
            const c = colorMap[plan.color];
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`offer-card relative rounded-2xl overflow-hidden transition-all ${
                  isFeatured ? "offer-card featured" : ""
                }`}
                style={
                  isFeatured
                    ? {
                        background:
                          "linear-gradient(145deg, #0f1a2e, #0a1020)",
                        border: "1px solid rgba(37,99,235,0.35)",
                        boxShadow:
                          "0 0 0 1px rgba(37,99,235,0.2), 0 20px 60px rgba(37,99,235,0.15)",
                      }
                    : {
                        background: "linear-gradient(145deg, #141414, #111)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }
                }
              >
                {/* Popular ribbon */}
                {plan.badge && (
                  <div
                    className={`w-full text-center py-1.5 text-xs font-bold border-b ${c.badge}`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="p-5">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}
                  >
                    <plan.icon size={20} className={c.text} />
                  </div>

                  <h3 className="text-white font-black text-lg leading-tight">
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5 mb-4">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-5">
                    <span
                      className={`font-black text-2xl ${isFeatured ? "text-blue-400" : "text-white"}`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle
                          size={13}
                          className={`${c.text} flex-shrink-0 mt-0.5`}
                        />
                        <span className="text-gray-400 text-xs">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      isFeatured
                        ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-600/25"
                        : `${c.bg} border ${c.border} ${c.text} hover:bg-opacity-100`
                    }`}
                  >
                    {plan.id === "corporate" ? "Get Quote" : "Book This Plan"}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-gray-600 text-xs mt-8">
          All prices are indicative and may vary by vehicle type. Contact us for
          exact quotes and special event rentals.
        </p>
      </div>
    </section>
  );
}
