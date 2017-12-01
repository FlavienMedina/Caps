import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar is-dark">
          <div className="navbar-brand">
            <h1 className="navbar-item title is-4">MovieCaps</h1>
          </div>
          <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/gallery">Gallery</Link>
          <Link className="navbar-item" to="/upload">Upload</Link>
          <Link className="navbar-item" to="/profil">Profil</Link>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
