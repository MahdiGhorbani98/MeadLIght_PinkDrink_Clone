import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
// import { Loader } from '@react-three/drei'
import Light from './Light'
import MeadlightBottle from './MeadlightBottle'
// import { Html, useProgress } from '@react-three/drei'

export default function CanvasController() {

    // function Loader() {
    // const { progress } = useProgress()
    // return <Html center>{progress} % loaded</Html>
    // }

    return (
        <div className="canvas">
            <Canvas colorManagement shadows camera={{position:[0,0,-3.7],fov:40}} style={{width:'400px'}}>
                <Light/>
                <Suspense fallback={null}>
                    <MeadlightBottle/>
                </Suspense>
            </Canvas>
            {/* <Loader/> */}
        </div>
    )
}
