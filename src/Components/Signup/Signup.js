import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [Username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='#'></img>
        <form>
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
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
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
