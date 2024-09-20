import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  pictureContainer: {
    width: widthPixel(380),
    height: heightPixel(250),
    position: 'relative', // Needed for absolute positioning of the edit icon
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  editIcon: {
    position: 'absolute',
    top: 25,
    right: 15,
    padding: 10,
  },
  editIconImage: {
    width: widthPixel(24),
    height: heightPixel(24),
    resizeMode: 'contain',
  },
  userInfo: {
    position: 'absolute',
    bottom: 10,
    width: widthPixel(380),
    height: heightPixel(60),
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  userInfoBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white,
    opacity: 0.4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  userInfoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userInfoInner: {},
  userName: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.white,
  },
  userEmail: {
    fontSize: responsiveFontSize(1.7),
    color: colors.white,
    marginTop: -5,
  },
  idmain: {},
  userId: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.white,
  },
  flatlist: {
    flex: 1,
  },
  listContainer: {
    // flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 10,
    gap: 10,
  },
  cardContainer: {
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 10,
    // paddingVertical: 25,
    marginBottom: 10,
  },
  mainText: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
  },
  innercardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: fontFamily.appTextItalic,
    color: colors.mediumblack,
  },
  arrowIcon: {
    width: widthPixel(30),
    height: heightPixel(30),
    resizeMode: 'contain',
    // tintColor: colors.black, // Change the color as per your theme
  },
});
