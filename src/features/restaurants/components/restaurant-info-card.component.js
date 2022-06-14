import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 0 ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    //   icon,
    photos = [
      'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
    ],
    address = '100 random street',
    //   isOpenNow = true,
    //   rating = 4,
    //   isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantsInfoCard;
