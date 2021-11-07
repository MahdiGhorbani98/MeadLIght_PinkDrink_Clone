import React,{useEffect} from 'react'
import gsap from 'gsap'
export default function SvgImport(props) {

    // let tl = gsap.timeline({paused:true})

    // useEffect(() => {
    //     tl.to(".lineOrange" ,{ duration:1.5 , strokeDashoffset: 0})
    // }, [])

    // function PlaySvg(){
    //     tl.play();
    // }
    // function ReverseSvg(){
    //     tl.reverse();
    // }

 

    return (
        <>
            {/* <svg onMouseEnter={()=>PlaySvg()} onMouseLeave={()=>ReverseSvg()} viewBox="0 0 135 10" style={{position: 'relative', width: 368, bottom: 15, left: 0}}>
                <path className="lineOrange" fill="none" stroke="#f8b845" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" vector-effect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  645.611, strokeDasharray: 645.611}}></path>
            </svg> */}
            {props.svg}
        </>
    )
}
