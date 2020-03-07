import React, { useEffect, useState } from 'react';
import { ts, publicKey, hash, baseURL } from '../../Api';
import axios from 'axios';
import Personagem from '../Personagem';

const Home = () => {
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  //Requisição para o servidor Marvel solicitando personagens, passando as chaves da API.
  useEffect(() => {
    axios
      .get(`${baseURL}characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then(res => {
        setData(data)
        setCharacters(res.data.data.results)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1 className="barra">Marvel</h1>
      <div className="container">
        {loading && <span className="loading">Loading...</span>}
        {characters
          .map((item, index) =>
            <Personagem item={item} index={index} />
          )
        }
      </div>
    </div>
  )
}

export default Home;