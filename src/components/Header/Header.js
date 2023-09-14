import React from 'react'
import './Header.css'
import WeatherCard from '../WeatherCard/WeatherCard'
import { Link } from 'react-router-dom'
import logoWeather from '../../assets/icons/Weather-api.png'

function Header() {
  return (
    <div className="headerContainer">
          <div className="left">
            <div className="imgWeather">
              <img src={logoWeather} alt="weather" className="imgWeather" />
            </div>
            <div className="introHome">
              <h1 className="titleHome">Bienvenue sur Weather App</h1>
              <p className="textHome">Weather App est une api météo qui vous permet de récupérer les données météo de n'importe quelle ville à La Réunion.</p>
            </div>
            <div className="about">
              <div className="infoAbout">
              <h2 className="titleAbout">A propos</h2>
              <p className="textAbout">Weather App est un projet réalisé par <a href="https://www.brian-coupama.fr" target="_blank" rel="noopener noreferrer">Brian Coupama</a>.</p>
              </div>
              <button className="btnDoc"><Link to="/documentation" className="linkDoc">Voir la documentation</Link></button>
            </div>
          </div>
          <div className="right">
            <WeatherCard />
          </div>
      </div>
  )
}

export default Header