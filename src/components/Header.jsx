import '../assets/style/header.css'
import logo from '../assets/img/logo.png'

function Header({primerEnlace, segundoEnlace, tercerEnlace, cuartoEnlace}) {
    return(
        <header>
            <img className='logo' src={logo}></img>
            <div className="navegacion">
                <a className="enlace primer-enlace">{primerEnlace}</a>
                <a className="enlace segundo-enlace">{segundoEnlace}</a>
                <a className="enlace tercer-enlace">{tercerEnlace}</a>
                <a className="enlace cuarto-enlace">{cuartoEnlace}</a>                
            </div>
        </header>
    )
}

export default Header