import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './component/menu.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    )
  }
}

export default App