import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
    alignContent: 'center',
  },
  Header: {},
  mainlogo: {
    marginTop: StatusBar.currentHeight + 49,
    alignSelf: 'center',
    width: widthPixel(100),
    height: widthPixel(85),
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  fg1: {
    flexGrow: 1,
    padding: widthPixel(20),
  },
  wrapper: {
    flex: 1,
    // marginTop: 60,
  },
  title: {
    fontSize: responsiveFontSize(2.6),
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextBold,
  },
  title2: {
    width: widthPixel(388),
    fontSize: responsiveFontSize(1.8),
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextRegular,
  },
  custominput: {},
  pv30: {
    paddingVertical: heightPixel(30),
    justifyContent: 'center',
    alignItems: 'center',
  },

  ormain: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  line1: {
    width: widthPixel(110),
    borderBottomWidth: 1,
    borderColor: colors.dividerColor2,
  },
  ortext: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
  },
  rowEvenly: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 90,
    marginTop: 35,
  },
  socialView: {
    width: widthPixel(60),
    height: heightPixel(40),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  socialIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
  texthead: {
    alignItems: 'center',
  },
  dontHaveText: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    marginTop: 45,
  },
  spanedit: {
    color: colors.theme,
    fontFamily: fontFamily.appTextSemiBold,
  },
});
