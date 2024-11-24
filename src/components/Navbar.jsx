import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-lg font-bold">
        <image  src="/public/logo.png"/>
      <Link to="/">KigaliBites</Link>
    </h1>
    <ul className="flex space-x-4">
      <li><Link to="/restaurants">Restaurants</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Navbar;