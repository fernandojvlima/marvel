import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  //Timestamp
  const ts = 1583521943;
  //Public Key
  const publicKey = "135eca1ab762d898b67d632b4ae29615";

  //Hash MD5 com a combinação (ts+publicKey+privateKey)
  const hash = "9766cd51a5641bb629b26b137b1d744c";
  //URL base para as requisições a API da Marvel
  const baseURL = "https://gateway.marvel.com:443/v1/public/"

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseURL}characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then(res => {
        setData(res.data)
      })
  }, [])


  return (
    <div>
      <h3>Home</h3>
    </div>
  )
}

export default Home;