import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
    return (
        <div className="home">
            <nav className="home__navbar">
                <img src="../images/logo-two.png" />
                <nav>
                    <ul className="navbar--menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="navbar--social">
                        <li><a href="#"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a></li>
                        <li><a href="#"><FontAwesomeIcon className="icon" icon={faGithub}/></a></li>
                        <li><a href="#"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a></li>
                    </ul>
                </nav>
            </nav>

            <div className="home__container">
                <div className="home__info">
                    <h2>Hi, I'm </h2>
                    <h1>LUCA<br/>PALMINTERI</h1>
                    <h2>FRONTEND DEVELOPER</h2>
                    <div>
                        <button>Contact</button>
                        <button>Resume</button>
                    </div>
                </div>

                <div className="home__img">Img</div>
            </div>
        </div>
    )
}