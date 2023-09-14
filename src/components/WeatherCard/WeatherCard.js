import React, { useEffect, useState } from 'react'
import './WeatherCard.css'
import axios from 'axios'

function WeatherCard() {
  const [weather, setWeather] = useState([]);

  // Mettre les images du répertoire assets/images dans un tableau
  const imgWeatherStatus = [
    {
      id: 1,
      nom_img: 'Partly_cloudy',
      path: 'images/Partly_cloudy.png'
    },
    {
      id: 2,
      nom_img: 'Sunny',
      path: 'images/Sunny.png'
    }
  ]



  // Récupère les données de l'API
  const getWeather = async () => {
    const url = axios.get('http://localhost:5000/apiWeather')
    const response = await url
    console.log(response.data)
    // Selectionne une ville aléatoire dans le tableau
    const random = Math.floor(Math.random() * response.data.length)
    setWeather(response.data[random])
  }

  useEffect(() => {
    getWeather()
  }, [])
  return (
    <div className='weatherCard'>
      <div className="headerCard">
        <div className="imgWeatherStatus">
          <img src={imgWeatherStatus[0].path} alt={imgWeatherStatus[0].nom_img} />
        </div>
        <div className="temp">
          <p>{
            // Faire un if pour vérifier si minTemperature et maxTemperature existe dans l'objet weather
            // Si oui, afficher minTemperature et maxTemperature
            
          }°C
          </p>
        </div>
      </div>
      <div className="body">
        <div className="location">
          <h3>
            
          </h3>
        </div>
        <div className="windSpeed">
          <p>Vents:</p>
          <span> km/h</span>
        </div>
        <div className="dateRelease">
          <p>{
          // Affiche la date au format jj/mm/aaaa
          
          }</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard