import React, {useState, useEffect} from 'react';

export default function ChatForm(props){

  const [massages,setMessages] = useState([]);
  const endpoint = props.endpoints.messageurl

  // ajaxで通信して履歴を取得
  // Fetch APIの実行
  fetch(endpoint, {
    headers: {
      'Content-Type': 'pplication/json; charset=utf-8'
    },
    body: JSON.stringify({"hoge": "fuga"})
  })// 通信が成功したとき
  .then(function(response) {
    // setMessages = 
    return response.json();
  })
  .then(function(json) {
    console.log(json);
  })// 通信が失敗したとき
  .catch(function(error) {
    console.error('Error:', error);
  });


  // ポーリングで更新されたら取得
  // mapでリストを展開
  // endpointを用意

  return(
    <>
    <div>hello world</div>
    </>
  );
}