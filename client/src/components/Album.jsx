import React, { Component } from 'react';
import axios from 'axios';

class Album extends Component {
    state = {
        album: {},
        songs: [{}],
    }

  async componentWillMount(){
       try {
         const {album_id, artist_id} = this.props.match.params
         const response = await axios.get(`/api/artists/${artist_id}/albums/${album_id}`)
         console.log(response)
         this.setState({album: response.data})
       }catch(error) {
           console.log(error)
       }
       try {
        const {album_id, artist_id} = this.props.match.params
        const response = await axios.get(`/api/artists/${artist_id}/albums/${album_id}/songs`)
        console.log(response)
        this.setState({songs: response.data})
      }catch(error) {
          console.log(error)
      }
   } 
    render() {
        return (
            <div>
                <h1>
                {this.state.album.title}
                </h1>
                            {this.state.songs[0].name}
                            <audio controls src={this.state.songs[0].song_url} />
                        
            </div>
        );
    }
}

export default Album;