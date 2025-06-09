import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Box, Torus, Sphere } from "@react-three/drei"
import type * as THREE from "three"

export function FloatingGeo() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <Box position={[-4, 3, -2]} args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial color="#ff0080" emissive="#ff0080" emissiveIntensity={0.3} wireframe />
        </Box>
      </Float>

      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
        <Torus position={[4, -2, -1]} args={[0.5, 0.2, 16, 32]}>
          <meshStandardMaterial color="#00ff41" emissive="#00ff41" emissiveIntensity={0.4} />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.2}>
        <Sphere position={[0, 4, -3]} args={[0.4, 32, 32]}>
          <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.3} transparent opacity={0.7} />
        </Sphere>
      </Float>

      <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.5}>
        <Box position={[3, 2, 1]} args={[0.3, 1.2, 0.3]}>
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.4} />
        </Box>
      </Float>

      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={0.8}>
        <Torus position={[-2, -3, 2]} args={[0.3, 0.1, 8, 16]}>
          <meshStandardMaterial color="#ff0080" emissive="#ff0080" emissiveIntensity={0.5} wireframe />
        </Torus>
      </Float>

      <Float speed={1.7} rotationIntensity={0.9} floatIntensity={1.3}>
        <Sphere position={[-3, 1, -1]} args={[0.2, 16, 16]}>
          <meshStandardMaterial color="#00ff41" emissive="#00ff41" emissiveIntensity={0.6} />
        </Sphere>
      </Float>
    </group>
  )
}