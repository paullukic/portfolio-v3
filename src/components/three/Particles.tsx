import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

interface ParticlesProps {
  count?: number
  color?: string
  size?: number
  opacity?: number
}

export function Particles({ count = 1000, color = "#00ffff", size = 0.02, opacity = 0.6 }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp.set([(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20], i * 3)
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={color} size={size} sizeAttenuation={true} depthWrite={false} opacity={opacity} />
    </Points>
  )
}