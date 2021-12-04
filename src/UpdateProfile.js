import React, { useEffect, useState } from 'react';

export default function UpdateProfile(props) {

  const endpoints = props.endpoints;
  const [item, setItem] = useState({
    user: {},
    chat_user: {}
  });
  const [isNickname,setIsNicname] = useState(true);
  const [isAge,setIsAge] = useState(true);
  /* global $ */
  console.log("console.log(isNickname);",isNickname);
  const handleSubmit = (e) => {

    e.preventDefault();

    // const newUser = Object.assign(new ChatUser("", "", ""), item)

    // newUser.nickname = e.target.nickname.value;
    // newUser.age = e.target.age.value;
    

    const csrf = $('meta[name="csrf-token"]').attr('content');
    var nickname = e.target.nickname.value;
    var age = e.target.age.value

    if (!nickname) {
      console.log("ニックネームを入力してください！");
      setIsNicname(false);
    }else{
      console.log("ニックネー");
      setIsNicname(true);
    }
    if (!age) {
      console.log("ニックネームを入力してください！");
      setIsAge(false);
      return;
    }else{
      setIsAge(true);
    }

    if(!(isNickname||isAge)){ 
      console.log("論理積の否定");
    return; }

    const data = {

      result: 1,
      chat_user: {
        nickname: nickname,
        age: age
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
        console.log("result", result);
        window.location.reload();
      },
        (error) => {
          alert("ニックネームもしくは年齢が登録されていません", error);
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
                <div>{(!isNickname) ? <div class="alert alert-danger" role="alert">ニックネームを入力してください！</div> : <br></br>}</div>
                  <label for="nickname">ニックネーム</label>
                  <input type="text" name="nickname" className="form-control" id="nickname" placeholder={(item.chat_user) ? item.chat_user.nickname : "enter your Nick Name"}></input>
                </div>

                <div className="form-group">
                <div>{(!isAge) ? <div class="alert alert-danger" role="alert">年齢を入力してください！</div> : <br></br>}</div>
                  <label for="age">年齢</label>
                  <input type="number" name="age" className="form-control" placeholder={(item.chat_user) ? item.chat_user.age : "enter your age"}></input>
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