import React from "react"
import Hero from "./Hero"
import "./App.css"
import 'react-toastify/dist/ReactToastify.css';
import Master from './Master';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Settings from './Settings';
const App = () => {
    return(
        <> 
       <Router> 
      <Switch>
      <Route exact path="/" component={Hero}/>
      <Route exact path="/home" component={Master}/> 
      <Route exact path="/settings" component={Settings}/>

      </Switch>
      </Router>  
      
        </>
    )
}

export default App