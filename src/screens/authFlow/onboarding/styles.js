import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel, wp} from '../../../services';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
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
    justifyContent: 'space-between',
    width: wp(100),
    paddingVertical:20,
  },
  onboardimg:{
    flex:3,
    width: 410,
    height: 340,
    alignItems:'center',
    justifyContent:'center',
    // resizeMode:'contain'

  },
  maintextstyle:{
    flex: 1, 
  width:'90%',
  alignItems:'center',
  marginTop:20,
   
  },
  onboardingHeading: {
    width:'80%',
    fontSize:responsiveFontSize(2.8),
    fontFamily:fontFamily.appTextBold,
   marginBottom:10,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 26, 
    maxHeight: 25 * 2.3, 
  },
  onboardingHeadingTwo: {
    width: '95%',
    fontFamily: fontFamily.appTextRegular,
    // fontSize: 16,
    fontSize:responsiveFontSize(1.9),
    color: colors.black,
    textAlign: 'center',
    lineHeight: 22, 
    maxHeight: 24 * 4, 
  },
 
 
  buttonView: {
    width:widthPixel(360),
    height:widthPixel(70),
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'red',
    alignItems:'center',
    padding:10,
   
  },
  skiptxt:{
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
  },
  progressWrapper: {
   
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  rightprogress:{
    width:widthPixel(60),
    height:heightPixel(60),
    resizeMode:'contain',
    marginHorizontal:4,
  }
});
