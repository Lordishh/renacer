import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import HeroTitle from './titles/HeroTitle';
import HeroImg from '../assets/images/hero.png';

const HeroSectionStyles = styled.div`
  padding-top: calc(var(--header-height) + 10px);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
  .hero__info {
    flex: 3;
  }
  .hero__img {
    flex: 4;
    img {
      object-fit: contain;
    }
  }
  .hero__title {
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
  .hero__desc {
    margin-bottom: 1.5rem;
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
    .hero__img {
      display: flex;
      justify-content: flex-end;
      img {
        max-width: 400px;
        margin-top: auto;
      }
    }
  }
`;

const HeroSection = () => (
  <HeroSectionStyles id="hero">
    <div className="container">
      <div className="hero__wrapper">
        <div className="hero__info">
          <HeroTitle className="hero__title">
            la buena condición física
          </HeroTitle>
          <ParagraphText className="hero__desc">
            es el primer requisito para la felicidad
          </ParagraphText>
          <PrimaryButton>Inscribirse</PrimaryButton>
        </div>
        <div className="hero__img">
          <img src={HeroImg} alt="Renacer" />
        </div>
      </div>
    </div>
  </HeroSectionStyles>
);

export default HeroSection;
