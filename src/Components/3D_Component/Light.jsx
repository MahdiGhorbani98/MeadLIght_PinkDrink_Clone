import React from 'react'

export default function Light() {
    return (
        <>
            <ambientLight
             color={'#ff91a3'} 
             intensity={1}/>
            <directionalLight 
            position={[-5,15,-10]}
            intensity={0.4}
            />
            <directionalLight 
            intensity={0.4}
            position={[4,10,-4]}  
            />
            <directionalLight 
            intensity={0.4}
            position={[-10,-15,-10]}  
            />

        </>
    )
}