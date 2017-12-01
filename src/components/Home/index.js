import React from 'react';
import {Component} from 'react';

class Caps extends Component{
  render(){
    return(
    <div>
      <img src={this.props.picture} />
      <h3>{this.props.name}</h3>
    </div>
  );
  }
}

export default class Film extends Component{
  constructor(){
    super();
    this.state = {
      caps: []
    }
  }
  componentDidMount(){
    this._fetchCaps();
  }
  render() {

        if (this.state.caps.length > 0) {
         let id = Math.floor(Math.random() * (this.state.caps.length - 0) + 0);
          let picture = "screencaps/"+this.state.caps[id].pathcaps;
          const arrayCaps = <Caps picture={picture} name={this.state.caps[id].movie} key={id} />;
      return (
        <div>
        <h1>CAPS PAGE</h1>
        {arrayCaps}
        </div>
      );
    }
    return (
      <div>
      <h1>CAPS PAGE</h1>
      </div>
    );
  }
  _fetchCaps(){
    let data = require("./caps.json");
    console.log(data);
    this.setState({ caps: data });
  }

}
