import React, { useState } from 'react';

function App2(props) {

  const url = props.url
  
  const [user, setUser] = useState({
    loaded: false,
    result: {}
  });

  if(user.loaded == false){
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
        console.log("json",user.loaded);
        console.log("user.result",user.result.user);
      }
    });

    return <div className="user-profile">loading</div>
  }
 
  const get_profile_url = () =>{
    console.log("user.result2",user.result.user);
    return "/u/" + user.result.user.id
  };

  return (
    
    <div className="user-profile">
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div className="card p-4">
            <div className="d-flex flex-row justify-content-center align-items-center gap-2"><a href={get_profile_url()}>#{user.result.user.id} {user.result.user.name}</a></div>          
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">nickname:{user.result.user.name}</div>
            <div>email:{user.result.user.email}</div>
            <div>created_at:{user.result.user.created_at}</div>
          </div>
        </div>
        
    </div>
  );
}

export default App2;
