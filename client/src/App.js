import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar'
import ArtistList from './components/ArtistList'
import Artist from './components/Artist'
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
      try {
        const response = await axios.get('/api/artists_id/albums')
        this.setState({songs: response.data})
      } catch(error){
          console.log(error)
      }
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
          </Switch>
          
      </div>
      </Router>
    );
  }
}
export default App;
