import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

    // marginTop: StatusBar.currentHeight,
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  starLevelText: {
    fontSize: responsiveFontSize(2.1),
    fontFamily: fontFamily.appTextItalic,
    color: colors.black,
  },
  ratingContainer: {
    height: heightPixel(47),
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: responsiveFontSize(4),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.mediumblack,
    marginRight: 3,
  },
  starIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
   marginBottom: Platform.OS === 'ios' ? 1 : -1,

  },
  backdiv: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPixel(400),
    height: heightPixel(580),
    borderRadius: 50,
    marginHorizontal: -12,
    backgroundColor: colors.greendark,
  },

  frontdiv: {
    flex: 1,
    paddingTop: 5,
    width: widthPixel(390),
    height: heightPixel(960),
    backgroundColor: colors.white,
    borderRadius: 40,
    marginTop: 10,
  },
  listContainer: {
    flexGrow: 1,
    minHeight: heightPixel(650),
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
    gap: 20,
  },
  pv30: {
    marginBottom: 20,
    alignItems: 'center',
  },
});
