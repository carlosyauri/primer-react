import Search from "../components/Search"
import React from "react"
import "../Menu.css"
import PanelAdd from "./PanelAdd"

export default class Menu extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {newItemPanel: false}
    }

    add = () => {
        this.setState({newItemPanel: true});
    }

    onCancel = (e) => {
  
        this.setState({newItemPanel: false})
    }
    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
                    <div className="search">
                        <Search />
                    </div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">+ Añadir nuevo libro</button>
                    </div>
                </div>

                {(this.state.newItemPanel)?  <PanelAdd oncancel={this.onCancel}  onadd={this.props.onadd}/> : ""}
               
            </div>
    
            
        )
    }
}