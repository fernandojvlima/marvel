import React, { useEffect, useState } from 'react';
import { ts, publicKey, hash, baseURL } from '../../Api'
import axios from 'axios';
import Character from '../../components/Character'
import { Link } from 'react-router-dom';

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
      <Link to="/about"><h1 className="barra">Marvel</h1></Link>
      <div className="container">
        {loading && <span className="loading">Loading...</span>}
        {characters
          .map((item) =>
            <Character item={item} key={item.id} />
          )
        }
      </div>
    </div>
  )
}

export default Home;