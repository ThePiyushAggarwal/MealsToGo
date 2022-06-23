import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RestaurantsInfoCard from '../components/restaurant-info-card.component';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => (
  <>
    <SearchContainer>
      <SearchBar />
    </SearchContainer>

    <FlatList
      data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
      renderItem={() => <RestaurantsInfoCard />}
      keyExtractor={(item) => item.id}
    />
  </>
);

export default RestaurantsScreen;
