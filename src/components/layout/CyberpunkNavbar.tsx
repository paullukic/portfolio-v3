// src/components/layout/CyberpunkNavbar.tsx
import { Button } from "@/components/ui/button";
import { Wifi, Github, Linkedin, Paperclip } from "lucide-react";
import { useEffect, useState } from "react";
// Import the Tooltip components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Adjust path if necessary

interface CyberpunkNavbarProps {
  name: string;
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  cvFile?: string;
}

export const CyberpunkNavbar: React.FC<CyberpunkNavbarProps> = ({
  name,
  email,
  linkedinUrl,
  githubUrl,
  cvFile,
}) => {
  const [glitchText, setGlitchText] = useState("PAUL_LUKIC");

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
    const originalText = "PAUL_LUKIC";

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        const glitched = originalText
          .split("")
          .map((char) => (Math.random() > 0.2 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
          .join("");
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 150);
      }
    }, 1200);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    // Wrap the entire navbar with TooltipProvider
    <TooltipProvider>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent bg-opacity-70 backdrop-blur-md border-b border-purple-800 shadow-lg text-white p-4 flex items-center justify-between font-mono">
        <div className="flex items-center space-x-4">
          <Wifi className="text-green-400 h-4 w-4 animate-pulse" />
          <a
            href="/"
            className="text-xl max-w-30 font-bold text-transparent hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-xs max-w-30 md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-yellow-400 font-mono tracking-wider">
              {glitchText}
            </h1>
            <div className="absolute max-w-30 inset-0 text-xs md:text-xl font-bold text-green-400 opacity-20 animate-pulse font-mono tracking-wider blur-sm">
              {glitchText}
            </div>
            <div className="absolute max-w-30 inset-0 text-xs md:text-xl font-bold text-pink-400 opacity-10 animate-ping font-mono tracking-wider">
              {glitchText}
            </div>
          </a>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          {linkedinUrl && (
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="font-mono text-xs bg-gray-800 text-white border-blue-500 border px-3 py-1 rounded-md">
                <p>_Load LinkedIn Profile</p>
              </TooltipContent>
            </Tooltip>
          )}
          {githubUrl && (
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-400"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="font-mono text-xs bg-gray-800 text-white border-gray-500 border px-3 py-1 rounded-md">
                <p>_Peek GitHub</p>
              </TooltipContent>
            </Tooltip>
          )}
          {cvFile && (
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={cvFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400"
                  >
                    <Paperclip className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="font-mono text-xs bg-gray-800 text-white border-green-500 border px-3 py-1 rounded-md">
                <p>_Get CV/Resume</p>
              </TooltipContent>
            </Tooltip>
          )}

          {/* Contact Button */}
          <Button
            className="cyber-button text-xs px-3 py-1 md:px-4 md:py-2 text-red-400"
            asChild
          >
            <a href={`mailto:${email}`}>MAILME</a>
          </Button>
        </div>
      </nav>
    </TooltipProvider>
  );
};