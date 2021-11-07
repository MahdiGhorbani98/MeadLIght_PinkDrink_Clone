import React,{useEffect, useRef} from 'react'
import rose from '../../Assets/illustrations/rose_00.png';
import hand00 from '../../Assets/illustrations/hand_00.png';
import SvgImport from '../SVG/SvgImport';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Power2  } from 'gsap/all';


export default function Section2_PinkDrink() {
    let pArticle1 = useRef(
        <div id="pa1">
        <p className="pBold__s2">You drink it in <br/>
        <bdi className="bdiSec2">
        <>low tumblers with your <br/></>
        <SvgImport 
        svg={
            <svg viewBox="0 0 135 10" style={{position: 'absolute', width: 220, bottom: 43, left: 0}}>
            <path className="linePink_pBold" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  0, strokeDasharray: 645.611}}></path>
            </svg>
        }
        />
        </bdi>
        friends</p>

        <p className="pCaption__s2">thanks to its light/mild carbonation.</p>
        </div>
    )

    let pArticle2 = useRef(
        <div id="pa2">
        <p className="pBold__s2">
            <bdi className="bdiSec2">
            <>We blend six honeys together</>
            <SvgImport 
            svg={
                <svg viewBox="0 0 135 10" style={{position: 'absolute', width: 175, bottom: -10, left: 160}}>
                <path className="linePink_pBold" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  0, strokeDasharray: 645.611}}></path>
                </svg>
            }
            />
            </bdi>
        </p>
        <p className="pCaption__s2">In different quantities, according to a principle that develops unique tastes and aromas, as well as light alcohol contents.</p>
                    
        </div>
    )

    let pArticle3 = useRef(
        <div id="pa3">
            <p className="pBold__s2">We only use<br/>
                <bdi className="bdiSec2">
                <>raw honeys</>
                <SvgImport 
                svg={
                    <svg viewBox="0 0 135 10" style={{position: 'absolute', width: 190, bottom: -10, left: 0}}>
                    <path className="linePink_pBold" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  0, strokeDasharray: 645.611}}></path>
                    </svg>
                }
                />
                </bdi>
            </p>
            <p className="pCaption__s2">This way, the properties and color of each one instantly recalls our drink.</p>
        </div>
    )

    gsap.registerPlugin(ScrollTrigger)
    let tl_BtnI = gsap.timeline({paused:true})
    let tl_BtnII = gsap.timeline({paused:true})
    let tl_BtnIII = gsap.timeline({paused:true})
    
    let tl_Btn_S2 = gsap.timeline({paused:true})
    let tl_SvgLine = gsap.timeline({paused:true})


    function ReverseBtnI(tl){
        if(!document.querySelector('.btnI').classList.contains('clicked'))
        tl.reverse();
    }
    function ReverseBtnII(tl){
        if(!document.querySelector('.btnII').classList.contains('clicked'))
        tl.reverse();
    }
    function ReverseBtnIII(tl){
        if(!document.querySelector('.btnIII').classList.contains('clicked'))
        tl.reverse();
    }

    function ChangeArticleText(article1_to_none ,article2_to_none,article3_to_none,article4_to_none,article1_to_block,article2_to_block  ){
        let tl_II = gsap.timeline();

        tl_II.fromTo('.article1', 
        {
            x:0,
            rotateX:0,
            rotateY:0,
            opacity:1,
        },
        {
            opacity:0,
            duration:0.4,
        })

        tl_II.fromTo('.article2', 
        {
            x:0,
            rotateX:0,
            rotateY:0,
            opacity:1,
        },
        {
            opacity:0,
            duration:0.4,
        },'-=0.4')

        // tl_II.add( function()
        // {
        //      pArticle1.current.removeChild(document.getElementById("pa1"))
        //      pArticle1.current.appendChild(pArticle2.current)
        //      console.log("p1");
        //      pArticle2.current.appendChild(pArticle3.current)
        //      console.log("p2");
        // })

        tl_II.set(article1_to_none,{
            display:'none'
        })
        tl_II.set(article2_to_none,{
            display:'none'
        })
        tl_II.set(article3_to_none,{
            display:'none'
        })
        tl_II.set(article4_to_none,{
            display:'none'
        })
        tl_II.set(article1_to_block,{
            display:'block'
        })
        tl_II.set(article2_to_block,{
            display:'block'
        })

        tl_II.fromTo('.article1',
            {
                y:0,
                rotateX:-50,
                rotateY:-50,
                opacity:0,
                x:30,
            }
            ,
            {
                y:0,
                x:0,
                rotateX:0,
                rotateY:0,
                opacity:1,
                duration:0.8,
        })

        tl_II.fromTo('.article2',
            {
                y:0,
                rotateX:-50,
                rotateY:-50,
                opacity:0,
                x:30,
            }
            ,
            {
                y:0,
                x:0,
                rotateX:0,
                rotateY:0,
                opacity:1,
                duration:0.8,
        },'-=0.8')

        tl_II.from('.linePink_pBold',
        {
            strokeDashoffset:650,
            duration:0.8,
            ease: Power2.easeIn
        },'-=0.3')

    }
    

    function clickedI(btnTarget,btnElse1,btnElse2){
        document.querySelector(`.${btnTarget}`).classList.add('clicked')
        document.querySelector(`.${btnElse1}`).classList.remove('clicked')
        document.querySelector(`.${btnElse2}`).classList.remove('clicked')
            tl_Btn_S2.play();
            tl_SvgLine.play();
            tl_Btn_S2.to('.svg__fillCircle1'  ,{r:4,duration:0.3})
            tl_Btn_S2.to('.svg__fillCircle2'  ,{r:0,duration:0.3})
            tl_Btn_S2.to('.svg__fillCircle3'  ,{r:0,duration:0.3})

            tl_SvgLine.to('.svg__lineCircle2' , {strokeDashoffset: 150 ,duration:0.5})
            tl_SvgLine.to('.svg__lineCircle3' , {strokeDashoffset: 150 ,duration:0.5})
            tl_SvgLine.to('.svg__lineCircle1' , { strokeDashoffset: 0 ,duration:0.5})

            ChangeArticleText('.article_1_2' , '.article_1_3','.article_2_1' , '.article_2_3','.article_1_1' , '.article_2_2');
        
    }
    function clickedII(btnTarget,btnElse1,btnElse2){
        document.querySelector(`.${btnTarget}`).classList.add('clicked')
        document.querySelector(`.${btnElse1}`).classList.remove('clicked')
        document.querySelector(`.${btnElse2}`).classList.remove('clicked')
        
            tl_Btn_S2.play();
            tl_SvgLine.play();
            tl_Btn_S2.to('.svg__fillCircle2'  ,{r:4,duration:0.3})
            tl_Btn_S2.to('.svg__fillCircle1'  ,{r:0,duration:0.3})
            tl_Btn_S2.to('.svg__fillCircle3'  ,{r:0,duration:0.3})

            tl_SvgLine.to('.svg__lineCircle1' , {strokeDashoffset: 150 ,duration:0.5})
            tl_SvgLine.to('.svg__lineCircle3' , {strokeDashoffset: 150 ,duration:0.5})
            tl_SvgLine.to('.svg__lineCircle2' , { strokeDashoffset: 0 ,duration:0.5})
            
            ChangeArticleText('.article_1_1' , '.article_1_3','.article_2_1' , '.article_2_2','.article_1_2' , '.article_2_3');

    }
    function clickedIII(btnTarget,btnElse1,btnElse2){
        document.querySelector(`.${btnTarget}`).classList.add('clicked')
        document.querySelector(`.${btnElse1}`).classList.remove('clicked')
        document.querySelector(`.${btnElse2}`).classList.remove('clicked')
        
        tl_Btn_S2.play();
        tl_SvgLine.play();
        
            tl_Btn_S2.to('.svg__fillCircle3'  ,{r:4,duration:0.3})
            tl_Btn_S2.to('.svg__fillCircle1'  ,{r:0,duration:0.3})
            tl_Btn_S2.to('.svg__fillCircle2'  ,{r:0,duration:0.3})
    
            tl_SvgLine.to('.svg__lineCircle1' , {strokeDashoffset: 150 ,duration:0.5})
            tl_SvgLine.to('.svg__lineCircle2' , {strokeDashoffset: 150 ,duration:0.5})
            tl_SvgLine.to('.svg__lineCircle3' , { strokeDashoffset: 0 ,duration:0.5})
         
            ChangeArticleText('.article_1_1' , '.article_1_2','.article_2_2' , '.article_2_3','.article_1_3' , '.article_2_1');

    }
    function PlayBtn(tl){
        tl.play();
    }

    useEffect(() => {
        if(!document.querySelector('.btnI').classList.contains('clicked')){
            tl_BtnI.fromTo('.svg__fillCircle1' , {r:0 } ,{r:2,duration:0.5})
        }
        if(!document.querySelector('.btnII').classList.contains('clicked')){
            tl_BtnII.fromTo('.svg__fillCircle2' , {r:0 } ,{r:2,duration:0.5})
        }
        if(!document.querySelector('.btnIII').classList.contains('clicked')){
            tl_BtnIII.fromTo('.svg__fillCircle3' , {r:0 } ,{r:2,duration:0.5})
        }
    })


        let tl_01 = gsap.timeline({
            scrollTrigger:{
                trigger:".Section2_PinkDrink_Container",
                start: "+=800",
                markers:false,
            },
        })
        let tl_articles = gsap.timeline({
            scrollTrigger:{
                trigger:".Section2_PinkDrink_Container",
                start: "+=870",
                markers:false,
            },
        })
    useEffect(() => {
        gsap.from('.rose',
        {
            scrollTrigger:{
                trigger:".Section2_PinkDrink_Container",
                start: "-=550",
                markers:false,
            },
            opacity:0,
            y:20,
            duration:0.5
        })
        tl_01.from('.zeroS2',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            duration:0.4
        })
        tl_01.from('.oneS2',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            duration:0.4
        },"-=0.2")
        tl_01.from('.hand00',
        {
            y:40,
            opacity:0,
            duration:0.4
        },"-=0.4")
        tl_01.from('.svg__01',
        {
            strokeDashoffset:355.611,
            duration:0.4
        },"-=0.1")
        gsap.from('.nextInfo',
        {
            scrollTrigger:{
                trigger:".Section2_PinkDrink_Container",
                start: "-=400",
                markers:false,
            },
            opacity:0,
            y:15,
            duration:0.5
        })
        gsap.from('.svg_nextInfo',
        {
            scrollTrigger:{
                trigger:".Section2_PinkDrink_Container",
                start: "-=400",
                markers:false,
            },
            strokeDashoffset:330,
            duration:0.5
        })
        tl_articles.from('.pHeader__s2',
        {
            opacity:0,
            duration:0.5
        })
        tl_articles.from('.pBold__s2',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            x:30,
            duration:0.8
        },"-=0.2")
        tl_articles.from('.linePink_pBold',
        {
            strokeDashoffset:650,
            duration:0.8,
            ease: Power2.easeIn
        },'-=0.3')
        tl_articles.from('.pCaption__s2',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            x:20,
            duration:0.6,
        },'-=0.3')

    })

    return (
        <div  className="Section2_PinkDrink_Container">
            <div className="Section2_PinkDrink">
                <img id="Section2" className="rose" src={rose} alt="rose" />
                <div className="Container_01">
                    <div className="div__01">
                    <h2 className="zeroS2">0</h2>
                    <h2 className="oneS2">1</h2>
                    </div>
                    <SvgImport 
                    svg={
                        <svg style={{width: 92}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                            <path className="svg__01" data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset:  0, strokeDasharray: 355.611}}></path>
                        </svg>
                    }/>
                </div>
                <div className="div_pHeader_nextInfo">
                    <p className="pHeader__s2">IT IS REFRESHING, SWEET AND NATURAL.</p>
                    <p className="nextInfo">
                    <svg  style={{width:120 , position:'absolute' , right:-32, top:-18}} data-v-133f5062="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 105">
                        <path style={{strokeDashoffset:  0, strokeDasharray: 330}} className="svg_nextInfo" data-v-133f5062="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M183.3 73.8c44.7-14.9 36.3-41 4.4-55.4C145.9-.5 34.6-13 6.5 37.9-14.6 76.2 33.1 98.2 76 102.2 124.9 106.9 188.9 91 224.3 61c5.4-4.6 7.4-10.8 11.1-16.2" ></path>
                    </svg>
                            NEXT INFO
                    </p>
                </div>
                <div className="articles">

                    <div className="article1" >
                        {/* {pArticle1.current} */}
                        <div ref={pArticle1}>

                        <div className="article_1_1">
                        {pArticle1.current}
                        </div>
                        <div className="article_1_2" style={{display:"none"}}>
                        {pArticle2.current}
                        </div>
                        <div className="article_1_3" style={{display:"none"}}>
                        {pArticle3.current}
                        </div>

                        </div>
                    </div>
                    
    
                    <div className="article2 toRight" >
                        <div ref={pArticle2}>

                        <div className="article_2_1" style={{display:"none"}}>
                        {pArticle1.current}
                        </div>
                        <div className="article_2_2">
                        {pArticle2.current}
                        </div>
                        <div className="article_2_3" style={{display:"none"}}>
                        {pArticle3.current}
                        </div>

                        </div>
                    </div>
                        
                    {/* <div className="article3">
                    <div ref={pArticle3}>
                        {pArticle3.current}
                    </div>                    
                    </div> */}

                </div>

                <div className="buttons__s2">
                        {/* 1 */}
                    <div onClick={()=>clickedI('btnI','btnII','btnIII')} onMouseEnter={()=>PlayBtn(tl_BtnI)} onMouseLeave={()=>ReverseBtnI(tl_BtnI)} className="btn__s2 btnI clicked">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                            <circle  cx="4.5" cy="4.5" r="4" className="svg__fillCircle1 svg__fillCircle" style={{}}></circle>
                            <circle  cx="4.5" cy="4.5" r="4" fill="none" stroke="#979797" className="svg__border" style={{}}></circle>
                        </svg>
                        <svg  style={{position: 'absolute', bottom: -20, left:-15 ,width: 40}} data-v-61b6df3e="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126" className="dot__border">
                            <path className="svg__lineCircle1" style={{strokeDashoffset:  0, strokeDasharray: 150}} data-v-61b6df3e="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7"></path>
                        </svg>
                    </div>
                        {/* 2 */}
                    <div onClick={()=>clickedII('btnII','btnI','btnIII')} onMouseEnter={()=>PlayBtn(tl_BtnII)} onMouseLeave={()=>ReverseBtnII(tl_BtnII)} className="btn__s2 btnII">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                            <circle  cx="4.5" cy="4.5" r="0" className="svg__fillCircle2 svg__fillCircle" style={{}}></circle>
                            <circle  cx="4.5" cy="4.5" r="4" fill="none" stroke="#979797" className="svg__border" style={{}}></circle>
                        </svg>
                        <svg  style={{position: 'absolute', bottom: -20, left: 70 ,width: 40}} data-v-61b6df3e="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126" className="dot__border">
                            <path className="svg__lineCircle2" style={{strokeDashoffset:  150, strokeDasharray: 150}} data-v-61b6df3e="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7"></path>
                        </svg>
                    </div>
                        {/* 3 */}
                    <div onClick={()=>clickedIII('btnIII','btnII','btnI')} onMouseEnter={()=>PlayBtn(tl_BtnIII)} onMouseLeave={()=>ReverseBtnIII(tl_BtnIII)} className="btn__s2 btnIII">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                            <circle  cx="4.5" cy="4.5" r="0" className="svg__fillCircle3 svg__fillCircle" style={{}}></circle>
                            <circle  cx="4.5" cy="4.5" r="4" fill="none" stroke="#979797" className="svg__border" style={{}}></circle>
                        </svg>
                        <svg  style={{position: 'absolute', bottom: -20, left: 155 ,width: 40}} data-v-61b6df3e="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126" className="dot__border">
                            <path className="svg__lineCircle3" style={{strokeDashoffset:  150, strokeDasharray: 150}} data-v-61b6df3e="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7"></path>
                        </svg>
                    </div>
                </div>

                <img className="hand00" src={hand00} alt="hand" />
            </div>
        </div>
    )
}
