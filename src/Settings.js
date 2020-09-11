import React, {useState} from 'react'
import Navbar from './Navbar'
import firebase from "firebase/app"
import "firebase/firestore"
import { v4 as uuidv4 } from 'uuid';
import {Redirect, useHistory} from "react-router-dom"

export default function Settings() {
    
  const history = useHistory()
  const[name, setName]= useState(''); 
  const[contact, setContact]= useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    firebase.firestore().collection(firebase.auth().currentUser.email).doc()
      .set({ 
             id: uuidv4(),
             name: name, 
             contact: contact,
             time: firebase.firestore.Timestamp.fromDate(new Date())},
             { merge: true}).then(
               history.push("/home")
             )        
  }


       if(firebase.auth().currentUser)
      {
        
        return( 
          <>
        <Navbar/>
       <br/><br/>

       <div className="row">
      <div className="col-lg-5 mx-auto">
      
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
        className="form-control"
        type="text"
        value={name} 
        onChange={ (e) => { setName(e.target.value) }}
        placeholder="Full name"  
        />
      </div> 

      <div className="form-group">
        <input 
        className="form-control"
        value={contact} 
        onChange={ (e) => { setContact(e.target.value) }}
        type="number"
        placeholder="Contact number"  
        />
      </div> 
       
      <button
      className="btn btn-primary btn-block"
      >
      Add to contact  
      </button>
      </form> </div>
      </div>  

      </> 
        )
      } 
      else 
      {
         return <Redirect to="/" />
      }
      
    
}
