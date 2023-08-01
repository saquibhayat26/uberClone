import {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';

export const RequestLocationPermission = () => {
  useEffect(() => {
    (async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (!granted) {
        console.log('location permission denied');
        return;
      }
    })();
  }, []);
  return null;
};
