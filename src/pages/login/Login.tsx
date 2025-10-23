import { useState } from "react"
import Home from "../home/Home";

function Login() {

  const[isLogged, setIsLogged] = useState(false);

  return (
    <>
      {
        isLogged? (
          <Home 
            titulo="Componente Home"
            texto="Bem-vindo de Volta!"
          />
        ) : (
          <div>
            <h2>Componente Login</h2>
          </div>
        )}
        <button onClick={() => setIsLogged(!isLogged)}>{isLogged ? "Sair" : "Entrar"}</button>
    </>
  )
}

export default Login