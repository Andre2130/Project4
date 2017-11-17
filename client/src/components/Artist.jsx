import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
import Napster from './Napster'

const AlbumDisplay = styled.div`
display: inline-block;
width: 150px;
height: 150px;
border-radius: 50%;
`
const ProfilePic = styled.div`
display: inline-block;
width: 50px;
height: 50px;
border-radius: 50%;
float: left;
margin: 100px;
img{
    border-radius: 50%;
};
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
                <ProfilePic><img src={this.state.artist.photo_url} alt=""/></ProfilePic>
                <p><Napster artist={this.state.artist.name}/></p>
                
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