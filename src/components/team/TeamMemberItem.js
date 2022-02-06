import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../paragraphTexts/ParagraphText';

const TeamMemberItemStyles = styled.div`
  .teamMember__img {
    margin-bottom: 4rem;
    img {
      border-radius: 18px;
      max-height: 400px;
      /* border: 3px solid white; */
      box-shadow: 0px 0px 50px
        ${({ theme: { theme } }) =>
          theme === themeList.light
            ? 'var(--darkBlue_2)'
            : 'var(--lightBlue_1)'};
    }
  }
  .teamMember__phone,
  .teamMember__name {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  @media only screen and (max-width: 768px) {
    .teamMember__img {
      margin-bottom: 1rem;
      img {
        max-width: 250px;
      }
    }
  }
`;

const TeamMemberItem = ({ img, name, title, phone }) => (
  <TeamMemberItemStyles id="team">
    <div className="teamMember__img">
      <img src={img} alt={name} />
    </div>
    <ParagraphText className="teamMember__name">{name}</ParagraphText>
    <ParagraphText className="subtitle">{title}</ParagraphText>
    <ParagraphText className="teamMember__phone">{phone}</ParagraphText>
  </TeamMemberItemStyles>
);

export default TeamMemberItem;
