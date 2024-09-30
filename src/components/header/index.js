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
              <Image style={styles.iconStyle} source={appIcons.goback} />
            </TouchableOpacity>
          )}
          <View style={{}}>
            {titleleft && (
              <Text style={[styles.titleleftStyle]}>{titleleft}</Text>
            )}
          </View>
        </View>

        <View>
          {Logo && <Image style={styles.logo} source={appIcons.logo} />}
        </View>
        <View>
          {hintLogo && <Image style={styles.logo} source={appIcons.hint} />}
        </View>
        <View>{title && <Text style={[styles.titleStyle]}>{title}</Text>}</View>

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
    // backgroundColor: 'red',
    // marginTop: 30,
  },
  container: {
    // height: heightPixel(160),
    width: wp(100),
    alignContent: 'center',
    justifyContent: 'center',
  },
  goBack: {},
  iconStyle: {
    width: widthPixel(55),
    height: widthPixel(50),
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
    marginTop: StatusBar.currentHeight,
    fontSize: responsiveFontSize(2.5),
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextSemiBold,
    alignSelf: 'center',
    width: widthPixel(310),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // backgroundColor: 'green',
  },
  titleleftStyle: {
    fontSize: responsiveFontSize(2.5),
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextSemiBold,
    width: widthPixel(320),
    textAlign: 'left',
    paddingTop: 5,
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
