import React,{useEffect} from 'react'
import gsap from 'gsap';
// import SmoothScroll from './SmoothScroll'
export default function SmoothScrollingTest() {
    var html = document.documentElement;
    var body = document.body;
    var scroller = {
        target: document.querySelector("#scroll-container"),
        ease: 0.05, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
      };

    var requestId = null;

    gsap.set('.scroll-container', {
    rotation: 0.01,
    force3D: true
    });

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
          var height =2107;
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
          y: -scroller.y 
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

      
return ( 
<section class="viewport">
    
    <div id="scroll-container" class="scroll-container">
      <div class="content">
    
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt=""/>
        </div>       
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt=""/>
        </div>  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt=""/>
        </div>  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-16.jpg" alt=""/>
        </div>  
  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt=""/>
        </div>  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt=""/>
        </div>  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt=""/>
        </div>  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-16.jpg" alt=""/>
        </div>  
  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt=""/>
        </div>  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt=""/>
        </div>  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt=""/>
        </div>  
        <div class="img-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-16.jpg" alt=""/>
        </div>  
  
      </div>
    </div>
     
</section>
    
)}


