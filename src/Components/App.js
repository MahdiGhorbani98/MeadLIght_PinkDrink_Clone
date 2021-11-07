import '../Css/App.css';
import Section1_Intro from './Sections/Section1_Intro';
import Section2_PinkDrink from './Sections/Section2_PinkDrink';
import Section3_History from './Sections/Section3_History';
// import FakeLorem from './FakeContent/FakeLorem';
import CanvasController from './3D_Component/CanvasController'
import React, {useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Power2 , Elastic } from 'gsap/all';
import plus from '../Assets/images/Plus.png'
import p from '../Assets/images/P.png'
import {ReactComponent as Spinner} from '../Assets/vectors/spinner.svg'
import Section5_Contacts from './Sections/Section5_Contacts';
import Section4_Cocktails from './Sections/Section4_Cocktails';
import Header from './Sections/Header';
// import SmoothScrollingTest from './FakeContent/SmoothScrollingTest';
import SvgImport from './SVG/SvgImport';
import ScrollIndicator from './Sections/ScrollIndicator';

function App() {
  ////////////////////////div__scroll_to_dicover////////////////////////////
    let tl_discover = gsap.timeline({paused:true})
    useEffect(() => {
      tl_discover.to(".svg__scroll_to_discover" ,{ duration:1 , strokeDashoffset: 0})
    }, [])


    function PlaySvg(){
      tl_discover.play();
    }
    function ReverseSvg(){
      tl_discover.reverse();
    }

    function Scroll_To_Sicover_Clicked(){
      // console.log("diccover");
      window.scrollBy({ 
        top: 850, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
    }
/////////////////////////Smooth Scroll///////////////////////////
var html = document.documentElement;
    var body = document.body;
    var scroller = {
        target: document.querySelector(".scroll-container"),
        ease: 0.05, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
      };

    var requestId = null;

    useEffect(()=>{
      gsap.set('.scroll-container', {
        rotation: 0.01,
        force3D: true,
        // ease:Power2.easeInOut
        });
    })

    window.addEventListener("load", onLoad);

    function onLoad() {    
    updateScroller();  
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll); 
    }

    function updateScroller() {
  
        var resized = scroller.resizeRequest > 0;
          
        if (resized) {    
          var height =document.querySelector('.scroll-container').clientHeight;
        //   var height = scroller.target.clientHeight;
          // console.log(height);
          body.style.height = height + "px";
          scroller.resizeRequest = 0;
        }
            
        var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
      
        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;
      
        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
          scroller.y = scrollY;
          scroller.scrollRequest = 0;
        }
        
        gsap.set('.scroll-container', { 
          y: -scroller.y ,
                  ease:Power2.easeInOut

        });
        
        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
      }
      
      function onScroll() {
        scroller.scrollRequest++;
        if (!requestId) {
          requestId = requestAnimationFrame(updateScroller);
        }
      }
      
      function onResize() {
        scroller.resizeRequest++;
        if (!requestId) {
          requestId = requestAnimationFrame(updateScroller);
        }
      }

////////////////////////////////////////////////////

  
  gsap.registerPlugin(ScrollTrigger)
  let tl = gsap.timeline();
  useEffect(()=>{
    gsap.to('.spinner',
    {
        rotateZ:400,
        duration:400,
        scrollTrigger:{
          trigger: '.App',
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=5930",
          scrub:1.6
        }
    })
  },[])

  useEffect(() => {
    tl.from('.plus',{y:-40, opacity:0, duration:0.8,ease: Power2.easeOut})//0.0__0.5
    tl.from('.Intro_p',{y:30, opacity:0, duration:0.8},'-=0.8') //0.0__0.8
    tl.from('.Intro_h1',{x:-200,y:600, opacity:0, duration:1 },'-=0.8') //0.0__0.8
    tl.to(".linePink" ,{ duration:0.6 , strokeDashoffset: 0,ease: Power2.easeIn},'-=0.4')//0.4__1.6
    tl.from('.hero',{x:50,y:100, opacity:0, duration:1.8,ease: Elastic.easeOut.config(1.2, 0.75)})//0.4__1.2
    tl.from('.div__spinner',{y:40, opacity:0,rotateZ:80, duration:0.5},'-=1.8')//0.6__1.1
    tl.from('.line__before__scroll',{width:0, duration:0.3},'-=1.4')//0.7__1.0
    tl.from('.scroll__to__discover',{y:30,opacity:0, duration:0.5},'-=1.2')
    tl.set('.canvas',{display:'block',duration:0.1})
    tl.from('.canvas',{y:740 , x :150, duration:3.5,ease:Elastic.easeOut.config(1.01, 0.75)} )
    
    gsap.to('.div__scroll_to_dicover',
    {
      opacity:0.0,
      // x:110,
      scrollTrigger:{
        trigger: '.App',
        start: "+=50", // when the top of the trigger hits the top of the viewport
        end: "+=60",
        scrub:1,
        markers:false
      }
    })
  },[])
  
  /////////////////////////OnHover Run GSAP//////////////////////
  // let tl = gsap.timeline({paused:true})

  // useEffect(()=>{
  //   tl.to('.pTest',{opacity:0, duration:1})
  // },[])
  
  // function PlayTl(){
  //   tl.play();
  // }
  // function ReversePlayTl(){
  //   tl.reverse();
  // }
  /////////////////////////OnHover Run GSAP//////////////////////
  // useEffect(()=>{
  //   let cursor = document.getElementById('cursor')
  //   document.onmousemove = function(e){
  //     cursor.style.display="block"
  //     gsap.to('#cursor',{left : (e.pageX-6) + "px" ,duration:0.1, ease:'none'})
  //     gsap.to('#cursor',{top : (e.pageY-6) + "px" ,duration:0.1,ease:'none'})
  //   }
  // },[])

  return (
    <section className="viewport">
          <img src={plus} alt="plus" className="plus" />
          <div className="div__spinner">
            <Spinner width={100} className="spinner"/>
            <img src={p} alt="" className="p_in_spinner" />
          </div>
          <CanvasController/>
          <Header/>
          <div onClick={()=>Scroll_To_Sicover_Clicked()} onMouseEnter={()=>PlaySvg()} onMouseLeave={()=>ReverseSvg()} className="div__scroll_to_dicover">
                <span className="line__before__scroll"></span>
                <a className="scroll__to__discover">
                    <SvgImport 
                    svg={
                      <svg style={{position: 'absolute', width: 92, top: -40, left: 20}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                            <path className="svg__scroll_to_discover" data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset:  355.611, strokeDasharray: 355.611}}></path>
                        </svg>
                    }/>
                    Scroll to discover
                </a>
          </div>
          <ScrollIndicator/>
                
          <div id="Section1" className="App scroll-container">
              {/* <div id="cursor"></div> */}
              <div className="AppNoise">
              <Section1_Intro/> 
              <Section2_PinkDrink/>
              <Section3_History/> 
              <Section4_Cocktails/>
              <Section5_Contacts/>
              </div>
          </div>
    </section>
  );
}

export default App;







{/* ////////////OnHover Run GSAP//////////// */}
{/* <p onMouseEnter={()=>PlayTl()} onMouseLeave={()=>ReversePlayTl()} className="pTest">Hello ScrollTrigger</p> */}
{/* ////////////OnHover Run GSAP//////////// */}
{/* <div className="fakesContainer">
  <FakeLorem clss={"fake2"}/>
  <FakeLorem clss={"fake3"}/>
</div> */}