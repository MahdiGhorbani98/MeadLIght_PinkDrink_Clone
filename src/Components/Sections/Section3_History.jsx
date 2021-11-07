import React,{useEffect} from 'react'
import SvgImport from '../SVG/SvgImport';
import rose from '../../Assets/illustrations/rose_00.png';
import story_00 from '../../Assets/illustrations/story_00.png';
import story_01 from '../../Assets/illustrations/story_01.png';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Power2, Elastic } from 'gsap/all';
export default function Section3_History() {
    gsap.registerPlugin(ScrollTrigger)


    let tl_02 = gsap.timeline({
        scrollTrigger:{
            trigger:".Section3_History",
            start: "+=1650",
            markers:false,
        },
    })
    let tl_articles = gsap.timeline({
        scrollTrigger:{
            trigger:".Section3_History_Container",
            start: "+=1770",
            markers:false,
        },
    })
    useEffect(() => {
        gsap.from('.roseS3',
        {
            scrollTrigger:{
                trigger:".Section3_History_Container",
                start: "-=550",
                markers:false,
            },
            opacity:0,
            y:20,
            duration:0.5
        })
        gsap.from('.story_00',
        {
            scrollTrigger:{
                trigger:".Section3_History_Container",
                start: "-=550",
                markers:false,
            },
            opacity:0,
            y:30,
            duration:0.5
        })
        tl_02.from('.zeroS3',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            duration:0.4
        })
        tl_02.from('.oneS3',
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
        tl_02.from('.svg__02',
        {
            strokeDashoffset:355.611,
            duration:0.4
        },"-=0.1")
        gsap.from('.pHeader__s3',
        {
            scrollTrigger:{
                trigger:".Section3_History_Container",
                start: "-=450",
                markers:false,
            },
            y:30,
            opacity:0,
            duration:0.5
        })
        // gsap.from('.svg_nextInfo',
        // {

        //     strokeDashoffset:330,
        //     duration:0.5
        // })

        tl_articles.from('.pBold__s3',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            x:30,
            duration:0.8
        },"-=0.2")
        tl_articles.from('.linePink_pBold_S3',
        {
            strokeDashoffset:650,
            duration:0.8,
            ease: Power2.easeIn
        },'-=0.3')
        tl_articles.from('.pCaption__s3',
        {
            rotateX:-50,
            rotateY:-50,
            opacity:0,
            x:20,
            duration:0.6,
            stagger:1
        },'-=0.3')
        gsap.from('.story_01',
        {
            scrollTrigger:{
                trigger:".Section3_History_Container",
                start: "-=290",
                markers:false,
            },
            opacity:0,
            y:50,
            x:30,
            duration:1.8,
            ease: Elastic.easeOut.config(1.2, 0.75)
        },'-=0.0')

    })



    return (
        <div className="Section3_History_Container">
            <img className="story_00" src={story_00} alt="story_00" />  
            <div className="Section3_History">
                <div>
                    <img id="Section3" className="roseS3" src={rose} alt="rose" />
                    <div className="Container_01_S3">
                        <div className="div__01_S3">
                        <h2 className="zeroS3">0</h2>
                        <h2 className="oneS3">2</h2>
                        </div>
                        <SvgImport 
                        svg={
                            <svg style={{width: 92}} data-v-c2a89eaa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 126">
                                <path className="svg__02" data-v-c2a89eaa="" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" d="M66 22.8c-9.4-.1-13.8-1.2-21.3.1-5 .8-12.5 1.9-19.3 7.9C10.4 44 .3 76.5 14.3 94.9c14.8 19.5 32.8 31.6 54.1 29.5 59.8-6 70.9-92 18.6-117.2-15.6-7.6-29.7-6-46.8-.8C25.4 10.8 3.7 24.6 1 40.7" style={{strokeDashoffset:  0, strokeDasharray: 355.611}}></path>
                            </svg>
                        }/>
                    </div>
                    <p className="pHeader__s3">A SHORT STORY</p>
                    <div className="articles_S3">
                        <p className="pBold__s3">
                        <bdi className="bdiSec2">
                        <>In the beginning, it was honey<br/></>
                        <SvgImport 
                        svg={
                            <svg viewBox="0 0 135 10" style={{position: 'absolute', width: 175, bottom: -8, right: 0}}>
                            <path className="linePink_pBold_S3" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{strokeDashoffset:  0, strokeDasharray: 645.611}}></path>
                            </svg>}
                        />
                        </bdi>
                        </p>

                        <p className="pCaption__s3">
                            Our project dates back to 2014, after having tried mead in a Prague pub. That’s how we became passionate about the honey fermentation process. We came back to Italy, and nearly two months afterwards, we tried over and over different production methods and techniques.
                        </p>
                        <p className="pCaption__s3">
                            Not content with the results, we changed method and experimented a new style which allowed us to create an innovative and natural drink. After several attempts, in 2018 we succeeded in creating Principio, our first drink. Principio granted Meadlight to pursue continuous experimentations in the honey fermentation field, supporting a genuine future and being under the banner of innovation and sustainability.
                        </p>
                        <img className="story_01" src={story_01} alt="story_01" />

                    </div>
                </div>

            </div>
        </div>
    )
}
