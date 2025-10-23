import { useEffect, useState } from "react"

// Ciclo de vida de um componente: montagem / atualização / desmontagem
function Tarefa() {

  const[completed, setCompleted] = useState(false);
  const[tarefa, setTarefa] = useState('');

  // useEffect é usado quando uma coisa acontecer, outra coisa também vai acontecer
  useEffect(() => {
    if(completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    } else {
      setTarefa('');
    }
  }, [completed])

  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(!completed)}>Concluir a tarefa</button>
    </div>
  )
}

export default Tarefa