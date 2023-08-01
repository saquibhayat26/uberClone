import {View, Text} from 'react-native';
import React from 'react';
import {Container, StyledMapView} from './MapScreen.style';
import useMapScreen from './hooks/useMapScreen';
import RoundButton from '../../components/RoundButton/RoundButton';

const MapScreen = () => {
  const {models, operations} = useMapScreen();
  console.log(
    '🚀 ~ file: MapScreen.tsx:8 ~ MapScreen ~ operations:',
    operations,
  );
  return (
    <Container>
      <StyledMapView
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        ref={models.mapRef}
        showsMyLocationButton={false}
        showsCompass={false}
      />
      <RoundButton />
    </Container>
  );
};

export default MapScreen;
