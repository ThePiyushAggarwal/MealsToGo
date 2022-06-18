import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
  Address,
  Icon,
  Info,
  Rating,
  RatingStateContainer,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantState,
} from './restaurant-info-card.styles';

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
        <Text variant="label">{name}</Text>
        <RatingStateContainer>
          <Rating>
            {ratingsArray.map((_, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </Rating>
          <RestaurantState>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </RestaurantState>
        </RatingStateContainer>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantsInfoCard;
