import { Text, Float } from "@react-three/drei"

interface HoloTextProps {
  text: string
  position: [number, number, number]
  color?: string
  size?: number
}

export function HoloText({ text, position, color = "#00ffff", size = 0.5 }: HoloTextProps) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text position={position} fontSize={size} color={color} anchorX="center" anchorY="middle" font="/fonts/Geist-Bold.ttf">
        {text}
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.8} />
      </Text>
    </Float>
  )
}