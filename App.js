import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './components/Onboarding';
import * as Font from 'expo-font';
//import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });
};

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //       onError={(error) => console.warn(error)}
  //     />
  //   );
  // }
  return (
    <View style={styles.container}>
      <Onboarding/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
