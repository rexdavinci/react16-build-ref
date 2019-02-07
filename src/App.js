import React from "react";
import Linh from './LinhComponent'
import Valentino from './ValentinoComponent'
import style from './main.css' 
// option is to use import './main.css' then remove options from webpack.config.js
   


const App = () => {
  return ( 
    <div>
      <h3 className = {style.deadCoder}> Found these resources useful when creating react 16 with Babel 7 and Webpack 4 from scratch</h3>
      <a className = {style.deadCoderLink} href= "https://stackoverflow.com/questions/49212843/css-classname-not-reflecting-when-using-css-modules-in-my-react-component"> deadcoder0904's Answer</a>
      <Linh />
      <Valentino />
    </div>
  );
};

export default App;
