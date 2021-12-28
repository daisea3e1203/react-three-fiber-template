import { Canvas } from "@react-three/fiber";
import "./App.css";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

import Scene from "./components/Scene";

RectAreaLightUniformsLib.init();

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 4.5] }}>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
