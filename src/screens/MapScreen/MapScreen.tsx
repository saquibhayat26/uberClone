import React from 'react';
import {Container, StyledMapView} from './MapScreen.style';
import useMapScreen from './hooks/useMapScreen';
import RoundButton from '../../components/RoundButton/RoundButton';
import {StyledPressable} from '../../components/MapSearchBar/MapSearchBar.style';

const MapScreen = () => {
  const {models, operations} = useMapScreen();
  const handlePress = () => {};
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
      <StyledPressable />
    </Container>
  );
};

export default MapScreen;
