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
  const restaurantsContext = useContext(RestaurantsContext);
  console.log(restaurantsContext);
  return (
    <>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>

      <FlatList
        data={restaurantsContext.restaurants}
        renderItem={() => <RestaurantsInfoCard />}
        keyExtractor={(item) => item}
      />
    </>
  );
};

export default RestaurantsScreen;
