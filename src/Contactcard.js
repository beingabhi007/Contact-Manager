import React from 'react'

export default function Contactcard({name,contact,id})

{
 
  
  function handleSubmit (id) 
  {
     console.log(id);
     
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



