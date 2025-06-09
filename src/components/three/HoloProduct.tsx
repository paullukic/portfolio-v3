import { Float, Box, Html } from "@react-three/drei"

interface HoloProductProps {
  position: [number, number, number]
  title: string
}

export function HoloProduct({ position, title }: HoloProductProps) {
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
      <group position={position}>
        <Box args={[1.2, 1.2, 0.1]}>
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.2} transparent opacity={0.3} />
        </Box>
        <Box args={[1.0, 1.0, 0.05]} position={[0, 0, 0.1]}>
          <meshStandardMaterial color="#ff0080" emissive="#ff0080" emissiveIntensity={0.3} transparent opacity={0.5} />
        </Box>
        <Html center>
          <div className="bg-black/90 border border-cyan-400 p-3 rounded text-cyan-400 text-sm whitespace-nowrap backdrop-blur-sm">
            <div className="font-mono font-bold">{title}</div>
            <div className="text-xs text-green-400">STATUS: AVAILABLE</div>
          </div>
        </Html>
      </group>
    </Float>
  )
}