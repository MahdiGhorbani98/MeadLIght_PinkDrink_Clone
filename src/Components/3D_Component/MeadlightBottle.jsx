import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function MeadlightBottle(props) {
  gsap.registerPlugin(ScrollTrigger)
  let tl = gsap.timeline();
  useEffect(() => {

  gsap.to(rotateGSAP.current.rotation , 
      {
        y:-20,
        duration:400,
        scrollTrigger:{
          trigger: '.App',
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=5930",
          scrub:1.6
        }
      }
    );
  

  tl.fromTo('.canvas' , 
      {
        x:0,
        scrollTrigger:{
          trigger: '.roseS3',
          // start: "+=0",
          // end:"+=800", // when the top of the trigger hits the top of the viewport
          markers:false,
          scrub:1
        }
      },
      {
        x:-900,
        scrollTrigger:{
          trigger: '.roseS3',
          // end:"+=800", // when the top of the trigger hits the top of the viewport
          // start: "bottom top", // when the top of the trigger hits the top of the viewport
          scrub:1
        }
      }
    )
  tl.fromTo('.canvas' , 
    {
      scrollTrigger:{
        trigger: '.imgs_Spritzlight',
        start: "-=300",
        // end:"+=800", // when the top of the trigger hits the top of the viewport
        markers:false,
        scrub:1
      },
      x:-900
    },
    {
      scrollTrigger:{
        trigger: '.imgs_Spritzlight',
        // end:"+=800", // when the top of the trigger hits the top of the viewport
        
        // start: "bottom top", // when the top of the trigger hits the top of the viewport
        scrub:1
      },
      x:150
    }
  );
  tl.fromTo('.canvas' , 
    {
      scrollTrigger:{
        trigger: '.Section5_Contacts_Container',
        // start: "-=300",
        end:"+=100", // when the top of the trigger hits the top of the viewport
        markers:false,
        scrub:1
      },
      x:150
    },
    {
      scrollTrigger:{
        trigger: '.Section5_Contacts_Container',
        scrub:1
      },
      x:-50,
      marginTop:-350
    }
  );



  },[])



  useEffect(() => {
    let tl = gsap.timeline();

    tl.from(rotateGSAP.current.rotation , 
      {
        y:-9,
        duration:3.5,
        // delay:1.2,
        
      }
    );
    tl.set('body',{overflowY:'scroll'})
  }, [])



  const mesh = useRef(null);
  const group = useRef()
  const rotateGSAP = useRef(null)
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/model/MeadlightBottle.glb`)
  

  return(
    
    <>
      <group rotation={[0,0,0]} scale={1.2,1.2,1.2} ref={group} {...props} dispose={null}>
        <group ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
          <group ref={rotateGSAP} rotation={[Math.PI / 2, 0 ,0.26]}>
            <mesh geometry={nodes.defaultMaterial.geometry} material={materials.bottle} />
            <mesh rotation={[0,15,0]} geometry={nodes.defaultMaterial_1.geometry} material={materials.wrap} />
          </group>
        </group>
      </group>
    </>

    
    
  )
}

useGLTF.preload(`${process.env.PUBLIC_URL}/model/MeadlightBottle.glb`)
// useGLTF.preload('../../../../model/MeadlightBottle.glb')
