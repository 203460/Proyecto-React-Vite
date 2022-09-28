import '../assets/style/fotos.css'
import Imagen from './Imagen'

function Fotos({ title }) {
    return (
        <section className="seccion-fotos">
            <h1>{title}</h1>
            <div className='contenedor-fotos'>

                <Imagen
                    img='1'
                />
                <Imagen
                    img='2'
                />
                <Imagen
                    img='3'
                />
                <Imagen
                    img='4'
                />

                <Imagen
                    img='Azul 1'
                />
                <Imagen
                    img='Azul 2'
                />

                <Imagen
                    img='Rojo 1'
                />

                <Imagen
                    img='Rojo 2'
                />
            </div>
        </section>
    )
}

export default Fotos