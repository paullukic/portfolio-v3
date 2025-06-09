import { Database, Activity } from "lucide-react"

export function HeroHUDOverlay() {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  return (
    <>
      <div className="absolute top-25 left-10 text-xs font-mono text-cyan-400 space-y-1 bg-black/50 p-4 border border-cyan-500/30 backdrop-blur-sm">
        <div className="text-green-400">{"> LOCATION: NOVI_SAD_"}</div>
        <div className="text-yellow-400">{"> TIME: " + currentTime}</div>
        <div className="text-green-400">{"> THREAT_LEVEL: MINIMAL"}</div>
        <div className="text-cyan-400">{"> NEURAL_ACTIVITY: OPTIMAL"}</div>
        <div className="text-pink-400">{"> PARTICLES: ACTIVE"}</div>
        <div className="text-purple-400">{"> HOLO_SYSTEMS: ONLINE"}</div>
      </div>

      <div className="absolute top-80 left-10 w-40 h-40 border-2 border-cyan-400/50 rounded-lg opacity-60 bg-gradient-to-br from-cyan-400/20 to-transparent">
        <div className="absolute top-2 left-2 text-xs text-cyan-400 font-mono">ADS_HOLO_01</div>
        <div className="w-full h-full flex items-center justify-center relative">
          <Database className="h-12 w-12 text-cyan-400 animate-ping" />
          <div className="absolute inset-0 bg-cyan-400/10 rounded-lg animate-pulse" />
        </div>
      </div>

      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-pink-400/50 rounded-full animate-pulse opacity-60 bg-gradient-to-br from-pink-400/20 to-transparent">
        <div className="absolute top-2 left-2 text-xs text-pink-400 font-mono">SYS_MON</div>
        <div className="w-full h-full flex items-center justify-center relative">
          <Activity className="h-8 w-8 text-pink-400 animate-pulse" />
          <div className="absolute inset-0 bg-pink-400/10 rounded-full animate-ping" />
        </div>
      </div>

      <div className="absolute top-1/2 right-20 w-24 h-48 border border-yellow-400/50 bg-gradient-to-b from-yellow-400/30 to-transparent animate-pulse opacity-50">
        <div className="text-xs text-yellow-400 font-mono p-1">HOLO_AD</div>
        <div className="absolute inset-0 bg-yellow-400/5 animate-pulse" />
      </div>

      <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-green-400/50 rounded-full animate-spin opacity-40">
        <div className="w-full h-full bg-gradient-to-r from-green-400/20 to-transparent rounded-full" />
      </div>
    </>
  )
}