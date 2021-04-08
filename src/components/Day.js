import React from 'react';
import getImg from '../utils/getImg.js';
import formattedDate from '../utils/formattedDate.js';
import celsiusToFahrenheit from '../utils/celsiusToFahrenheit.js';
import styled from 'styled-components';

const DayStyled = styled.div`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  height: 177px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  h3, p {
    font-size: 1rem;
    font-weight: 500;
  }
  img {
    width: 45%;
    margin-right: 5px;
  }
  .temperatures {
    display: flex;
    justify-content: center;
  }
  .min-temp {
    color: ${props => props.theme.colors.gray2};
    margin-left: 1rem;
  }
`
const Day = ({ index, date, icon, description, maxTemp, minTemp, unitTemp }) => {
	const dailyDate = formattedDate(date);
	const dailyIcon = getImg(icon);

	return (
		<DayStyled>
			<h3>{!index ? 'Tomorrow' : dailyDate}</h3>
			<img src={dailyIcon} alt={description}/>
			<div className="temperatures">
				<p className="max-temp">
				{unitTemp === 'celsius' ? maxTemp.toFixed(0) : celsiusToFahrenheit(maxTemp)} 
				{unitTemp === 'celsius' ? '°C' : '°F'}
				</p>
				<p className="min-temp">
				{unitTemp === 'celsius' ? minTemp.toFixed(0) : celsiusToFahrenheit(minTemp)} 
				{unitTemp === 'celsius' ? '°C' : '°F'}
				</p>
			</div>
		</DayStyled>
	)
}

export default Day;