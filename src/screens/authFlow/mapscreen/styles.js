import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    backgroundColor: colors.white,
    
  },
  overlayContainer:{
    width:'100%',
    flex: 1,
    zIndex: 1,  
   position:'absolute',
   bottom:0,
   justifyContent:'center',
  },
  searchInput: {  marginTop: 10, width: '90%', alignSelf: 'center', },
  searchListView: {position:'absolute',top: 50},
  mapMarkerImage: {height: 50, width: 53,resizeMode:'contain',},
  // marker: {width: 100, height: 100, resizeMode:'contain', backgroundColor:'red'}, 
  marker1: {width: 100, height: 100, borderRadius:100,alignItems:'center',backgroundColor:' rgba(209, 170, 102, 0.4)'},
  maincurrloc:{position:"absolute",bottom:350,right:20, },
  currloc: {height: 46, width: 46,resizeMode:'contain'},
  confirmloc: {
    backgroundColor:colors.white,
    width:'100%',
    minHeight:heightPixel(300),
    borderRadius:24,
    borderWidth:1,
    bottom:0, 
    //  zIndex:1,
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
    addresstittle:{
      width:widthPixel(260),
      minHeight:heightPixel(40),
      maxHeight:heightPixel(80),
    },
    titladdres:{
      fontFamily:fontFamily.appTextRegular,
      fontSize:18,
      color:colors.lightBlack,

    },
    compaddress:{
     
      fontFamily:fontFamily.appTextRegular,
      fontSize:14,
      color:colors.lightBlack,
    },
  pv30: {
    alignItems: 'center',
    marginTop:100
  },
  addressdetail: {
    backgroundColor:colors.white,
    width:'100%',
    minHeight:heightPixel(360),
    borderRadius:24,
    borderWidth:1,
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
    hometxt:{
      fontFamily:fontFamily.appTextItalic,
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
