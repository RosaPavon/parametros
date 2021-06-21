
import './App.css';
import {useParams} from 'react-router-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useState } from 'react';


function Saludo(){//esto es un componente hijo, sino no sirve
  let params = useParams();
  let nombre = params.nombre;
  
  return (
  <p>Hola! {nombre}</p>
  )
}


function App(){
  const [input, setInput]=useState("")

  function cambiarInput(e){
    setInput(e.target.value)
    
  }
 
return (
<BrowserRouter>
     
      <Route exact path='/'>
        <h2>Hola!</h2>
        <form>
        <input type="text" onChange={cambiarInput} value={input}></input>
        <div>
        <Link to={`/${input}`}>Saludo</Link>
        </div>
        </form>   
        </Route>
        <Route exact path='/:nombre'>
        <Link to={`/`}>inicio</Link>
        <Saludo />
        </Route>
</BrowserRouter>

)
}
export default App;

