import "./form.css"
import InputTextBox from '../InputTextBox/InputTextBox.js'
import ListaOpciones from "../listaOpciones/listaOpciones"
import Button from "../button/button"
import { useState } from "react"

const Form = (props) => {

    const[nombre, actualizarNombre] = useState("")
    const[puesto, actualizarPuesto] = useState("")
    const[foto, actualizarFoto] = useState("")
    const[equipo, actualizarEquipo] = useState("")

    const {registrarColaborador} = props

    const manejarEnvio = e => {
        e.preventDefault()
        
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    return <section className="form"> 
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear al colaborador.
            </h2>
            <InputTextBox title="Nombre" placeholder="Ingresa tu nombre" required
            value ={nombre}
            actualizarValor={actualizarNombre}/>
            <InputTextBox title="Puesto" placeholder="Ingresa tu puesto" required
            value ={puesto}
            actualizarValor={actualizarPuesto}/>
            <InputTextBox title="Foto" placeholder="Ingresa el enlace de tu foto" type="url" required
            value ={foto}
            actualizarValor={actualizarFoto}/>
            <ListaOpciones value = {equipo} actualizarValor = {actualizarEquipo} equipos={props.data.map((equipos)=> equipos.titulo
            )}/>
            <Button text="Crear"/>
        </form>
    </section>
}

export default Form