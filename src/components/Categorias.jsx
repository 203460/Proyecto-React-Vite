 import '../assets/style/categorias.css'

function Categorias({boton1, boton2, boton3}) {
    return(
        <div className="contenedor-botones">
            <button className='boton'>{boton1}</button>
            <button className='boton'>{boton2}</button>
            <button className='boton'>{boton3}</button>
        </div>
    )
}

export default Categorias
