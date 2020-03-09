import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/about"><h1 className="barra">Marvel</h1></Link>
  )
}

export default Header;