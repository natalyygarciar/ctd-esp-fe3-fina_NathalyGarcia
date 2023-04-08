import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = (light) => {

  const [dentist, setDentist] = useState([])

  const getDentist = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json()
    })
    setDentist(data)
    }

    useEffect(() => {
      getDentist()
    }, [])

  

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}

        {dentist.map((dentist) => {
          return(<Card 
              key={dentist.id}
              name={dentist.name}   
              username={dentist.username} 
              id={dentist.id}/>
          )
        })}




      </div>
    </main>
  )
}

export default Home