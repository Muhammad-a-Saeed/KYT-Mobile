import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
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
    fontSize: responsiveFontSize(4.2),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.mediumblack,
    marginRight: 5,
  },
  starIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  backdiv: {
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
    width: widthPixel(390),
    height: heightPixel(960),
    backgroundColor: colors.white,
    borderRadius: 40,
    marginTop: 10,
  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 20,
    padding: 5,
    gap: 20,
  },
});
