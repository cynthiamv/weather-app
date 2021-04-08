import React from 'react';
import styled from 'styled-components';

const LoadingStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #100E1D;
  .spinner {
    border: .2em solid #e94560;
    border-bottom-color: transparent;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    -webkit-animation: spin 1.2s linear infinite;
    animation: 1.2s spin linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  p {
    color: #e94560;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
  }
`
const Loading = () => {
  return(
    <LoadingStyled>
      <div className="spinner"></div>
      <p>Loading...</p>
    </LoadingStyled>
  )
}

export default Loading;