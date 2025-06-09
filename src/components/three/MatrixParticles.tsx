import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

export function MatrixParticles() {
  const mesh = useRef<THREE.Points>(null!)
  const count = 500

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp.set([(Math.random() - 0.5) * 30, Math.random() * 20 - 10, (Math.random() - 0.5) * 30], i * 3)
    }
    return temp
  }, [count])

  useFrame(() => {
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position.array as Float32Array
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.05
        if (positions[i] < -10) {
          positions[i] = 10
        }
      }
      mesh.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00ff41" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.8} />
    </Points>
  )
}