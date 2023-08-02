import styled from '@emotion/native';
import {Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import {EdgeInsets} from 'react-native-safe-area-context';

interface SearchBarContainerProps {
  insets: EdgeInsets;
  onPress?: () => void;
}

export const SearchBarContainer = styled.View<SearchBarContainerProps>(
  ({insets}) => {
    return {
      position: 'absolute',
      top: insets.top + scale(78),
      alignSelf: 'center',
    };
  },
);

export const StyledPressable = styled.Pressable(({theme}) => {
  return {
    backgroundColor: theme.colors.common.background,
    width: Dimensions.get('window').width - scale(50),
    minHeight: scale(42),
    alignItems: 'center',
    padding: scale(16),
    flexDirection: 'row',
    ...theme.shadows.primary(theme),
  };
});

export const Square = styled.View(({theme}) => {
  return {
    width: scale(8),
    height: scale(8),
    backgroundColor: theme.colors.components.mapSearchBar.squareColor,
  };
});
