export function ParticleEffectsOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-25 opacity-60">
      <div
        className="w-full h-full"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 50% 50%, rgba(255, 255, 0, 0.05) 0%, transparent 50%)`,
          animation: "particle-glow 6s ease-in-out infinite alternate",
        }}
      />
    </div>
  )
}