import React, { Component } from 'react';
import axios from 'axios';
import Napster from './Napster'

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
                <img src={this.state.album.cover_art_url}/>
                {this.state.songs.map(song => {
                    const song_url = song.song_url
                    const name = song.name
                    return(<div><h1>{name}</h1><audio controls src={song_url}/></div>) 
                })}
            </div>
        );
    }
}

export default Album;