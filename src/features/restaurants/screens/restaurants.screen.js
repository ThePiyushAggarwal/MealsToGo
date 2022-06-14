import React from 'react';
import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RestaurantsInfoCard from '../components/restaurant-info-card.component';

const isAndroid = Platform.OS === 'android';

// Styled Components
const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCardsContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <SearchBar />
    </SearchContainer>
    <RestaurantCardsContainer>
      <RestaurantsInfoCard />
    </RestaurantCardsContainer>
  </SafeArea>
);

export default RestaurantsScreen;
