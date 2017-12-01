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
    <div>

    <figure className="image is-128x128">
      <img src="{user.avatar}" />
    </figure>
       <p> firstname :  {user.firstname}</p>
       <p> lastName : {user.lastname}</p>
       <p> username : {user.username}</p>
       <p> birthday : {user.birthday}</p>
       <p> email : {user.email}</p>
       <Link className="button is-primary is-outlined" to="/profil/edit">Edit</Link>
    </div>
  );
  }
}


export default Profil;
