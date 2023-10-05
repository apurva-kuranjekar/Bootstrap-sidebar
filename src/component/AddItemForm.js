// AddItemForm.js
import React, { useState } from 'react';

function AddItemForm({ onClose, onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation
    // Call a function to add the item with itemName and itemPrice
    onAddItem(itemName, itemPrice);
    // Clear the form inputs
    setItemName('');
    setItemPrice('');
  };

  return (
    <div>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemPrice">Item Price</label>
          <input
            type="number"
            className="form-control"
            id="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default AddItemForm;
