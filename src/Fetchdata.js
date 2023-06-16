import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './fetchdata.css';


function Fetchdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:40805/api/item");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(itemCode) {
    try {
      await axios.delete(`http://localhost:40805/api/item/${itemCode}`);
      fetchData(); 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2 className="centered-text">STOCK RECORDS</h2>
      <p>
        <hr />
      </p>
      <Link to="/new">
        <button className="btn btn-success">NEW ITEM</button>
      </Link>
      <p>
        <hr />
      </p>
      <table className="table table-striped table-active table-hover centered-table">
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
            <tr key={product.ItemCode}>
              <td>{product.ItemCode}</td>
              <td>{product.ItemName}</td>
              <td>{product.BuyingPrice}</td>
              <td>{product.SellingPrice}</td>
              <td>{product.Terminus}</td>
              <td>
                <Link to={`/${product.ItemCode}/edit`}>
                  <button className="btn btn-primary btn-sm">EDIT</button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(product.ItemCode)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fetchdata;
