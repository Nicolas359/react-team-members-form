import "./equipo.css"
import Card from "../card"
import hexToRgba from "hex-to-rgba";


const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo, id} = props.datos

    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const estiloTitulo = {borderColor: colorPrimario}

    const bgColor = {backgroundColor: hexToRgba(colorPrimario,0.4)}

    return <> { colaboradores.length > 0 && 
        <section className="equipo" style={bgColor}>
            <input type="color" className="input-color" defaultValue={colorPrimario} onChange={(e) => {
                actualizarColor(e.target.value, id)
            }}/>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index) => <Card datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} like={like}/>
                    )
                }
            </div>
        </section>
    }</>
}
export default Equipo