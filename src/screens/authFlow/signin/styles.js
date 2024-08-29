import {StyleSheet, StatusBar} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  fg1: {
    flexGrow: 1,
    padding: 20,
  },
  wrapper: {
    marginTop: StatusBar.currentHeight,
  },

  title: {
    width: '90%',
    fontSize: responsiveFontSize(2.7),

    color: colors.lightBlack,
    fontFamily: 'Poppins-Bold',
  },
  title2: {
    width: widthPixel(388),
    fontSize: responsiveFontSize(1.8),
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextRegular,
  },
  custominput: {
    paddingTop: 10,
    gap: 17,
  },
  forgetcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPixel(335),
  },
  rightmain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  rectangle: {
    width: widthPixel(23),
    height: heightPixel(24),
    resizeMode: 'contain',
  },
  remtext: {
    color: colors.lightText,
    fontSize: responsiveFontSize(1.6),
    marginLeft: 5,
  },
  forget: {
    marginHorizontal: 5,
  },
  forgetText: {
    color: colors.theme,
    fontSize: responsiveFontSize(1.6),
  },
  pv30: {
    marginVertical: 30,
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
    marginTop: 50,
    backgroundColor: colors.white,
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
    marginTop: 50,
  },
  spanedit: {
    color: colors.theme,
    fontFamily: fontFamily.appTextSemiBold,
  },
});
