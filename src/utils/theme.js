// import {DefaultTheme} from '@react-navigation/native';
import {responsiveScale} from '.';

export const myDefaultTheme = {
  // ...DefaultTheme,
  dark: false,
  spacing: responsiveScale(15),
  colors: {
    // ...DefaultTheme.colors,
    primary: '#EE7623',
    secondary: '#323232',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#383A42',
  },
};
