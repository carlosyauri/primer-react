// import { Link } from "react-router-dom"
import React from "react"
import Menu from "../../components/Menu"
import List from "../../components/List"

export default class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            books:[
                {id:0, rating: 1, title: "Harry potter y el caliz de fuego", image: "http://static-1.ivoox.com/canales/9/7/2/3/6011513723279_XXL.jpg" },
                {id:1, rating: 3, title: "The shining", image: "https://flxt.tmsimg.com/assets/p40_p_v10_ap.jpg"},
                {id:2, rating: 5, title: "Codigo Da Vinci", image: "https://es.web.img3.acsta.net/pictures/14/03/25/13/38/299195.jpg"}
            ]
        };
    }

    onAdd = (item) => {
        let temp = [...this.state.books];
        const id = temp[temp.length-1].id ++
        item["id"] = id;
        temp.push(item)

        this.setState({books: [...temp]})
    }

    render(){

        return(
        
            <div className="app">
                {/* <div>            
                    <h1>Hola que tal</h1>
                    <p>Este es el home perreke</p>
                    <button>
                        <Link to={`/nextHome`}>Pasar pagina</Link>
                    </button>
                    <button>
                        <Link to={"/paginaError"}>Ir a pag error</Link>
                    </button>
                </div> */}
    
                <div>
                    
                    <Menu   title="Librozon" onadd={this.onAdd} />
                    <List items={this.state.books}/>
    
                </div>
    
    
            </div>
        )


    }

    
}