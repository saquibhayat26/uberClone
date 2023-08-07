import React from 'react';
import {BodyText} from './CustomText.style';

interface CustomTextProps {
  variant: 'body';
  children: String;
}

const getComponent = (variant: CustomTextProps['variant']) => {
  switch (variant) {
    case 'body':
      return BodyText;
    default:
      return BodyText;
  }
};

const CustomText = ({variant, children}: CustomTextProps) => {
  const Component = getComponent(variant);
  return <Component>{children}</Component>;
};

export default CustomText;
