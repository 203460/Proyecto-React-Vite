import '../assets/style/Inicio.css'

function Inicio({titulo}) {
    return(
        <section className="section-inicio">
            <h1 className="titulo">{titulo}</h1>
            <hr></hr>
            <input type='search' placeholder='Busca algo...'></input>
        </section>
    )
}

export default Inicio