import './App.css';
import { useState } from 'react';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import MiOrg from './components/miOrg';
import Equipo from './components/equipo';
import Footer from './components/footer';
import {v4 as uuidv4} from "uuid";

function App() {
  const [showForm,actualizarMostrar] = useState(false)

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo:"Data Sciense",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
  ])

  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo:"Front End",
    foto:"https://avatars.githubusercontent.com/u/102981506?v=4",
    nombre:"Nicolás Oliva",
    puesto:"Instructor",
    fav:true,
  }])

  const cambiarMostrar = () => {
    actualizarMostrar(!showForm)
  }

const registrarColaborador = (colaborador) => {
  actualizarColaboradores([...colaboradores, colaborador])
}

const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarEquipos(nuevosColaboradores)
}

const actualizarColor = (color, id) => {
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id) {
      equipo.colorPrimario=color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

const like = (id) => {
  const colaboradorFavorito = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradorFavorito)
}

  return (
    <div>
      <Header/>

      { showForm === true ? <Form data={equipos} registrarColaborador={registrarColaborador}/> : <></>}

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo) => <Equipo 
        key={equipo.titulo} 
        datos={equipo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
        }

      <Footer/>
    </div>
  );
}

export default App;
