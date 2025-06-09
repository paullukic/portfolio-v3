import { useState, useEffect } from "react"

export function DataStreamOverlay() {
  const [streams, setStreams] = useState<string[]>([])

  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const generateStream = () => {
      return Array.from({ length: 25 }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
    }

    const interval = setInterval(() => {
      setStreams((prev) => {
        const newStreams = [...prev, generateStream()]
        return newStreams.slice(-15) // Keep only last 15 streams
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 right-0 w-40 h-full overflow-hidden pointer-events-none z-20 opacity-40">
      {streams.map((stream, index) => (
        <div
          key={index}
          className="text-green-400 text-xs font-mono whitespace-nowrap animate-pulse"
          style={{
            animation: `datafall 4s linear infinite`,
            animationDelay: `${index * 0.15}s`,
          }}
        >
          {stream}
        </div>
      ))}
    </div>
  )
}