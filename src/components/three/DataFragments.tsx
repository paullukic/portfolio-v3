import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Plane } from "@react-three/drei"
import type * as THREE from "three"

export function DataFragments() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: 20 }, (_, i) => (
        <Float key={i} speed={2 + Math.random()} rotationIntensity={1} floatIntensity={2}>
          <Plane position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15]} args={[0.5, 0.3]}>
            <meshStandardMaterial
              color={Math.random() > 0.5 ? "#ff0080" : "#00ffff"}
              emissive={Math.random() > 0.5 ? "#ff0080" : "#00ffff"}
              emissiveIntensity={0.3}
              transparent
              opacity={0.7}
            />
          </Plane>
        </Float>
      ))}
    </group>
  )
}