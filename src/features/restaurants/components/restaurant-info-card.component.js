import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    //   icon,
    photos = [
      'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
    ],
    //   address = '100 random street',
    //   isOpenNow = true,
    //   rating = 4,
    //   isClosedTemporarily,
  } = restaurant;

  return (
    <Card>
      <Card.Title title={name} subtitle="Restaurant" left={LeftContent} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default RestaurantsInfoCard;
