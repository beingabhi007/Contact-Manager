import React from "react" 
import { useHistory } from "react-router-dom"
import firebase from "firebase/app"

export default function Navbar() {
 
   const history = useHistory();

    return (
        
        <> 
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
<span 
onClick={ () => { history.push("/") }}
className="navbar-brand">Contact Management</span>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ml-auto">
<li className="nav-item active">
<span onClick={ () => { history.push("/home") }} className="nav-link">Home</span>
</li> 

<li className="nav-item active">
<span 
onClick={ () => { history.push("/settings") }}
className="nav-link">Insert</span>
</li>

<li className="nav-item active">
<span
onClick={ () => { firebase.auth().signOut().then( function () {
   return history.push("/");
}
    
) }}
 className="nav-link">Logout</span>
</li>
</ul>
</div>
</nav> 

<br/><br/>
        </>
        
    )
}
