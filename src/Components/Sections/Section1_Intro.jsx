import React,{useEffect} from 'react'
import hero from '../../Assets/illustrations/hero_01.png';
import SvgImport from '../SVG/SvgImport';
import gsap from 'gsap'


export default function Section1_Intro() {

    return (
        <div className="Section1_Intro_Container">
            <div className="Section1_Intro">
                <p className="Intro_p">THE BRAND-NEW DRINK</p><br/>
                <h1 className="Intro_h1">
                <bdi className="bdiSec1">
                <>PinkDrink is a</> 
                <SvgImport 
                svg={
                    <svg viewBox="0 0 135 10" style={{position: 'relative', width: 368, bottom: 15, left: 0}}>
                    <path className="linePink" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  645.611, strokeDasharray: 645.611}}></path>
                    </svg>
                }
                />
                
                </bdi>
                fermented honey
                drink
                </h1>
            </div>
            <img className="hero" src={hero} alt="hero" />

        </div>
    )
}
