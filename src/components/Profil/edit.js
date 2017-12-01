import React from 'react';
import {Component} from 'react';

class Edit extends Component{

  render(){

    return(
    <div>
    <div className="field">
      <label className="label">Firstname</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div className="field">
      <label className="label">Lastname</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div className="field">
      <label className="label">Username</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <input className="input" type="email" placeholder="Email input" />
      </div>
    </div>

    <div className="field">
      <label className="label">birthday</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div className="field">
      <label className="label">Password</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
      <div className="control">
        <button className="button is-text">Sign In</button>
      </div>
    </div>

    </div>
  );
  }
}


export default Edit;
