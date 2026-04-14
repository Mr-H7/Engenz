"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What documents do I need to rent a vehicle?",
    a: "You will need a valid national ID (CIN) or passport, a valid Moroccan driver's license (Permis de Conduire — category B for cars, A for motorcycles), and a security deposit. For foreign nationals, a passport and an international or EU driving permit are accepted.",
  },
  {
    q: "How much is the security deposit?",
    a: "The deposit varies by vehicle type: Economy cars start at 500 DH, Standard cars/SUVs at 1,000 DH, Luxury vehicles at 2,000–5,000 DH, and motorcycles at 300–500 DH. The full deposit is returned upon safe vehicle return with no damage.",
  },
  {
    q: "What is the minimum rental duration?",
    a: "Our minimum rental period is 1 day (24 hours) for most vehicles. We also offer half-day (12-hour) packages for select city cars and motorcycles. Contact us for details on short-term options.",
  },
  {
    q: "Where can I pick up and return the vehicle?",
    a: "You can pick up and return vehicles at our main location. We also offer free delivery and pickup within the city for weekly and monthly rentals. For daily rentals, delivery can be arranged for an additional fee.",
  },
  {
    q: "Is insurance included in the rental price?",
    a: "Yes, all Engenz vehicles include basic insurance coverage. Comprehensive insurance is included in our Weekend, Weekly, and Monthly plans. Additional coverage options are available at checkout for maximum peace of mind.",
  },
  {
    q: "Can I extend my rental period?",
    a: "Absolutely. Extensions can be requested via WhatsApp or phone at least 6 hours before the return time. Extension rates are the same as your original daily rate, and we'll adjust your invoice accordingly.",
  },
  {
    q: "What happens if the vehicle breaks down?",
    a: "Engenz provides 24/7 roadside assistance for all rentals. Contact our support team immediately and we will dispatch help or arrange a replacement vehicle as quickly as possible — no extra charge for mechanical issues.",
  },
  {
    q: "Can I book a vehicle with a driver?",
    a: "Yes, we offer driver-with-vehicle packages. This is popular for corporate clients, airport transfers, and special events. Driver rates vary by duration and vehicle type — contact us for a custom quote.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation is available up to 24 hours before pickup. Cancellations within 24 hours may incur a 50% deposit deduction. No-shows are charged the full first day's rental.",
  },
  {
    q: "Do you offer long-term rental discounts?",
    a: "Yes! Weekly rentals receive 15% off the daily rate, and monthly rentals receive up to 25% off. Corporate clients get custom pricing with additional benefits. Contact us to discuss your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative" style={{ background: "#0a0a0a" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle size={10} className="text-blue-400" />
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Frequently Asked <span className="gradient-text-blue">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything you need to know about renting with Engenz. Can&#39;t find
            your answer?{" "}
            <a href="#contact" className="text-blue-400 hover:underline">
              Contact us directly.
            </a>
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen
                    ? "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(37,99,235,0.02))"
                    : "linear-gradient(145deg, #141414, #111)",
                  border: isOpen
                    ? "1px solid rgba(37,99,235,0.2)"
                    : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span
                    className={`font-semibold text-sm sm:text-base transition-colors ${
                      isOpen ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="h-px bg-white/5 mb-4" />
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact prompt */}
        <div
          className="mt-10 p-6 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(37,99,235,0.02))",
            border: "1px solid rgba(37,99,235,0.15)",
          }}
        >
          <p className="text-gray-400 text-sm mb-3">
            Still have questions? Our team is ready to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/212712505058"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-green-600/15 border border-green-500/25 text-green-400 hover:text-green-300 rounded-xl text-sm font-semibold transition-all hover:bg-green-600/25"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/15 border border-blue-500/25 text-blue-400 hover:text-blue-300 rounded-xl text-sm font-semibold transition-all hover:bg-blue-600/25"
            >
              📧 Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
