/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    earth_color_10K: THREE.Mesh
    earth_color_10K001: THREE.Mesh
  }
  materials: {
    earth_color_10K: THREE.MeshStandardMaterial
    clouds: THREE.MeshStandardMaterial
  }
}

export  function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/earth_final-transformed.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
        <ambientLight/>

      <mesh geometry={nodes.earth_color_10K.geometry} material={materials.earth_color_10K} position={[0.21, 0.37, -0.07]} rotation={[0.55, 1.03, -0.61]} scale={0.84} />
      <mesh geometry={nodes.earth_color_10K001.geometry} material={materials.clouds} position={[0.16, 0.39, -0.1]} rotation={[0.55, 1.03, -0.61]} scale={0.84} />
    </group>
  )
}

useGLTF.preload('/earth_final-transformed.glb')