import React from "react";

export default function SkillsCard(props) {
    return (
        <div className="skills__container--card">
            <div className="container--card card-left">
                <h3>{props.data.titleL}</h3>
                <p>{props.data.descriptionL}</p>
            </div>
            <div className="container--space"></div>
            <div className="container--card card-right">
                <h3>{props.data.titleR}</h3>
                <p>{props.data.descriptionL}</p>            
            </div>
        </div>
    ) 
}