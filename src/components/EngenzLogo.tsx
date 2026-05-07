"use client";

/* Recreates the Engenz logo:
   - Left-pointing arrow/wing icon with embedded car front silhouette
   - "Engenz" bold text + "Rental shop" tagline
   - Adapts colors via CSS variables for dark/light mode */
export default function EngenzLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 148 50"
      width="148"
      height="50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Icon: upper arrow/wing shape ── */}
      <path
        d="M2,4 L20,4 Q26,4 32,12 L40,23 Q42,27 38,31 L22,40 Q16,44 9,43 L2,43 Q0,43 0,41 L0,6 Q0,4 2,4 Z"
        fill="var(--logo-icon)"
      />
      {/* ── Icon: lower tail fin (separate piece) ── */}
      <path
        d="M9,46 L20,46 Q22,46 23.5,48.5 L25,51 L9,51 Q7,51 7,49 Z"
        fill="var(--logo-icon)"
      />

      {/* ── Car front silhouette (white on icon) ── */}
      {/* Body / hood */}
      <path
        d="M5,21 L11,16 L30,16 L35,21 L37,24 L4,24 Z"
        fill="white"
        opacity="0.92"
      />
      {/* Windshield */}
      <path
        d="M13,16 L16,11 L27,11 L30,16 Z"
        fill="white"
        opacity="0.72"
      />
      {/* Left headlight */}
      <ellipse cx="8.5" cy="24.5" rx="3" ry="2.1" fill="white" opacity="0.95" />
      {/* Right headlight */}
      <ellipse cx="31" cy="24.5" rx="3" ry="2.1" fill="white" opacity="0.95" />
      {/* Front bumper / grille */}
      <rect x="6.5" y="27" width="26" height="2.5" rx="1.2" fill="white" opacity="0.52" />

      {/* ── Text: "Engenz" ── */}
      <text
        x="47"
        y="33"
        fontFamily="var(--font-oswald), Oswald, Arial Narrow, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="0.5"
        fill="var(--text)"
      >
        Engenz
      </text>
      {/* ── Sub-text: "Rental shop" ── */}
      <text
        x="51"
        y="44"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontSize="9.5"
        fontWeight="400"
        letterSpacing="0.6"
        fill="var(--text-muted)"
      >
        Rental shop
      </text>
    </svg>
  );
}
