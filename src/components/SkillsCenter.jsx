import React from 'react';
import {skillsData} from "../data/data"
import '../App.css'

const SkillsCenter = () => {
  return (
    <div>
      <h1>Base Datos</h1>
       <div >
        {
          skillsData.map((data, key)=> (
            <ul className= "data-box" key={key}>
              <li> ID: {data.ID}</li>
              <li> Nombre: {data.Nombre}</li> 
              <li> REACT: {data['React Js']}</li>
              <li> ANGULAR : {data.Angular}</li>
              <li> VUE JS: {data['Vue Js']}</li> 
            </ul>       
          ))
        }
       </div>
    </div>
  );
}

export default SkillsCenter;
