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
    <div>

    <figure className="image is-128x128">
      <img src="{user.avatar}" />
    </figure>
       <p> firstname :  {user.firstname}</p>
       <p> lastName : {user.lastname}</p>
       <p> username : {user.username}</p>
       <p> birthday : {user.birthday}</p>
       <p> email : {user.email}</p>
      <a className="button is-primary is-outlined">Edit</a>
    </div>
  );
  }
}


export default Profil;
