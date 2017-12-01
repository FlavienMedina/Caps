import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom'

class Profil extends Component{
  Editer(){
    console.log("teste");

  }
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
        <Link className="button is-primary is-focused" to="/profil/favoris">Mes Favoris</Link>
        <Link className="button" to="/profil/likes">Mes Likes</Link>
        <Link className="button is-warning" to="/profil/edit">Edit</Link>
        <Link className="button is-danger" to="/profil/logout">Logout</Link>
    </div>
    <div className="mainProfile"></div>
    </div>
  );
  }
}


export default Profil;
