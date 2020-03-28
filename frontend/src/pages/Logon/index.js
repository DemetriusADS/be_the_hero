import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try{
      const response = await api.post('/session', {id});
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongNome', response.data.nome);
      console.log(response.data.nome);
      history.push('profile');
    }catch(err){
      alert('Erro no login');
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link to="/register" className="backlink">
            <FiLogIn size={16} color="#e02141"/>
            Não tenho cadastro
            </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  )
}