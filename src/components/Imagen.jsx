import '../assets/style/imagen.css'

function Imagen({img}) {
    let imagen = new URL(`../assets/img/${img}.jpg`, import.meta.url).href

    return(
        <div className='contenedor-imagen'>
            <img className="imagen" src={imagen} ></img>
        </div>
    )
}

export default Imagen