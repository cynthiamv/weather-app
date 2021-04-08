import React, { useState } from 'react';
import styled from 'styled-components';
import Forecast from './Forecast';
import TodaysHighlights from './TodaysHightlights';

const MainStyled = styled.main`
  background-color: ${props => props.theme.colors.darkBlue};
  .convert-temp-container {
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
    }
    .celsius {
      margin-right: 12px;
    }
  }
`

const Main = ({ data }) => {
  const [unitTemp, setUnitTtemp] = useState('celsius');

  const toCelcius = () => {
    setUnitTtemp('celsius');
    window.localStorage.setItem('unitTemp', 'celsius');
    console.log('Cambiar a celsius')
  }

  const toFahrenheit = () => {
    setUnitTtemp('fahrenheit');
    window.localStorage.setItem('unitTemp', 'fahrenheit');
    console.log('Cambiar a fahrenheit')
  }

  return (
    <MainStyled>
      <div className="convert-temp-container">
        <button className="btn celsius" onClick={toCelcius}>°C</button>
        <button className="btn farenheit" onClick={toFahrenheit}>°F</button>
      </div>
      <Forecast props={data} />
      <TodaysHighlights props={data[0]} />
    </MainStyled>
  )
}

export default Main;