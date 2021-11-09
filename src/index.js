import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import CountApp from './CountApp';
import Chat from './Chat';
import UpdateProfile from './UpdateProfile'
//import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

window.renderProfileApp = (element_id, user_info) =>{
  ReactDOM.render(
  <React.StrictMode>
    <App user={user_info}/>
  </React.StrictMode>,
  document.getElementById(element_id)
)};

window.renderProfileApp2 = (element_id,url) =>{
  
  ReactDOM.render(
  <React.StrictMode>
    <App2 url={url}/>
  </React.StrictMode>,
  document.getElementById(element_id)
)};

window.countRoop = (element_id) =>{
  ReactDOM.render(
  <React.StrictMode>
    <CountApp />
  </React.StrictMode>,
  document.getElementById(element_id)
  )
};

window.chat = (element_id,endpoints) =>{
  
  ReactDOM.render(
  <React.StrictMode>
    <Chat endpoints={endpoints}/>
  </React.StrictMode>,
  document.getElementById(element_id)
)};

window.renderUpdateProfile = (element_id,endpoints) =>{
  ReactDOM.render(
    <React.StrictMode>
      <UpdateProfile endpoints={endpoints} />
    </React.StrictMode>,
    document.getElementById(element_id)
  )
};

export const PROFILE_ENDPOINTS = {
  update : null,
  load : null
}