import Image from "next/image";

type Props = {
  image: string | null;
  emoji: string;
  name: string;
  bgGradient: string;
  glowColor: string;
  className?: string;
  style?: React.CSSProperties;
  emojiSize?: string;
  priority?: boolean;
};

export default function VehicleImage({
  image,
  emoji,
  name,
  bgGradient,
  glowColor,
  className = "",
  style = {},
  emojiSize = "clamp(90px, 14vw, 130px)",
  priority = false,
}: Props) {
  if (image) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ background: bgGradient, ...style }}
      >
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* subtle dark vignette for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(5,8,20,0.85) 0%, rgba(5,8,20,0.1) 50%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: bgGradient, ...style }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 70%, ${glowColor} 0%, transparent 70%)`,
        }}
      />
      <span
        className="select-none relative z-10"
        style={{
          fontSize: emojiSize,
          filter: `drop-shadow(0 12px 40px ${glowColor})`,
          transform: "rotate(-5deg)",
        }}
      >
        {emoji}
      </span>
    </div>
  );
}
