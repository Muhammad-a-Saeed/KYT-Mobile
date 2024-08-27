import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel, wp} from '../../../services';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  onboardingImage: {
    resizeMode: 'contain',
    width: 300,
    height: 306,
  },
  onboardingImage2: {
    // backgroundColor:'red',
    resizeMode:'stretch',
    width: 430,
    height: 306,
  },
  onboardingItem: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf:'flex-end',
    // textAlign:'center',
    width: wp(100),
    // marginVertical:-30,
  },
  onboardimg:{
    // flex:1,
    width: 410,
    height: 510,
    alignItems:'center',
    justifyContent:'center',
    resizeMode:'contain'

  },
  maintextstyle:{
  width:'90%',
  justifyContent:'center'
   
  },
  onboardingHeading: {
    width:'100%',
    fontSize: 22,
    fontFamily:fontFamily.appTextBold,
    // padding: 20,
    color: colors.black,
    textAlign: 'center',
    // lineHeight: 25,
  },
  onboardingHeadingTwo: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 24,
  },
 
 
  buttonView: {
    width:widthPixel(350),
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'red',
   
  },
  skiptxt:{
    backgroundColor:'green',
alignItems:'center',
justifyContent:'center'
  },
  skiptext:{
fontFamily:fontFamily.appTextItalic,
    color: colors.theme,
    fontSize: responsiveFontSize(1.9),
    textDecorationLine:'underline'
  },
  progressContainer: {
    width:widthPixel(60),
    height:heightPixel(60),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressCircle: {
    zIndex: 1, // Ensure the Progress.Circle stays on top
  },
  rightprogress: {
    position: 'absolute',
   
    resizeMode:'center',
    zIndex: 0, // Ensure the Image stays under the Progress.Circle
  },
  rightprogress:{
    width:widthPixel(50),
    height:heightPixel(50),
    resizeMode:'center'
  }
});
