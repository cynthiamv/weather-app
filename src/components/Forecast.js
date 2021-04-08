import React from 'react';
import styled from 'styled-components';
import Day from './Day';

const ForecastStyled = styled.section`
  background-color: ${props => props.theme.colors.darkBlue};
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(120px,1fr));
  grid-gap: 0.8rem;
  gap: 0.8rem;
  padding: 20px;
  @media (min-width: 375px) {
    padding: 40px;
    grid-gap: 1.625rem;
    gap: 1.625rem;
  }
  @media (min-width: 992px) {
    padding: 20px 30px;
  }
  @media (min-width: 1205px) {
    padding: 20px 40px;
  }
  @media (min-width: 1440px) {
    padding: 40px 7.5rem;
  }
`

const Forecast = ({ data, unitTemp }) => {
  const filteredDays = data.slice(1, data.length);

  return (
    <ForecastStyled>
      {
        filteredDays.map((day, i) =>
          <Day 
            key={day.id}
            index={i}
            date={day.applicable_date}
            icon={day.weather_state_abbr}
            description={day.weather_state_name}
            maxTemp={day.max_temp}
            minTemp={day.min_temp}
            unitTemp={unitTemp}
          />
        )
      }
    </ForecastStyled>
  )
} 

export default Forecast;