"use client";

import { useState } from "react";
import { X, MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup Panel */}
      {isOpen && (
        <div
          className="mb-2 w-72 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(145deg, #111, #141414)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* Header */}
          <div
            className="p-4 flex items-center gap-3"
            style={{
              background: "linear-gradient(135deg, #16a34a, #15803d)",
            }}
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Engenz Support</div>
              <div className="flex items-center gap-1 text-green-200 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                Online now · Fast reply
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-white/70 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message preview */}
          <div className="p-4">
            <div
              className="p-3 rounded-xl rounded-tl-none text-sm text-gray-300 mb-3"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              👋 Hi! How can Engenz help you today? Looking to rent a car or motorcycle?
            </div>

            <div className="space-y-2 mb-4">
              {[
                "🚗 I want to rent a car",
                "🏍️ I want to rent a motorcycle",
                "💬 I have a question",
                "📋 Request a custom quote",
              ].map((msg) => (
                <a
                  key={msg}
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(msg.replace(/^.{2} /, "Hi Engenz! "))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white group transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {msg}
                  <ArrowRight size={12} className="text-gray-600 group-hover:text-gray-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
            >
              <MessageCircle size={16} />
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* Phone quick link (shows when popup is closed) */}
      {!isOpen && (
        <a
          href="tel:+6281234567890"
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
          style={{
            background: "rgba(37,99,235,0.9)",
            border: "1px solid rgba(37,99,235,0.5)",
            boxShadow: "0 4px 15px rgba(37,99,235,0.3)",
          }}
        >
          <Phone size={13} />
          Call Us
        </a>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-pulse w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          boxShadow: "0 8px 25px rgba(37,211,102,0.35)",
        }}
        aria-label="Open WhatsApp Chat"
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
