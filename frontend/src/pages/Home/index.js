import React from 'react';
import Character from '../../components/Character'
import Search from '../../components/Search';
import Header from '../../components/Header';
import './index.css';

const Home = (props) => {
  return (
    <div >
      <Header />
      <Search />
      <Character />
    </div>
  )
}

export default Home;