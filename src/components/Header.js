import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-hight);
  background-color: var(--lightBlue_1);
  border-bottom: 1px solid var(--mediumSlateBlue);
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .logo {
    font-family: 'Faster One', cursive;
    font-size: 3rem;
    color: var(--darkBlue_2);
  }
  nav ul li {
    display: inline-block;
    margin: 0 0.5rem;
    a {
      font-size: 1.6rem;
      font-weight: 500;
      display: inline-block;
      padding: 0.5rem 1rem;
      color: var(--darkBlue_2);
    }
    &:hover {
      a {
        text-decoration: underline;
      }
    }
  }
`;

const Header = () => (
  <HeaderStyles>
    <div className="container">
      <div className="navigation">
        <h1 className="logo">Renacer</h1>
        <div className="navMenu">
          <nav>
            <ul>
              <li>
                <Link to="inicio">Inicio</Link>
              </li>
              <li>
                <Link to="entrenamientos">Entrenamientos</Link>
              </li>
              <li>
                <Link to="nosotras">Nosotras</Link>
              </li>
              <li>
                <Link to="contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </HeaderStyles>
);

export default Header;
