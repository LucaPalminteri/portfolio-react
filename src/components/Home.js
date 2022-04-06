import React, {useState, useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import image from '../images/ex.png'
import exOne from '../images/extra-1.png'
import exTwo from '../images/extra-2.png'
import resume from '../info/LUCA-PALMINTERI-EN_CV.pdf'

export default function Home() {

    const [width,setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        function handleResize() {setWidth(window.innerWidth)}
        window.addEventListener('resize', handleResize)
    })

    function toggle() {
        console.log("clicked");
    }

    return (
        <div className="home">
            <nav className="home__navbar">
                <h2>Luca Palminteri</h2>
                {width>1200 &&
                <>
                <nav>
                    <ul className="navbar--menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="navbar--social">
                        <li><a href="https://www.linkedin.com/in/luca-palminteri/?locale=en_US" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a></li>
                        <li><a href="https://github.com/LucaPalminteri" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub}/></a></li>
                        <li><a href="mailto:lucapalminteri02@gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a></li>
                    </ul>
                </nav></>}
                {width<1200 && <button onClick={toggle} className="navbar--btn">☰</button>}
            </nav>

            <div className="home__container">
                <div className="home__info">
                    <h2>Hello, I'm </h2>
                    <h1>LUCA PALMINTERI</h1>
                    <h2>FRONTEND DEVELOPER.</h2>
                    <div className="btn-container">
                    
                        <button className="button-53"> Contact</button>
                        <a href={resume} download="CV-Palminteri-Luca-Frontend-Developer"><button className="button-53">Resume</button></a>
                    </div>
                </div>

                <div className="home__img">
                    {/* <img className="ex-two" src={exTwo}/> */}
                    <img src={image}/>
                    {/* <img className="ex-one" src={exOne}/> */}
                </div>
            </div>
        </div>
    )
}