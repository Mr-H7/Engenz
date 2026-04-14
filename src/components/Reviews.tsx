import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Business Traveler",
    location: "Jakarta",
    avatar: "BS",
    avatarColor: "from-blue-600 to-blue-800",
    rating: 5,
    date: "March 2025",
    text: "Booked a Toyota Camry for 5 days and it was absolutely spotless. The process was incredibly smooth — WhatsApp confirmation in under 10 minutes. Engenz is my go-to rental from now on. Highly recommended!",
    vehicle: "Toyota Camry",
    highlight: "Lightning fast booking",
  },
  {
    id: 2,
    name: "Sari Dewi",
    role: "Family Trip Planner",
    location: "Bandung",
    avatar: "SD",
    avatarColor: "from-purple-600 to-purple-800",
    rating: 5,
    date: "February 2025",
    text: "Rented an Innova for a family holiday. The car was clean, well-maintained, and exactly what was advertised. The team was super helpful and even gave us recommendations for the trip. Will use again!",
    vehicle: "Toyota Innova",
    highlight: "Spotless clean vehicle",
  },
  {
    id: 3,
    name: "Rizky Pratama",
    role: "Motorcycle Enthusiast",
    location: "Yogyakarta",
    avatar: "RP",
    avatarColor: "from-emerald-600 to-emerald-800",
    rating: 5,
    date: "March 2025",
    text: "Rented the Honda CBR for a weekend trip. Bike was in great condition, and the rental price was fair. The pickup was easy and staff were professional. 10/10 experience overall.",
    vehicle: "Honda CBR 600",
    highlight: "Perfect bike condition",
  },
  {
    id: 4,
    name: "Maya Putri",
    role: "Freelance Designer",
    location: "Surabaya",
    avatar: "MP",
    avatarColor: "from-rose-600 to-rose-800",
    rating: 5,
    date: "January 2025",
    text: "The weekly plan was exactly what I needed. Affordable, with no hidden fees. I extended for another 3 days and it was handled instantly over WhatsApp. Great service, great people!",
    vehicle: "Honda Jazz",
    highlight: "No hidden charges",
  },
  {
    id: 5,
    name: "Andi Firmansyah",
    role: "Corporate Manager",
    location: "Jakarta",
    avatar: "AF",
    avatarColor: "from-amber-600 to-amber-800",
    rating: 5,
    date: "April 2025",
    text: "We use Engenz for our company's regular travel needs. The corporate package is excellent — multiple vehicles, single invoice, and our account manager is always responsive. Exactly what a business needs.",
    vehicle: "BMW 5 Series",
    highlight: "Excellent corporate plan",
  },
  {
    id: 6,
    name: "Fika Rahmawati",
    role: "Tourism Blogger",
    location: "Bali",
    avatar: "FR",
    avatarColor: "from-teal-600 to-teal-800",
    rating: 5,
    date: "March 2025",
    text: "Rented a Yamaha NMAX to explore Bali and it was the best decision. The scooter was brand new, fuel-efficient, and the rental was super affordable. Engenz made my trip unforgettable.",
    vehicle: "Yamaha NMAX",
    highlight: "Affordable & reliable",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative" style={{ background: "#0a0a0a" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Star size={10} className="text-amber-400" />
            Customer Reviews
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What Our Renters <span className="gradient-text-blue">Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Real experiences from real customers. See why hundreds of people
            trust Engenz for their vehicle rental needs.
          </p>
          <div className="section-divider mt-6" />

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-2xl glass border border-amber-500/15">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-black text-xl">5.0</span>
            <span className="text-gray-500 text-sm">from 500+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="testimonial-card relative p-6 rounded-2xl"
              style={{
                background: "linear-gradient(145deg, #141414, #111)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10">
                <Quote size={36} className="text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
                <span className="text-gray-600 text-xs ml-2">{review.date}</span>
              </div>

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Highlight tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
                ✓ {review.highlight}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${review.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {review.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {review.role} · {review.location}
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-gray-600 text-xs">Rented</div>
                  <div className="text-gray-400 text-xs font-medium">{review.vehicle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Join hundreds of satisfied customers.{" "}
            <a href="#contact" className="text-blue-400 hover:underline font-medium">
              Book your first ride today.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
