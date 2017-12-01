import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>CAPS</h1>
        </header>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/profil">Profil</Link></li>
          <li><Link to="/auth">signIn</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
