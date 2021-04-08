import React, { useState } from 'react';
import getImg from '../utils/getImg.js';
import formattedDate from '../utils/formattedDate.js';
import getLocationByCoords from '../utils/getLocationByCoods.js';
import celsiusToFahrenheit from '../utils/celsiusToFahrenheit.js';
import Nav from './Nav';
import background from '../assets/Cloud-background.png';
import styled from 'styled-components';

const SidebarStyled = styled.div`
  background-color: ${props => props.theme.colors.blue};
  .btns-container {
    display: flex;
    justify-content: space-between;
    padding: 18px 12px 0 12px;
  }
  .btn.open-nav, .btn.geo{
    background-color: ${props => props.theme.colors.gray};
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover {
      background-color: ${props => props.theme.colors.pink};
    }
  }
  .btn.open-nav {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
    padding: 10px 18px;
  }
  .btn.geo {
    padding: 0;
    border-radius: 50%50%;
  }
  .material-icons.white {
    color: ${props => props.theme.colors.white};
    font-size: 1.375rem;
    margin: 9px;
  }
  .current-weather {
    text-align: center;
    color: ${props => props.theme.colors.gray2};
  }
  .img-container {
    height: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${background}) ${props => props.theme.colors.blue} no-repeat center/cover;
    position: relative; 
    &::after {
      position: absolute;
      content: " ";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-color: rgb(30 33 58 / 95%);
    }
    
    .clouds-background {
      position: absolute;
      height: inherit;
      opacity: 0.1;
    }
    .weather-icon {
      width: 150px;
      margin-right: 20px;
      position: relative;
      z-index: 1;
    }
  }
  .current-temperature {
    font-size: 9rem;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
    margin-bottom: 14px;
    display: flex;
    justify-content: center;
    span {
      font-size: 3rem;
      color: ${props => props.theme.colors.gray2};
      margin-top: 70px;
    }
  }
  .description {
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: 33px;
  }
  .temperatures {
    display: flex;
    justify-content: space-evenly;
    margin: 0 30% 33px 30%;
    font-size: 1.125rem;
    font-weight: 500;
  }
  .min-temp {
    margin-left: 9px;
  }
  .date-container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1.125rem;
    margin-bottom: 33px;
    span {
      margin: 0 16px;
    }
  }
  .city-name {
    font-size: 1.125rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
    span {
      margin-right: 9px;
    }
  }
  @media (min-width: 992px) {
    width: 34%;
    .img-container {
      .weather-icon {
        width: 200px;
      }
    }
  }
` 

const Sidebar = ({ data, cityName, fetchWeatherInfo, unitTemp }) => {
  const [showNav, setShowNav] = useState(false);
    
  const currentWeather = data;

  const icon = getImg(currentWeather.weather_state_abbr);

  const todaysDate = formattedDate(currentWeather.applicable_date);

  const openNav = () => {
    setShowNav(!showNav);
  }

  const getCoords = () => {
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const { latitude, longitude } = pos.coords;
        window.localStorage.setItem('latitude', latitude);
        window.localStorage.setItem('longitude', longitude);

        const locationId = await getLocationByCoords(latitude, longitude);

        fetchWeatherInfo(locationId);
      },
      err => {
        console.log(err)
      },
      {
        timeout: 20000,
      }
    )
  }

  return (
    <SidebarStyled>
      <Nav showNav={showNav} setShowNav={setShowNav} fetchWeatherInfo={fetchWeatherInfo} />
      <div className="btns-container">
        <button type="button" className="btn open-nav" onClick={openNav}>Seach for places</button>
        <button type="button" className="btn geo" onClick={getCoords}>
          <span className="material-icons white">my_location</span>
        </button>
      </div>
      <div className="current-weather">
        <div className="img-container">
          {/* <img className="clouds-background" src={background} alt="Clouds Background" /> */}
          <img className="weather-icon" src={icon} alt={currentWeather.weather_state_name} />
        </div>
        
        <p className="current-temperature">
          {unitTemp === 'celsius' ? currentWeather.the_temp.toFixed(0) : celsiusToFahrenheit(currentWeather.the_temp)} 
          <span>{unitTemp === 'celsius' ? '°C' : '°F'}</span>
        </p>
        <p className="description">{currentWeather.weather_state_name}</p>
        <div className="temperatures">
          <p className="max-temp">
            {unitTemp === 'celsius' ? currentWeather.max_temp.toFixed(0) : celsiusToFahrenheit(currentWeather.max_temp)} 
            {unitTemp === 'celsius' ? '°C' : '°F'}
          </p>
          <p className="min-temp">
            {unitTemp === 'celsius' ? currentWeather.min_temp.toFixed(0) : celsiusToFahrenheit(currentWeather.min_temp)} 
            {unitTemp === 'celsius' ? '°C' : '°F'}
          </p>
        </div>
        <div className="date-container">
          <p>Today</p>
          <span>•</span>
          <p className="date">{todaysDate}</p>
        </div>
        
        <p className="city-name"><span className="material-icons gray">place</span>{cityName}</p>
      </div>
    </SidebarStyled>
  )
}

export default Sidebar;