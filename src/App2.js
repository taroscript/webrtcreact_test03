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
 
  // const get_profile_url = () =>{
  //   console.log("user.result2",user.result.user);
  //   return "/u/" + user.result.user.id
  // };
  // <div ><a href={get_profile_url()}>氏名：{user.result.user.id} {user.result.user.name}</a></div>          
            
  const weightStyle={
    height:'150px'
  }
  return (
    
          <div className="card p-3" style={weightStyle}　>
            <div >ID：{user.result.user.id}</div> 
            <div >氏名：{user.result.user.name}</div>          
            
            <div >ニックネーム：{user.result.chat_user.nickname}</div>
            
            <div>E-mail：{user.result.user.email}</div>
          </div>
  );
}

export default App2;
