import React from 'react';

const Table = ({ category }) => {
  // Fetch or use data related to the selected category
  // Example data:
  const data = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    // Add more data
  ];

  return (
    <div className="table">
      <h2>{category} Table</h2>
      <table>
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
};

export default Table;
