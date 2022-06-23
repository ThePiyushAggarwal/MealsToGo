import React from 'react';
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

// Styled Components
const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

function SafeAreaComponent({ children }) {
  return <SafeArea>{children}</SafeArea>;
}

export default SafeAreaComponent;
