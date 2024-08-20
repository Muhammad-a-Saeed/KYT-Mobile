import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fg1: {
    flexGrow: 1,
  },
  wrapper: {
    
    paddingHorizontal: widthPixel(20),
    paddingBottom: heightPixel(20),
    backgroundColor:colors.background,
    marginTop: 50,
  },
  title: {
    // marginTop: heightPixel(90),
    paddingBottom: heightPixel(28),
    fontSize: 22,
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextBold,
  },
  custominput: {
    marginTop: -30,
    gap: 20,
  },
  pv30: {
    paddingVertical: heightPixel(50),
  },
  texthead: {
    alignItems: 'center',
    flex: 1,
    marginTop: -115,
    lineHeight: responsiveFontSize(3),
  },
  dontHaveText: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
    textAlign: 'center',
// marginVertical:-30,
    // marginTop: -40,
  },
  spanedit: {
    color: colors.lightBackground,
    textDecorationLine: 'underline',
  },
  ortext: {
    color: colors.lightBlack,
    fontSize: 17,
    // lineHeight: 1,
    paddingTop: heightPixel(45),
  },
  rowEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical:35,
    marginHorizontal: 80,
  },
  socialView: {
    width: widthPixel(50),
    height: heightPixel(50),
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 18,
    elevation: 6,
  },
  socialIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
});
