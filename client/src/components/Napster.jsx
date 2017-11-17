import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Blurb = styled.div`
background-color: grey;
margin: 100px;
`
const Name = styled.div`
text-align:center;
`

class Napster extends Component {

    state = {
        artist: {
            bios:[{}],
            albumGroups: {}
        },
        albums: [],
        redirectToArtist: false
    }

    async componentWillMount(){
    //   const artistWithHyphens = this.props.artist.split(" ").join("-")
    //    const response = await axios.get(`http://api.napster.com/v2.2/artists/${artistWithHyphens}?apikey=${process.env.REACT_APP_SECRET}&limit=1`)
    //    console.log(response.data)
    //    this.setState({artist: response.data.artists[0]})
    // <h1>{this.state.artist.name}</h1>
    // {this.state.artist.blurbs}
    // {this.state.artist.bios[0].bio}<br/>
    // {this.state.artist.albumGroups.main}
   }

   async componentWillReceiveProps(nextProps){
       if (nextProps.artist !== this.props.artist){
        const artistWithHyphens = nextProps.artist.split(" ").join("-").toLowerCase()
        const response = await axios.get(`http://api.napster.com/v2.2/artists/${artistWithHyphens}?apikey=${process.env.REACT_APP_SECRET}&limit=1`)
        console.log(response.data)
        this.setState({artist: response.data.artists[0]})
       }
       if (nextProps.artist !== this.props.album){
        const response = await axios.get(`http://api.napster.com/v2.2/albums/Alb.336037856?apikey=${process.env.REACT_APP_SECRET}&limit=1`)
        console.log(response.data)
        this.setState({album: response.data.albums[0]})
       }
   }

    render() {
        return (
            <div>
                <Name><h1>{this.state.artist.name}</h1></Name>
                <Blurb>{this.state.artist.blurbs}</Blurb>
            </div>
        );
    }
}

export default Napster;