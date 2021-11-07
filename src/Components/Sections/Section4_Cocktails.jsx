import React,{useEffect, useState ,useRef} from 'react'
import SvgImport from '../SVG/SvgImport';

import spritzlight_01 from '../../Assets/illustrations/spritzlight_01.png';
import spritzlight_02 from '../../Assets/illustrations/spritzlight_02.png';
import spritzlight_03 from '../../Assets/illustrations/spritzlight_03.png';

import rosmarino_00 from '../../Assets/illustrations/rosmarino_00.png';
import americano_01 from '../../Assets/illustrations/americano_01.png';

import red_00 from '../../Assets/illustrations/red_00.png';
import red_01 from '../../Assets/illustrations/red_01.png';
import red_02 from '../../Assets/illustrations/red_02.png';

import tonica_02 from '../../Assets/illustrations/tonica_02.png';
import tonica_03 from '../../Assets/illustrations/tonica_03.png';

import red_04 from '../../Assets/illustrations/red_04.png';
import ghiaccio_00 from '../../Assets/illustrations/ghiaccio_00.png';
import ghiaccio_01 from '../../Assets/illustrations/ghiaccio_01.png';
import frenchie_00 from '../../Assets/illustrations/frenchie_00.png';
import frenchie_01 from '../../Assets/illustrations/frenchie_01.png';
import mexicano_02 from '../../Assets/illustrations/mexicano_02.png';
import rosmarino_01 from '../../Assets/illustrations/rosmarino_01.png';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Power2 , Elastic } from 'gsap/all';
import Section4_btnSlider from './Components/Section4_btnSlider';

export default function Section4_Cocktails() {
    let [btnSlider_Info1 , setBtnSlider_Info1] = useState({
        compounds : "15ml /0,5oz campari . 15 ml/0,5oz vermouth Cinzano . 60/2oz ml principio",
        method_caption:"Pour Campari, Cinzano Vermouth and Principio in a glass, mix ingredients and add ice.",
        glass_caption :"Glass. Young white wine glass",
        garnish_caption :"Garnish, Orange peel"
    })
    let [btnSlider_Info2 , setBtnSlider_Info2] = useState({
        compounds : "15ml /0,5oz campari . 15 ml/0,5oz vermouth Cinzano . 60/2oz ml principio",
        method_caption:"Pour Campari, Cinzano Vermouth and Principio in a glass, mix ingredients and add ice.",
        glass_caption :"Glass. Low tumbler",
        garnish_caption :"Garnish. Rosemary spring"
    })
    let [btnSlider_Info3 , setBtnSlider_Info3] = useState({
        compounds : "60 ml/2 oz Principio . 40 ml/1,35oz infuso ai frutti rossi",
        method_caption:"Pour ice in a glass, pour infusion and add Principio, mix as you like.",
        glass_caption :"High tumbler",
        garnish_caption :"Dried red fruits"
    })
    let [btnSlider_Info4 , setBtnSlider_Info4] = useState({
        compounds : "1/2 principio . 1/2 tonic",
        method_caption:"Pour ice in aglass, pour tonic and add Principio, mix as you like.",
        glass_caption :"High tumbler",
        garnish_caption :"Sage leaf / Rosemary spring"
    })
    gsap.registerPlugin(ScrollTrigger)

    let tl_01 = gsap.timeline({
        scrollTrigger:{
            trigger:".Section4_Cocktails",
            start: "+=2930",
            markers:false,
            
        },
    })
    let tl_02 = gsap.timeline({
        scrollTrigger:{
            trigger:".Section4_Cocktails",
            start: "+=3030",
            markers:false,
        },
    })
    let tl_03 = gsap.timeline({
        scrollTrigger:{
            trigger:".Section4_Cocktails",
            start: "+=3100",
            markers:false,
        },
    })
    let tl_04 = gsap.timeline({
        scrollTrigger:{
            trigger:".Section4_Cocktails",
            // toggleActions: "play pause resume reset",
            start: "+=3100",
            end:"+=350",
            markers:false,
            scrub:2,
            // onLeave: scrTrigger => scrTrigger.kill(false,true)
    },
    },false)


    let tl_05 = gsap.timeline({
        scrollTrigger:{
            trigger:".Section4_Cocktails",
            start: "+=3150",
            markers:false,
 
        },
    })
    let tl_06 = gsap.timeline({
        scrollTrigger:{
            trigger:".Section4_Cocktails",
            start: "+=3170",
            markers:false,
 
        },
    })

    useEffect(() => {

        gsap.from('.red_04',
        {
            scrollTrigger:{
                trigger:".Section4_Cocktails_Container",
                start: "-=500",
                markers:false,
            },
            ease: Elastic.easeOut.config(1.2, 0.75),
            opacity:0,
            y:40,
            x:10,
            duration:1.5
        })
        tl_01.from('.ghiaccio_01',
        {
            opacity:0,
            y:30,
            x:10,
            ease: Elastic.easeOut.config(1.2, 0.75),
            duration:1.8
        })
        tl_02.from('.zeroS4',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            duration:0.4
        })
        tl_02.from('.oneS4',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            duration:0.4
        },"-=0.2")
        // tl_01.from('.hand00',
        // {
        //     y:40,
        //     opacity:0,
        //     duration:0.4
        // },"-=0.4")
        tl_02.from('.svg__03',
        {
            strokeDashoffset:355.611,
            duration:0.4
        },"-=0.1")
        tl_03.from('.ghiaccio_00',
        {
            opacity:0,
            y:30,
            x:10,
            ease: Elastic.easeOut.config(1.2, 0.75),
            duration:2
        })
        tl_03.from('.pHeader__s4',
        {
            y:30,
            opacity:0,
            duration:0.5
        },'-=0.2')
        tl_03.from('.frenchie_00',
        {
            opacity:0,
            y:50,
            x:10,
            ease: Elastic.easeOut.config(1.2, 0.75),
            duration:1.8
        },'-=0.2')
        tl_04.from('.btn_root_1 .btnSlider .pBold__s4',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            x:30,
        })
        tl_04.from('.btn_root_1 .btnSlider .plusSlider',
        {
            opacity:0,
            y:30
        })
        tl_04.from('.btn_root_1 .borderBottom',
        {
            width:0,
        })


        tl_04.from('.btn_root_2 .btnSlider .pBold__s4',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            x:30,
        })
        tl_04.from('.btn_root_2 .btnSlider .plusSlider',
        {
            opacity:0,
            y:30
        })
        tl_04.from('.btn_root_2 .borderBottom',
        {
            width:0,
        })

        tl_04.from('.btn_root_3 .btnSlider .pBold__s4',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            x:30,
        })
        tl_04.from('.btn_root_3 .btnSlider .plusSlider',
        {
            opacity:0,
            y:30
        })
        tl_04.from('.btn_root_3 .borderBottom',
        {
            width:0,
        })

        tl_04.from('.btn_root_4 .btnSlider .pBold__s4',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            x:30,
        })
        tl_04.from('.btn_root_4 .btnSlider .plusSlider',
        {
            opacity:0,
            y:30
        })
        tl_04.from('.btn_root_4 .borderBottom',
        {
            width:0,
        })

        tl_05.from('.frenchie_01',
        {
            opacity:0,
            y:80,
            x:20,
            ease: Elastic.easeOut.config(1.2, 0.75),
            duration:1.8
        })
        tl_06.from('.mexicano_02',
        {
            opacity:0,
            y:60,
            x:20,
            ease: Elastic.easeOut.config(1.2, 0.75),
            duration:1.8
        })
        tl_06.from('.rosmarino_01',
        {
            opacity:0,
            y:60,
            x:20,
            ease: Elastic.easeOut.config(1.2, 0.75),
            duration:1.8
        })



       

    })

    let tl_svg_curve1 = gsap.timeline({paused:true})
    let tl_svg_curve2 = gsap.timeline({paused:true})
    let tl_svg_curve3 = gsap.timeline({paused:true})
    let tl_svg_curve4 = gsap.timeline({paused:true})

    useEffect(() => {
        tl_svg_curve1.to(".svg__curve01",
        {
            strokeDashoffset:0,
            ease: Power2.easeIn,
            duration:0.4
        })
        tl_svg_curve2.to(".svg__curve02",
        {
            strokeDashoffset:0,
            ease: Power2.easeIn,
            duration:0.4
        })
        tl_svg_curve3.to(".svg__curve03",
        {
            strokeDashoffset:0,
            ease: Power2.easeIn,
            duration:0.4
        })
        tl_svg_curve4.to(".svg__curve04",
        {
            strokeDashoffset:0,
            ease: Power2.easeIn,
            duration:0.4
        })

    }, [])
    function Play_tl(tl){
        tl.play()
    }
    function Reverse_tl(tl){
        tl.reverse()

    }



    return (
        <div className="Section4_Cocktails_Container">

            <div className="imgs_Spritzlight">
                <img className="spritzlight_01" src={spritzlight_01} alt="spritzlight_01" />  
                <img className="spritzlight_02" src={spritzlight_02} alt="spritzlight_02" />  
                <img className="spritzlight_03" src={spritzlight_03} alt="spritzlight_03" />  
                <img className="ghiaccio_00_Spritzlight" src={ghiaccio_00} alt="ghiaccio_00" />  
                <img className="ghiaccio_01_Spritzlight" src={ghiaccio_01} alt="ghiaccio_01" /> 
            </div>
            <div className="imgs_Principio">
                <img className="americano_01" src={americano_01} alt="americano_01" />  
                <img className="rosmarino_00" src={rosmarino_00} alt="rosmarino_00" />  
                <img className="rosmarino_01_Principio" src={rosmarino_01} alt="rosmarino_01_Principio" />  
                <img className="ghiaccio_00_Principio" src={ghiaccio_00} alt="ghiaccio_00_Principio" />  
                <img className="ghiaccio_01_Principio" src={ghiaccio_01} alt="ghiaccio_01_Principio" /> 
            </div>
            <div className="imgs_Red">
                <img className="red_04_Red" src={red_04} alt="red_04_Red" />  
                <img className="red_00" src={red_00} alt="red_00" />  
                <img className="red_01" src={red_01} alt="red_01" />  
                <img className="red_02" src={red_02} alt="red_02" />  
                <img className="ghiaccio_01_Red" src={ghiaccio_01} alt="ghiaccio_01_Red" /> 
            </div>
            <div className="imgs_Mead">
                <img className="rosmarino_00_Mead" src={rosmarino_00} alt="rosmarino_00_Mead" />  
                <img className="tonica_02" src={tonica_02} alt="tonica_02" />  
                <img className="tonica_03" src={tonica_03} alt="tonica_03" />  
                <img className="ghiaccio_00_Mead" src={ghiaccio_00} alt="ghiaccio_00_Mead" />  
                <img className="ghiaccio_01_Mead" src={ghiaccio_01} alt="ghiaccio_01_Mead" /> 
            </div>

            <div className="defaultImgs">
                <div className="img_red_04">
                <img id="Section4" className="red_04" src={red_04} alt="red_04" />  
                </div>

                <div className="img_ghiaccio_00">
                <img className="ghiaccio_00" src={ghiaccio_00} alt="ghiaccio_00" />  
                </div>

                <div className="img_ghiaccio_01">
                <img className="ghiaccio_01" src={ghiaccio_01} alt="ghiaccio_01" />  
                </div>

                <div className="img_frenchie_00">
                <img className="frenchie_00" src={frenchie_00} alt="frenchie_00" />  
                </div>

                <div className="img_frenchie_01">
                <img className="frenchie_01" src={frenchie_01} alt="frenchie_01" />  
                </div>

                <div className="img_mexicano_02">
                <img className="mexicano_02" src={mexicano_02} alt="mexicano_02" />  
                </div>

                <div className="img_rosmarino_01">
                <img className="rosmarino_01" src={rosmarino_01} alt="rosmarino_01" />
                </div>
            </div>

            <div className="Section4_Cocktails">
                <div>

                    <div className="Container_01_S4">
                        <div className="div__01_S4">
                        <h2 className="zeroS4">0</h2>
                        <h2 className="oneS4">3</h2>
                        </div>
                        <SvgImport 
                        svg={
                            <svg style={{width: 92}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                                <path className="svg__03" data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset:  0, strokeDasharray: 355.611}}></path>
                            </svg>
                        }/>
                    </div>
                    <p className="pHeader__s4">COCKTAILS & RECIPES</p>
                    <div className="btnContainer">
                        <Section4_btnSlider info={btnSlider_Info1} rootClassName={"btn_root_1"} title={"Spritzlight"} svgCurve_className={"svg__curve01"} widthSvg={170}/>
                        <Section4_btnSlider info={btnSlider_Info2} rootClassName={"btn_root_2"} title={"Principio Americano"} svgCurve_className={"svg__curve02"} widthSvg={340}/>
                        <Section4_btnSlider info={btnSlider_Info3} rootClassName={"btn_root_3"} title={"Red honey"} svgCurve_className={"svg__curve03"} widthSvg={175}/>
                        <Section4_btnSlider info={btnSlider_Info4} rootClassName={"btn_root_4"} title={"Mead & tonica"} svgCurve_className={"svg__curve04"} widthSvg={235}/> 


                    </div>

                </div>

            </div>
        </div>
    )
}































    {/* <div onMouseEnter={()=>Play_tl(tl_svg_curve1)} onMouseLeave={()=>Reverse_tl(tl_svg_curve1)} className="btnSlider">
        <p className="pBold__s4">
            Spritzlight
            <SvgImport 
            svg={
                <svg viewBox="0 0 135 10" style={{position: 'absolute', width: 170, bottom: -20, left: 0}}>
                <path className="linePink_pBold_S4" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  645.611, strokeDasharray: 645.611}}></path>
                </svg>}
            />
        </p>
        <p className="plusSlider">
            +
            <SvgImport 
            svg={
                <svg style={{width: 52 , position:'relative' , right:32 , top:16}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                    <path className="svg__curve01" data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset: 355.611, strokeDasharray: 355.611}}></path>
                </svg>
            }/>
        </p>
    </div>

    <div onMouseEnter={()=>Play_tl(tl_svg_curve2)} onMouseLeave={()=>Reverse_tl(tl_svg_curve2)} className="btnSlider" >
        <p className="pBold__s4">
        Principio Americano
            <SvgImport 
            svg={
                <svg viewBox="0 0 135 10" style={{position: 'absolute', width:340, bottom: -20, left: 0}}>
                <path className="linePink_pBold_S4" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  645.611, strokeDasharray: 645.611}}></path>
                </svg>}
            />
        </p>
        <p className="plusSlider">
            +
            <SvgImport 
            svg={
                <svg style={{width: 52 , position:'relative' , right:32 , top:16}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                    <path className="svg__curve02" data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset: 355.611, strokeDasharray: 355.611}}></path>
                </svg>
            }/>
        </p>
    </div>
    <div onMouseEnter={()=>Play_tl(tl_svg_curve3)} onMouseLeave={()=>Reverse_tl(tl_svg_curve3)} className="btnSlider">
        <p className="pBold__s4">
        Red honey
            <SvgImport 
            svg={
                <svg viewBox="0 0 135 10" style={{position: 'absolute', width:175, bottom: -20, left: 0}}>
                <path className="linePink_pBold_S4" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  645.611, strokeDasharray: 645.611}}></path>
                </svg>}
            />
        </p>
        <p className="plusSlider">
            +
            <SvgImport 
            svg={
                <svg style={{width: 52 , position:'relative' , right:32 , top:16}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                    <path className="svg__curve03" data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset: 355.611, strokeDasharray: 355.611}}></path>
                </svg>
            }/>
        </p>
    </div>
    <div onMouseEnter={()=>Play_tl(tl_svg_curve4)} onMouseLeave={()=>Reverse_tl(tl_svg_curve4)} className="btnSlider">
        <p className="pBold__s4">
        Mead & tonica
            <SvgImport 
            svg={
                <svg viewBox="0 0 135 10" style={{position: 'absolute', width:235, bottom: -20, left: 0}}>
                <path className="linePink_pBold_S4" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  645.611, strokeDasharray: 645.611}}></path>
                </svg>}
            />
        </p>
        <p className="plusSlider">
            +
            <SvgImport 
            svg={
                <svg style={{width: 52 , position:'relative' , right:32 , top:16}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                    <path className="svg__curve04" data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset: 355.611, strokeDasharray: 355.611}}></path>
                </svg>
            }/>
        </p>
    </div> */}