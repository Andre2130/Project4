import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar'
import ArtistList from './components/ArtistList'
import Artist from './components/Artist'
import Album from './components/Album'
import EditAlbum from './components/EditAlbum'
import AlbumForm from './components/AlbumForm'

class App extends Component {
  state = {
    artists: [],
    songs: []
  }

  async componentWillMount () {
      try {
        const response = await axios.get('/api/artists')
        this.setState({artists: response.data})
      } catch(error){
          console.log(error)
      }
      // try {
      //   const response = await axios.get('/api/artists_id/albums')
      //   this.setState({songs: response.data})
      // } catch(error){
      //     console.log(error)
      // }
  }
  render() {
    const ArtistListComponent = () => (<ArtistList artists={this.state.artists}/>)
    return (
      <Router>
      <div className="App">
          <NavBar />
          <Switch>
              <Route exact path='/' render={ArtistListComponent} />
              <Route exact path='/artists/:artist_id' component={Artist}/>
              <Route exact path='/artists/:artist_id/albums/:album_id' component={Album}/>
              <Route exact path="/artists/:artist_id/albums/:album_id/edit" component={EditAlbum} />
              <Route exact path="/artists/:artist_id/albums" component={AlbumForm}/>
          </Switch>
          
      </div>
      </Router>
    );
  }
}
export default App;
