import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 0 ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RatingStateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[2]} 0;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const RestaurantState = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
