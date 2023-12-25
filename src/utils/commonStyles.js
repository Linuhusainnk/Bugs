import {StyleSheet} from 'react-native';
import {responsiveFont, responsiveScale} from '.';
import {myDefaultTheme} from './theme';

const {colors} = myDefaultTheme;

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  shadow: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowRadius: 15,
    shadowOpacity: 0.1,
  },
  curvedBorder: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: responsiveScale(1),
    borderRadius: responsiveScale(10),
  },
  titleText: {
    fontSize: responsiveFont(18),
    color: colors.text,
    includeFontPadding: false,
  },
  subText: {
    fontSize: responsiveFont(12),
    includeFontPadding: false,
    color: colors.text,
  },
  descriptionText: {
    fontSize: responsiveFont(12),
    color: colors.text,
    includeFontPadding: false,
  },
});
