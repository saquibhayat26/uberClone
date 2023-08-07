import React from 'react';
import {Container, StyledMapView} from './MapScreen.style';
import useMapScreen from './hooks/useMapScreen';
import RoundButton from '../../components/RoundButton/RoundButton';
import MapSearchBar from '../../components/MapSearchBar/MapSearchBar';

const MapScreen = () => {
  const {models, operations} = useMapScreen();
  const handlePress = () => {
    console.log('button pressed');
  };
  return (
    <Container>
      <StyledMapView
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        ref={models.mapRef}
        showsMyLocationButton={false}
        showsCompass={false}
      />
      <RoundButton icon="menu-outline" />
      <MapSearchBar onPress={handlePress} />
    </Container>
  );
};

export default MapScreen;
