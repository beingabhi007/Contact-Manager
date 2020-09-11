import React from 'react'
import firebase from "firebase/app"
import { useHistory } from 'react-router-dom';



export default function Contactcard({name,contact,id})

{
  const history = useHistory
  
  function handleSubmit (id) 
  { 
      
    firebase.firestore()
    .collection(firebase.auth().currentUser.email).doc(id).delete()
    .then( function() {
    history.push("/home");
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
  });
     
  } 

    return (
        <> 
        <div className="row">
         <div className="col-lg-3 mx-auto">
         </div> 
        </div>
       <br/> 
       
      
       <div className="row">
  
       
         <div className="col-lg-4 col-sm-10 mx-auto">
        <div className="alert alert-primary" role="alert">

        <span style={{display: "flex", flexDirection: "column"}}>
       <span> {name}</span> 
       <span>{contact}
       <i 
       className="fa fa-trash ml-4 float-right"
       onClick={ (e) => { handleSubmit(id) }}
       ></i>
       </span>
        
        </span>
       
         </div>
         </div> 
  
       
  
       </div> 
  
  
  
        </>
    )
}



