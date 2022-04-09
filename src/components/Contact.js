import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

export default function Contact() {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="contact subtitle" id="contact">
            <h2>contact.</h2>
            <div className="contact__container">
                <form action="https://formspree.io/f/mzbojbgy" method="POST" className="container--form">
                    <input className="name input" type="text" placeholder="Name" name="name" required></input>
                    <input className="email input" type="email" placeholder="Email" name="email" required></input>
                    <textarea className="message input" type="textarea" placeholder="Message" name="message" required></textarea>
                    <button className="send input" type="submit">Send</button>
                </form>
                <div className="container--info">
                    <h3>I would like to hear from you.</h3>
                </div>
            </div>
            <div className="contact__social">
                <a href="https://www.linkedin.com/in/luca-palminteri/?locale=en_US" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a>
                <a href="https://github.com/LucaPalminteri" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                <a href="mailto:lucapalminteri02@gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
            </div>
            <footer className="contact__footer">
                <p>Copyright &copy; {year} Luca Palminteri - All Rights Reserved</p>
            </footer>
        </div>
    )
}