import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {FiLogIn} from 'react-icons/fi'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function logon(){
  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo"/>
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02141"/>
            Não tenho cadastro
            </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  )
}