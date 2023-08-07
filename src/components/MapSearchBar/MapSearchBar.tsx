import {View, Text} from 'react-native';
import React from 'react';
import {
  SearchBarContainer,
  Square,
  StyledPressable,
} from './MapSearchBar.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomText from '../../common/CustomText/CustomText';

type MapSearchBarProps = {
  onPress: () => void;
};

const MapSearchBar = (props: MapSearchBarProps) => {
  const insets = useSafeAreaInsets();
  const text = 'where to ?';
  return (
    <SearchBarContainer insets={insets}>
      <StyledPressable onPress={props.onPress}>
        <Square />
        <CustomText children={text} variant="body" />
      </StyledPressable>
    </SearchBarContainer>
  );
};

export default MapSearchBar;
