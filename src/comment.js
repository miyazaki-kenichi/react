import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
      </div>
    </div>
  )
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src="{props.user.avatarUrl}"
      alt="{props.user.name}"
    />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

const user = {
  name: 'aaa',
  avatarUrl: "http://...",
}

ReactDOM.render(
  <Comment user={user} />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
