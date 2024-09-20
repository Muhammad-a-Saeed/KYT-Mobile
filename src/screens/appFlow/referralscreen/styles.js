import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medalTitle: {
    fontSize: 24,
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
    // marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    fontFamily: fontFamily.appTextItalic,
    color: colors.mediumblack,
    textAlign: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    width: widthPixel(370),
    height: heightPixel(360),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  medalContainer: {
    width: widthPixel(370),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  medalImage: {
    width: widthPixel(350),
    height: heightPixel(350),
    resizeMode: 'contain',
  },
  leftIndicator: {
    position: 'absolute',
    left: 25,
    top: '50%',
    transform: [{translateY: -50}],
  },
  rightIndicator: {
    position: 'absolute',
    right: 25,
    top: '50%',
    transform: [{translateY: -50}],
  },
  indicatorleftIcon: {
    width: 30,
    height: 30,
  },
  indicatorIcon: {
    width: 30,
    height: 30,
  },
  centerText: {
    fontSize: 18,
    fontFamily: fontFamily.appTextItalic,
    color: colors.black,
    marginVertical: 20,
  },
  referralCount: {
    fontSize: 16,
    fontFamily: fontFamily.appTextRegular,
    color: colors.black,
  },
  progressBar: {
    // width: '100%',
    marginVertical: 20,
  },
});
