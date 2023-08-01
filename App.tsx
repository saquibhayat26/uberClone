import {View, Text} from 'react-native';
import React from 'react';
import MapScreen from './src/screens/MapScreen/MapScreen';
import {RequestLocationPermission} from './src/service/LocationPermissionService';
import ThemeProvider from './src/theme/ThemeProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MapScreen />
        <RequestLocationPermission />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
