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
const Header = ({title, leftIcon, mainLogo, hintLogo}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <View>
        <View style={styles.rowCenter}>
          {leftIcon && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.iconStyle} source={appIcons.arrowBack} />
            </TouchableOpacity>
          )}
        </View>
        <View>
          {mainLogo && <Image style={styles.logo} source={appIcons.mainlogo} />}
        </View>
        <View>
          {hintLogo && <Image style={styles.logo} source={appIcons.hint} />}
        </View>

        <View>{title && <Text style={[styles.titleStyle]}>{title}</Text>}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex:1,
    height: heightPixel(100),
    width: wp(100),
    alignContent:'center',
    justifyContent:'center'

    
  },
  iconStyle: {
    width: widthPixel(24),
    marginRight: widthPixel(16),
    marginTop: widthPixel(25),
    height: widthPixel(24),
    resizeMode: 'contain',
  },
  logo: {
    alignSelf: 'center',
    width: widthPixel(100),
    height: widthPixel(90),
    marginTop: 70,
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
    marginTop: -heightPixel(31),
  },
});
export default Header;
