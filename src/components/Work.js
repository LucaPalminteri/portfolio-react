import React from "react";
import data from "../info/data.json"
import Cards from "./Cards";

export default function Work() {

    const cards = data.map((x) => {
        return (
            <Cards data={x} key={x.id}/>
        )
    })

    return (
        <div className="work">
            <h2>work.</h2>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aliquid expedita, 
                maxime aspernatur, neque nemo officiis velit est voluptas esse ratione porro mollitia 
                voluptatum laudantium quas, accusantium quis rem placeat!
            </h3>
            {cards}
        </div>
    )
}