import { ScanLinesEffect } from "@/components/ui/ScanLinesEffect"
import { DataStreamOverlay } from "@/components/ui/DataStreamOverlay"
import { ParticleEffectsOverlay } from "@/components/ui/ParticleEffectsOverlay"
import { GridBackground } from "@/components/ui/GridBackground"
import { CyberpunkCanvas } from "@/components/layout/CyberpunkCanvas"
import { CyberpunkNavbar } from "@/components/layout/CyberpunkNavbar"
import { HeroSection } from "@/components/layout/HeroSection"
import { CyborgVendorsSection } from "@/components/layout/CyborgVendorsSection"
import { CyberpunkFooter } from "@/components/layout/CyberpunkFooter"
import { HolographicMarketplace } from "@/components/layout/HolographicMarketplace"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-cyan-400 overflow-hidden relative">
      <ScanLinesEffect />
      <DataStreamOverlay />
      <ParticleEffectsOverlay />
      <GridBackground />
      <CyberpunkCanvas />

      <CyberpunkNavbar
        name="PAUL LUKIC"
        email="paul.lukic94@gmail.com"
        linkedinUrl="https://www.linkedin.com/in/paul-lukic/" 
        githubUrl="https://github.com/paullukic"
        cvFile="Paul_Lukic_CV.pdf"
      />
      <HeroSection />
      <HolographicMarketplace />
      <CyborgVendorsSection />
      <CyberpunkFooter />
    </div>
  )
}