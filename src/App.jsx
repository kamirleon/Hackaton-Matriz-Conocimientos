import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import EverisChampion from './components/EverisChampion';
import Inicio from './components/Inicio';
// import LiderEquipo from './components/LiderEquipo';
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
      <div className="container-app">
        
       <Navbar firebaseUser = {firebaseUser}/>

       <Switch>
       <Route path="/" exact>
           <Inicio />
           <Login />
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

         {/* <Route path="/lider-equipo">
          <LiderEquipo/>
         </Route> */}

         <Route path="/everis-champion">
         <EverisChampion/>
         </Route>

       </Switch>
      </div>
    </Router>
   
  ) : (
    <p>Cargando...</p>
  )
}

export default App;
