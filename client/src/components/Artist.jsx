import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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

   deleteAlbum = async (album_id) => {
    try {
        const { artist_id } = this.props.match.params
        const response = await axios.delete(`/api/artists/${artist_id}/albums/${album_id}`)
        this.setState({
            artist: response.data,
            redirectToartist: true,
        })
    } catch (error) {
        console.log(error)
        await this.setState({ error: error.message })
    }
}
    render() {
        return (
            <div>
                <img src={this.state.artist.photo_url} alt=""/>
                <h1>{this.state.artist.name}</h1>
                <Link to={`/artists/${this.state.artist.id}/albums`}><button>Add album</button></Link>

                {this.state.albums.map(album => (
                    <div key={this.state.album}>
                        <h1>{album.name}</h1>
                    <Link to={`/artists/${this.state.artist.id}/albums/${album.id}`}><img src={album.cover_art_url}/></Link>
                    <button onClick={() => {
                                    const a = window.confirm('Are You Sure?')
                                    if (a == true) {
                                        this.deleteAlbum(album.id)
                                    }
                                }}>Delete Album</button>
                    <Link to={`/artists/${this.state.artist.id}/albums/${album.id}/edit`}><button>Edit album</button></Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default Artist;