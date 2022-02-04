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
            desc="Esta clase es para un máximo de 6 personas, cada alumno tiene su propio Reformer y toda la clase trabaja en su equipo."
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="Pilates Circuito"
            desc="En la modalidad Circuito los alumnos trabajan con diferentes equipamientos. "
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="Clases personalizadas"
            desc="Esta clase está dirigida para las personas que necesitan un seguimiento específico."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
