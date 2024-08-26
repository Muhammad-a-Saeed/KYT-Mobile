import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  fg1: {
    flexGrow: 1,
    padding: 20,
    //  backgroundColor:'red'
  },
  wrapper: {
    flex: 1,
    marginTop: -30,

    alignContent: 'center',
  },
  cameraIcon: {
    width: widthPixel(25),
    height: heightPixel(25),
    resizeMode: 'contain',
  },

  avatarContainer: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: colors.greyLight1,
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  image: {
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: colors.theme,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  title2: {
    width: widthPixel(388),
    fontSize: 15,
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextRegular,
    textAlign: 'center',
    marginHorizontal: -20,
  },
  custominput: {
    paddingTop: 10,
    gap: 20,
  },
  title: {
    width: '90%',
    fontSize: 16,
    color: colors.black,
    fontFamily: fontFamily.appTextItalic,
    marginTop: 20,
  },
  maingender: {
    flexDirection: 'row',
    gap: 50,
  },
  selectgender: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  mark1: {
    width: widthPixel(16),
    height: heightPixel(16),
    // resizeMode:'contain',
    //  marginLeft:,
  },
  gender: {
    color: colors.lightText,
    fontSize: 16,
    marginLeft: 8,
  },
  line1: {
    width: widthPixel(430),
    borderBottomWidth: 0.5,
    // opacity:0.5,
    borderColor: colors.dividerColor2,
    marginHorizontal: -20,
    marginTop: 30,
  },
  anonymizename: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  textname: {
    fontFamily: fontFamily.appTextItalic,
    color: colors.black,
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  modalview: {
    // backgroundColor: colors.,
    width: widthPixel(430),
    height: heightPixel(932),
    borderRadius: 8,
    padding: 20,
  },
  calendermain: {
    flex: 1,
    justifyContent: 'center',
    width: widthPixel(388),
    height: heightPixel(500),
    padding: 20,
  },




  seeprofiletext: {
    width: '90%',
    fontSize: 16,
    color: colors.black,
    fontFamily: fontFamily.appTextItalic,
    marginTop: 30,
  },
  mainprofiletext: {
    flexDirection: 'row',
    gap: 80,
  },
  selectoption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  seestyle: {
    color: colors.lightText,
    fontSize: 16,
    marginLeft: 8,
  },
  
  mark1: {
    width: widthPixel(16),
    height: heightPixel(16),
    
  },
  pv30: {
    marginTop:80,
    alignItems:'center',
},
alertcontainer: {
  // flex: 1,
},
  

  
});
