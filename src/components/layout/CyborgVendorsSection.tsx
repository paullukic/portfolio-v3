import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Shield } from "lucide-react";
import profileImg from "@/assets/paul.jpeg"; // Adjust the path as necessary

export const CyborgVendorsSection: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-pink-900/30 via-black to-yellow-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-sm text-pink-400 font-mono animate-pulse">{"> SCANNING_VENDOR_NETWORK..."}</div>
          <h2 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 font-mono">
            CYBORG_VENDORS
          </h2>
          <div className="text-lg text-yellow-400 font-mono animate-bounce">{"> ENHANCED_BEINGS_DETECTED"}</div>
          <div className="text-md text-green-400 font-mono">{"> HOLO_INTERFACE_ACTIVE"}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-pink-500 mr-2 to-yellow-500 text-black font-mono font-bold text-lg px-4 py-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-ping opacity-30" />
                AUTHORIZED_DEALERS
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-500 to-yellow-400 text-black font-mono font-bold text-lg px-4 py-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-ping opacity-30" />
                MODULES_AVAILABLE
              </Badge>

              <h3 className="text-4xl font-bold text-cyan-400 font-mono">
                PAUL_ LUKIC
                <br />
                <span className="text-pink-400">ENHANCED_SERVICE</span>
              </h3>

              {/* Tech Stack */}
              <div className="grid grid-cols-2 gap-4 text-sm text-cyan-300 font-mono mt-6">
                <div>🧩 React.js / SvelteKit / Knockout.js</div>
                <div>🧠 SpringBoot / Firebase / MySQL</div>
                <div>🎨 Tailwind / Figma / BEM</div>
                <div>🛡️ Red Team Ops / PenTest+ Certified</div>
                <div>🔍 SEO / Analytics / Glitchtip / Sentry</div>
                <div>📦 Chrome Extensions / PDF Engines</div>
              </div>

              {/* Soft Skills / Protocols */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "FAST_DEPLOYMENT",
                  "CLEAN_CODE_GUARANTEE",
                  "MENTORSHIP_PROTOCOL_ENABLED",
                  "TEAM_SYNERGY_OPTIMIZED",
                  "TIME_MANAGEMENT_AUTOSYNC",
                  "CALM_UNDER_PRESSURE",
                ].map((trait, i) => (
                  <Badge
                    key={i}
                    className="bg-gradient-to-r from-pink-400/20 to-cyan-400/20 text-cyan-200 font-mono text-xs border border-cyan-400/40 backdrop-blur-sm px-3 py-1"
                  >
                    {trait}
                  </Badge>
                ))}
              </div>

              {/* Certifications */}
              <p className="text-pink-300 font-mono text-sm mt-4">
                🔐 Firmware Upgrades: CompTIA PenTest+ & TryHackMe Jr. Pentester Certified
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="h-6 w-6" />,
                  text: "MULTI_DISTRICT_LOCATIONS",
                  status: "ONLINE",
                  color: "cyan",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  text: "ENCRYPTED_TRANSACTIONS",
                  status: "SECURE",
                  color: "yellow",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-2 border-cyan-500/40 bg-black/40 backdrop-blur-sm relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center space-x-4 text-cyan-400 relative z-10">
                    {feature.icon}
                    <span className="font-mono">{feature.text}</span>
                  </div>
                  <Badge
                    className={`bg-${feature.color}-500/20 text-${feature.color}-400 border border-${feature.color}-500/50 font-mono relative`}
                  >
                    <div className="absolute inset-0 bg-white/10 animate-pulse opacity-20" />
                    {feature.status}
                  </Badge>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
                onClick={() => window.location.href = "https://www.linkedin.com/in/paul-lukic/"}
                className="cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 text-black font-bold text-lg px-10 py-6 font-mono relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              LOCATE_VENDOR
            </Button>
          </div>

          {/* Visual Side Panel */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-lg border-2 border-cyan-500/60 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" />
              <div className="absolute inset-0 opacity-40">
                <div
                  className="w-full h-full"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.2) 0%, transparent 50%),
                                radial-gradient(circle at 70% 70%, rgba(255, 0, 128, 0.2) 0%, transparent 50%)`,
                    animation: "particle-dance 4s ease-in-out infinite alternate",
                  }}
                />
              </div>

              <div className="text-center space-y-6 z-10 relative">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 rounded-full mx-auto animate-pulse" />
                    <img
                        src={profileImg}
                        alt="Vendor"
                        className="absolute inset-0 w-24 h-24 mx-auto my-auto z-20 rounded-full object-contain "
                        style={{ left: '0', right: '0', top: '0', bottom: '0', margin: 'auto' }}
                    />
                  <div className="absolute inset-0 w-32 h-32 border-4 border-cyan-400 rounded-full mx-auto animate-spin" />
                  <div className="absolute inset-2 w-28 h-28 border-2 border-pink-400 rounded-full mx-auto animate-ping" />
                </div>
                <div className="space-y-2">
                  <div className="text-cyan-400 font-mono text-lg animate-pulse">{"> VENDOR_INTERFACE.EXE"}</div>
                  <div className="text-pink-400 font-mono text-xs">GAMING_SIMULATOR_ACTIVE</div>
                  <div className="text-yellow-400 font-mono text-xs">SYSTEM_OPTIMIZER_MODULE</div>
                  <div className="text-green-400 font-mono text-xs">PHYSICAL_TRAINING_ROUTINE</div>
                  <div className="text-purple-400 font-mono text-xs">BIOHACKING_INTERFACE_ON</div>
                </div>
              </div>

              <div className="absolute top-4 left-4 text-xs font-mono text-cyan-400 bg-black/60 p-2 rounded border border-cyan-400/50">
                <div>VENDOR_ID: CYB_001PAUL_lukic</div>
                <div className="text-green-400">STATUS: ONLINE</div>
                <div className="text-yellow-400">RATING: ★★★★★</div>
                <div className="text-pink-400">AVAILABLE</div>
              </div>
            </div>

            {/* Extra floating visuals */}
            <div className="absolute -top-6 -right-6 w-20 h-20 border-2 border-pink-400/50 rounded-lg animate-spin opacity-60 bg-gradient-to-br from-pink-400/30 to-transparent">
              <div className="absolute inset-0 bg-pink-400/10 animate-pulse" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-yellow-400/50 rounded-full animate-bounce opacity-60 bg-gradient-to-br from-yellow-400/30 to-transparent">
              <div className="absolute inset-0 bg-yellow-400/10 animate-ping" />
            </div>
            <div className="absolute top-1/2 -right-4 w-8 h-24 border border-cyan-400/50 bg-gradient-to-b from-cyan-400/40 to-transparent animate-pulse opacity-60">
              <div className="absolute inset-0 bg-cyan-400/10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
