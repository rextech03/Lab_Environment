import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/props/volumetric.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volumetric_Flask.geometry}
        material={materials.Glass}
        position={[0.021, -0.055, 0]}
      />
    </group>
  )
}

useGLTF.preload('/props/volumetric.glb')