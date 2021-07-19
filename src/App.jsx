import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Inicio from './components/Inicio';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SkillsCenter from './components/SkillsCenter';
import Worker from './components/Worker';
import {auth} from "./firebase"


const App = () => {

  const[firebaseUser, setFirebaseUser] = React.useState(false)
  React.useEffect(() => {
      auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
          setFirebaseUser(user)
        } else {
          setFirebaseUser(null)
        }
      })
  }, [])

  return firebaseUser !==false ? (
    <Router>
      <div className="container mt-5">
       <Navbar firebaseUser = {firebaseUser}/>
       <Switch>
       <Route path="/" exact>
           <Inicio />
         </Route>

         <Route path="/login">
           <Login />
         </Route>

         <Route path="/worker">
           <Worker />
         </Route>

         <Route path="/skills-center">
          <SkillsCenter />
         </Route>

       </Switch>
      </div>
    </Router>
   
  ) : (
    <p>Cargando...</p>
  )
}

export default App;
