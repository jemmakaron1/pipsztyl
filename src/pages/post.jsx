import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase-config"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase-config"
import AuthContext from "../AuthContext"
import { useContext } from "react"

function Post() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log(isAuth)
  return <div>Test</div>
}

export default Post
