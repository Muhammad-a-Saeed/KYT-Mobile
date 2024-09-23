import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // alignItems: 'center',
  },
  fg1: {
    flexGrow: 1,
    padding: 20,
    // justifyContent:'center'
  },
  wrapper: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
    // justifyContent: 'space-evenly',
  },

  etext: {
    width: widthPixel(390),
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.7),
    color: colors.lightText,
  },

  title: {
    fontSize: 20,
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextSemiBold,
  },
  custominput: {
    gap: 8,
    marginVertical: 5,
  },

  pv30: {
    // justifyContent: 'center',
    marginTop: 100,
    alignItems: 'center',
  },
});
