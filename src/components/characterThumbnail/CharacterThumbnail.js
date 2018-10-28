import React, { Component } from "react";
import "./characterThumbnail.css"


class CharacterThumbnail extends Component {
    state = {
        clicked: false
    }

    fixState = () => {this.setState({clicked: this.props.hasClicked})}

    render() {
        return (
            <div
                id={this.props._id}
                onClick={() => {
                    if (this.state.clicked){
                        alert("already clicked")
                        this.props.resetGame();
                    } else {
                        this.setState({ clicked:true});
                        this.props.clickHandler();
                    }
                }}>
                <img
                    className="thumbnail"
                    alt={this.props.picture}
                    src={this.props.picture}
                />
            </div>
        )
    }
}

export default CharacterThumbnail; 