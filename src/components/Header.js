import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import ThemeSwitcher from './ThemeSwitcher';

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
  .navMenu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menuIcon,
  .closeIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 10px;
    padding: 3px;
    svg {
      color: var(--darkBlue_1);
    }
    &:hover {
      background-color: #8080803b;
      border-radius: 4px;
    }
  }
  .closeIcon {
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover {
      background-color: #8080803b;
      svg {
        color: var(--white);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      width: 90%;
      max-width: 250px;
      top: 0;
      right: 0%;
      background-color: var(--lightBlue_2);
      height: 100vh;
      z-index: 100;
      transform: translateX(100%);
      transition: 1.5s ease-in-out transform;
      overflow: hidden;
    }
    nav.open {
      box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
      transform: translateX(0);
    }
    nav ul li {
      display: block;
      text-align: right;
      width: 100%;
      margin: 0.5rem 0;
      a {
        display: block;
        width: 100%;
      }
    }
  }
`;

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.matchMedia('(max-width: 768px').matches);
    });
  }, []);

  return (
    <HeaderStyles>
      <div className="container">
        <div className="navigation">
          <h1 className="logo">Renacer</h1>
          <div className="navMenu">
            <nav className={isMobile && isNavOpen ? 'open' : undefined}>
              {isMobile && (
                <div
                  className="closeIcon"
                  tabIndex="0"
                  role="button"
                  onClick={() => setIsNavOpen(false)}
                  onKeyDown={() => setIsNavOpen(false)}
                >
                  <FiX />
                </div>
              )}
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
            <ThemeSwitcher />
            {isMobile && (
              <div
                className="menuIcon"
                tabIndex="0"
                role="button"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <FiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
