import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
}

// const element = (
//   <div tabIndex="0">
//     <h1>Hello, {formatName(user)}!</h1>
//     {/* <img src="{user.avatarUrl}" /> */}
//   </div>
// )
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)

function greeting(user) {
  if (user) {
    return element
  }
  return <h1>Hello, Stranger.</h1>
}

// const title = response.potentiallyMaliciousInput;
// const element2 = <h1>{title}</h1>

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
  greeting(user),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
