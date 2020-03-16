import React from 'react';
import Character from '../../components/Character'
import Filter from '../../components/Filter';
import Header from '../../components/Header';
import './index.css';

const Home = (props) => {
  return (
    <div >
      <Header />
      <Filter />
      <Character />
    </div>
  )
}

export default Home;