// import logo from './logo.svg';
import React, { Component } from "react";
// 引入路由
// import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
// import routes from './router'

import Layouts from "./components/Layout/Layout";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Layouts />;
  }
}

export default App;
