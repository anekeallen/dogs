import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {

  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback (async function() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");

    
    
  }, [navigate]);

  React.useEffect(()=> {

    async function autoLogin() {

      const token = window.localStorage.getItem("token");

      if(token){

        try {
          setError(null);
          setLoading(true);
          const {url, options} = TOKEN_VALIDATE_POST(token);
          const response =  await fetch(url, options);
          // console.log(response);

        if (!response.ok) throw new Error("Token inválido");
        
        await getUser(token);
        } catch (error) {
          // console.log(error);
        } finally {
          setLoading(false);
        }
        
      }else{
       
        userLogout();
      }
      
    }

    autoLogin();  

    
   
  }, [userLogout]);
 
  async function getUser(token) {
    const {url, options} = USER_GET(token);
    let response = await fetch(url, options);
    let response_json = await response.json();

    setData(response_json);
    setLogin(true)

    console.log(response_json);
  }

  async function userLogin(username, password) {

    try {

      setError(null);
      setLoading(true);
      const {url, options} = TOKEN_POST({username, password});

      const tokenRes = await fetch(url, options);

      if(!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);

      const {token} = await tokenRes.json();

      window.localStorage.setItem('token', token);
  
      await getUser(token);

      navigate("/conta");

    




    } catch (error) {
      // console.log(error);

      setError(error.message);
      setLogin(false);
    } finally{
      setLoading(false);
    }
    
  }



  return (
    <UserContext.Provider value={{userLogin, userLogout, data, error, login, loading}}>
      {children}
    </UserContext.Provider>
  )
}

