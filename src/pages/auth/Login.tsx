import './Login.css';
import autentication from '../../features/auth/authentication';
import kioscosSlise from '../../features/kiosco/kioscosSlice';
import { useState } from 'react';

export default function Login() {
  const [what, setWhat] = useState(false);

  async function handleLoginClick() {
    setWhat(await autentication('emaeroles', 'milas90E'));
  }

  async function handleGetClick() {
    const userId = localStorage.getItem('userId');
    if (userId != null) console.log(kioscosSlise(userId));
  }

  return (
    <div className='loginCard'>
      <p>Username</p>
      <input type='text'></input>
      <p>Password</p>
      <input type='password'></input>
      <button className='login-btn' onClick={handleLoginClick}>
        Login
      </button>
      <div>
        <p>{String(what)}</p>
      </div>
      <button onClick={handleGetClick}>Get</button>
    </div>
  );
}
