import React from "react";
import ReactDOM from "react-dom";
import App from './App'



class Welcome extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
      )
  }
}

ReactDOM.render(
    <Welcome /> , document.getElementById('app')
  );
