import React from 'react';
import styled from 'styled-components';
import PercentageBar from './PercentageBar';

const TodaysHighlightsStyled = styled.section`
  background-color: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.white};
  padding: 20px 24px;
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 32px;
  }
  .hightlight {
    background-color: ${props => props.theme.colors.blue};
    margin-bottom: 32px;
    padding: 22px 0;
    text-align: center;
  }
  h3 {
    font-weight: 500;
  }
  .principal-info {
    font-size: 4rem;
    font-weight: 700;
    margin: 20px 0;
    span {
      font-size: 2.25rem;
      font-weight: 500;
    }
  }
  .wind-direction {
    font-size: 0.875rem;
    font-weight: 500; 
    span {
      font-size: 0.875rem;
      margin-right: 9px;
      background-color: ${props => props.theme.colors.gray3};
      padding: 3px;
      border-radius: 50%;
    }
  }
  @media (min-width: 675px) {
    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
      grid-gap: 1.625rem;
      gap: 1.625rem;
      .hightlight {
        margin-bottom: 0;
      }
    }
  }
  @media (min-width: 992px) {
    padding: 20px 30px;
  }
  @media (min-width: 1205px) {
    padding: 20px 40px;
    .cards-container {
      grid-template-columns: repeat(auto-fill,minmax(320px,1fr));
    }
  }
  @media (min-width: 1440px) {
    padding: 20px 7.5rem;
  }
`

const TodaysHighlights = ({ data }) => {

  const currentWeather = data;

  const direction = currentWeather.wind_direction_compass;

  let iconDirection = "";

  if (direction === "NNE" || direction === "NE" || direction === "ENE") {
    iconDirection = "north_east"
  } else if (direction === "E") {
    iconDirection = "east"
  } else if (direction === "ESE" ||direction === "SE" || direction === "SSE") {
    iconDirection = "south_east"
  } else if (direction === "S") {
    iconDirection = "south"
  } else if (direction === "SSW" || direction === "SW" || direction === "WSW") {
    iconDirection = "south_west"
  } else if (direction === "W") {
    iconDirection = "west"
  } else if (direction === "WNW" || direction === "NW" || direction === "NNW") {
    iconDirection = "north_west"
  } else {
    iconDirection = "north"
  }

  return (
    <TodaysHighlightsStyled>
      <h2>Today's Highlights</h2>
      <div className="cards-container">
      <div className="hightlight">
        <h3>Wind status</h3>
        <p className="principal-info">{currentWeather.wind_speed.toFixed(0)} <span>mph</span></p>
        <p className="wind-direction"><span className="material-icons">{iconDirection}</span>{direction}</p>
      </div>
      <div className="hightlight">
        <h3>Humidity</h3>
        <p className="principal-info">{currentWeather.humidity} <span>%</span></p>
        <PercentageBar bgColor="#FFEC65" percentage={currentWeather.humidity} />  
      </div>
      <div className="hightlight">
        <h3>Visibility</h3>
        <p className="principal-info">{currentWeather.visibility.toFixed(1)} <span>miles</span></p>
      </div>
      <div className="hightlight">
        <h3>Air Pressure</h3>
        <p className="principal-info">{currentWeather.air_pressure} <span>mb</span></p>
      </div>
      </div>    
    </TodaysHighlightsStyled>
  )
} 

export default TodaysHighlights;
