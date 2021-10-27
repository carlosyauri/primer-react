import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import FourOFour from "../views/404";
import Home from "../views/Home"
import NextHome from "../views/NextHome";



export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/nextHome">
                    <NextHome/>        
                </Route>
                <Route>
                    <FourOFour/>
                </Route>
            </Switch>
        </Router>
    );
}