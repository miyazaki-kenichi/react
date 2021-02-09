import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {props.name}</h1>
//   }
// }

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )
}

// const element = <Welcome name="sara" />

ReactDOM.render(
  <App />,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
