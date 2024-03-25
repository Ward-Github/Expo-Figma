import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { useFonts } from 'expo-font';
import Toast from 'react-native-toast-message';

function App() {
  const [fontsLoaded] = useFonts({
    Azonix: require('./fonts/Azonix.otf'), // Adjust the path if necessary
  });

  if (!fontsLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <MainContainer/>
      <Toast/>
    </>
  );
}

export default App;