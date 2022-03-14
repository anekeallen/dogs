import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");


  async function handleSubmit(e) {
    e.preventDefault();

    let response = await fetch('http://dogsapi.test/json/jwt-auth/v1/token',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
   
        password,
      })
    });
 
    let response_json = await response.json();
 
    setToken(response_json.token)
 
    console.log(response_json);

    
  }

  return (
    <section>
   

      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input value={username} type="text" onChange={({target})=> setUsername(target.value)} />
        <input value={password} type="password" onChange={({target})=> setPassword(target.value)} />

        <button>Entrar</button>
        
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm