import React,{useEffect} from 'react'
import gsap from 'gsap'
import { Power2 } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Header() {
    //////////////////Function Scroll/////////////////////////
    function Scroll_To_Section1(){
        // console.log("diccover");
        window.scroll({ 
          top: 0, // could be negative value
          left: 0, 
          behavior: 'smooth' 
        });
    }
    function Scroll_To_Section2(){
        // console.log("diccover");
        window.scroll({ 
          top: 850, // could be negative value
          left: 0, 
          behavior: 'smooth' 
        });
    }
    function Scroll_To_Section3(){
        // console.log("diccover");
        window.scroll({ 
          top: 1850, // could be negative value
          left: 0, 
          behavior: 'smooth' 
        });
    }
    function Scroll_To_Section4(){
        // console.log("diccover");
        window.scroll({ 
          top: 3150, // could be negative value
          left: 0, 
          behavior: 'smooth' 
        });
    }
    function Scroll_To_Section5(){
        // console.log("diccover");
        window.scroll({ 
          top: 4600, // could be negative value
          left: 0, 
          behavior: 'smooth' 
        });
    }
    ///////////////////////////////////////////
    gsap.registerPlugin(ScrollTrigger)

    function ShowHeader(){
        gsap.fromTo('.header_Container',{opacity:0},{opacity:1, duration:0})

        gsap.fromTo('.btnHeader',{opacity:0 , x:25},{opacity:1,x:0,stagger:0.1,ease: Power2.easeInOut, duration:0.5})

        // document.querySelector('.btnHeader1').style.cursor ="default"

        let btnHeader_array =["btnHeader1","btnHeader2","btnHeader3","btnHeader4","btnHeader5"]
        document.querySelector('.btnHeader1').style.cursor="default"
        let btnHeader_array_to_loop = btnHeader_array.filter(i=> document.querySelector(`.${i}`).style.cursor !== "default")
        
        for (let i = 0; i < btnHeader_array_to_loop.length; i++) {
          gsap.set(`.${btnHeader_array_to_loop[i]} .title_90deg` ,{
              opacity:0
          }) 
          gsap.set(`.${btnHeader_array_to_loop[i]} .svg__fillCircle_Header` ,{
              r:0
          }) 
        }
    }

    function HideHeader(){
        gsap.fromTo('.btnHeader',{opacity:1 , x:0},{opacity:0,x:-35,stagger:0.1,delay:0.6,ease: Power2.easeIn,duration:0.5})
    }

    function HoverCircles(item,itme_title90deg){
        
        gsap.fromTo(item,{r:0},{r:2, duration:0.4})
        gsap.fromTo(itme_title90deg,{x:10,opacity:0},{x:0,opacity:1, duration:0.5})

    }

    function UnHoverCircles(btnHeader,item,itme_title90deg){
        if(document.querySelector(btnHeader).style.pointerEvents!=="none"){
            gsap.fromTo(item,{r:2},{r:0, duration:0.4})
            gsap.fromTo(itme_title90deg,{x:0,opacity:1},{x:10,opacity:0, duration:0.5})
        }

    }

    let tl_S1 = gsap.timeline({
        scrollTrigger:{
            trigger:'.Section2_PinkDrink_Container',
            start: "+=750",
            end:"+=10",
            markers:false,
            scrub:0.5,
            // ease:"none"
            // toggleActions: 'play reverse none reverse'
        }
    })
    let tl_S2 = gsap.timeline({
        scrollTrigger:{
            trigger:'.Section2_PinkDrink_Container',
            start: "+=1650",
            end:"+=10",
            markers:false,
            scrub:0.5,
            // ease:"none"
            // toggleActions: 'play reverse none reverse'
        }
    })
    let tl_S3 = gsap.timeline({
        scrollTrigger:{
            trigger:'.Section2_PinkDrink_Container',
            start: "+=2800",
            end:"+=10",
            markers:false,
            scrub:0.5,
            // ease:"none"
            // toggleActions: 'play reverse none reverse'
        }
    })
    let tl_S4 = gsap.timeline({
        scrollTrigger:{
            trigger:'.Section5_Contacts_Container',
            start: "+=4300",
            end:"+=10",
            markers:false,
            scrub:0.5,
            // ease:"none"
            // toggleActions: 'play reverse none reverse'
        }
    })



    useEffect(()=>{
        // gsap.set('.btnHeader1', {cursor:"default",pointerEvents:"none"})
        tl_S1.fromTo('.svg__fillCircle_Header1',{r:4},{r:0, duration:0.3})
        tl_S1.fromTo('.title_90deg__Intro',{x:0,opacity:1},{x:10,opacity:0, duration:0.3},"-=0.3")
        tl_S1.fromTo('.svg__fillCircle_Header2',{r:0},{r:4, duration:0.3},"-=0.3")
        tl_S1.fromTo('.title_90deg__PinkDrink',{x:10,opacity:0},{x:0,opacity:1, duration:0.3},"-=0.3")
        tl_S1.set('.btnHeader1', {cursor:"pointer",pointerEvents:"initial"})
        tl_S1.set('.btnHeader2', {cursor:"default",pointerEvents:"none"})


        tl_S2.to('.svg__fillCircle_Header2',{r:0, duration:0.3})
        tl_S2.to('.title_90deg__PinkDrink',{x:10,opacity:0, duration:0.3},"-=0.3")
        tl_S2.to('.svg__fillCircle_Header3',{r:4, duration:0.3},"-=0.3")
        tl_S2.to('.title_90deg__History',{x:0,opacity:1, duration:0.3},"-=0.3")
        tl_S2.set('.btnHeader2', {cursor:"pointer",pointerEvents:"initial"})
        tl_S2.set('.btnHeader3', {cursor:"default",pointerEvents:"none"})
        // tl_S2.set('.btnHeader3', {cursor:"default",pointerEvents:"none"})

        
        tl_S3.to('.svg__fillCircle_Header3',{r:0, duration:0.3})
        tl_S3.to('.title_90deg__History',{x:10,opacity:0, duration:0.3},"-=0.3")
        tl_S3.to('.svg__fillCircle_Header4',{r:4, duration:0.3},"-=0.3")
        tl_S3.to('.title_90deg__Cocktails',{x:0,opacity:1, duration:0.3},"-=0.3")
        tl_S3.set('.btnHeader3', {cursor:"pointer",pointerEvents:"initial"})
        tl_S3.set('.btnHeader4', {cursor:"default",pointerEvents:"none"})
        // tl_S3.set('.btnHeader4', {cursor:"default",pointerEvents:"none"})

        tl_S4.to('.svg__fillCircle_Header4',{r:0, duration:0.3})
        tl_S4.to('.title_90deg__Cocktails',{x:10,opacity:0, duration:0.3},"-=0.3")
        tl_S4.to('.svg__fillCircle_Header5',{r:4, duration:0.3},"-=0.3")
        tl_S4.to('.title_90deg__Contacts',{x:0,opacity:1, duration:0.3},"-=0.3")
        tl_S4.set('.btnHeader4', {cursor:"pointer",pointerEvents:"initial"})
        tl_S4.set('.btnHeader5', {cursor:"default",pointerEvents:"none"})
        // tl_S4.set('.btnHeader5', {cursor:"default",pointerEvents:"none"})

    })

    return (
        <header>
            <div className="header_Container" onMouseEnter={()=>ShowHeader()} onMouseLeave={()=>HideHeader()}>

                <a onClick={()=>Scroll_To_Section1()} className="btnHeader btnHeader1" onMouseEnter={()=>HoverCircles(".svg__fillCircle_Header1",".title_90deg__Intro")} onMouseLeave={()=>UnHoverCircles(".btnHeader1",".svg__fillCircle_Header1",".title_90deg__Intro")}>
                    <p className="title_90deg title_90deg__Intro">Intro</p>
                    <div className="btn__Header btn_Header_I clicked__Header">
                        <svg  style={{width:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                            <circle  cx="4.5" cy="4.5" r="4" fill="#ff91a3" className="svg__fillCircle_Header1 svg__fillCircle_Header" style={{}}></circle>
                            <circle  cx="4.5" cy="4.5" r="4" fill="none" stroke="#ff6680" className="svg__border_Header" style={{}}></circle>
                        </svg>
                    </div>
                </a>

                <a onClick={()=>Scroll_To_Section2()}  className="btnHeader btnHeader2" onMouseEnter={()=>HoverCircles(".svg__fillCircle_Header2",".title_90deg__PinkDrink")} onMouseLeave={()=>UnHoverCircles(".btnHeader2",".svg__fillCircle_Header2",".title_90deg__PinkDrink")} >
                    <p className="title_90deg  title_90deg__PinkDrink ">PinkDrink</p>
                    <div className="btn__Header btn_Header_I clicked__Header">
                        <svg  style={{width:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                            <circle  cx="4.5" cy="4.5" r="0" fill="#ff91a3" className="svg__fillCircle_Header2 svg__fillCircle_Header" style={{}}></circle>
                            <circle  cx="4.5" cy="4.5" r="4" fill="none" stroke="#ff6680" className="svg__border_Header" style={{}}></circle>
                        </svg>
                    </div>
                </a>

                <a onClick={()=>Scroll_To_Section3()}  className="btnHeader btnHeader3" onMouseEnter={()=>HoverCircles(".svg__fillCircle_Header3",".title_90deg__History")} onMouseLeave={()=>UnHoverCircles(".btnHeader3",".svg__fillCircle_Header3",".title_90deg__History")}>
                    <p className="title_90deg title_90deg__History">History</p>
                    <div  className="btn__Header btn_Header_I clicked__Header">
                        <svg  style={{width:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                            <circle  cx="4.5" cy="4.5" r="0" fill="#ff91a3" className="svg__fillCircle_Header3 svg__fillCircle_Header" style={{}}></circle>
                            <circle  cx="4.5" cy="4.5" r="4" fill="none" stroke="#ff6680" className="svg__border_Header" style={{}}></circle>
                        </svg>
                    </div>
                </a>

                <a onClick={()=>Scroll_To_Section4()} className="btnHeader btnHeader4" onMouseEnter={()=>HoverCircles(".svg__fillCircle_Header4",".title_90deg__Cocktails")} onMouseLeave={()=>UnHoverCircles(".btnHeader4",".svg__fillCircle_Header4",".title_90deg__Cocktails")}>
                    <p className="title_90deg title_90deg__Cocktails">Cocktails</p>
                    <div className="btn__Header btn_Header_I clicked__Header">
                        <svg  style={{width:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                            <circle  cx="4.5" cy="4.5" r="0" fill="#ff91a3" className="svg__fillCircle_Header4 svg__fillCircle_Header" style={{}}></circle>
                            <circle  cx="4.5" cy="4.5" r="4" fill="none" stroke="#ff6680" className="svg__border_Header" style={{}}></circle>
                        </svg>
                    </div>
                </a>

                <a onClick={()=>Scroll_To_Section5()} className="btnHeader btnHeader5" onMouseEnter={()=>HoverCircles(".svg__fillCircle_Header5",".title_90deg__Contacts")} onMouseLeave={()=>UnHoverCircles(".btnHeader5",".svg__fillCircle_Header5",".title_90deg__Contacts")}>
                    <p className="title_90deg title_90deg__Contacts">Contacts</p>
                    <div  className="btn__Header btn_Header_I clicked__Header">
                        <svg  style={{width:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                            <circle  cx="4.5" cy="4.5" r="0" fill="#ff91a3" className="svg__fillCircle_Header5 svg__fillCircle_Header" style={{}}></circle>
                            <circle  cx="4.5" cy="4.5" r="4" fill="none" stroke="#ff6680" className="svg__border_Header" style={{}}></circle>
                        </svg>
                    </div>
                </a>

            </div>
        </header>
    )
}
