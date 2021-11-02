import "../Item.css"
import React from "react"

export default class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            stars: []
        }
    }

    componentDidMount(){
        this.setState({
            stars: Array(parseInt(this.props.rating)).fill(0)
        })
    }
    


    render(){
        return(
            <div className="item">
                <div className="image"> <img src={this.props.image} width="100%" /> </div>
                <div className="title">{this.props.title}</div>
                <div className="rating">
                    <p>
                        {
                            this.state.stars.map(x =>
                                <img  src="https://opinionista.es/wp-content/uploads/2018/05/cropped-estrella-calificacion.png" width="32" />)
                        }
                    </p>
                    Calificación:
                    <select value={this.props.rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button>Eliminar</button>
                </div>
            </div>
        )
    }
}