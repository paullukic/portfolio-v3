import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Zap, Eye, MoveDown } from "lucide-react"
import { HeroHUDOverlay } from "@/components/layout/HeroHUDOverlay"

export function HeroSection() {
  const [glitchText, setGlitchText] = useState("full_STACK.EXE")

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ"
    const originalText = "full_STACK.EXE"

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        const glitched = originalText
          .split("")
          .map((char) => (Math.random() > 0.7 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
          .join("")
        setGlitchText(glitched)
        setTimeout(() => setGlitchText(originalText), 150)
      }
    }, 1200)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <HeroHUDOverlay />

      <div className="text-center space-y-8 max-w-5xl">
        <div className="space-y-6">
          <div className="relative">
            <h1 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 font-mono tracking-wider">
              {glitchText}
            </h1>
            <div className="absolute inset-0 text-xl md:text-3xl font-bold text-cyan-400 opacity-20 animate-pulse font-mono tracking-wider blur-sm">
              {glitchText}
            </div>
            <div className="absolute inset-0 text-xl md:text-3xl font-bold text-pink-400 opacity-10 animate-ping font-mono tracking-wider">
              {glitchText}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-2xl md:text-3xl text-pink-400 font-mono animate-pulse">
              {"> WELCOME_TO_THE_FUTURE.EXE"}
            </div>
          </div>
        </div>

        <div className="top-20 md:top-auto relative p-6 border-2 border-cyan-500/40 bg-black/60 backdrop-blur-sm">
          <div className="absolute top-2 left-2 w-3 h-3 bg-green-400 rounded-full animate-ping" />
          <div className="absolute top-2 right-2 text-xs text-cyan-400 font-mono animate-pulse">FRONT_END: ACTIVE</div>
          <div className="absolute bottom-2 left-2 text-xs text-pink-400 font-mono">BACK_END: ON</div>
          <p className="text-left text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono">
            Full Stack Netrunner with 5+ cycles hacking the code matrix across megacorps and street-level gigs. 
            Known for dropping high-octane, user-centric programs with lethal speed and razor precision. 
            Battle-tested leading both frontend chrome and backend rigs, mentoring rookies in the shadows, 
            and scaling cybernetic constructs using cutting-edge tech like
            <span className="text-cyan-400"> React, Svelte, Knockout.js, Java, SpringBoot, Firebase MsSQL</span>
            . Wired to craft clean, scalable systems and deliver slick, immersive user ops that light up the grid.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center ">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Scroll down"
            onClick={() => {
              const el = document.getElementById("holomarketplace")
              if (el) {
                el.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="animate-bounce w-12 h-24 border-2 border-cyan-500/20 bg-black/40 backdrop-blur-xs rounded-full"
          >
            <MoveDown className="h-12 w-12 text-cyan-400 animate-pulse" />
          </Button>
        </div>
      </div>
    </section>
  )
}