import React from 'react';
import {Component} from 'react';

class Profil extends Component{

  render(){
    let user = {
      avatar : "dledlelded",
      firstname : "Jeremy",
      lastname : "Noh",
      username : "DjeBlack",
      birthday :"08-09-1997" ,
      email : "jeremy.nohile@gmail.com"
    };
    return(
    <div className="profile">
      <div className="sidebar">
        <img src="screencaps/caps-003-back-to-the-future-II.jpg"/>
        <p> {user.firstname} {user.lastname} - {user.username}</p>
        <p> {user.birthday}</p><p> {user.email}</p>
        <a href="profil" className="button is-primary is-focused">Mes Favoris</a>
        <a className="button">Mes Likes</a>
        <a className="button is-warning">Edit Profile</a>
        <a href="/logout" className="button is-danger">Logout</a>
    </div>
    <div className="mainProfile"></div>
    </div>
  );
  }
}


export default Profil;
