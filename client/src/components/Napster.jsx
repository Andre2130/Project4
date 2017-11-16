import React, { Component } from 'react';
import axios from 'axios';

class Napster extends Component {

    state = {
        artist: {},
        albums: [],
        redirectToArtist: false
    }

  async componentWillMount(){
       const response = await axios.get(`http://api.napster.com/v2.2/playlist/top?apikey=${process.env.REACT_SECRET}&limit=5`)
       this.setState({albums: response.data})
   } 

    render() {
        return (
            <div>
                {this.state.playlists}
            </div>
        );
    }
}

export default Napster;