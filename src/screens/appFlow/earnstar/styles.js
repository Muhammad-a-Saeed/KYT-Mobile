import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // marginTop: StatusBar.currentHeight,
  },
  centeredImageBackground: {
    width: '100%',
    height: heightPixel(90),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  overlay: {
    width: '100%',
    height: heightPixel(80),
    justifyContent: 'center',
    alignItems: 'center',
  },

  starLevelText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextItalic,
    color: colors.white,
  },
  ratingContainer: {
    height: heightPixel(45),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -5,
  },
  ratingText: {
    fontSize: responsiveFontSize(4.2),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.white,
    marginRight: 5,
  },
  iconTextContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  ticksquare: {
    width: widthPixel(22),
    height: heightPixel(22),
    resizeMode: 'contain',
    marginRight: 5,
  },
  iconText: {
    fontSize: responsiveFontSize(1.6),
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextRegular,
    paddingTop: 5,
  },

  backdiv: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPixel(400),
    height: heightPixel(590),
    marginHorizontal: -12,
    backgroundColor: colors.white,
  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
    gap: 15,
  },
});
