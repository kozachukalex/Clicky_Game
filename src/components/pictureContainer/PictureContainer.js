import React from "react";
import "./pictureContainer.css"

const pictureContainer = (props) => (
            <div className="container" id="pictureContainer">
            {props.children}
            </div>
        )

export default pictureContainer;