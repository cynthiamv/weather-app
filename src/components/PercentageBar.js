import React from 'react';
import styled from 'styled-components';

const PercentageBarContainer = styled.div`
  width: 80%;
  margin: 0 auto 20px auto;
  position: relative;
  span {
    color: ${props => props.theme.colors.gray2};
    font-size: 0.75rem;
    font-weight: 700;
  }
  .percentages {
    display: flex;
    justify-content: space-between;
  }
  .percentage-bar {
    background-color: ${props => props.theme.colors.white};
    width: 100%;
    height: 8px;
    border-radius: 8px;
    margin: 2px 0;
  }
  .percentage-symbol {
    position: absolute;
    right: 0;
  }
`
const Bar = styled.div ` 
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ percentage }) => `${percentage}%`};
  height: inherit;
  border-radius: inherit;
`

const PercentageBar = ({ bgColor, percentage }) => {

  return (
    <PercentageBarContainer>
      <div className="percentages">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className="percentage-bar">
        <Bar bgColor={bgColor} percentage={percentage} />
      </div>
      <span className="percentage-symbol">%</span>
    </PercentageBarContainer>
  )
}

export default PercentageBar;