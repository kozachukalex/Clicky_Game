import React, { Component } from 'react';
import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'
import PictureContainer from './components/pictureContainer';
import CharacterThumbnail from './components/characterThumbnail';

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

]

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <PictureContainer>
                <CharacterThumbnail/>
                </PictureContainer>
            </div>
        )
    }
}

export default App;
