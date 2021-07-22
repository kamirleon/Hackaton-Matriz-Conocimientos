import React from 'react';
import {auth, db} from "../firebase"
import {withRouter} from "react-router-dom"

const Login = (props) => {

  const[email, setEmail] = React.useState("prueba@prueba.com")
  const[pass, setPass] = React.useState("")
  const[error, setError] = React.useState(null)
  const[esRegistro, setEsRegistro] = React.useState(true)

  const procesarDatos = e => {
    e.preventDefault()

    if (!email.trim()) {
      // console.log("ingrese email")
      setError("ingrese email")
      return
    }

    if (!pass.trim()) {
      // console.log("ingrese password")
      setError("ingrese password")
      return 
    }

    if(pass.length<6){
      // console.log("ingrese password igual a 6 caracteres")
      setError("ingrese password de 6 caracteres")
      return 
    }
    setError(null)
    console.log("Pasando todas las validaciones")

    if(esRegistro){
      registrar()
    } else {
      yaRegistrado()
    }
  }

  const yaRegistrado = React.useCallback(async () => {
    try{
      const res = await auth.signInWithEmailAndPassword(email, pass)
      console.log(res.user)
      setEmail("")
      setPass("")
      setError(null)
      props.history.push("/worker")
    } 
    catch(error){
      console.log(error)
      if(error.code=== "auth/invalid-email"){
        setError("Email no valido")
      }
      if(error.code=== "auth/user-not-found"){
        setError("Email no registrado")
      }
      if(error.code=== "auth/wrong-password"){
        setError("Contraseña Incorrecta ")
      }
    }
  }, [email, pass, props.history])

  const registrar = React.useCallback(async () => {

    try{
      const res = await auth.createUserWithEmailAndPassword(email, pass)
      console.log(res.user)
      await db.collection("usuario").doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid
      })
      await db.collection(res.user.email).add({
        name: "Tarea de Ejemplo",
        fecha: Date.now()
      })
      setEmail("")
      setPass("")
      setError(null)
      props.history.push("/worker")
    } catch(error){
      console.log(error)
      if(error.code === "auth/invalid-email"){
        setError("email no valido")
      }
      if(error.code === "auth/email-already-in-use"){
        setError("email ya utilizado")
      }
    }
  }, [email, pass, props.history])



  return (
    <div className = "login-container">
      <h1  className="text-center text-bienvenido">Bienvenido</h1>
      <h2 className="text-center text-match" >Match de Skills</h2>
      <h3 className="text-center">
       {
         esRegistro ?  "Registro Nuevos Usuarios" : "Usuarios ya registrados"
       }
      </h3>
   
      <div className="row justify-content-center login-box">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
        <form onSubmit={procesarDatos}> 
        {
          error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )
        }
          <input 
          type="email" 
          className="form-control mb-2 input-email"
          placeholder="Ingrese su email"
          onChange={ e => setEmail(e.target.value)}
          value={email}
          />

          <input 
          type="password" 
          className="form-control mb-2 input-password"
          placeholder="Crear un password"
          onChange={ e => setPass(e.target.value)}
          value={pass}
          />
      
          <button className="btn btn-dark btn-lg btn-block btn-acceder"
                type= "submit"
          >
          {
            esRegistro ? "Crear Una Cuenta": "Acceder"
          }
          </button>

          <button 
          className="btn btn-info btn-lg btn-block btn-regisrado"
          onClick = {() => setEsRegistro (!esRegistro)}
          type="button"
          >
          {
           esRegistro ? "Usuario Registrado" : "No tengo cuenta"
         }
          </button>
         </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login)
