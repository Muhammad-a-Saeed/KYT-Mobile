import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // marginTop: StatusBar.currentHeight,
  },
  wrapper: {
    // flex: 1,
    padding: 15,
    // marginTop: 10,
  },

  head: {
    width: widthPixel(350),
    height: heightPixel(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wellcome: {
    fontSize: responsiveFontSize(2.8),
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextSemiBold,
  },
  imageStyle: {
    width: widthPixel(42),
    height: widthPixel(42),
    resizeMode: 'contain',
  },
  main: {
    width: widthPixel(350),
    height: heightPixel(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  prousername: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileStyle: {
    width: widthPixel(33),
    height: heightPixel(33),
    resizeMode: 'contain',
  },
  username: {
    fontSize: responsiveFontSize(2.1),
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextItalic,
  },
  lochistory: {
    flexDirection: 'row',
    gap: 30,
  },
  locStyle: {
    width: widthPixel(25),
    height: heightPixel(25),
    resizeMode: 'contain',
  },
  listStyle: {
    width: widthPixel(25),
    height: heightPixel(25),
    resizeMode: 'contain',
  },
  maincontainer: {
    width: widthPixel(190),
  },
  view3: {
    width: widthPixel(350),
    height: heightPixel(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view2: {
    flexDirection: 'row',
  },

  t1: {
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
  t2: {
    fontSize: responsiveFontSize(1.6),
    color: colors.lightText,
    fontFamily: fontFamily.appTextRegular,
    marginHorizontal: 15,
  },
  rightStyle: {
    width: widthPixel(23),
    height: heightPixel(23),
    resizeMode: 'contain',
    marginHorizontal: -8,
    marginTop: -1,
  },
  backdiv: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPixel(400),
    // height: heightPixel(990),
    borderRadius: 50,
    marginHorizontal: -12,
    backgroundColor: colors.greendark,
    // marginTop: 40,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  frontdiv: {
    // flex: 1,
    width: widthPixel(390),
    minHeight: heightPixel(1000),
    backgroundColor: colors.white,
    borderRadius: 40,
    marginTop: 10,
    padding: 20,
  },
  ImageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rewardoptmain: {
    width: widthPixel(350),
    height: heightPixel(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starmain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: -10,
  },
  star: {
    fontSize: responsiveFontSize(4),
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextSemiBold,
  },
  staricon: {
    width: widthPixel(20),
    height: heightPixel(20),
    resizeMode: 'contain',
    marginTop: 4,
  },
  rewardtext: {
    fontSize: responsiveFontSize(1.8),
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextRegular,
  },
  rewardopt: {
    flexDirection: 'row',
  },

  arrowdown: {
    width: widthPixel(22),
    height: heightPixel(22),
    resizeMode: 'contain',
  },
  starlvl: {},
  startxt: {
    width: widthPixel(350),
    marginHorizontal: 2,
    marginTop: 5,
  },
  startxt1: {
    fontSize: responsiveFontSize(1.8),
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextRegular,
  },
  button: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  stepindicator: {
    flex: 1,
    height: heightPixel(90),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topText: {
    fontSize: 16,
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextSemiBold,
    marginTop: 5,
    marginBottom: 10,
  },
  getreward: {
    // backgroundColor: colors.,
    // gap: 30,
  },
  mainscanbar: {
    position: 'absolute',
    right: 0,
    bottom: 30,
    zIndex: 1,
  },
  scanbar: {
    width: widthPixel(120),
    height: heightPixel(120),
    resizeMode: 'contain',
  },
});
