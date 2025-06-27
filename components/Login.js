import React, { useState } from 'react'

const Login = () => {
    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");
  return (
    <>
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required onChange={(e) => setUserName(e.target.value)}/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
            <button disabled={userName.length === 0 || password.length === 0}>Submit</button>
        </form>
    </>
  )
}

export default Login