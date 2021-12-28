import { Canvas } from "@react-three/fiber";
import "./App.css";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

import Scene from "./components/Scene";

RectAreaLightUniformsLib.init();

function App() {
  // Fiber's Default: outputEncoding=THREE.sRGBEncoding, toneMapping=THREE.ACESFilmicToneMapping
  // Threejs default: THREE.LinearEncoding, THREE.NoToneMapping (linear and flat)
  // https://docs.pmnd.rs/react-three-fiber/api/canvas
  return (
    <div id="canvas-container">
      <Canvas flat linear camera={{ position: [0, 0, 4.5] }}>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
