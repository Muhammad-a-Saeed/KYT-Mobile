import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
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
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <View>
        <View style={styles.rowCenter}>
          {leftIcon && (
            <TouchableOpacity style={[styles.goBack]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.iconStyle} source={appIcons.arrowback} />
              </TouchableOpacity>
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
        <View>
          {titleleft && (
            <Text style={[styles.titleleftStyle]}>{titleleft}</Text>
          )}
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
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  container: {
    height: heightPixel(100),
    width: wp(100),
    alignContent: 'center',
    justifyContent: 'center',
    },
  goBack: {
    height: heightPixel(30),
    width: widthPixel(30),
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 8,
    elevation: 1,
    position: 'absolute',
  },
  iconStyle: {
    width: widthPixel(25),
    height: widthPixel(25),
    resizeMode: 'contain',
  },
  mainlogo: {
    alignSelf: 'center',
    width: widthPixel(100),
    height: widthPixel(90),
    marginTop: -15,
    resizeMode: 'contain',
    position: 'absolute',
  },
  logo: {
    alignSelf: 'center',
    width: widthPixel(60),
    height: widthPixel(60),
    marginTop: -15,
    resizeMode: 'contain',
    position: 'absolute',
    },
  textlogin: {
    color: colors.lightBlack,
    paddingBottom: heightPixel(28),
    fontWeight: '800',
  },
  titleStyle: {
    backgroundColor: colors.white,
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
    marginHorizontal: -25,
    marginTop: -18,
    width: widthPixel(310),
    textAlign: 'center',
  },
  SearchBar: {
    top: 0,
  },
});
export default Header;
