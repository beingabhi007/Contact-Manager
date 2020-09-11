import React, { useEffect,useState } from 'react'
import Navbar from "./Navbar"
import firebase from "firebase/app"
import {Redirect} from "react-router-dom"
import Contactcard from './Contactcard';


const Master = () => { 
const [data4, setData4] = useState([])

useEffect( ()=>{
  
  async function fetchData() {
    await firebase.firestore()
    .collection(firebase.auth().currentUser.email)
      .get()  
      .then(function(querySnapshot) {
        
       //  console.log(querySnapshot.docs[0].data().name);
         setData4(querySnapshot.docs);  
          })
  }

  fetchData()

          
},[])

  if(firebase.auth().currentUser) 
  { 
    return(
      <>
    <Navbar/> 

   {
 data4.map((datas) => (
   <>
   <Contactcard   name={datas.data().name} contact={datas.data().contact} id={datas.id} />
    </>
 ))
   }

    </>
    )} 
    
    else 
    {
       return <Redirect to="/" />
    }
}


export default Master