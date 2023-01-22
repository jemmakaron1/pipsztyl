import { useState } from "react"
import "./App.css"
import React from "react"
import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom"
import Post from "./pages/post"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase-config"
import AuthContext from "./AuthContext"
import { useContext } from "react"

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
