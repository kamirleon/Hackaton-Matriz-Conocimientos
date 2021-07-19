import React from 'react';
import {auth} from "../firebase"
import {withRouter} from "react-router-dom"
import Firestore from './Firestore';

const Worker = (props) => {
  const[user, setUser] = React.useState(null)

    React.useEffect(() => {
            if(auth.currentUser){
              console.log("existe un usuario")
              setUser(auth.currentUser)
            } else {
              console.log("no existe un usuario")
              props.history.push("/login")
            }
    }, [props.history])
  return (
    <div>
    <h2>Ruta proteguida </h2>
      {
        user && (
          <Firestore user={user}/>
        )
      }
    </div>
  );
}

export default withRouter(Worker)


