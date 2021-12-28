import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <directionalLight intensity={1.0} position={[0, 0, 5]} />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
