import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let login = (e) => {
    e.preventDefault();
    if (name === password) {
      prompt("Sucessfully logged in...")
      navigate("/dashboard");
    } else {
      alert(" Invalid Username / password");
    }
  };

  return (
    <div className='container'>
      <h1>Login Application</h1>
      <form>
        <div className='mb-3'>
          <label for="userName">User Name</label>
          <input type="text" className="form-control" id="userName" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={login}>
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login