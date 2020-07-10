import React from 'react';
import StickBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion'; 
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar:React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon />
      </SearchWrapper>

      <StickBox>
        <Body>
          <List
            title="Talvez voce curta"
            elements={[
              <FollowSuggestion name="Arroz" nickname="arrozbranco" />,
              <FollowSuggestion name="Feijão" nickname="feijãotropeiro" />,
              <FollowSuggestion name="Batata" nickname="batatadocampo" />,
            ]}
          />

          <List
            title="Talvez seja isso"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="Talvez seja isso"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="Talvez seja isso"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickBox>
    </Container>
  );
}

export default SideBar;