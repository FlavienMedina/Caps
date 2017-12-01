import React from 'react';
import {Component} from 'react';

class Caps extends Component{
  render(){
    return(
    <div className="caps">
      <img src={this.props.picture} />
      <h3>{this.props.name}</h3>
    </div>
  );
  }
}

export default class Gallery extends Component{
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
        let id = 0;
        const arrayCaps = this.state.caps.map(c => {
          let picture = "screencaps/"+c.pathcaps;
        return <Caps picture={picture} name={c.movie} key={id++} />;
      });
      // console.log(arrayCaps);
      return (
        <div className="galleryCaps">
        {arrayCaps}
        </div>
      );
  }
  _fetchCaps(){
    let data = require("./caps.json");
    console.log(data);
    this.setState({ caps: data });
  }

}
