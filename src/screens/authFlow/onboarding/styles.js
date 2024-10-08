import {Platform, StatusBar, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
  wp,
} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  onboardingImage: {
    // backgroundColor:'red',
    resizeMode: 'contain',
    width:widthPixel(300),
    height: heightPixel(300),
  },
  onboardingImage2: {
    // backgroundColor:'red',
    resizeMode: 'stretch',
    width: wp(100),
    height: 300,
  },
  onboardingItem: {
    // flex: 1,
    
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(100),
    paddingVertical: 20,
  },
  onboardimg: {
    flex: 1,
    width: 410,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  maintextstyle: {
    flex: 0.2,
    // backgroundColor:"red",
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  onboardingHeading: {
    width: '80%',
    fontSize: responsiveFontSize(2.8),
    fontFamily: fontFamily.appTextBold,
    marginBottom: 10,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 26,
    maxHeight: 25 * 2.3,
    // backgroundColor:'red'
  },
  onboardingHeadingTwo: {
    width: '95%',
    fontFamily: fontFamily.appTextRegular,
    // fontSize: 16,
    fontSize: responsiveFontSize(1.9),
    color: colors.black,
    textAlign: 'center',
    lineHeight: 22,
    maxHeight: 24 * 4,
  },

  buttonView: {
    width: widthPixel(360),
    height: widthPixel(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: Platform.OS ==='ios' ? 25: 15 ,
  },
  skiptxt: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  skiptext: {
    fontFamily: fontFamily.appTextItalic,
    color: colors.theme,
    fontSize: Platform.OS === 'ios' ? responsiveFontSize(2.1) : responsiveFontSize(1.9),
    textDecorationLine: 'underline',
  },
  progressContainer: {
    width: widthPixel(60),
    height: heightPixel(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressWrapper: {
    marginTop: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightprogress: {
    width: widthPixel(60),
    height: heightPixel(60),
    resizeMode: 'contain',
    marginHorizontal: 4,
  },
});
