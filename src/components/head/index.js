import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {widthPixel, heightPixel, fontFamily} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Head = ({backgroundImage, leftArrowIcon, logo, title}) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.headerContainer}>
      <TouchableOpacity style={styles.leftArrow}>
        <Image source={leftArrowIcon} style={styles.arrowIcon} />
      </TouchableOpacity>

      <Image source={logo} style={styles.logo} />

      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: widthPixel(400),
    height: heightPixel(280),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // This helps with absolute positioning
  },
  leftArrow: {
    position: 'absolute',
    left: 5,
    top: 20,
  },
  arrowIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logo: {
    position: 'absolute',
    width: widthPixel(130),
    height: heightPixel(115),
    resizeMode: 'contain',
    top: '17%', // Adjust this to align properly under the header
  },
  title: {
    position: 'absolute',
    top: '65%',
    fontSize: responsiveFontSize(2.9),
    fontFamily: fontFamily.appTextSemiBold,
    color: '#fff',
  },
});

export default Head;
