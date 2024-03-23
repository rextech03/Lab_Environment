'use client';
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function VolumetricFlask(props) {
  const { nodes, materials } = useGLTF('/volumetric.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Volumetric_Flask.geometry}
          material={materials.Glass}
          position={[0.02091777, -0.0550082, 0]}
          userData={{ name: 'Volumetric Flask' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/volumetric.glb')
