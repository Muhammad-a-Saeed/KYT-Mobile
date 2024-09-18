import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
  maincontainer: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  centeredText: {
    fontSize: 16,
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextItalic,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlatList: {
    marginTop: 10,
    marginBottom: 30,
  },
  listContainer: {},
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    // borderTopWidth: 1,
    // borderTopColor: colors.gray,
  },
  contactCountText: {
    fontSize: 16,
    fontFamily: fontFamily.appTextRegular,
    color: colors.mediumblack,
  },
});
