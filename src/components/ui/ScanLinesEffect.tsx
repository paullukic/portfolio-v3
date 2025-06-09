import { useState, useEffect } from "react"

export function ScanLinesEffect() {
  const [scanLines, setScanLines] = useState(true)

  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanLines((prev) => !prev)
    }, 80)
    return () => clearInterval(scanInterval)
  }, [])

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 ${scanLines ? "opacity-25" : "opacity-10"} transition-opacity duration-50`}
    >
      <div
        className="w-full h-full"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.15) 2px,
            rgba(0, 255, 255, 0.15) 4px
          )`,
          animation: "scanlines 0.08s linear infinite",
        }}
      />
    </div>
  )
}