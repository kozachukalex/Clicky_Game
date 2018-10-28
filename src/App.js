import React, { Component } from 'react';
import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'
import PictureContainer from './components/pictureContainer';
import CharacterThumbnail from './components/characterThumbnail';
import characters from "./characters";
import "./app.css"

const chars = characters

class App extends Component {

    state = {
        shuffledCharacters: chars,
        currentScore: 0,
        topScore: 0,
        selectedCharacters: [],
    }

    shuffle = () => {
        const charCopy = this.state.shuffledCharacters.slice()
        let currentIndex = charCopy.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = charCopy[currentIndex];
            charCopy[currentIndex] = charCopy[randomIndex];
            charCopy[randomIndex] = temporaryValue;
        }
    
        this.setState({shuffledCharacters : charCopy})
    }

    checkTopScore() {
        this.setState({ currentScore: this.state.currentScore + 1 })
        if (this.state.currentScore >= this.state.topScore) {
            this.setState({ topScore: this.state.currentScore + 1})
        }
    }

    clickHandler = () => {
        this.checkTopScore();
        this.shuffle(this.state.shuffledCharacters)
    }

    resetGame = () => {
        this.setState({ currentScore : 0})
        this.shuffle();
        this.render();
    }
    
    render() {
        return (
            <div>
                <Navbar
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Jumbotron />
                <button onClick={this.resetGame}> Reset </button>
                <PictureContainer>
                    {this.state.shuffledCharacters.map(character => (
                        <CharacterThumbnail
                            key={character._id}
                            _id={character._id}
                            resetGame={this.resetGame}
                            picture={character.image}
                            clickHandler={this.clickHandler}
                        />
                    ))}
                </PictureContainer>

            </div>
        )
    }

};

export default App;
