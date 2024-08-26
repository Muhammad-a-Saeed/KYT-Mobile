import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  fg1: {
    flexGrow: 1,
  },
  confirmloc: {
    width:'100%',
    height:heightPixel(260),
    borderRadius:24,
    borderWidth:1,    borderColor:'red',
    position:'absolute',
    bottom:0,
    
   },
    confirmtext:{
      padding:15,
      fontFamily:fontFamily.appTextRegular,
      fontSize:16,
      color:colors.lightText,
    },
    line1: {
      width: '100%',
      borderBottomWidth: 0.9,
      borderColor: colors.dividerColor3,
      marginTop: -3,
    },
    pinlocation:{
      marginTop:15,
      width:widthPixel(355),
      flexDirection:'row',
      alignItems:'center',
      alignSelf:'center',
      gap:20,
    },
    pin:{
      width:widthPixel(70),
      height:heightPixel(70),
      backgroundColor:colors.pinbackground,
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center'
    },
    pinstyle:{
      width:'45%',
      height:'65%',
      resizeMode: 'contain',
      
      
    },
    titladdres:{
      fontFamily:fontFamily.appTextRegular,
      fontSize:18,
      color:colors.lightBlack,
    },
    compaddress:{
      width:widthPixel(260),
      fontFamily:fontFamily.appTextRegular,
      fontSize:14,
      color:colors.lightBlack,
    },
  pv30: {
    alignItems: 'center',
    marginTop:50
  },
  addressdetail: {
    width:'100%',
    height:heightPixel(400),
    borderRadius:24,
    borderWidth:1,    borderColor:'red',
    position:'absolute',
    bottom:0,
    
   },
   maintxt:{padding:15,},
    text1:{
      fontFamily:fontFamily.appTextItalic,
      fontSize:20,
      color:colors.lightBlack,
    },
    text2:{
      fontFamily:fontFamily.appTextRegular,
      fontSize:14,
      color:colors.lightText,
    },

    line1: {
      width: '100%',
      borderBottomWidth: 0.9,
      borderColor: colors.dividerColor3,
      marginTop: -3,
    },
    addrestypetxt:{
      padding:15,
      fontFamily:fontFamily.appTextItalic,
      fontSize:16,
      color:colors.lightText,
    },
    selectadress:{
      width:widthPixel(320),
      height:heightPixel(30),
      flexDirection:'row',
      justifyContent:'space-between',
marginHorizontal:15,

    },
    home:{
      width:widthPixel(92),
      height:heightPixel(30),
      backgroundColor:colors.white,
      borderRadius:8,
      borderWidth:1,
      borderColor:colors.grey,

      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      gap:5,
    },
    hometxt:{fontFamily:fontFamily.appTextItalic,
      fontSize:16,
      color:colors.lightBlack,
      marginTop:3
    },

    homeicon:{
      width:widthPixel(17),
      height:heightPixel(17),
      resizeMode: 'contain',
    },
    selected: {
      backgroundColor:colors.pinbackground,
      borderColor: colors.theme,
    },
    input:{
padding:10
    },
    pv31: {
      alignItems: 'center',
      marginTop:70
    },

 
 
  
});
