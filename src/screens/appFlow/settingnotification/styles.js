import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // marginTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
  wrapper: {
    // flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  cardContainer: {
    width: widthPixel(350),
    height: widthPixel(82),
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.mediumblack,
  },
  description: {
    fontSize: responsiveFontSize(1.4),
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightText,
  },
  ToggleSwitch: {},
  enablenotification: {
    flex: 1,
    padding: 15,
  },
  semiBoldText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 14,
    color: colors.mediumblack,
  },
  dropdown: {
    width: widthPixel(350), // Adjust the width
    borderColor: colors.black, // Optional: adjust the border color
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },

  dropDownContainer: {
    width: widthPixel(350), // Adjust the width of the dropdown container
    borderColor: colors.grey, // Optional: adjust the border color
  },
});
