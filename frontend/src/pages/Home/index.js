import React, { useEffect, useState } from 'react';
import { ts, publicKey, hash, baseURL } from '../../services/api';
import axios from 'axios';
import Character from '../../components/Character';
import Header from '../../components/Header';
import { Spinner } from 'reactstrap';

const Home = () => {
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  //Requisição para o servidor Marvel solicitando personagens, passando as chaves da API.
  useEffect(() => {
    async function loadCharacters() {
      const response = await axios.get(`${baseURL}characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      setData(data)
      setCharacters(response.data.data.results)
      setLoading(false)
    }
    loadCharacters()

  }, [])


  return (
    <div>
      <Header />
      <div className="container">
        {loading && <div><span className="loading">Loading...</span> <Spinner type="grow" color="success" /></div>}
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