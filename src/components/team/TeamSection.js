import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TeamMemberItem';

// Team Images
import teamMember1 from '../../assets/images/instruc_1.png';
import teamMember2 from '../../assets/images/instruc_2.png';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    text-align: center;
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

const TeamSection = () => (
  <TeamSectionStyles>
    <div className="container">
      <div className="team__wrapper">
        <div className="team__info">
          <ParagraphText className="team__subtitle">
            Nuestro equipo
          </ParagraphText>
          <SectionTitle className="about__title">
            El mejor equipo disponible
          </SectionTitle>
        </div>
        <div className="team__members">
          <TeamMemberItem
            img={teamMember1}
            name="Ariadna"
            title="(Instructora de pilates)"
          />

          <TeamMemberItem
            img={teamMember2}
            name="Marcela"
            title="(Instructora de pilates)"
          />
        </div>
      </div>
    </div>
  </TeamSectionStyles>
);

export default TeamSection;
