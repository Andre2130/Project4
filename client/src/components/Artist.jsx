import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
import Napster from './Napster'

const AlbumDisplay = styled.div`
margin: 5px;
border: 1px solid #ccc;
float: left;
width: 180px;
`

class Artist extends Component {
    state = {
        artist: {},
        albums: [],
        redirectToArtist: false
    }

  async componentWillMount(){
       this.getArtist()
       this.getAlbums()
      
   } 

getArtist = async (album_id) => {
    try {
        const {artist_id} = this.props.match.params
        const response = await axios.get(`/api/artists/${artist_id}`)
        console.log(response)
        this.setState({artist: response.data})
      }catch(error) {
          console.log(error)
      }
}

getAlbums = async (album_id) => {
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
            redirectToArtist: true,
        })
        this.getAlbums()
    } catch (error) {
        console.log(error)
        await this.setState({ error: error.message })
    }
}
    render() {
        // if (this.state.redirectToArtist) {
        //     return (
        //         <Redirect to={`/artists/${this.state.artist.id}`} />
        //     )
        // }
        return (
            <div>
                <img src={this.state.artist.photo_url} alt=""/>
                <Napster artist={this.state.artist.name}/>
                
                <Link to={`/artists/${this.state.artist.id}/albums`}><button>Add Album</button></Link>

                {this.state.albums.map(album => (
                    <AlbumDisplay key={this.state.album}>
                        <h1>{album.name}</h1>
                    <Link to={`/artists/${this.state.artist.id}/albums/${album.id}`}><img src={album.cover_art_url} height="100" width="100"/></Link>
                    <button onClick={() => {
                                    const a = window.confirm('Are You Sure?')
                                    if (a == true) {
                                        this.deleteAlbum(album.id)
                                    }
                                }}>Delete Album</button>
                    <Link to={`/artists/${this.state.artist.id}/albums/${album.id}/edit`}><button>Edit album</button></Link>
                    </AlbumDisplay>
                ))}
            </div>
        );
    }
}

export default Artist;