import React, { useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [userName, setUserName]   = useState()
  const [userEmail, setUserEmail] = useState()
  const [message,setMessage]    = useState()

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onChangeUserMail = (event) => {
    setUserEmail(event.target.value);
  };





  
  const handleSubmit = (event) => {
    event.preventDefault();

    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(userEmail)) && 
       (userName.length <= 5 || userName[0] === " ")) {
        setMessage ("Por favor verifique su información nuevamente")
       }else {
       setMessage ("Gracias " + userName + ", te contactaremos cuanto antes vía mail")
    }
    return setMessage
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>
          Nombre completo:
          <input
              type="text"
              name = "name"
              value={userName}
              onChange={(event)=>onChangeUserMail(event.target.value)}
            />
        </label>

        <label>
          Email:
          <input
              type="text"
              value={userEmail}
              onChange={onChangeUserMail}
            />
        </label>

        <input type="submit" value="SEND" />


      </form>
      
      <h5> {message} </h5>


    </div>
  );
};

export default Form;
