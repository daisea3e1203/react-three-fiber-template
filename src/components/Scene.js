import { useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

import Box from "./Box";

export default function Scene() {
  const { scene } = useThree();
  const rl = useRef();
  useEffect(() => {
    // useEffect runs after the initial render, so it might be more accurate if
    // we use useLayoutEffect like below instead.
    // https://reactjs.org/docs/hooks-reference.html#uselayouteffect
    // useLayoutEffect(() => {
    scene.add(new RectAreaLightHelper(rl.current));
    console.warn("updated rect");
    console.log(scene);
  }, [scene]);

  return (
    <>
      <rectAreaLight
        ref={rl}
        intensity={20}
        color={0xffdddd}
        position={[2, 2, 1]}
        width={1}
        height={1}
        onUpdate={(self) => {
          self.lookAt(0, 0, 0);
        }}
      />
      <Box />
    </>
  );
}
