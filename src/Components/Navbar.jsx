import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = (light) => {

  const changeMode = () => {
    if (light.theme === "ligth"){
      light.setTheme("dark");
    }else{
      light.setTheme("ligth")
    }
   }

  return (
    <nav  >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/"> Home </Link>
      <Link to="/favorites"> Favorites </Link>
      <Link to="/contact"> Contact us </Link>
     
     
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => changeMode()}>Change theme</button>

    </nav>
  )
}

export default Navbar