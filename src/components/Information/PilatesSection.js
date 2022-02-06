import React from 'react';
import { CgGym } from 'react-icons/cg';
import styled from 'styled-components';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from '../services/ServiceItem';

const PilatesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .pilates__title {
    margin-bottom: 3rem;
  }
  .pilates__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .pilates__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

const PilatesSection = () => (
  <PilatesSectionStyles id="pilates">
    <div className="container">
      <SectionTitle className="pilates__title">
        Beneficios de Pilates
      </SectionTitle>
      <div className="pilates__items">
        <ServiceItem
          icon={<CgGym />}
          title="Mejora la respiración"
          desc="La coordinación entre la respiración y el movimiento mejora la salud de tu corazón y tus pulmones, favorece la capacidad pulmonar, reduce tu presión arterial, incrementa tu energía, mejora tu circulación y te brinda la posibilidad de relajarte en momentos tensos."
        />
        <ServiceItem
          icon={<CgGym />}
          title="Alineación correcta de tu cuerpo"
          desc="Con el fortalecimiento de los músculos de base, el método pilates logra alinear el cuerpo, mejorar tu postura y la movilidad articular."
        />
        <ServiceItem
          icon={<CgGym />}
          title="Aumenta tu fuerza"
          desc="Pilates incrementa y tonifica tus músculos, para lograr la aptitud funcional de cada uno de ellos. Se crean músculos fuertes y largos mediante contracciones excéntricas."
        />
      </div>
      <div className="pilates__items">
        <ServiceItem
          icon={<CgGym />}
          title="Reduce el estrés"
          desc="Hacer Pilates luego de un día de trabajo ayudará a relajarte y a liberarte del estrés, te ayuda a dormir bien por las noches, relaja los músculos tensionados y libera endorfinas que mejoran tu estado de ánimo."
        />
        <ServiceItem
          icon={<CgGym />}
          title="Mayor conciencia y conexión cuerpo-mente"
          desc="El secreto del Pilates es que se practica cada movimiento con atención total de la mente. De esta forma, cuerpo y mente se unen para lograr el mayor beneficio"
        />
        <ServiceItem
          icon={<CgGym />}
          title="Se adapta a cualquier condición física"
          desc="La práctica de Pilates es beneficiosa para todas las personas. Tanto si recién empiezas a ejercitarte como si eres toda una atleta, o si estás embarazada o algo mayor. Pilates se adapta a vos gracias a sus miles de posibles ejercicios."
        />
      </div>
    </div>
  </PilatesSectionStyles>
);

export default PilatesSection;
