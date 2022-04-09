import React, {useState, useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import resume from '../info/LUCA-PALMINTERI-EN_CV.pdf'

export default function Home() {

    const [width,setWidth] = useState(window.innerWidth);
    const [isBtnOn,setIsBtnOn] = useState(false) 

    useEffect(()=>{
        function handleResize() {setWidth(window.innerWidth)}
        window.addEventListener('resize', handleResize)
    })

    function toggle() {
        setIsBtnOn((prevState) => !prevState);
    }

    return (
        <div className="home">
            <nav className="home__navbar">
                <h2>Luca Palminteri</h2>
                {width>1200 &&
                <>
                <nav>
                    <ul className="navbar--menu">
                        <li><a href="#work">Work</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
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
            {
            isBtnOn && 
            <div className="menu-btn">
                <nav>
                    <ul className={"menu-btn__navbar"}>
                        <li><a onClick={toggle} href="#work">Work</a></li>
                        <li><a onClick={toggle} href="#skills">Skills</a></li>
                        <li><a onClick={toggle} href="#contact">Contact</a></li>
                        <li>
                            <div className="menu-btn__navbar--social">
                                <><a onClick={toggle} href="https://www.linkedin.com/in/luca-palminteri/?locale=en_US" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a></>
                                <><a onClick={toggle} href="https://github.com/LucaPalminteri" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub}/></a></>
                                <><a onClick={toggle} href="mailto:lucapalminteri02@gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a></>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>//<div className="hide"></div>
            }
            <div className="home__container">
                <div className="home__info">
                    <h2>Hello, I'm </h2>
                    <h1>LUCA PALMINTERI</h1>
                    <h2>FRONTEND DEVELOPER.</h2>
                    <div className="btn-container">
                        <a href="#contact"><button className="btn">Contact</button></a>
                        <a href={resume} download="CV-Palminteri-Luca-Frontend-Developer"><button className="btn">Resume</button></a>
                    </div>
                </div>
                <div className="home__img">
                    <img src='/images/ex.png'/>
                </div>
            </div>
        </div>
    )
}