import Header  from '../components/Header'
import Inicio from '../components/Inicio'
import Categorias from '../components/Categorias'
import Fotos from '../components/Fotos'
import Footer from '../components/Footer'

function Layout() {
    return (
        <>
            <Header
                primerEnlace='Explorar'
                segundoEnlace='Licencia'
                tercerEnlace='Subir'
                cuartoEnlace='Ingresa'
            />

            <Inicio
                titulo='Las mejores fotos sin copyright estan en nuestro sitio...'
            />

            <Categorias
                boton1='Inicio'
                boton2='Lo mas visto'
                boton3='Suscripcion'
            />

            <Fotos
                title='Fotos de stock gratuitas' />

            <Footer
                tituloSeccion='Compañia'
                tituloSeccion2='Enlaces utiles'
                enlace1='Quienes somos'
                enlace2='Blog'
                enlace3='Preguntas'
                enlace4='Ayuda'
                enlace5='Nuestra App'
                info='Nuestras redes'
                info2='2022 Picture Free'
            />
        </>
    )
}

export default Layout