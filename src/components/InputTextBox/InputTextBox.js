import "./InputTextBox.css"
import { useState } from "react";

const InputTextBox = (props) => {
    const modifyPlaceholder = `${props.placeholder}...`

    const { type = "text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="field">
        <label>{props.title}</label>
        <input 
        placeholder={modifyPlaceholder} 
        type={type} required={props.required} 
        value={props.value}
        onChange={manejarCambio}/>
    </div>
}

export default InputTextBox