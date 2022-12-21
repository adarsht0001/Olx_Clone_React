import React, { useState,useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { getFirestore, collection ,addDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Logo from '../../olx-logo.png';
import {FirebaseContext}  from '../../context/firebaseContext';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const [Username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const auth=getAuth(firebase)
  const db = getFirestore(firebase)
  const submitForm=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then((result)=>{
      updateProfile(result.user,{displayName:Username}).then(()=>{
        addDoc(collection(db,'users'),{
          id:result.user.uid,
          username:Username,
          phone:phone
        }).then(()=>{
          navigate('/login')
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='#'></img>
        <form onSubmit={submitForm}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/'>Login</a>
      </div>
    </div>
  );
}
