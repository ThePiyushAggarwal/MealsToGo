import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';

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

const RatingStateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[2]} 0;
`;

const Rating = styled.View`
  flex-direction: row;
`;

const RestaurantState = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ClosedLabel = styled.Text`
  color: red;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

// Component
const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  // This array consists of rating number of undefineds
  const ratingsArray = [...Array(Math.floor(rating))];

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <RatingStateContainer>
          <Rating>
            {ratingsArray.map((e, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </Rating>
          <RestaurantState>
            {isClosedTemporarily && (
              <ClosedLabel>CLOSED TEMPORARILY</ClosedLabel>
            )}
            <Spacer variant="left.large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant="left.large" />
            <Icon source={{ uri: icon }} />
          </RestaurantState>
        </RatingStateContainer>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantsInfoCard;
