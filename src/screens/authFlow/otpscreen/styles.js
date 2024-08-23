import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // backgroundColor:'green'
  
   
  },
  fg1: {

    flex:1,
    paddingHorizontal:widthPixel(20),
    justifyContent:'center',

    
  },
  wrapper: {
    flex:1,
    marginTop:130,
    // backgroundColor:'red'
   
   
  
  },
  etext: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(1.9),
    color: colors.black,
    paddingTop: 20,
    // paddingBottom: 10,
    marginTop: -10,
  },
  otptext:{
    
      fontFamily: fontFamily.appTextRegular,
      fontSize: responsiveFontSize(1.9),
      color: colors.lightText,
      paddingTop: 20,
      paddingBottom: 10,
      marginTop: -15,

  },

  // title: {
  //   // marginTop: heightPixel(100),
  //   paddingBottom: heightPixel(10),
  //   fontSize: 20,
  //   color: colors.darktext,
  //   fontFamily: fontFamily.appTextBold,
  // },
  
  otpContainerTopView: {
    height: heightPixel(100),
  },
  otpContainer: {
    width: '100%',
  },
  otp: {
    width: widthPixel(65),
    height: heightPixel(65),
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveFontSize(3),
    paddingBottom: heightPixel(10),
    borderRadius: widthPixel(4),
    color: colors.lightBlack,
    backgroundColor: colors.greyLight1,
   
  },
  texthead: {
    alignItems: 'center', 
  },
  dontHaveText: {
    color: colors.lightText,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: -5,
  },
  resend:{
flexDirection:'row',
gap:7,
  },
  otptimer: {
    textDecorationLine:'underline'
  },
  spanedit: {
    color: colors.theme,
  },
  pv30: {
    
    alignItems:'center',
    marginTop:100,
  },
});
