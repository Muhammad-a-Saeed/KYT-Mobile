import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent:'center',
  },
  fg1: {
    flexGrow: 1,
    padding: widthPixel(20),
  },
  wrapper: {
    flex:1,
    marginTop: StatusBar.currentHeight,
    marginTop:-10,
    // marginVertical: -35,
  },
  title: {
    fontSize: 20,
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextBold,
    // marginTop: 30,

  },
  title2: {
    width:widthPixel(388),
    fontSize: 16,
    color: colors.lightBlack,
    fontFamily:fontFamily.appTextRegular,
  
  },
  custominput: {
    // marginTop: -30,
    gap: 8,
  },
  pv30: {
    paddingVertical: heightPixel(30),
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
    marginTop:35,
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
    marginTop: 40,
  },
  spanedit: {
    color: colors.theme,
    fontFamily:fontFamily.appTextSemiBold
  },
});
