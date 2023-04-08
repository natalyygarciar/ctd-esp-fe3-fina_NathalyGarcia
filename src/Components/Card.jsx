import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

 const {data, setData}  = useContext(ContextGlobal)

 useEffect(() => {
      localStorage.setItem("data", JSON.stringify(data))
    }, [data]
    )

  const addFav = (nameDentist, usernameDentist, idDentist)=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    
   if(data.filter(infoDentist => infoDentist.id === idDentist).lenght > 0){
      setData((previousState) => previousState.filter(infoDentist => 
        infoDentist.id !== idDentist))
      return 
    } else{
      setData((previousState) => 
      previousState.lenght === 0 ? [{
        name:nameDentist,
        username: usernameDentist,
        id: idDentist
     }]:
      [...previousState, {
        name:nameDentist,
        username: usernameDentist,
        id: idDentist
    }]
    )
    }
    
    
  }

  return (

  
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link
            hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card 
            en el localStorage */}

            <Link to ={'detail/' + id}>

              <img src={ "..\public\images\doctor.jpg"} alt={name}></img>

              <h2>{name}</h2>

              <h3>{username}</h3>

              <h4>{id}</h4>

              <button onClick={addFav} className="favButton"> <img src='../../images/fav2.png' alt='FavButton'/></button>
            
            </Link>
    </div>
    
  
  );
};

export default Card;
