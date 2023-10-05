import React, { useState } from 'react';
import './App.css';
import AddForm from './component/AddForm.js';
import AddItemForm from './component/AddItemForm';

// Sidebar Component
function Sidebar({ onCategoryClick }) {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark"  style={{ height: '100vh' }}>
      {/* Sidebar content goes here */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/" className="nav-link text-white">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white" onClick={() => onCategoryClick('Category')}>
            Category
          </a>
        </li>
      </ul>
    </div>
  );
}


// Dashboard Component
function Dashboard({ onAddButtonClick }) {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddItemClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  return (
    <div className="col py-3">
      {showAddForm ? (
        <AddItemForm onClose={handleCloseForm} />
      ) : (
        <>
          <button className="btn btn-primary mt-3 mr-3 float-right" onClick={handleAddItemClick}>
            ADD
          </button>
          <h2>Dashboard</h2>
          {/* Dashboard content goes here */}
        </>
      )}
    </div>
  );
}

// CategoryTable Component
function CategoryTable() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddItemClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };
  // Example data for the category table
  const data = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 },
    { id: 4, name: 'Item 4', price: 25 },
    { id: 5, name: 'Item 5', price: 30 },
    { id: 6, name: 'Item 6', price: 35 },
    // Add more data
  ];

  return (
    <div className="col py-3">
    {showAddForm ? (
      <AddItemForm onClose={handleCloseForm} />
    ) : (
      <>
        <button className="btn btn-primary mt-3 mr-3 float-right" onClick={handleAddItemClick}>
          ADD
        </button>
        <br/>
        <h2>Category Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )}
  </div>
);
}


function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <Sidebar onCategoryClick={handleCategoryClick} />

        {/* Content */}
        {activeCategory === 'Category' ? (
          <CategoryTable />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}

export default App;
