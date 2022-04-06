import React from "react";

export default function Cards(props) {

    const left = {
        paddingLeft: "20px",
        paddingRight: "0",
        
    },
    right = {
        paddingRight: "20px",
        paddingLeft: "0",
        alignItems: "flex-end"
    }

    return (
        <div className="work__cards-container">
            {props.data.id % 2 === 0 ? 
            <>
                <div className="cards-container__info" style={right}>
                    <h3>{props.data.title}</h3>
                    <p>{props.data.description}</p>
                    <div>
                        Link
                    </div>
                </div>
                <div className="cards-container__img" style={left}>
                    <img src={props.data.image}/>
                </div> 
            </> 
            : 
            <>
                <div className="cards-container__img">
                    <img src={props.data.image}/>
                </div>  
                <div className="cards-container__info">
                    <h3>{props.data.title}</h3>
                    <p>{props.data.description}</p>
                    <div>
                        Link
                    </div>
                </div>
            </>
            }
        </div>
    )
}