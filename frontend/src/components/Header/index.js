import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/"><h1 className="barra">Marvel</h1></Link>
    </div>
  )
}
export default Header;