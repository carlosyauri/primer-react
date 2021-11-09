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
                {id:2, rating: 5, title: "Codigo Da Vinci", image: "https://es.web.img3.acsta.net/pictures/14/03/25/13/38/299195.jpg"},
                {id:3, rating: 4, title: "The Hobbit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zIcmVDAXvFvmg1HYyO793EOGA2Ld1zRGaArzvkAIMP16OCED"},
                {id:4, rating: 2, title: "Schindler's Ark", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSt-hoectonc5zCbP2q4JUVVVeUSKSdIjUChxvFP1tosDtlRN"}
            ],

            copyBooks: []
        };
    }


    componentDidMount(){
        this.initBooks()
    }
    
    initBooks = () =>{
        this.setState((state, props) => ({
            copyBooks: [...state.books]
        }))
    }

    onAdd = (item) => {
        let temp = [...this.state.books];
        const id = temp[temp.length-1].id + 1;
        item["id"] = id;
        temp.push(item)

        this.setState({books: [...temp]})
        this.initBooks();
    }

    onSearch = (query) => {
        if(query === ""){
            this.initBooks();
        }else{
            const temp = [...this.state.books]
            const res = [];


            temp.forEach(item => {
                if(item.title.toLowerCase().indexOf(query) > -1){
                    res.push(item)
                }
            });

            this.setState({copyBooks: [...res]})
        }
    }

    onUpdateRating = (item) => {
        var temp = [...this.state.books]
        const index = temp.findIndex(x => x.id === item.id)

        temp[index].title = item.title;
        temp[index].image = item.image;
        temp[index].rating = item.rating;

        this.setState({books: [...temp]})

        this.initBooks();


    }

    onRemove = (id) => {
        var temp = [...this.state.books];
        const res = temp.filter(item => item.id !== id)

        this.setState({books: [...res]})
        this.initBooks();
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
                    
                    <Menu   title="Librozon" onadd={this.onAdd} onsearch={this.onSearch}/>
                    <List 
                        items={this.state.copyBooks} 
                        onupdaterating={this.onUpdateRating}
                        onremove={this.onRemove}
                    />
    
                </div>
    
    
            </div>
        )


    }

    
}