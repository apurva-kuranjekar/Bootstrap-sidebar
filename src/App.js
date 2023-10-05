import React, { useState } from 'react';
import './App.css';

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
function Dashboard() {
  return (
    <div className="col py-3">
      <h2>Dashboard</h2>
      {/* Dashboard content goes here */}
    </div>
  );
}

// CategoryTable Component
function CategoryTable() {
  // Example data for the category table
  const data = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    // Add more data
  ];

  return (
    <div className="col py-3">
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
