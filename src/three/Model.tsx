import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Environment, Html, useGLTF } from "@react-three/drei"
import * as THREE from "three"

useGLTF.preload("/models/model.glb")

function Part({ index, total, spacing }: { index: number; total: number; spacing: number }) {
  const group = useRef<THREE.Group>(null!)
  const { scene } = useGLTF("/models/model.glb")

  const speed = 2 // speed of movement

  useFrame((_, delta) => {
    if (!group.current) return

    group.current.position.x -= delta * speed // move left

    // agar bahut left chala gaya toh dobara right se aa jaye
    if (group.current.position.x < -(total * spacing) / 2) {
      group.current.position.x = (total * spacing) / 2
    }
  })

  return (
    <group ref={group} position={[index * spacing - (total * spacing) / 2, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene.clone()} />
    </group>
  )
}

export default function ModelRow() {
  const total = 7  
  const spacing = 5 
  return (
    <Suspense fallback={<Html center>Loading…</Html>}>
      <Environment files="/textures/metallic.exr" background={false} />
      {Array.from({ length: total }).map((_, i) => (
        <Part key={i} index={i} total={total} spacing={spacing} />
      ))}
    </Suspense>
  )
}
