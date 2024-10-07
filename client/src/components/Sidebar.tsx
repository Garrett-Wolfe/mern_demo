import React from "react";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-secondary bg-gradient vh-100 p-3" style={{ width: "250px" }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div>
        <a href="#" className="nav-link">
          Profile
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
