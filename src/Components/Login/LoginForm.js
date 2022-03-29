import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from  "./LoginForm.module.css";
import stylesbtn from  "../Form/Button.module.css";


const LoginForm = () => {
  
  const username = useForm();
  const password = useForm();
  
  const {userLogin, error, loading} = React.useContext(UserContext);
  // const usuario = React.useContext(UserContext);
  
  // console.log(userLogin);


  async function handleSubmit(e) {
    e.preventDefault();

    if(username.validate() && password.validate()){

      userLogin(username.value, password.value);
   
    }


    
  }

  return (
    <section className='animeLeft'>
   

      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="usuario" label="Usuário" id="usuario" type="text" {...username} />
        <Input name="usuario" label="Senha" id="senha" type="password" {...password} />

        {loading ?  <Button disabled>Carregando...</Button> :  <Button >Entrar</Button>}
      
      <Error error={error} />
    
        
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      <Link className={stylesbtn.button} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm