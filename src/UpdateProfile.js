import React, { useEffect, useState } from 'react';

export default function UpdateProfile(props) {

  const endpoints = props.endpoints;
  const [item, setItem] = useState({
    user: {},
    chat_user: {}
  });

  // 使う必要ない？
  // const [user, setUser] = useState({
  //   nickname: null,
  //   age: null
  // })

  /* global $ */

  const handleSubmit = (e) => {

    e.preventDefault();

    // const newUser = Object.assign(new ChatUser("", "", ""), item)

    // newUser.nickname = e.target.nickname.value;
    // newUser.age = e.target.age.value;
    
    const csrf = $('meta[name="csrf-token"]').attr('content');
    
    const data = {

      result : 1,
      chat_user : {
        nickname : e.target.nickname.value,
        age : e.target.age.value
      }      
    }

    // setUser(newUser);
    
    fetch(endpoints.update, {
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
      },
        (error) => {
          alert("エラーが発生しました")
        }
      )
  }
  //現在のアカウント情報を表示
  //現在のチャットユーザー情報を表示
  //フォームを表示
  //フォームから入力

  useEffect(() => {

    fetch(endpoints.load)
      .then(res => res.json())
      .then((result) => {
        console.log(result.chat_user);

        setItem({
          user: result.user,
          chat_user: result.chat_user
        });
      })
  }, [])

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">

            <div className="form-group">
              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label for="nickname">ニックネーム</label>
                  <input type="text" name="nickname" className="form-control" id="nickname" placeholder={(item.chat_user.nickname) ? item.chat_user.nickname : "enter your Nick Name"}></input>
                </div>

                <div className="form-group">
                  <label for="age">年齢</label>
                  <input type="number" name="age" className="form-control" placeholder={(item.chat_user.age) ? item.chat_user.age : "enter your age"}></input>
                </div>
                
                <input type="submit" value="update" className="btn btn-primary"></input>
              </form>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}