
import './App.css';
import {useParams} from 'react-router-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

function Saludo(){
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
       <Route exact path='/saludo/:nombre'>
       <Link to={`/`}>inicio</Link>
        <Saludo />
        </Route>
      <Route exact path='/'>
        <h2>Hola!</h2>
        <form>
        <input type="text" onChange={cambiarInput} value={input}></input>
        <Link to={`/saludo/${input}`}>Saludo</Link>
        </form>
   
        </Route>
</BrowserRouter>

)
}
export default App;

