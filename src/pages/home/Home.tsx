
// Interface: tipagem (regras)
interface homeProps{
  titulo: string;
  texto: string //String porque não estou fazendo cálculo
}
//Props: são as propriedades 
function Home(props: homeProps) { 
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  )
}

export default Home