import {Platform} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const responsiveScale = value =>
  moderateScale(Platform.OS === 'ios' ? value : value);

export const responsiveFont = value =>
  moderateScale(Platform.OS === 'ios' ? value : value);
