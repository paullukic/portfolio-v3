import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Box } from "@react-three/drei"
import type * as THREE from "three"

export function DataVisualization() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -4]}>
      {Array.from({ length: 8 }, (_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Box
            position={[Math.cos((i / 8) * Math.PI * 2) * 3, Math.sin(i * 0.5) * 2, Math.sin((i / 8) * Math.PI * 2) * 3]}
            args={[0.1, Math.random() * 2 + 0.5, 0.1]}
          >
            <meshStandardMaterial
              color={`hsl(${(i / 8) * 360}, 100%, 50%)`}
              emissive={`hsl(${(i / 8) * 360}, 100%, 50%)`}
              emissiveIntensity={0.4}
            />
          </Box>
        </Float>
      ))}
    </group>
  )
}
