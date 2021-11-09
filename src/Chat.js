import React, {useEffect, useState} from 'react';
import ChatList from './components/ChatList';
import ChatForm from './components/ChatForm';


// 更新
function updateTexts(callback, data, endpoint){

  /* global $ */
  const csrf = $('meta[name="csrf-token"]').attr('content');

  fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'X-CSRF-TOKEN': csrf,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log("result",result);
      if(result.result === 1){
        callback([...result.texts])
      }      
    },
      (error) => {
        alert("エラーが発生しました")
      }
    )
}

// 読み込み
function loadTexts(callback, endpoint){
  fetch(endpoint)
    .then(res => res.json())
    .then(function (json) {
      console.log(json);
      callback(json.texts);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

export default function Chat(props){
  
  const [texts, setTexts] = useState([]);
  const load_endpoint = props.endpoints.load
  const update_endpoint = props.endpoints.update
  const handleAdd = (data) =>{
    console.log("handleAdd data",data);
    updateTexts((texts)=>{setTexts([...texts])},data,update_endpoint);
  }

  useEffect(() => {
    loadTexts((texts)=>{setTexts([...texts])},load_endpoint);
  }, []);
  
  return (
    <>
    <ChatList texts={texts}/>
    <ChatForm handleAdd={handleAdd}/>

    </>
  );
}
