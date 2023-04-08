import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'




//Este componente debera ser estilado como "dark" o "light" dependiendo 
//del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer 
  //un fetch a un user en especifico
  
  const [forSingleDentist, setForSingleDentist] = useState()
  const params = useParams()
  const {data, setData}  = useContext(ContextGlobal)


  const getForSingleDentist = async() => {
     data = await fetch('https://jsonplaceholder.typicode.com/users/${params.id}')
    .then((response) => {
      return response.json()
    })
    setForSingleDentist(data)
    }

   useEffect(() => {
      getForSingleDentist()
    }, [forSingleDentist])

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un 
          user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por 
          cada user en especifico */}

      <table className='table'>
      <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{forSingleDentist.name}</td>
                    <td>{forSingleDentist.email}</td>
                    <td>{forSingleDentist.phone}</td>
                    <td>{forSingleDentist.website}</td>
                </tr>
            </tbody>
      </table>
    
    
    
    </>
  )
}

export default Detail