import axios from 'axios'
import React, { useState } from 'react'

const New = ({title}) => {

const [inputs, setInputs]=useState({
  itemcode:"",
  itemName:"",
  buyingPrice:0,
  sellingPrice:0,
  terminus:""
})
  
 async function handleSubmit(event){
  event.preventDefault()
  try{
const responce= await axios.post("http://localhost:40805/api/item",inputs)
  }
  catch(error){
console.log (error)
  } 
    
  }


   function handleChange(event){
    
  const value=event.target.value;
  const name=event.target.name;
  //spread operator to update the old records to the new ones
     setInputs ({...inputs,[name]:value})
      
    }
  return (
    <div>

<form onSubmit={handleSubmit}>
  <h1>{title}</h1>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Item Code</label>
      <input type="text" className="form-control" id="itemcode" name="itemcode"  onChange={handleChange}   placeholder="Item Code"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Item Name</label>
      <input type="text" className="form-control" id="itemname"  name="itemName"  onChange={handleChange}  placeholder="item Name"/>

      <div className="form-group">
    <label htmlFor="inputAddress">Buying price</label>
    <input type="text" className="form-control" id="bp" name="buyingPrice"  onChange={handleChange}  placeholder="Buying price"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress"> Selling  Price</label>
    <input type="text" className="form-control" id="SP" name="sellingPrice"  onChange={handleChange}  placeholder="Selling  Price"/>
  </div>

  <div>
  <div className="form-group">
    <label htmlFor="inputAddress">Terminus </label>
    <input type="text" className="form-control" id="terminus" name="terminus"  onChange={handleChange}  placeholder="terminus"/>
  </div>
  </div>
       </div>
      
  </div>
  
 
  
  <button  className="btn btn-primary" > ADD</button>
</form>




    </div>
  )
}

export default New