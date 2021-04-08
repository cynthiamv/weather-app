import React, { useState, useEffect } from 'react';
import getLocationByCoords from './utils/getLocationByCoods.js';
import Sidebar from './components/Sidebar';
import Forecast from './components/Forecast';
import TodaysHighlights from './components/TodaysHighlights';
import Footer from './components/Footer';
import Loading from './components/Loading';
import GlobalStyle from './styles/GlobalStyle'; 
import Theme from './styles/Theme';
import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 992px) {
    display: flex;
    main {
      width: 66%;
      z-index: 1;
    }
  }
  
`

const TemperatureButtons = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
  display: flex;
  justify-content: flex-end;
  padding: 30px 40px 0 0;
  button {
    border-radius: 50%;
    border: none;
    font-size: 1.125rem;
    font-weight: bold;
    width: 40px;
    padding: 10px 0;
    background-color: #585676;
    color: ${props => props.theme.colors.white};
    &:hover {
      background-color: ${props => props.theme.colors.pink};
    }
    
  }
  .celsius {
    margin-right: 12px;
  }
  .active {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkBlue};
  }
`
const App = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unitTemp, setUnitTtemp] = useState('celsius');

  const fetchWeatherInfo = async (locationId) => {
    setLoading(true)
    try {
      const res = await fetch(`https://cors.bridged.cc/https://www.metaweather.com/api/location/${locationId}/`)
      const data = await res.json();
      setInfo(data);
    }
    catch(err) {
      console.log(err);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const lat = window.localStorage.getItem('latitute');
    const lon = window.localStorage.getItem('longitude');

    if (lat && lon ){
      (async () => {
        const locationId = await getLocationByCoords(lat, lon);
        fetchWeatherInfo(locationId);
      })();
    } else {
      fetchWeatherInfo(468739)
    }
  }, [])

  const toCelcius = () => {
    setUnitTtemp('celsius');
    window.localStorage.setItem('unitTemp', 'celsius');
  }

  const toFahrenheit = () => {
    setUnitTtemp('fahrenheit');
    window.localStorage.setItem('unitTemp', 'fahrenheit');
  }

  if(loading) {
    return(
      <Loading />
    )
  }
  
  return (
    <Theme>
      <Container>
        {
          info && 
          <>
            <Sidebar data={info.consolidated_weather[0]} cityName={info.title} fetchWeatherInfo={fetchWeatherInfo} unitTemp={unitTemp}/>
            <main>
              <TemperatureButtons>
                <button className={` btn celsius ${unitTemp === 'celsius' && 'active'}`} onClick={toCelcius}>°C</button>
                <button className={`btn farenheit ${unitTemp === 'fahrenheit' && 'active'}`} onClick={toFahrenheit}>°F</button>
              </TemperatureButtons>
              <Forecast data={info.consolidated_weather} unitTemp={unitTemp}/>
              <TodaysHighlights data={info.consolidated_weather[0]} />
              <Footer />
            </main>
            <GlobalStyle />
          </>
        }
        
      </Container>
    </Theme> 
  );
}

export default App;