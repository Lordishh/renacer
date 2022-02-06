import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
import AboutImg from '../assets/images/about.png';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__img {
    width: 600px;
    margin-right: 5rem;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 350px;
  }
  .about__desc {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__img {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 3rem;
      max-width: 400px;
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img">
            <img src={AboutImg} alt="Artistic" />
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">
              ¿Quiénes somos?
            </ParagraphText>
            <SectionTitle className="about__title">
              Trayectoría y objetivos
            </SectionTitle>
            <ParagraphText className="about__desc">
              Renacer es un centro de pilates con siete años de trayectoría.
              Nuestro objetivo es ayudar a las personas a encontrar un
              equilibrio, buscando aumentar la fuerza, la flexibilidad,
              concentración y bienestar en general.
            </ParagraphText>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Contactarse
            </PrimaryButton>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
