import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topCurveContainer: {
    width: widthPixel(350),
    height: 250,
    // overflow: 'hidden',
    position: 'relative',
  },
  topCurveImage: {
    width: widthPixel(380),
    height: 230,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  giftmain: {
    position: 'absolute',
    top: '15%',
    left: '42%',
  },
  giftIcon: {
    width: 130,
    height: 160,
    resizeMode: 'contain',
  },
  content: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
    textAlign: 'center',
    // marginBottom: 10,
  },
  description: {
    fontSize: 15,
    fontFamily: fontFamily.appTextRegular,
    color: colors.mediumblack,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  mainsquare: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  square: {
    width: widthPixel(170),
    height: heightPixel(50),
    resizeMode: 'contain',
  },
  overlayContainer: {
    position: 'absolute',
    top: 15,
    left: 137,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    letterSpacing: 2,
    fontFamily: fontFamily.appTextRegular,
    color: colors.black,
  },
  verticalLine: {
    width: 1.2,
    height: 25,
    backgroundColor: colors.black,
    marginHorizontal: 10,
  },
  icon: {
    width: widthPixel(24),
    height: heightPixel(24),
    resizeMode: 'contain',
  },
  CustomInput: {
    marginTop: 25,
    padding: 10,
    alignItems: 'center',
  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 60,
    justifyContent: 'center',
  },
  orText: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    // marginHorizontal: 10,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.dividerColor,
  },
  links: {
    flex: 1,
    gap: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
