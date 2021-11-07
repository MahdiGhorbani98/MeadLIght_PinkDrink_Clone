import React,{useEffect} from 'react'
import gsap from 'gsap';
import { Power1  } from 'gsap/all';

export default function ScrollIndicator() {
    function VerticalScroll(){


    }
    useEffect(() => {
        window.onscroll = function(){
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            // The scrollTop property sets or returns the number of pixels an element's content is scrolled vertically.
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            // The Element.scrollHeight read-only property is a measurement of the height of an element's content,
            //  including content not visible on the screen due to overflow.
            let scrolled = (winScroll/ height) * 100;
            gsap.to('.scrollIndicator',{
                height : scrolled + "%",
                ease:Power1.easeOut
            })
        }

    }, [])
    return (
        <div className="scrollIndicator">
        </div>
    )
}
