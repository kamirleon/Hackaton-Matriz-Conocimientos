import React from 'react';
import{Link, NavLink} from "react-router-dom"
import { auth } from '../firebase';
import {withRouter} from "react-router-dom"

const Navbar = (props) => {

  const cerrarSesion = () => {
    auth.signOut()
      .then(() => {
          props.history.push("/login")
      })
  }
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"></Link>
        <div>
        <div className="d-flex">
        <NavLink className="btn btn-primary mr-3 active" to="/" exact>
            Inicio
        </NavLink>

          {
          props.firebaseUser !== null ? (
          <NavLink className="btn btn-primary float-end  mr-3 "to="/worker">
            worker
          </NavLink>
          ) 
            :  null
          }

          <NavLink className="btn btn-primary float-end  mr-3 "to="/skills-center">
                 Skills Center
          </NavLink>

          {
          props.firebaseUser !== null ? (
            <button 
             className="btn btn-dark"
             onClick= {() => cerrarSesion()}
             >
             Cerrar Sesion
             </button>
            ) : (
          <NavLink className="btn btn-primary float-end  mr-3 "to="/login">
             Login
          </NavLink>
            )
          }      
        </div>
      </div>
    </div>
  );
}
export default withRouter(Navbar);
