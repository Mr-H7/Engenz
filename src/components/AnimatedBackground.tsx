"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Large drifting orbs */}
      <div className="anim-orb anim-orb-1" />
      <div className="anim-orb anim-orb-2" />
      <div className="anim-orb anim-orb-3" />
      {/* Spinning geometric rings */}
      <div className="anim-ring anim-ring-1" />
      <div className="anim-ring anim-ring-2" />
      {/* Floating thin lines */}
      <div className="anim-line anim-line-1" />
      <div className="anim-line anim-line-2" />
      <div className="anim-line anim-line-3" />
      {/* Tiny sparks */}
      <div className="anim-spark anim-spark-1" />
      <div className="anim-spark anim-spark-2" />
      <div className="anim-spark anim-spark-3" />
      <div className="anim-spark anim-spark-4" />
    </div>
  );
}
