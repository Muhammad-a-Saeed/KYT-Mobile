import {StyleSheet, StatusBar} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: 'center',
  },
  Header: {},
  mainlogo: {
    marginTop: StatusBar.currentHeight + 46,
    alignSelf: 'center',
    width: widthPixel(100),
    height: widthPixel(85),
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  fg1: {
    flexGrow: 1,
    padding: 20,
  },
  wrapper: {
    marginTop: 30,
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
    alignItems: 'center',
    width: widthPixel(335),
    marginTop: 5,
  },
  rightmain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  rectangle: {
    width: widthPixel(23),
    height: heightPixel(23),
    resizeMode: 'contain',
  },
  remtext: {
    color: colors.lightText,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
    marginLeft: 5,
  },

  forgetText: {
    color: colors.theme,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
    paddingHorizontal: 5,
  },
  pv30: {
    marginVertical: 50,
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
  },
  socialView: {
    width: widthPixel(60),
    height: heightPixel(40),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  socialIcon: {
    width: widthPixel(26),
    height: widthPixel(26),
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
