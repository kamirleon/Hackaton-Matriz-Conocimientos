import React from 'react';
import {skillsData} from "../data/data"
import '../App.css'
import DataTable from "react-data-table-component";
const columnas = [
  {
    name: "ID",
    selector: "ID",
    sortable: true,
    grow: 0
  },
  {
    name: "Nombre",
    selector: "Nombre",
    sortable: true,
  },
  {
    name: "Correo",
    selector: "Email",
    sortable: true,
    // right: true,
  },
  {
    name: "Tecnología",
    selector: "React Js",
    sortable: true,
  },
  {
    name: "Asignación",
    selector: "Asignacion",
    sortable: true,
  },
];
const paginacionOpciones = {
  rowsPerPageText: "Filas por Página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};
const SkillsCenter = () => {
  return (
    <div className= "skills-center">
      <div className="skills-bar">
        <h1 className="skills-title"> Skills Delivery Manager Zone</h1>
      <div className= "logo"></div>
        <div className= "">
          <form>
            <input 
            type="text"
            placeholder="Buscar por herramienta específica"
            className="form-control-search"
            />
            <button 
            className= 'btn-search'
            type="submit"
            > Buscar
            </button>
          </form>
        </div>
      </div>
      <div className="barra-lateral"> </div>
      <div className= "skills-container">  
       <h4 className= "titulo-barra">Trabajadores, proyecto, herramientas: </h4>
       <div>
                <DataTable
            columns={columnas}
            data={skillsData}
            title="Lista de colaboradores"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="600px"
          />
       </div>
        </div>
       </div>
  );
}
export default SkillsCenter;









// import React from 'react';
// import {skillsData} from "../data/data"
// import '../App.css'

// const SkillsCenter = () => {

//   return (
//     <div className= "skills-center">
//       <div className="skills-bar">
//         <h1 className="skills-title"> Skills Delivery Manager Zone</h1>
//       <div className= "logo"></div>
//         <div className= "">
//           <form>
//             <input 
//             type="text"
//             placeholder="Buscar por herramienta específica"
//             className="form-control-search"
//             />
//             <button 
//             className= 'btn-search'
//             type="submit"
//             > Buscar
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="barra-lateral"> </div>
//       <div className= "skills-container">  
//        <h4 className= "titulo-barra">Trabajadores, proyecto, herramientas: </h4>
//         {
//           skillsData.map((data, index)=> (
//             <ul className= "data-box" key={index}>
//               <li> ID: {data.ID}</li>
//               <li> Nombre: {data.Nombre}</li> 
//               <li> REACT: {data['React Js']}</li>
//               <li> ANGULAR : {data.Angular}</li>
//               <li> VUE JS: {data['Vue Js']}</li> 
//             </ul>       
//           ))
//         }
//        </div>
//     </div>
//   );
// }

// export default SkillsCenter;
