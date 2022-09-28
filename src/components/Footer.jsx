import logo from '../assets/img/logo.png'
import facebook from '../assets/img/facebook.svg'
import twitter from '../assets/img/twitter.svg'
import instagram from '../assets/img/instagram.svg'
import '../assets/style/footer.css'

function Footer({ tituloSeccion,tituloSeccion2, enlace1, enlace2, enlace3, enlace4, info, enlace5, imagen1, imagen2, imagen3, info2 }) {
    return (
        <footer>
            <img src={logo}></img>
            <div className='compania'>
                <p>{tituloSeccion}</p>
                <a className='link'>{enlace1}</a>
                <a className='link'>{enlace2}</a>
                <a className='link'>{enlace3}</a>
            </div>
            <div className='enlaces-utiles'>
                <p>{tituloSeccion2}</p>
                <a className='link'>{enlace4}</a>
                <a className='link'>{enlace5}</a>
            </div>
            <div className='redes'>
                <h2>{info}</h2>
                <img src={facebook}></img>
                <img src={twitter}></img>
                <img src={instagram}></img>
                <p>{info2}</p>
            </div>
        </footer>
    )
}

export default Footer