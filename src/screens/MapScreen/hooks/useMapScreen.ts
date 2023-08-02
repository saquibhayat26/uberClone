import {useEffect, useRef, useState} from 'react';
import type {UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';

const LATITUDE_DELTA = 0.002;
const LONGITUDE_DELTA = 0.008;

const useMapScreen = () => {
  const mapRef = useRef<MapView>(null);

  const [userLocation, setUserLocation] =
    useState<UserLocationChangeEvent['nativeEvent']['coordinate']>();

  useEffect(() => {
    if (userLocation) {
      mapRef.current?.animateToRegion({
        latitude: userLocation?.latitude,
        longitude: userLocation?.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [userLocation]);

  const handleUserLocationChange = ({
    nativeEvent: {coordinate},
  }: UserLocationChangeEvent) => {
    setUserLocation(coordinate);
  };
  return {
    models: {
      mapRef,
    },
    operations: {
      handleUserLocationChange,
    },
  };
};

export default useMapScreen;
