import React, { useState } from 'react'


export const esMayorDeEdad = (age) => {
    if(age<0) {
        console.log('es negativo')
        return null 
    } else if (age>0 && age<18) {
        console.log('es menor')
        return  false
    } else {
        console.log('es mayor')
        return true
    }
}

const MiComponente = () => {
    const [age,setAge] = useState('');
    
    const ageHandler = (e) => {
        setAge(e.target.value);
    }

    const calcularEdad = () => {
        esMayorDeEdad(age);
    }

  return (
    <div>
        <form>
            <label>Ingrese su edad:</label>
            <input 
                type='number'
                value={age}
                onChange={ageHandler}/>
        </form>
        <button onClick={calcularEdad}>Enviar</button>
    </div>
  )
}

export default MiComponente