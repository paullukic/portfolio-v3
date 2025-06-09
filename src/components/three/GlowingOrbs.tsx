import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import type * as THREE from "three"

export function GlowingOrbs() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01
        child.rotation.x = state.clock.elapsedTime * (0.5 + i * 0.1)
      })
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: 15 }, (_, i) => (
        <Sphere
          key={i}
          position={[(Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25]}
          args={[0.1, 16, 16]}
        >
          <meshStandardMaterial
            color={["#00ffff", "#ff0080", "#ffff00", "#00ff41"][Math.floor(Math.random() * 4)]}
            emissive={["#00ffff", "#ff0080", "#ffff00", "#00ff41"][Math.floor(Math.random() * 4)]}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}
    </group>
  )
}
