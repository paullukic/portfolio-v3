import { Float, Plane, Html } from "@react-three/drei"

export function HoloAds() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <group position={[-6, 2, -2]}>
          <Plane args={[2, 1]}>
            <meshStandardMaterial
              color="#ff0080"
              emissive="#ff0080"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </Plane>
          <Html center>
            <div className="bg-black/80 border border-yellow-400 p-2 rounded text-yellow-400 text-xs text-center font-mono">
              <div className="font-bold">TEODESK</div>
              <div>un_vailable currently</div>
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <group position={[6, -1, -1]}>
          <Plane args={[1.5, 2]}>
            <meshStandardMaterial
              color="#00ff41"
              emissive="#00ff41"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </Plane>
          <Html center>
            <div className="bg-black/80 border border-green-400 p-2 rounded text-green-400 text-xs text-center font-mono">
              <div className="font-bold">TryHackMe</div>
              <div>Cyber Security</div>
              <div className="text-cyan-400">Top 0.1%</div>
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
        <group position={[0, -3, 1]}>
          <Plane args={[1.8, 0.8]}>
            <meshStandardMaterial
              color="#ffff00"
              emissive="#ffff00"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </Plane>
          <Html center>
            <div className="bg-black/80 border border-pink-400 p-2 rounded text-pink-400 text-xs text-center font-mono">
              <div className="font-bold"> COLLABWRITING</div>
              <div>Productivity Boost Available</div>
            </div>
          </Html>
        </group>
      </Float>
    </>
  )
}