import {View, Text} from 'react-native';
import React from 'react';
import {StyledPressable} from './RoundButton.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';

interface RoundButtonProps {
  icon: 'menu-outline' | 'arrow-back-outline';
  onPress?: () => void;
}

const RoundButton = ({icon, onPress}: RoundButtonProps) => {
  const insets = useSafeAreaInsets();
  return (
    <StyledPressable
      insets={insets}
      onPress={onPress}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <Icon name={icon} size={scale(26)} color={'black'} />
    </StyledPressable>
  );
};

export default RoundButton;
