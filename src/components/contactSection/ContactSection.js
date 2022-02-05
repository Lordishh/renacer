import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import PrimaryButton from '../buttons/PrimaryButton';
import SectionTitle from '../titles/SectionTitle';
import FormField from './FormField';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .contact__info {
    margin-bottom: 4rem;
  }
  .contact__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__form--fullWidth {
      grid-column: span 2;
    }
    .contact__submit {
      width: max-content;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact__form {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      .contact__form--fullWidth {
        grid-column: span 1;
      }
    }
  }
`;

const ContactSection = () => (
  <ContactSectionStyles id="contact">
    <div className="container">
      <div className="contact__wrapper">
        <div className="contact__info">
          <SectionTitle>Déjanos tu mensaje</SectionTitle>
          <ParagraphText>Nos encantaría saber de usted</ParagraphText>
        </div>
        <form className="contact__form">
          <FormField
            className="contact__form--fullWidth"
            label="Nombre"
            id="name"
            type="text"
            name="name"
            placeholder="ingrese su nombre"
            required
          />

          <FormField
            label="Correo electrónico"
            id="email"
            type="email"
            name="email"
            placeholder="ejemplo@gmail.com"
            required
          />

          <FormField
            label="Número"
            id="phone"
            type="number"
            name="phone"
            placeholder="Ej. +543489444444"
            required
          />

          <FormField
            className="contact__form--fullWidth"
            label="Mensaje"
            rows={6}
            id="message"
            name="message"
            required
          />
          <PrimaryButton
            type="submit"
            className="contact__submit"
            buttonType="button"
          >
            Enviar
          </PrimaryButton>
        </form>
      </div>
    </div>
  </ContactSectionStyles>
);

export default ContactSection;
