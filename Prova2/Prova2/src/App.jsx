import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(true)
  const [count, setCount] = useState(0)
  const [senai, setSenai] = useState("") 
  

  if(senai == "SENAI_") {
    var resultado='SENAI!!!'
} {/* Se escrever SENAI_ vai aparecer SENAI!!!  */}



  return (
    <>
    
        <div className="questao-b">  
        <button onClick={() => setCount((count) => count + 1)}> +1</button></div>{/* Vai adicionar 1 numero  */}
        <div className="questao-b">
        <button onClick={() => setCount((count) => count - 1)}> -1 </button></div>{/* Vai remover 1 numero  */}

        <div className='questao-b'> Numero: {count}</div> {/* Vai mostrar os numeros  */}

        <div className="questao-b">
        <button onClick={() => setCount((count) => count + 10)}> +10 </button></div> {/* Vai adicionar 10 numero  */}
        <div className="questao-b">
        <button onClick={() => setCount((count) => count - 10)}> -10 </button></div>{/* Vai remover 10 numero  */}


        <div>
        <input type="text" onChange={(e) => setSenai(e.target.value)} />{/* Para escrever */}
        <h1>{resultado}</h1> {/* Para aparecer o resultado SENAI!!! */}
        </div>


        <button onClick={() => setTheme(theme ? false : true)}>Trocar</button>{/* Um botão para trocar a cor do fundo */}
        {theme ?

        <div className='branco'></div>

        : 
        <div className='preto'></div>

        } {/*  Trocar de branco para preto */}

        
     
    </>
  )
}

export default App
