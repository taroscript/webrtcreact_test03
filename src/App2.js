import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App2(props) {

  const url = props.url

  const [user, setUser] = useState({
    loaded: false,
    result: {}
  });

  /* global $ */

  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(json){
      setUser({
        loaded: true,
        result: json
      });      
    }
  })

  const get_profile_url = () =>{
    return "/u/" + user.result.user.id
  };

  return (
    <div className="user-profile">
      <a href={user.url}>
        <img src={user.icon} alt="test"/>
        <p><a href={get_profile_url()}>#{user.result.user.id} {user.result.user.name}</a></p>
        <p>nickname:{user.result.user.nickname}</p>
        <p>email:{user.result.user.email}</p>
        <p>created_at:{user.result.user.created_at}</p>

      </a>
    </div>
  );
}

export default App2;
