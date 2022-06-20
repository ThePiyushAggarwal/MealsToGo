import React from 'react';
import styled from 'styled-components/native';
import { FlatList, Platform, StatusBar } from 'react-native';
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

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <SearchBar />
    </SearchContainer>

    <FlatList
      data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
      renderItem={() => <RestaurantsInfoCard />}
      keyExtractor={(item) => item.id}
      // contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);

export default RestaurantsScreen;
