import React, { Component } from 'react';
import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'
import PictureContainer from './components/pictureContainer';
import CharacterThumbnail from './components/characterThumbnail';
import "./app.css"

const character = [
    {
        name: "bender",
        picture: 'https://i.pinimg.com/originals/c7/73/f4/c773f4d77f6088a92d4ac01b94b8296d.jpg'
    },
    {
        name: "zoidberg",
        picture: "http://basementrejects.com/wp-content/uploads/2013/09/futurama-season-2-14-how-hermes-requesitioned-his-groove-back-dr-zoidberg-hermes.jpg"
    },
    {
        name: "hubert",
        picture: "https://vignette.wikia.nocookie.net/en.futurama/images/a/ad/GoodNewsEveryone.jpg/revision/latest?cb=20090731021518"
    }
    ,
    {
        name: "nibbler",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbRpq1UuG5GstDQ3ug6rrQKwHb4AZj0-nYoN7zAlLHUcosC9h"
    }
    ,
    {
        name: "kif",
        picture: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/e/e0/Kif.jpg"
    }
];

//Need to create handler functions to pass as props to the thumbnails, so when clicked it changes state and score changes

class App extends Component {
    state = {
        selected: [],
        currentScore: 0,
        topScore: 0
    }
    characterSelect = () => {
        this.setState({ currentScore: this.state.currentScore + 1 });
    };

    checkTopScore = () => {
        if (this.state.currentScore > this.state.topScore){
            this.setState({topScore: this.state.currentScore})
        } else {}
    }
    
    handleClick = () => {
        this.characterSelect();
        this.checkTopScore();
     }

    render() {
        return (
            <div>
                <Navbar
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Jumbotron />
                <PictureContainer>
                {character.map(character => (
                    <CharacterThumbnail 
                        key={character.name}
                        name={character.name}
                        picture={character.picture}
                        clickHandler={this.handleClick}
                        />
                ))}
                </PictureContainer>

            </div>
        )
    }
}

export default App;
