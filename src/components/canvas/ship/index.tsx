import { Detailed, useFBX, useGLTF } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import dynamic from "next/dynamic"
import { useRef } from "react"
import { FBXLoader } from "three-stdlib"

export function Ship({ position, scale, distances }){
    // const ship = useLoader(FBXLoader, '/ship.fbx')
    const [mid,high] = useGLTF(["/MID.glb", "/HIGH.glb"])
  
    
    return (
        <Detailed distances={distances}>
            
             
            
            <mesh scale={scale ? scale : 1} position={position}>
                <primitive object={high.scene} />
            </mesh>
            
            <mesh scale={scale ? scale : 1} position={position}>
                <primitive object={mid.scene} />
            </mesh>
        </Detailed>
        
    )
}