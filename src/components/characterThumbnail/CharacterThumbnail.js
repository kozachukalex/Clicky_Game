import React from "react";
import "./characterThumbnail.css"

const CharacterThumbnail = (props) => (
    <div>
        <img className="thumbnail" 
        data-name={props.name} 
        src={props.picture} 
        alt={props.name} 
        onClick={props.clickHandler}/>    
    </div>
)

export default CharacterThumbnail;