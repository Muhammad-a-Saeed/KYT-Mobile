import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  routes,
  widthPixel,
  wp,
} from '../../services';
import {useNavigation} from '@react-navigation/native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {CustomInput} from '../custominput';
const Header = ({
  title,
  leftIcon,
  mainLogo,
  Logo,
  hintLogo,
  titleleft,
  SearchBar,
  wellcome,
  Notification,
  marginTop = 0,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.container, marginTop}}>
      <View style={styles.marginTop}>
        <View style={styles.rowCenter}>
          {leftIcon && (
            <TouchableOpacity
              style={[styles.goBack]}
              onPress={() => navigation.goBack()}>
              <Image style={styles.iconStyle} source={appIcons.arrowback} />
            </TouchableOpacity>
          )}
        </View>
        <View>
          {mainLogo && (
            <Image style={styles.mainlogo} source={appIcons.mainlogo} />
          )}
        </View>
        <View>
          {Logo && <Image style={styles.logo} source={appIcons.logo} />}
        </View>
        <View>
          {hintLogo && <Image style={styles.logo} source={appIcons.hint} />}
        </View>
        <View>{title && <Text style={[styles.titleStyle]}>{title}</Text>}</View>
        <View style={{marginTop}}>
          {titleleft && (
            <Text style={[styles.titleleftStyle]}>{titleleft}</Text>
          )}
        </View>
        <View style={styles.wellcomemain}>
          {wellcome && <Text style={[styles.wellcomeStyle]}>{wellcome}</Text>}
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.notification)}>
            {Notification && (
              <Image source={appIcons.wellcomebell} style={styles.imageStyle} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.SearchBar}>
          {SearchBar && (
            <CustomInput
              // onChangeText={text => setEmail(text)}
              placeholder={'Search'}
              leftIcon={appIcons.Search}
              width="80%"
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop: {
    marginTop: StatusBar.currentHeight,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight,
    // marginTop: 30,
  },
  container: {
    minHeight: heightPixel(30),
    width: wp(100),
    alignContent: 'center',
    justifyContent: 'center',
  },
  goBack: {
    height: heightPixel(28),
    width: widthPixel(28),
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
    elevation: 1,
    // position: 'absolute',
  },
  iconStyle: {
    width: widthPixel(25),
    height: widthPixel(25),
    resizeMode: 'contain',
  },
  mainlogo: {
    zIndex: 1,
    alignSelf: 'center',
    width: widthPixel(100),
    height: widthPixel(80),
    marginTop: -10,
    resizeMode: 'contain',
  },
  logo: {
    alignSelf: 'center',
    width: widthPixel(60),
    height: widthPixel(60),
    marginTop: 5,
    resizeMode: 'contain',
  },
  textlogin: {
    color: colors.lightBlack,
    paddingBottom: heightPixel(28),
    fontWeight: '800',
  },
  titleStyle: {
    fontSize: responsiveFontSize(2.5),
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextSemiBold,
    alignSelf: 'center',
    width: widthPixel(310),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleleftStyle: {
    fontSize: responsiveFontSize(2.5),
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextSemiBold,
    marginHorizontal: 50,
    marginTop: -30,
    width: widthPixel(270),
    textAlign: 'left',
  },
  wellcomemain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    padding: 10,
  },
  wellcomeStyle: {
    fontSize: responsiveFontSize(2.8),
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextSemiBold,
    width: widthPixel(310),
  },
  imageStyle: {
    width: widthPixel(42),
    height: widthPixel(42),
    resizeMode: 'contain',
  },
  SearchBar: {
    top: 0,
  },
});
export default Header;
