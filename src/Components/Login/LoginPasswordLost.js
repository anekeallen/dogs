import React from 'react'
import { Link } from 'react-router-dom'
import { PASSWORD_LOST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Form/Button'
import Input from '../Form/Input'
import Error from '../Helper/Error'

const LoginPasswordLost = () => {

  const login = useForm();

  const { data, error, loading, request } = useFetch();

  // console.log(aaa);

  async function handleSubmit(event) {
    event.preventDefault();
    // window.alert("oiiii");

    if (login.validate()) {


      const { url, options } = PASSWORD_LOST(
        {
          login: login.value,
          url: window.location.href.replace('perdeu', 'resetar')
        });
      const { json } = await request(url, options);


    }
  }


  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (<p>{data}</p>) :

        (<form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login"  {...login} />
          {loading ? <Button disabled>Enviando... </Button> : <Button>Enviar email </Button>}



        </form>)

      }

      <Error error={error}></Error>
      <Link to="/login/resetar">Resetar</Link>
    </section>
  )
}

export default LoginPasswordLost