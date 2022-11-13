import React from "react";
import reactLogo from "../images/troll_face.png"

export default function Navbar (){
    return (<header className="header">
            <img src= {reactLogo} alt="reactLogo"  className="header--image"/>
            <h3 className="header--title">Meme Generator</h3>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
        )
}   