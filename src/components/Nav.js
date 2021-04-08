import React, { useState } from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
  background-color: ${props => props.theme.colors.blue};
  position: fixed;
  width: 100vw;
  height: 100%;
  z-index: 1;
  .nav-container {
    position: relative;
    padding: 12px;
    .close-nav {
      background-color: transparent;
      border: none;
      position: absolute;
      right: 12px;
      .material-icons.close {
        color: ${props => props.theme.colors.white};
      }
    }
    form {
      margin: 40px 0 0 0;
    }
    .form-container {
      position: relative;
      input {
        position: relative;
        margin-right: 12px;
        min-width: 71%;
        font-size: 1rem;
        font-weight: 500;
        padding: 14px 3px 14px 36px;
        border: 1px solid ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.white};
        background-color: transparent;
        &::placeholder {
          color: ${props => props.theme.colors.gray4};
        }
      }
      .material-icons.search {
        position: absolute;
        left: 8px;
        bottom: 14px;
        color: ${props => props.theme.colors.gray4};
        font-size: 1.375rem;
      }
      button {
        min-width: 20%;
        font-size: 1rem;
        font-weight: 600;
        padding: 14px;
        border: none;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.pink};
      }
    }
    .results-container {
      max-height: 70vh;
      padding-top: 38px;
      display: flex;
      width: 100%;
      ul {
        overflow-y: scroll;
        width: 100%;
        scrollbar-color: #e94560 darkgrey;
        li {
          color: ${props => props.theme.colors.white};
          padding: 23px 10px 23px 12px;
          margin-bottom: 25px;
          cursor: pointer;
          font-weight: 500;
          &:hover {
            border: 1px solid ${props => props.theme.colors.gray4};
            display: flex;
            justify-content: space-between;
            align-items: center;
            .chevron-right {
              display: block;
              font-size: 1.125rem;
              color: ${props => props.theme.colors.gray4};
            }
          }
          .chevron-right {
            display: none;
          }
        }
        &::-webkit-scrollbar {
          width: 1em;
          background-color: darkgrey;
          border-radius: 8px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #e94560;
          height: 30%;
          border-radius: 8px;
        }

      }
    }
  }
  @media (min-width: 375px) {
    button {
      min-width: 25%;
    }
  }
  @media (min-width: 992px) {
    width: 34%;
    li {
      margin-right: 5px;
    }
  }
`

const Nav = ({ showNav, setShowNav, fetchWeatherInfo }) => {
  const [query, setQuery] = useState('');
  const [locations, setLocations] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://cors.bridged.cc/https://www.metaweather.com/api/location/search/?query=${query}`)
      const data = await res.json();
      setLocations(data);
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <>
    { showNav &&
      <NavStyled>
        <div className="nav-container">
          <button type="button" className="btn close-nav" onClick={() => setShowNav(!showNav)}> 
            <span className="material-icons close">clear</span>
          </button>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input type="text" placeholder="search location" value={query} onChange={({target}) => setQuery(target.value)} />             
              <span className="material-icons search">search</span>
              <button type="submit">Search</button>
            </div>
          </form>
          { locations && locations.length > 0 && (
            <div className="results-container">
              <ul>
                { locations.map(location => (
                  <li
                    key={location.woeid}
                    onClick={() => {
                      setShowNav(false)
                      fetchWeatherInfo(location.woeid)
                    }}
                  >
                    {location.title} 
                    <span className="material-icons chevron-right">chevron_right</span>
                  </li>
                ))
                }
              </ul>
            </div>
          )}
        </div>
      </NavStyled>
    }
    </>
  )
}

export default Nav;