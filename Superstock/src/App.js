import 'react-native-gesture-handler';
import React from 'react';
import {SplashScreen, Register} from './pages';
import {NavigationContainer} from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
  );
};

export default App;
