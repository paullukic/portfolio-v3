export function GridBackground() {
  return (
    <div className="fixed inset-0 opacity-35">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black to-cyan-900/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 via-transparent to-yellow-900/30" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(255, 0, 128, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 128, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px, 50px 50px, 25px 25px, 25px 25px, 12px 12px, 12px 12px",
          animation: "grid-move 12s linear infinite, grid-pulse 4s ease-in-out infinite alternate",
        }}
      />
    </div>
  )
}