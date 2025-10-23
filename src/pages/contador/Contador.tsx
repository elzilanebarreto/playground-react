import { useState } from "react";

function Contador() {

  // Estado 
  const[contador, setContador] = useState(0);
  // const[contador, setContador] = useState<number>(0);  // Tipado explicitamente
  
  function somar(){
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Componente Contador</h1>
      <p>O valor do contador é: {contador}</p>
      <button onClick={somar}>Adicionar + 1</button>
    </div>
  )
}

export default Contador