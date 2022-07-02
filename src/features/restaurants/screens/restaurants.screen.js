import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RestaurantsInfoCard from '../components/restaurant-info-card.component';
import RestaurantsContext from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>

      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantsInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};

export default RestaurantsScreen;
