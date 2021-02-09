import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaTable, FaChartBar } from 'react-icons/fa';

const NavIcons = () => {
  return (
    <nav className='navicons'>
      <Link to='/'>
        <FaTable />
      </Link>
      <Link to='/todos'>
        <FaTasks />
      </Link>
      <Link to='/search'>
        <FaChartBar />
      </Link>
    </nav>
  );
};

export default NavIcons;
