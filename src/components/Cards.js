import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faRightLong, faLeftLong} from '@fortawesome/free-solid-svg-icons'

export default function Cards(props) {

    return (
        <div className="work__cards-container">
            {props.data.id % 2 === 0 ? 
            <>
                <div className="cards-container__info right">
                    <h3>{props.data.title}</h3>
                    <p>{props.data.description}</p>
                    <div className="link">
                        <i><FontAwesomeIcon className="icon" icon={faLeftLong}/></i>
                        <a href={props.data.link} target="_blank">View project</a>
                    </div>
                </div>
                <div className="cards-container__img left">
                <video width="100%" poster={props.data.image} muted autoPlay loop>
                        <source src={props.data.video} type="video/mp4" />
                    </video>
                </div> 
            </> 
            : 
            <>
                <div className="cards-container__img">

                    <video width="100%" poster={props.data.image} muted autoPlay loopS>
                        <source src={props.data.video} type="video/mp4" />
                    </video>
                </div>  
                <div className="cards-container__info">
                    <h3>{props.data.title}</h3>
                    <p>{props.data.description}</p>
                    <div className="link">
                    <a href={props.data.link} target="_blank">View project</a>
                        <i><FontAwesomeIcon className="icon" icon={faRightLong}/></i>
                    </div>
                </div>
            </>
            }
        </div>
    )
}