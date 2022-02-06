import React from 'react';
import styled from 'styled-components';
import { RiHeartsFill } from 'react-icons/ri';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">
          Nuestros servicios
        </SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiHeartsFill />}
            title="Pilates Reformer"
            desc='Es una gimnasia en la que se trabaja combinando cuerpo, mente y alma con la ayuda de una camilla perfectamente diseñada "reformer" '
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="Pilates Funcional"
            desc="En la modalidad Funcional los alumnos trabajan con diferentes elementos, convirtiendo esta clase en un circuito entretenido"
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="Pilates Mat"
            desc="Pilates en colchoneta (como quizás hayas oído por ahí). Consiste en la realización de los ejercicios del Método en suelo sin ayuda de ninguna máquina de Pilates"
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
