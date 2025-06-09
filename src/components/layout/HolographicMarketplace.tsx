import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Eye, Shield } from "lucide-react";
import { ReactElement } from "react";

interface MarketplaceItemProps {
  title: string;
  tech: string;
  description: string;
  icon: ReactElement;
  color: string;
  status: string;
  link: string;
  particles: "cyan" | "pink" | "green";
}

const MarketplaceItem = ({
  title,
  tech,
  description,
  icon,
  color,
  status,
  link,
  particles,
}: MarketplaceItemProps) => (
  <Card 
    onClick={() => {
      if (link) window.open(link, "_blank")
    }}
    className="bg-black/80 border-2 border-cyan-500/40 backdrop-blur-sm hover:border-pink-500/80 transition-all duration-300 group cursor-pointer relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute top-2 right-2 text-xs font-mono text-green-400 animate-pulse">
      {status}
    </div>

    <div
      className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
    >
      <div
        className="w-full h-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${
            particles === "cyan"
              ? "rgba(0, 255, 255, 0.1)"
              : particles === "pink"
              ? "rgba(255, 0, 128, 0.1)"
              : "rgba(0, 255, 65, 0.1)"
          } 0%, transparent 70%)`,
          animation: "particle-float 3s ease-in-out infinite alternate",
        }}
      />
    </div>

    <CardContent className="p-6 space-y-6 relative z-10">
      <div className="flex items-center gap-2 justify-between">
        <div
          className={`p-4 rounded-lg bg-gradient-to-r ${color} bg-opacity-20 border border-current relative animate-pulse`}
        >
          {icon}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
        </div>
        <Badge
          className={`bg-gradient-to-r ${color} text-black font-bold font-mono text-xs px-2 py-1 relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-white/20 animate-ping opacity-20" />
          {tech}
        </Badge>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors font-mono">
          {title}
        </h3>
        <p className="text-gray-400 font-mono text-sm">{description}</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono animate-pulse">
          <span className="text-cyan-400">COMPATIBILITY:</span>
          <span className="text-green-400">100%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-1 relative overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-1 rounded-full w-full animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    </CardContent>
  </Card>
);

export function HolographicMarketplace() {
  return (
    <section
      id="holomarketplace"
      className="relative z-10 py-20 px-6 bg-gradient-to-r from-purple-900/40 via-black to-cyan-900/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-sm text-green-400 font-mono animate-pulse">
            {"> ACCESSING_MARKETPLACE.DB"}
          </div>
          <h2 className="text-xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-yellow-400 font-mono">
            HOLOGRAPHIC_MARKETPLACE
          </h2>
          <div className="text-md text-cyan-400 font-mono animate-bounce">
            {"> NEURAL_ENHANCEMENTS_AVAILABLE"}
          </div>
          <div className="text-sm text-pink-400 font-mono">
            {"> PARTICLE_ENHANCED_DISPLAY"}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(
            [
              {
                title: "COLLABWRITING_NEXUS",
                tech: "svelte_ SpringBoot",
                description:
                  "End-to-end dev of research SaaS: PDF engine, social scrapers, Chrome fallback, Kindle sync, AI fuzzy search.",
                icon: <Cpu className="h-10 w-10" />,
                color: "from-cyan-400 to-blue-500",
                status: "LIVE_NET",
                link: "https://collabwriting.com",
                particles: "cyan",
              },
              {
                title: "GASTARBAJTER24_FRAME",
                tech: "svelte_ Firebase",
                description:
                  "MVP for Balkan classifieds: multilingual roles, image compression, SEO booster, Firebase + Svelte stack.",
                icon: <Shield className="h-10 w-10" />,
                color: "from-green-400 to-cyan-500",
                status: "FIELD_DEPLOYED",
                link: "https://gastarbajter24.com",
                particles: "green",
              },
              {
                title: "TEODESK_TIMELINE_CORE",
                tech: "knockout.js_ SpringBoot",
                description:
                  "Advanced project timeline with multi-select logic, powered by Knockout.js, SpringBoot & MySQL backend.",
                icon: <Eye className="h-10 w-10" />,
                color: "from-pink-400 to-purple-500",
                status: "ARCHIVED_NODE",
                link: "https://teodesk.com",
                particles: "pink",
              },
              {
                title: "4BEES_ARCADE_SUITE",
                tech: "html_ css_ js",
                description:
                  "Branded micro-games for Marlboro & Cocta. Engineered tight animations under strict delivery cycles.",
                icon: <Cpu className="h-10 w-10" />,
                color: "from-yellow-400 to-pink-500",
                status: "CLIENT_DEPLOYED",
                link: "https://4bees.io",
                particles: "pink",
              },
              {
                title: "CORTECH_UI_MATRIX",
                tech: "php_ html_ figma",
                description:
                  "Designed B2B UI for a storage system with custom layouts, tracked visuals and interactive structure.",
                icon: <Eye className="h-10 w-10" />,
                color: "from-blue-400 to-indigo-500",
                status: "ARCHIVED_NODE",
                link: "",
                particles: "cyan",
              },
              {
                title: "REACT_OPERATIONS_UNIT",
                tech: "react_ redux",
                description:
                  "Internal tools built using React/Redux for telco B2B clients, focused on reusable patterns and modular UI.",
                icon: <Cpu className="h-10 w-10" />,
                color: "from-orange-400 to-red-500",
                status: "LEGACY_STACK",
                link: "",
                particles: "pink",
              },
              {
                title: "RESULT_COUNTER_EXTENSION",
                tech: "js_ chrome.api",
                description:
                  "Chrome extension used by 2,000+ ops to count Google results. Designed UX, scaled, and sold successfully.",
                icon: <Shield className="h-10 w-10" />,
                color: "from-green-300 to-blue-400",
                status: "ACQUIRED_MODULE",
                link: "https://chromewebstore.google.com/detail/google-result-counter/oijjnonbajbomjimdmfchfjadndnhfgp",
                particles: "green",
              },
              {
                title: "PAXHAX_CYBER_BLOG",
                tech: "markdown_ redteam",
                description:
                  "Cybersecurity blog on penetration testing & ethical hacking. Focused on tooling, exploits, and research.",
                icon: <Eye className="h-10 w-10" />,
                color: "from-purple-400 to-pink-500",
                status: "PUBLIC_ACCESS",
                link: "https://paxhax.notion.site/Ethical-Hacking-14421d1a2d3a45dfbd9fd4dce407f9ee",
                particles: "cyan",
              },
            ] as const
          ).map((item) => (
            <MarketplaceItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
