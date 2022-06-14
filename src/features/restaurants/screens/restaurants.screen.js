import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RestaurantsInfoCard from '../components/restaurant-info-card.component';

const isAndroid = Platform.OS === 'android';

const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchBar}>
      <SearchBar />
    </View>
    <View style={styles.first}>
      <RestaurantsInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchBar: {
    padding: 16,
  },
  first: {
    backgroundColor: 'pink',
    flex: 1,
  },
});

export default RestaurantsScreen;
