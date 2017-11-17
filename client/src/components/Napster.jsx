import React, { Component } from 'react';
import axios from 'axios';

class Napster extends Component {

    state = {
        artist: {},
        albums: [],
        redirectToArtist: false
    }

  async componentWillMount(){
       const response = await axios.get(`http://api.napster.com/v2.2/artists/kanye-west?apikey=${process.env.REACT_APP_SECRET}&limit=1`)
       console.log(response.data)
       this.setState({artist: response.data.artists[0]})
   } 

    render() {
        return (
            <div>
                <h1>{this.state.artist.name}</h1>
                {this.state.artist.blurbs}
            </div>
        );
    }
}

export default Napster;