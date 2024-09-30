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
const AuthHead = ({leftIcon, mainLogo, marginTop = 0}) => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.container, marginTop}}>
      <View style={styles.goBack}>
        <Image source={appIcons.goback} style={styles.iconStyle} />
      </View>
      <View style={styles.logo}>
        {mainLogo && (
          <Image style={styles.mainlogo} source={appIcons.mainlogo} />
        )}
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
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'red',
    // marginTop: 30,
  },
  container: {
    height: heightPixel(148),
    width: wp(100),
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  goBack: {position: 'absolute', top: 40},
  iconStyle: {
    width: widthPixel(60),
    height: widthPixel(50),
    resizeMode: 'contain',
  },
  mainlogo: {
    zIndex: 1,
    alignSelf: 'center',
    width: widthPixel(100),
    height: widthPixel(80),
    resizeMode: 'contain',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
export default AuthHead;
