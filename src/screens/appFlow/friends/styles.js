import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // marginTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
  wrapper: {
    // flex: 1,
    alignItems: 'center',
  },
  referralText: {
    fontSize: responsiveFontSize(3.9),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
  },
  pointsText: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: fontFamily.appTextRegular,
    color: colors.black,
  },
  coinIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 5,
    marginTop: -5,
  },
  card: {
    marginTop: 30,
    width: widthPixel(350),
    height: heightPixel(83),
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inviteLinkText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },

  linkText: {
    fontSize: 14,
    color: colors.lightText,
    marginTop: 4,
  },
  horizontalLine: {
    marginTop: 10,
    width: '100%',
    height: 1,
    backgroundColor: colors.dividerColor,
  },
  referrelContainer: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  referraltext: {
    fontSize: responsiveFontSize(2.3),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
  },
});
