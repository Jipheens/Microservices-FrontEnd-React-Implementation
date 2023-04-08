import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Fetchdata() {
    const [data,setdata]=useState([])
    useEffect(() =>{
    fetch("http://localhost:40805/api/item").then((response) => response.json()).then((jsonresponce) =>{
    setdata (jsonresponce)
    })

    },[])

    async function handleDelete(itemCode){
      try {
        await axios.delete("http://localhost:40805/api/item"+itemCode)

      } catch (error) {
        console.log(error)
      }

    } 
    
    async function redirecttoedit(){
      <Link to="/new"> </Link>

    }
  return (
    <div>
        <p className='head'><h2>OUR FETCHED RECORDS FOR OUR MICROSERVICE</h2></p>
        <p><hr></hr></p>
        <Link to="/new">  <button className='btn btn-warning'  >NEW ITEM</button>
</Link>
        <p><hr></hr></p>
  <table className='table table table-striped table-active table-hover'>
      <thead className="table-dark">
        <tr>
          <th>Item Code</th>
          <th>Item Name</th>
          <th>Buying Price</th>
          <th>Selling Price</th>
          <th>Terminus</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(product => (
          <tr key={product.ItemCode} onClick={()=>redirecttoedit()} >
            <td>{product.ItemCode}</td>
            <td>{product.ItemName}</td>
            <td>{product.BuyingPrice}</td>
            <td>{product.SellingPrice}</td>
            <td>{product.Terminus}</td>
            <td>
            <Link to={"/"+product.itemCode+"/edit"}><button class="btn btn-primary btn-sm"  >EDIT</button></Link>
            <button className="btn btn-danger btn-sm"  onClick={()=>handleDelete(product.itemCode)}>DELETE</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table> 



    </div>
  )
}



export default Fetchdata