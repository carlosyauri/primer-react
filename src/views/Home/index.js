import { Link } from "react-router-dom"
export default function Home(){
    return(
        
        <>
            <h1>Hola que tal</h1>
            <p>Este es el home perreke</p>
            <button>
                <Link to={`/nextHome`}>Pasar pagina</Link>
            </button>
            <button>
                <Link to={"/paginaError"}>Ir a pag error</Link>
            </button>
        </>
    )
}