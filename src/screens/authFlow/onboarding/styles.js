import {StyleSheet} from 'react-native';
import {colors, fontFamily, widthPixel, wp} from '../../../services';
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
  onboardingItem: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-end',
    textAlign:'center',
    width: wp(100),
    // marginVertical:-30,
  },
  onboardimg:{
    // flex:1,
    width: 410,
    height: 510,
    alignItems:'center',
    justifyContent:'center',

  },
  maintextstyle:{
  width:'90%',
  // flex:1,
  justifyContent:'flex-end'
   
  },
  onboardingHeading: {
    fontSize: 22,
    fontFamily:fontFamily.appTextBold,
    padding: 20,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 25,
  },
  onboardingHeadingTwo: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 24,
  },
  pagination: {
    width:'60%',
    height:'5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
   
  },
  dot: {
    height: 8,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#3F4835',
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor:colors.white,
    height: 8,
    width: 16, 
  },
  buttonView: {
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom:50,
   
  },
});
