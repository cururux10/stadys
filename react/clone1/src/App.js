import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" name="Home" element={<Main />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App