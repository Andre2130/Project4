import React, {Component} from 'react';
import axios from 'axios';

class Artist extends Component {
    state = {
        artist: {},
        albums: []
    }

  async componentWillMount(){
       try {
         const {artist_id} = this.props.match.params
         const response = await axios.get(`/api/artists/${artist_id}`)
         console.log(response)
         this.setState({artist: response.data})
       }catch(error) {
           console.log(error)
       }
       try {
        const {artist_id} = this.props.match.params
        const response = await axios.get(`/api/artists/${artist_id}/albums`)
        console.log(response)
        this.setState({albums: response.data})
      }catch(error) {
          console.log(error)
      }
   } 
    render() {
        return (
            <div>
                <img src={this.state.artist.photo_url} alt=""/>
                <h1>{this.state.artist.name}</h1>

                {this.state.albums.map(album => (
                    <div key={this.state.album}>
                        <img src={album.cover_art_url}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Artist;