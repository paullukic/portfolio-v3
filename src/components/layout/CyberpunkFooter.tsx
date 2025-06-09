import React from "react";

export const CyberpunkFooter: React.FC = () => {
  return (
    <footer className="relative z-10 border-t-2 border-cyan-500/60 py-16 px-6 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-12 h-12 border-2 border-cyan-400 rounded-full animate-spin" />
                <div className="absolute inset-2 w-8 h-8 border border-pink-400 rounded-full animate-ping" />
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                  PAXHAX_CORP
                </span>
                <div className="text-xs text-green-400 font-mono animate-pulse">
                  NEURAL_a_ACTIVE
                </div>
              </div>
            </div>
            <p className="text-gray-400 font-mono text-xs">
              Your gateway to the cybernetic future
            </p>
          </div>
          <div className="text-xs font-mono text-cyan-400 space-y-4">
            <div>CORP_ID: PXC_2077 ANCIENT TECH</div>
            <a
              href="https://paullukic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-green-400 text-normal hover:text-green-700 animate-pulse ">{"> TERMINAL"}</div>
            </a>
            <a
              href="https://paullukic.com/gui/win98.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-cyan-400 text-normal hover:text-green-700 animate-pulse ">{"> GUI: WINDOWS_98"}</div>
            </a>
            <a
              href="https://react.paullukic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-pink-400 text-normal hover:text-green-700 animate-pulse "> {"> REACT: YR2022_ACTIVE"}</div>
            </a>
          </div>
        </div>

        <div className="border-t-2 border-cyan-500/40 mt-2 pt-8 text-center space-y-4">
          <div className="text-gray-400 font-mono">
            <p>
              &copy; {new Date().getFullYear()} PAUL_LUKIC PAXHAX_CORP.
              ALL_RIGHTS_RESERVED.
            </p>
            <p className="text-sm text-cyan-400 animate-pulse">
              NEURAL_a_ACTIVE | QUANTUM_ENCRYPTION_ENABLED | PARTICLES_ONLINE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
