// src/components/three/GlitchText.tsx
// (No changes needed here if it's already set up to take a 'text' prop)
interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  // ... existing Three.js rendering logic ...
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-white uppercase" style={{ WebkitTextStroke: '2px #a855f7' }}>
      {text}
    </h1>
  );
};

export default GlitchText;