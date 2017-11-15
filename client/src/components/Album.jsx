import React, { Component } from 'react';

class Album extends Component {
    state = {
        album: {},
        songs: []
    }

  async componentWillMount(){
       try {
         const {album_id} = this.props.match.params
         const response = await axios.get(`/api/artists/${artist_id}/albums/${album_id}`)
         console.log(response)
         this.setState({album: response.data})
       }catch(error) {
           console.log(error)
       }
       try {
        const {albumt_id} = this.props.match.params
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
                                {album.title}
                                </h1>
                            
                            <audio controls>
                                <source src={album.song.song_url} />                       
                                </audio>
                        
            </div>
        );
    }
}

export default Album;