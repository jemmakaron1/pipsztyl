import React from "react"
import { useState } from "react"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase-config"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import AuthContext from "../AuthContext"
import { useContext } from "react"

function Home() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  let navigate = useNavigate()
  const location = useLocation()

  console.log(isAuth)

  useEffect(() => {
    if (isAuth) {
      navigate("/post")
    }
  }, [])

  async function signIn() {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true)
      navigate("/post")
    })
  }

  return (
    <div>
      <h1>Log in with Google</h1>
      <button onClick={signIn}>Log in</button>
    </div>
  )
}

export default Home
