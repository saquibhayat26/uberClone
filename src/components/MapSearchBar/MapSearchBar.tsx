import {View, Text} from 'react-native';
import React from 'react';
import {
  SearchBarContainer,
  Square,
  StyledPressable,
} from './MapSearchBar.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type MapSearchBarProps = {
  onPress: () => void;
};

const MapSearchBar = (props: MapSearchBarProps) => {
  const insets = useSafeAreaInsets();
  return (
    <SearchBarContainer insets={insets}>
      <StyledPressable onPress={props.onPress}>
        <Square />
      </StyledPressable>
    </SearchBarContainer>
  );
};

export default MapSearchBar;
