import React from 'react';
import imgErro from '../../assets/imgErro.png'
import Header from '../../components/Header';
import './index.css';

const NotFound = () => {

  return (
    <div>
      <Header />
      <div className="erro404">
        <img src={imgErro} alt="Página não encontrada" />
      </div>
    </div>
  )
}

export default NotFound;