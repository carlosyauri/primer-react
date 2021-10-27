import { Link } from "react-router-dom";

export default function NextHome(){
    return(
        <>
            <h1>Next Home</h1>
            <p> Esta es la segunda pagina perroski</p>
            <button>
                <Link to="/">Volver</Link>
            </button>
        </>
    )
}