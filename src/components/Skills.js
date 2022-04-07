import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5,faJs,faReact,faSass, faBootstrap, faGitAlt, faCss3, faGithub, faNodeJs, faNpm, faFigma, faAws,
faPhp, faLinux, faGitlab, faLess, faDocker } 
from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import SkillsCard from "./SkillsCards";
import skillsData from '../info/skills.json'

export default function Skills() {

    const skills = skillsData.map( (x) => {
        return (
            <SkillsCard key={x.id} data={x}/>
        )
    })

    return (
        <div className="skills">
            <h2>skills.</h2>
            <div className="skills__container">
                <div className="skills__container--known">
                    <FontAwesomeIcon className="icon" icon={faHtml5}/>
                    <FontAwesomeIcon className="icon" icon={faCss3}/>
                    <FontAwesomeIcon className="icon" icon={faJs}/>
                    <FontAwesomeIcon className="icon" icon={faReact}/>
                    <FontAwesomeIcon className="icon" icon={faSass}/>
                    <FontAwesomeIcon className="icon" icon={faBootstrap}/>
                    <FontAwesomeIcon className="icon" icon={faGitAlt}/>
                    <FontAwesomeIcon className="icon" icon={faGithub}/>
                    <FontAwesomeIcon className="icon" icon={faFigma}/>
                </div>
                <div className="skills__container--learning">
                <FontAwesomeIcon className="icon" icon={faNodeJs}/>
                <FontAwesomeIcon className="icon" icon={faDatabase}/>
                <FontAwesomeIcon className="icon" icon={faNpm}/>
                <FontAwesomeIcon className="icon" icon={faAws}/>
                <FontAwesomeIcon className="icon" icon={faPhp}/>
                <FontAwesomeIcon className="icon" icon={faLinux}/>
                <FontAwesomeIcon className="icon" icon={faGitlab}/>
                <FontAwesomeIcon className="icon" icon={faLess}/>
                </div>
            </div>
            {skills}
        </div>
    )
}