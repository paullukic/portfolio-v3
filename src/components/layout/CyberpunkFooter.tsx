// src/components/layout/CyberpunkFooter.tsx
import React from 'react';

export const CyberpunkFooter: React.FC = () => {
  return (
    <footer className="relative z-10 border-t-2 border-cyan-500/60 py-16 px-6 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-12 h-12 border-2 border-cyan-400 rounded-full animate-spin" />
                <div className="absolute inset-2 w-8 h-8 border border-pink-400 rounded-full animate-ping" />
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                  NEXUS_CORP
                </span>
                <div className="text-xs text-green-400 font-mono animate-pulse">NEURAL_a_ACTIVE</div>
              </div>
            </div>
            <p className="text-gray-400 font-mono">Your gateway to the cybernetic future</p>
            <div className="text-xs font-mono text-cyan-400 space-y-1">
              <div>CORP_ID: NXS_2077</div>
              <div className="text-green-400">LICENSE: VALID</div>
              <div className="text-yellow-400">SECURITY: MAXIMUM</div>
              <div className="text-pink-400">PARTICLES: ENABLED</div>
            </div>
          </div> */}

          {/* This section is using static data for demonstration.
              In a real app, you might want to pass these as as props
              or define them in a configuration file. */}
          {/* {["DISTRICTS", "SERVICES", "SUPPORT"].map((section) => (
            <div key={section} className="space-y-6">
              <h4 className="text-cyan-400 font-bold font-mono text-lg border-b-2 border-cyan-500/40 pb-2">
                {section}
              </h4>
              <div className="space-y-3">
                {["NEURAL_a", "CYBER_MODS", "TECH_SUPPORT"].map((a) => (
                  <a
                    href="#" // Replace with actual as if applicable
                    key={a}
                    className="text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors font-mono text-sm relative group block" // Added 'block' for better click area
                  >
                    <div className="absolute -left-2 top-0 w-1 h-0 bg-cyan-400 group-hover:h-full transition-all duration-300" />
                    {"> " + a}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <div className="border-t-2 border-cyan-500/40 mt-2 pt-8 text-center space-y-4">
          <div className="text-gray-400 font-mono">
            <p>&copy; {new Date().getFullYear()} PAUL_LUKIC PAXHAX_CORP. ALL_RIGHTS_RESERVED.</p>
            <p className="text-sm text-cyan-400 animate-pulse">
              NEURAL_a_ACTIVE | QUANTUM_ENCRYPTION_ENABLED | PARTICLES_ONLINE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};