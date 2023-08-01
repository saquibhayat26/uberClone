import styled from '@emotion/native';
import type {EdgeInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

interface StyledPressableProps {
  insets: EdgeInsets;
}

export const StyledPressable = styled.Pressable<StyledPressableProps>(
  ({theme, insets}) => {
    return {
      width: scale(45),
      height: scale(45),
      borderRadius: scale(45 / 2),
      position: 'absolute',
      backgroundColor: theme.colors.common.background,
      top: insets.top || scale(15),
      left: scale(20),
      //   ...theme.shadows.primary(theme),
      shadowColor: theme.colors.common.shadowDefault,
      shadowOffset: {
        width: 0,
        height: scale(-2),
      },
      shadowOpacity: 0.8,
      shadowRadius: scale(7.5),
      elevation: 10,
    };
  },
);
