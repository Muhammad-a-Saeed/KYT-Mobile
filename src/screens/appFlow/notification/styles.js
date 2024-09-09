import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  maincontainer: {
    flex: 1,
    // marginTop: -30,
  },
  wrapper: {
    flexGrow: 1,
    padding: 10,
    gap: 10,
    // backgroundColor: 'red',
  },
  Today: {
    color: colors.lightText,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.9),
  },
});
