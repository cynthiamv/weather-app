import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.gray2};
  padding: 20px 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  a:hover {
    color: ${props => props.theme.colors.pink};
    text-decoration: underline;
  }
  @media (min-width: 992px) {
    padding: 50px 24px;
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <p>Created by <a href="https://github.com/cynthiamv">Cynthia Vico Vacca</a> - devChallenges.io</p>
    </FooterStyled>
  )
}

export default Footer;