
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Particles } from "@/components/three/Particles"
import { DataFragments } from "@/components/three/DataFragments"
import { GlowingOrbs } from "@/components/three/GlowingOrbs"
import { HoloText } from "@/components/three/HoloText"
import { FloatingGeo } from "@/components/three/FloatingGeo"
import { HoloProduct } from "@/components/three/HoloProduct"
import { HoloAds } from "@/components/three/HoloAds"
import { DataVisualization } from "@/components/three/DataVisualization"
import { MatrixParticles } from "@/components/three/MatrixParticles"

export function CyberpunkCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#00ffff" intensity={0.8} />
          <pointLight position={[-10, -10, -10]} color="#ff0080" intensity={0.6} />
          <pointLight position={[0, 10, -10]} color="#ffff00" intensity={0.4} />

          {/* Particle Systems */}
          <Particles count={1500} />
          <GlowingOrbs />
          <DataFragments />
          <MatrixParticles />

          {/* Holo Text */}
          <HoloText text="4BEES" position={[3, -3, 0]} color="#ff0080" size={0.4} />
          <HoloText text="TEODESK" position={[0, 0, -3]} color="#ffff00" size={0.5} />
          <HoloText text="WELCOME CHOOM" position={[-2, -1, 2]} color="#00ff41" size={0.3} />
          <HoloText text="COLLABWRITING" position={[4, 2, -1]} color="#ff0080" size={0.4} />
          <HoloText text="WELCOME CHOOM" position={[0, 4, 1]} color="#ffff00" size={0.3} />

          {/* Floating Geometry */}
          <FloatingGeo />

          {/* Holo Products */}
          <HoloProduct position={[-2, 1, 1]} title="NEURAL INTERFACE v3.1" />
          <HoloProduct position={[2, -1, 2]} title="HACK" />
          <HoloProduct position={[2, 2, -1]} title="DEVELOPER" />

          {/* Holo Advertisements */}
          <HoloAds />

          {/* Data Visualization */}
          <DataVisualization />

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Suspense>
      </Canvas>
    </div>
  )
}
