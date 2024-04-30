import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(`O usuario ${userName} logou com sucesso`)

    navigate('/');
  }
 
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}
