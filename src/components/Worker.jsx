import React from 'react';
import {auth} from "../firebase"
import {withRouter} from "react-router-dom"
// import { Card } from 'react-bootstrap';
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
    <div className="container-workers">
      <div className="div-lateral"></div>
      <div className="workers-bar">
      <div className= "logo"></div>
      <h1 className="worker-title">Visualiza tus herramientas, añade más y solicita validación.</h1>
      </div>
      <div className = "workers-input">
         {
           user && (
          <Firestore user={user}/>
        )
      }
      </div>
      <div className= "tool-container">
        {/* <div className="adding-tools"> */}
          <div className="developer-container">
        <div className="">
        <div className="card" style={{ width: '21rem' }}>
        <div className="card-header">
        <h>VALIDAR HERRAMIENTAS</h>
     </div>
   </div>
   <div className="card-body">
     <h3 className="card-title">Nombre Solicitante:</h3>
     <select className="float-center" style={{ width: '20rem' }}>
           <option value="0" selected="selected" disabled>Seleccionar</option>
           <option value="1">React JS</option>
           <option value="2">Angular</option>
           <option value="3">Vue JS</option>
           <option value="4">Ionic React</option>
           <option value="5">Ionic Angular</option>
           <option value="6">iOS</option>
           <option value="7">Android</option>
           <option value="8">Xamarin</option>
           <option value="9">Adobe</option>
           <option value="10">Wordpress</option>
         </select>
     <h5 className="card-title">Nivel:</h5>
     <select className="float-center" style={{ width: '20rem' }}>
             <option value="0" selected="selected" disabled>Seleccionar</option>
             <option value="1">Nulo</option>
             <option value="2">Básico</option>
             <option value="3">Regular</option>
             <option value="4">Bueno</option>
             <option value="5">Excelente</option>
         </select>
     <h5 className="card-title">Líder Técnico</h5>
       <input style={{ width: '20rem' }}></input>
     <h5 className="card-title">Fecha Ingreso:</h5>
       <input type="date" style={{ width: '20rem' }}></input>
     <h5 className="card-title">Añadir Comentarios</h5>
       <textarea name="comentarios" rows="5" cols="25"></textarea>
     <h5 className="card-title">Añadir archivos</h5>
      <form method="post" enctype="multipart/form-data">
          <input type="file" name="adjunto" accept=".pdf,.jpg,.png" multiple />
       </form>
     <button>SOLICITAR VALIDACIÓN</button>
   </div>
 </div>
</div> 
    </div>
      </div>
      
    
  );
}

export default withRouter(Worker)


