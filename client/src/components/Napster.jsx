import React, { Component } from 'react';
import axios from 'axios';

class Napster extends Component {

    state = {
        artist: {},
        albums: [],
        redirectToArtist: false
    }

  async componentWillMount(){
       const response = await axios.get(`http://api.napster.com/v2.2/playlist/top?apikey=${process.env.REACT_APP_SECRET}&limit=5`)
       this.setState({albums: response.data})
   } 

    render() {
        return (
            <div>
                <h1>{this.state.albums.name}</h1>
            </div>
        );
    }
}

export default Napster;