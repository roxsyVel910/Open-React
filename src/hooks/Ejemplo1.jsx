/*Ejemplo de uso de hook useState
*
*Crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y ademas poder modificarlo

*/
import React, { useState} from 'react'

const Ejemplo1 = () => {
    // Valor inicial para un contador
    const valorInicial = 0;
    // Valor inical para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'marin.lj@gmail.com'
    }

    /* Queremos que el  valorinical y personainicial sea parte del estado del componente para asi poder gestionar su cambio y que se vea reflejado ebn la vista del componente
    const [nombreVariable, funcionparaCambiar] = usestate(valorinicial) */


   const [contador, setContador] = useState(valorInicial)
   const [persona, setPersona] = useState(personaInicial)
   //funcion para actualizar el estado privado que contiene el contador

   function incrementarContador(){

    setContador(contador + 1);

   }
   function actualizarPersona(){
    setPersona(
       { 
        nombre: 'pepe',
        email: 'pepe@gmail.com'
    }
    )
   }


  return (
    <div>
    <h1>Ejemplo de Hooks</h1>
    <h2>CONTADOR: {contador}</h2>
    <h2>DATOS DE LA PERSONA: </h2>
    <h3>NOMBRE: {persona.nombre}</h3>
    <h4>EMAIL: {persona.email}</h4>
    <div>
        <button onClick = {incrementarContador}>Incrementar Contador</button>
        <button onClick = {actualizarPersona}>Incrementar Persona</button>
    </div>
      
    </div>
  )
}

export default Ejemplo1
