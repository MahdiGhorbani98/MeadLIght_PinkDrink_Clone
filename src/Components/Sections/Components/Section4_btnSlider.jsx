import React,{useEffect} from 'react'
import SvgImport from '../../SVG/SvgImport';
import gsap from 'gsap'
import { Power2 , Elastic } from 'gsap/all';


export default function Section4_btnSlider(props) {
    let tl_svg_curve = gsap.timeline({paused:true})
    useEffect(() => {
        tl_svg_curve.to(`.${props.svgCurve_className}`,
        {
            strokeDashoffset:0,
            ease: Power2.easeIn,
            duration:0.4
        })
    }, [])

    function Hide_Default_Fruits(){
        let tl = gsap.timeline();
        tl.to('.img_ghiaccio_00',
        {
            y:-60,
            opacity:0,
            duration: 0.5
        })
        tl.to('.img_frenchie_01',
        {
            y:-60,
            opacity:0,
            duration: 0.5
        },"-=0.4")

        tl.to('.img_mexicano_02',
        {
            y:-60,
            opacity:0,
            duration: 0.5
        },"-=0.4")

        tl.to('.img_red_04',
        {
            y:-60,
            opacity:0,
            duration:0.5
        },"-=0.38")

        tl.to('.img_ghiaccio_01',
        {
            y:-60,
            opacity:0,
            duration:0.5
        },"-=0.4")

        tl.to('.img_frenchie_00',
        {
            y:-60,
            opacity:0,
            duration:0.5
        },"-=0.5")

        tl.to('.img_rosmarino_01',
        {
            y:-60,
            opacity:0,
            duration:0.5
        },"-=1")
    }

    function Show_Default_Fruits(){
        let element = document.querySelector('.defaultImgs');
        let topPos = element.getBoundingClientRect().top + window.scrollY;
        let s = (window.scrollY * 1.05)-topPos  ;
        gsap.set('.defaultImgs',{
            top:s<0?0:s
        })
        gsap.set('.img_ghiaccio_00',
        {
            y:0,
            opacity:1,
        })
        gsap.set('.img_frenchie_01',
        {
            y:0,
            opacity:1,
        })
        gsap.set('.img_mexicano_02',
        {
            y:0,
            opacity:1,
        })
        gsap.set('.img_red_04',
        {
            y:0,
            opacity:1,
        })
        gsap.set('.img_ghiaccio_01',
        {
            y:0,
            opacity:1,
        })
        gsap.set('.img_frenchie_00',
        {
            y:0,
            opacity:1,
        })
        gsap.set('.img_rosmarino_01',
        {
            y:0,
            opacity:1,
        })




        gsap.fromTo('.ghiaccio_00',
        {
            y:60,
            opacity:0,
        },
        {
            y:0,
            opacity:1,
            duration:4.0,
            ease: Elastic.easeOut.config(1.2, 0.75)
        })
        gsap.fromTo('.frenchie_01',
        {
            y:60,
            opacity:0,
        },
        {
            delay:0.05,
            y:0,
            opacity:1,
            duration:4.0,
            ease: Elastic.easeOut.config(1.2, 0.75)
        })

        gsap.fromTo('.mexicano_02',
        {
            y:60,
            opacity:0,
        },
        {
            delay:0.15,
            y:0,
            opacity:1,
            duration:4.0,
            ease: Elastic.easeOut.config(1.2, 0.75)
        },"-=3.8")

        gsap.fromTo('.red_04',
        {
            y:60,
            opacity:0,
        },
        {
            delay:0.15,
            y:0,
            opacity:1,
            duration:4.0,
            ease: Elastic.easeOut.config(1.2, 0.75)
        })

        gsap.fromTo('.ghiaccio_01',
        {
            y:60,
            opacity:0,
        },
        {
            delay:0.2,
            y:0,
            opacity:1,
            duration:4.0,
            ease: Elastic.easeOut.config(1.2, 0.75)
        })

        gsap.fromTo('.frenchie_00',
        {
            y:60,
            opacity:0,
        },
        {
            delay:0.2,
            y:0,
            opacity:1,
            duration:4.0,
            ease: Elastic.easeOut.config(1.2, 0.75)
        })

        gsap.fromTo('.rosmarino_01',
        {
            y:60,
            opacity:0,
        },
        {
            delay:0.25,
            y:0,
            opacity:1,
            duration:4.0,
            ease: Elastic.easeOut.config(1.2, 0.75)
        })
    }

    function ShowFruits(rootClassName,imgs_container , el1, el2, el3, el4, el5,el6){
        gsap.set(imgs_container,
        {
            y:0,
            opacity:1,
        })

        gsap.fromTo(`.${rootClassName} .linePink_pBold_S4`,
        {
            strokeDashoffset:645.611
        },
        {
            strokeDashoffset:0,
            ease: Power2.easeIn,
            duration:0.8
        })

        gsap.fromTo(el1,
        {
            y:60,
            opacity:0,
            ease: Elastic.easeOut.config(1.2, 0.75),
            
        },
        {
            delay:0.6,
            y:0,
            opacity:1,
            duration:4.0,
            ease: Elastic.easeOut.config(1.2, 0.75),

        })

        gsap.fromTo(el2,
        {
            y:60,
            opacity:0,


        },
        {
            delay:0.7,
            y:0,
            opacity:1,
            duration:4,
            ease: Elastic.easeOut.config(1.2, 0.75),
        })

        gsap.fromTo(el3,
        {
            y:60,
            opacity:0,
        },
        {
            delay:0.75,
            y:0,
            opacity:1,
            duration:4,
            ease: Elastic.easeOut.config(1.2, 0.75),
        })

        gsap.fromTo(el4,
        {
            y:60,
            opacity:0,
        },
        {
            delay:0.75,
            y:0,
            opacity:1,
            duration:4,
            ease: Elastic.easeOut.config(1.2, 0.75),
        })

        gsap.fromTo(el5,
        {
            y:60,
            opacity:0,
        },
        {
            delay:0.85,
            y:0,
            opacity:1,
            duration:4,
            ease: Elastic.easeOut.config(1.2, 0.75),
        })

    }
    function HideFruits(rootClassName,imgs){
        gsap.to(imgs,
        {
            y:-60,
            opacity:0,
            duration:0.4            
        })

        gsap.fromTo(`.${rootClassName} .linePink_pBold_S4`,
        {
            strokeDashoffset:0
        },
        {
            strokeDashoffset:645.611,
            // ease: Power2.easeIn,
            duration:0.8
        })
        
        gsap.timeline().add( function(){Show_Default_Fruits()},"+=0.5")
    }
    function HideOwnFruits(imgs){
        // console.log(imgs);
        gsap.to(imgs,
        {
            y:-60,
            opacity:0,
            duration:0.4            
        })
        
    }
    

    function Play_tl(tl){
        tl.play()
    }
    function Reverse_tl(tl){
        tl.reverse()
    }

    function HideExFruits(target){
        let imgs_Holder = [".imgs_Spritzlight",".imgs_Principio",".imgs_Red",".imgs_Mead"]
        let imgs_Holder_to_loop = imgs_Holder.filter(i=> i !== target)
        // console.log(document.querySelector(`${imgs_Holder_to_loop[0]}`).style);
        for (let i = 0; i < imgs_Holder_to_loop.length; i++) {
            if(document.querySelector(`${imgs_Holder_to_loop[i]}`).style.opacity==="1"){
                HideOwnFruits(imgs_Holder_to_loop[i])
            }
        }
    }

    function Conditions_Open_Close_Captions(rootClassName){
        let el = document.querySelector(`.${rootClassName} .captionContainer_s4`)
        /////////////////////Fruits Show Hide//////////////////////////
        if(rootClassName==="btn_root_1"){
            if(el.style.display==="" || el.style.display==="none"){
                Hide_Default_Fruits()
                HideExFruits('.imgs_Spritzlight');
                ShowFruits(rootClassName,'.imgs_Spritzlight' ,'.ghiaccio_00_Spritzlight','.spritzlight_01','.spritzlight_03','.spritzlight_02','.ghiaccio_01_Spritzlight' )
            }else{
                HideFruits(rootClassName,'.imgs_Spritzlight')
            }
        }
        else if(rootClassName==="btn_root_2"){
            if(el.style.display==="" || el.style.display==="none"){
                Hide_Default_Fruits()
                HideExFruits('.imgs_Principio');
                ShowFruits(rootClassName,'.imgs_Principio' ,'.rosmarino_00','.americano_01','.rosmarino_01_Principio','.ghiaccio_00_Principio','.ghiaccio_01_Principio' )
            }else{
                HideFruits(rootClassName,'.imgs_Principio')
            }
        }
        else if(rootClassName==="btn_root_3"){
            if(el.style.display==="" || el.style.display==="none"){
                Hide_Default_Fruits()
                HideExFruits('.imgs_Red');
                ShowFruits(rootClassName,'.imgs_Red' ,'.red_04_Red','.red_00','.red_01','.red_02','.ghiaccio_01_Red' )
            }else{
                HideFruits(rootClassName,'.imgs_Red')
            }
        }
        else if(rootClassName==="btn_root_4"){
            if(el.style.display==="" || el.style.display==="none"){
                Hide_Default_Fruits()
                HideExFruits('.imgs_Mead');
                ShowFruits(rootClassName,'.imgs_Mead' ,'.rosmarino_00_Mead','.tonica_02','.tonica_03','.ghiaccio_00_Mead','.ghiaccio_01_Mead' )
            }else{
                HideFruits(rootClassName,'.imgs_Mead')
            }
        }
        ///////////////////////////End/////////////////////////////


        let btnsArray = ["btn_root_1","btn_root_2","btn_root_3","btn_root_4"]
        let rootClassName__str = `.${rootClassName} .captionContainer_s4`;
        let tl = gsap.timeline()
        if(el.style.display==="" || el.style.display==="none"){
            
            if(rootClassName){
                Close_Another_Captions(btnsArray.filter(i => i !== rootClassName))
            }
            tl.fromTo(el , {display:'none' , height:0 },{display:'block', height:240, duration:0.3 })
            tl.fromTo(`${rootClassName__str} .compounds`,{opacity:0 , y:30 },{opacity:1 , y:0, duration:0.3 },'-=0.3')
            tl.fromTo(`${rootClassName__str} .flex_title_caption_s4`,{opacity:0 , y:30 },{opacity:1 , y:0, duration:0.3 , stagger:0.1 },'-=0.3')
        }else{

            tl.fromTo(`${rootClassName__str} .flex_title_caption_s4`,{opacity:1 , y:0 },{opacity:0 , y:30, duration:0.2  })
            tl.fromTo(`${rootClassName__str} .compounds`,{opacity:1 , y:0 },{opacity:0 , y:30, duration:0.3 },'-=0.2')
            tl.fromTo(el , { height:240 },{ height:0, duration:0.3 },"-=0.2")
            tl.set(el , {display:'none'})
        }
    }

    function Close_Another_Captions(rootClassName){ 
        let rootClassName__str 
        let el 
        let tl = gsap.timeline()
        
        for (let i = 0; i < rootClassName.length; i++) {
            if(document.querySelector(`.${rootClassName[i]} .captionContainer_s4`).style.display==="block")
            {
                rootClassName__str = `.${rootClassName[i]} .captionContainer_s4`;
                el = document.querySelector(`.${rootClassName[i]} .captionContainer_s4`)
                tl.fromTo(`${rootClassName__str} .flex_title_caption_s4`,{opacity:1 , y:0 },{opacity:0 , y:30, duration:0.2  })
                tl.fromTo(`${rootClassName__str} .compounds`,{opacity:1 , y:0 },{opacity:0 , y:30, duration:0.3 },'-=0.2')
                tl.fromTo(el , { height:240 },{ height:0, duration:0.3 },"-=0.2")
                tl.set(el , {display:'none'})
                gsap.fromTo(`.${rootClassName[i]} .linePink_pBold_S4`,
                {
                    strokeDashoffset:0
                },
                {
                    strokeDashoffset:645.611,
                    // ease: Power2.easeIn,
                    duration:0.8
                })   
            }
        }
    }

    return (
        <div className={props.rootClassName}>
            <div className="btnSlider" onClick={()=>Conditions_Open_Close_Captions(props.rootClassName)} onMouseEnter={()=>Play_tl(tl_svg_curve)} onMouseLeave={()=>Reverse_tl(tl_svg_curve)}>
                <p className="pBold__s4">
                    {props.title}
                    <SvgImport 
                    svg={
                        <svg viewBox="0 0 135 10" style={{position: 'absolute', width: `${props.widthSvg}`, bottom: -20, left: 0}}>
                        <path className="linePink_pBold_S4" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  645.611, strokeDasharray: 645.611}}></path>
                        </svg>}
                    />
                </p>
                <p className="plusSlider">
                    +
                    <SvgImport 
                    svg={
                        <svg style={{width: 52 , position:'relative' , right:32 , top:16}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                            <path className={props.svgCurve_className} data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset: 355.611, strokeDasharray: 355.611}}></path>
                        </svg>
                    }/>
                </p>
            </div>

            <div className="borderBottom"></div>

            <div className="captionContainer_s4">
                <p className="compounds">{props.info.compounds}</p>
                <div className="flex_title_caption_s4">
                    <p className="title_btnSlider_s4">Method.</p>
                    <p className="caption_btnSlider_s4">{props.info.method_caption}</p>
                </div>
                <div className="flex_title_caption_s4">
                    <p className="title_btnSlider_s4">Glass.</p>
                    <p className="caption_btnSlider_s4">{props.info.glass_caption}</p>
                </div>
                <div className="flex_title_caption_s4">
                    <p className="title_btnSlider_s4">Garnish.</p>
                    <p className="caption_btnSlider_s4">{props.info.garnish_caption}</p>
                </div>
            </div>
        </div>
    )
}
