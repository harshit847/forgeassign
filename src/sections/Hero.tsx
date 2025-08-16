import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useState, useContext, createContext } from 'react'
import { Environment, Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import "../index.css"

const MovementContext = createContext({
  isMoving: false,
  toggleMovement: () => {}
})

interface PartProps {
  index: number
  total: number
  clone?: boolean
}

function Model({ index, total, clone = false }: PartProps) {
  const { scene } = useGLTF('/models/model.glb')
  const { isMoving } = useContext(MovementContext)
  const group = useRef<THREE.Group>(null)
  const angleRef = useRef((index / total) * Math.PI * 2) // ✅ initial phase

  const radius = 12     // circle radius
  const speed = 0.5     // rotation speed

  const model = clone ? scene.clone() : scene

  useFrame((_, delta) => {
    if (!group.current) return
    if (isMoving) {
      angleRef.current += delta * speed
    }

    const x = radius * Math.cos(angleRef.current)
    const z = radius * Math.sin(angleRef.current)
    const y = 0

    group.current.position.set(x, y, z)
    group.current.lookAt(0, 0, 0) // center face karein
  })

  return (
    <group ref={group}>
      <primitive object={model} scale={[1, 1, 1]} />
    </group>
  )
}

useGLTF.preload('/models/model.glb')

export default function Hero() {
  const [isMoving, setIsMoving] = useState(false)
  const total = 6 // kitne models dikhane hain

  return (
    <MovementContext.Provider value={{
      isMoving,
      toggleMovement: () => setIsMoving(!isMoving)
    }}>
      <section className="dot-bg">
        <div className="pt-10 pb-6 text-center">
          <h1 className="text-[44px] md:text-[68px] leading-[1.05] font-[350] tracking-tight">
            Precision <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-500 text-border-black">
              CNC</span> Parts
            <br />
            Shipped as Fast as<br /> Tomorrow
          </h1>

          {/* 3D Scene */}
          <div 
            className="mt-6 h-[380px] md:h-[460px] rounded-xl overflow-hidden"
            onClick={() => setIsMoving(!isMoving)}
          >
            <Canvas camera={{ position: [0, -10, 50], fov: 10 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={<Html center>Loading...</Html>}>
                <Environment files="/textures/metallic.exr" background={false} />
                {Array.from({ length: total }).map((_, i) => (
                  <Model key={i} index={i} total={total} clone />
                ))}
              </Suspense>
            </Canvas>
          </div>

          <p className="mt-6 max-w-xl mx-auto text-black text-base">
            Upload your CAD file, and we'll take care<br /> of machining, finishing, and shipping—accurate<br /> parts delivered fast, no stress.
          </p>
          <div className="mt-4">
            <button className="px-4 py-3 text-xs bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              → UPLOAD YOUR DESIGN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎲
            </button>
          </div>
        </div>
        <div className="bottom-0 left-0 w-full flex justify-between px-2 py-1">
          <p className="max-w-sm text-left text-sm text-gray-600">
            12+ YEARS OF DELIVERING<br />
            PERFECT DETAILS
          </p>
          <p className="max-w-sm text-right text-sm text-gray-600">
            OVER 100,000 PARTS<br />
            MANUFACTURED ANNUALLY
          </p>
        </div>
      </section>
    </MovementContext.Provider>
  )
}
