import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = (light) => {


  const {data, setData}  = useContext(ContextGlobal)

  const favDentist =JSON.parse(localStorage.getItem("favs"))


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados 
        del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        

        {favDentist?.map((favdentist) => {
          return(<Card 
              key={favdentist.id}
              name={favdentist.name}   
              username={favdentist.username} 
              id={favdentist.id}/>
          )
        })}
      </div>
    </>
  );
};

export default Favs;
