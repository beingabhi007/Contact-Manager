import React from "react" 
import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app"
import "firebase/auth";  
import "firebase/firestore"
import {firebaseConfig} from "./config"
import { ToastContainer, toast } from 'react-toastify';
firebase.initializeApp(firebaseConfig);


const Hero = () => {

const history = useHistory();  
const [status, setStatus] = useState(false);
const [email, setEmail] = useState(''); 
const [password, setPassword] = useState(''); 

  const handleSignIn = (e) => {
    e.preventDefault();
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (doc){
      return history.push("/home");
    }) 
    .catch(function(error) {
      
      toast(error.message, {type: "error"});
      setEmail('');
      setPassword('');
      
    });
  } 

  const handleSignUp = (e) => {
    
     e.preventDefault();
     firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .catch(function(error) {    
      toast("Account creation failed", {type: "error"})
      toast(error.message, {type: "error"})
      setEmail('');
      setPassword('');
      setStatus(true); 
     });

     

     setStatus(false);
     setPassword('');
       
  }
   
    return(
        
        <div className="my__background1"> 
        
        <div className="row">
        <ToastContainer position="top-right" />
         <div className="col-12 bg-white"> 
          <h1 className="text-center" style={{fontFamily: 'Abril Fatface'}}>Contact Manager </h1>
         </div>   
        </div>
        
        <div className="row cardInput" >
        <div className="col-lg-7" style={{padding: "0px"}}>
       <img 
       src="bg1.gif"
       alt="bg1"
       className="bg__img"
       />
        </div> 

        <div className="col-lg-5 mukta" style={{padding: "0px"}}>
     
     <div className="row">
     <div className="col-10 mx-auto" style={{padding:"0px"}}>
    
     { status ?
       ( <div className="card">
     <div className="card-body">
     <form onSubmit={handleSignUp}> 
      <br/>
     
     <input
     className="Hero__input" 
     type="email" 
     value={email}
     onChange={ (event) => { setEmail(event.target.value)}}
     placeholder="Email" required /> <br/>

     <input 
     className="Hero__input" 
     type="password"  
     value={password} 
     onChange={ (event) => { setPassword(event.target.value)}}
     placeholder="Password" required /> <br/> <br/>
     
     <button 
     type="submit" 
     className="btn-danger btn-block">
     Create an account
     </button>
    </form> </div> </div> )
    :
    <div className="card">
     <div className="card-body">
    
     <form onSubmit={handleSignIn} > 
      <br/>
     
     <input
     className="Hero__input" 
     type="email" 
     value={email}
    onChange={ (event) => { setEmail(event.target.value)}}
     placeholder="Email" required /> <br/>

     <input 
     className="Hero__input" 
     type="password"  
     value={password} 
    onChange={ (event) => { setPassword(event.target.value)}}
     placeholder="Password" required /> <br/> <br/>
     
     <button 
     type="submit" 
     className="btn-success btn-block">
     Login
     </button>
    </form> </div> </div>    

    }
  
     </div>    
     </div>
     <br/><br/>
     
     <div className="row">
     <div className="col-lg-10 mx-auto">
      <div className="card">
      { status ? 
        <p className="text-center p-2">Already a member ?? <strong onClick={ () => setStatus(false)} >Sign in</strong> </p>        
       : 
      <p className="text-center p-2">Not a member ?? <strong onClick= { () => { setStatus(true) }}>Sign up</strong> </p>    
       }
      </div>   
     </div>    
     </div>
      </div>    
        </div> 
        </div>
    )
} 


export default Hero;