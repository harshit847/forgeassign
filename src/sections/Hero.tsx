import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { Environment, Html, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import "../index.css";

function Model({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models/model.glb"); 
  const { actions, names } = useAnimations(animations, group);

 useEffect(() => {
  if (names.length > 0) {
    const action = actions[names[0]]
    if (action) {
      action.reset().fadeIn(0.5).play()
      return () => {
        action.fadeOut(0.5)
      }
    }
  }
}, [actions, names])


  return (
    <group ref={group} position={position}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  );
}

useGLTF.preload("/models/model.glb");

export default function Hero() {
  return (
    <section className="dot-bg">
      <div className="pt-10 pb-6 text-center">
        <h1 className="text-[44px] md:text-[68px] leading-[1.05] font-[350] tracking-tight">
          Precision{" "}
          <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-500 text-border-black">
            CNC
          </span>{" "}
          Parts
          <br />
          Shipped as Fast as
          <br /> Tomorrow
        </h1>

        <div className="mt-6 h-[380px] md:h-[460px] rounded-xl overflow-hidden">
          <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={<Html center>Loading...</Html>}>
              <Environment files="/textures/metallic.exr" background={false} />

              <Model position={[-6, 0, 0]} />
              <Model position={[0, 0, 0]} />
              <Model position={[0, 0, 0]} />
            </Suspense>
          </Canvas>
        </div>

        <p className="mt-6 max-w-xl mx-auto text-black text-base">
          Upload your CAD file, and we'll take care
          <br /> of machining, finishing, and shipping—accurate
          <br /> parts delivered fast, no stress.
        </p>
        <div className="mt-4">
          <button className="px-4 py-3 text-xs bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            → UPLOAD YOUR DESIGN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎲
          </button>
        </div>
      </div>

      <div className="bottom-0 left-0 w-full flex justify-between px-2 py-1">
        <p className="max-w-sm text-left text-sm text-gray-600">
          12+ YEARS OF DELIVERING
          <br />
          PERFECT DETAILS
        </p>
        <p className="max-w-sm text-right text-sm text-gray-600">
          OVER 100,000 PARTS
          <br />
          MANUFACTURED ANNUALLY
        </p>
      </div>
    </section>
  );
}
