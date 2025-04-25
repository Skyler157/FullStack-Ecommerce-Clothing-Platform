import React, { useState, useEffect } from 'react';
import './UpdateStock.css';
import cross_icon from '../../assets/cross_icon.png';

const UpdateStock = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [updatedStock, setUpdatedStock] = useState({});

  useEffect(() => {
    // Fetch all products data
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4000/allproducts');
      const data = await response.json();
      setAllProducts(data);
    };
    fetchProducts();
  }, []);

  const handleStockChange = (id, value) => {
    setUpdatedStock((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const updateProductStock = async (id, stock) => {
    await fetch('http://localhost:4000/updatestock', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, stock }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Stock updated successfully!');
      } else {
        alert('Failed to update stock!');
      }
    });
  };

  return (
    <div className="update-stock">
      <h1>Update Product Stock</h1>
      <div className="update-stock-table">
        <p>Products</p>
        <p>Title</p>
        <p>Current Stock</p>
        <p>Update Stock</p>
      </div>
      <div className="update-stock-products">
        <hr />
        {allProducts.map((product, index) => (
          <div key={index} className="update-stock-item">
            <img src={product.image} alt={product.name} className="update-stock-image" />
            <p>{product.name}</p>
            <p>{product.stock}</p>
            <input
              type="number"
              value={updatedStock[product.id] || product.stock}
              onChange={(e) => handleStockChange(product.id, e.target.value)}
              min="0"
              className="stock-input"
            />
            <button
              onClick={() => updateProductStock(product.id, updatedStock[product.id] || product.stock)}
              className="update-stock-btn"
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateStock;
