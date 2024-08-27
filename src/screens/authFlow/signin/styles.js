import {StyleSheet,StatusBar} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',

  },
  fg1: {
    flexGrow: 1,
    padding: 20,
  },
  wrapper: {
    marginTop: StatusBar.currentHeight,
    // marginBottom:-70,
    
  },
 
  title: {
    width:'90%',
    fontSize: 18,
    color: colors.lightBlack,
    fontFamily: 'Poppins-Bold', 
  },
  title2: {
    width:widthPixel(388),
    fontSize: 16,
    color: colors.lightBlack,
    fontFamily:fontFamily.appTextRegular,
  
  },
  custominput:{
    paddingTop:10,
    gap:20,
  },
  forgetcontainer: {
    // backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'space-between',
    width:widthPixel(335),
    // marginVertical:5,
  },
  rightmain:{
    flexDirection:'row',
    alignItems:'center'

  },
  rectangle: {
   width:widthPixel(23),
   height:heightPixel(24),
   resizeMode:'contain',
  //  marginLeft:,

  },
  remtext:{
    color: colors.lightText,
    fontSize: 14,
    marginLeft:5,
    
  },
  forget:{

  },
  forgetText: {
    color: colors.theme,
    fontSize: 14,
    
  },
  pv30: {
    marginVertical:30,
    justifyContent:'center',
    alignItems:'center'
},

 
  ormain:{
    justifyContent:'center',
       alignItems:'center',
    flexDirection:'row',
    // paddingBottom:10,
    gap:10,
   
    // backgroundColor: colors.errorColor,
   

  },
  line1:{
    width:widthPixel(110),
    borderBottomWidth:1,
borderColor:colors.dividerColor2,
  },
  ortext: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 13,
   
  },
  rowEvenly: {
    flexDirection: 'row',
    justifyContent:'center',
    justifyContent: 'space-around',
    marginHorizontal:90,
    marginTop:50,
    backgroundColor: colors.white,
  },
  socialView: {
    width: widthPixel(60),
    height: heightPixel(40),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
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
    fontSize: 16,
    marginTop: 50,
  },
  spanedit: {
    color: colors.theme,
    fontFamily:fontFamily.appTextSemiBold
  },
});
