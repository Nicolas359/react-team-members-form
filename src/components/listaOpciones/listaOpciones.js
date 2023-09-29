import "./listaOpciones.css"
import "../InputTextBox/InputTextBox.css"

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones field">
        <label>Equipo</label>
        <select value={props.value} onChange={manejarCambio}>
            <option disabled defaultValue="" value="" hidden> Selecciona un equipo </option>
            { props.equipos.map((equipo,index) => <option key={index} value={equipo}>{equipo}</option>
             ) }
        </select>
    </div>
}

export default ListaOpciones