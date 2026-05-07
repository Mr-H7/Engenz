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
        {/* Studio floor glow — grounds the car visually */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 90% 50% at 50% 100%, ${glowColor} 0%, transparent 65%)`,
          }}
        />
        {/* Full car visible — object-contain mimics a studio product shot */}
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          className="object-contain object-bottom"
          style={{ padding: "8% 6% 4%" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle bottom shadow for depth */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(4,6,16,0.6) 0%, transparent 100%)",
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
