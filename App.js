import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'

const isAndroid = Platform.OS === 'android'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.first}>
          <Text>FBI open up!</Text>
        </View>
        <View style={styles.second}>
          <Text>Jeex</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  first: {
    padding: 16,
    backgroundColor: 'green',
  },
  second: {
    backgroundColor: 'pink',
    flex: 1,
  },
})
