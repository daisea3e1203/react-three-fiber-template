import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Box() {
  const mesh = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    mesh.current.rotation.x = 0.6 * t;
    mesh.current.rotation.y = 0.6 * t;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}
