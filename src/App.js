import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <directionalLight intensity={1.0} position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
