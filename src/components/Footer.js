import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import ParagraphText from './paragraphTexts/ParagraphText';

const FooterStyles = styled.footer`
  background-color: var(--darkBlue_4);
  padding: 10rem 0;
  .footer__wrapper {
    text-align: center;
  }
  .logo {
    font-family: 'Mochiy Pop One', sans-serif;
    font-size: 3rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    color: var(--mediumSlateBlue);
  }
  .footer__desc {
    color: var(--white);
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .footer__links {
    margin-bottom: 2rem;
    li {
      display: inline-block;
      margin: 0 1rem;
    }
    a {
      font-size: 1.6rem;
      color: var(--lightBlue_1);
      line-height: 1.5rem;
    }
    li:hover {
      a {
        color: var(--mediumSlateBlue);
        text-decoration: underline;
      }
    }
  }
  .footer__copyright {
    font-size: 1.2rem;
    color: var(--lightBlue_1);
  }
  @media only screen and (mx-width: 768px) {
    .footer__links {
      a {
        font-size: 1.4rem;
      }
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="container">
      <div className="footer__wrapper">
        <Link to="hero" smooth>
          <h1 className="logo">Renacer</h1>
        </Link>

        <ParagraphText className="footer__desc">
          Alumbra el mañana con el presente
        </ParagraphText>
        <div className="footer__links">
          <ul>
            <li>
              <Link to="hero" smooth>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="services" smooth>
                Entrenamientos
              </Link>
            </li>
            <li>
              <Link to="pilates" smooth>
                Beneficios
              </Link>
            </li>
            <li>
              <Link to="about" smooth>
                Nosotras
              </Link>
            </li>
            <li>
              <Link to="contact" smooth>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <ParagraphText className="footer__copyriht">
          © Copyright 2022 | Todos los derechos reservados | Diseñado por
          <a href="https://github.com/Lordishh"> Enuel Monzón</a>.
        </ParagraphText>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;
