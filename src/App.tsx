import { useState } from 'react'

import './styles/main.css'
import './styles/reset.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Post from './pages/Post';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/post' element={<Post />}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
