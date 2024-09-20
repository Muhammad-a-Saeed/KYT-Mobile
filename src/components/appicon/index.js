import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Appicon = ({icon}) => {
  return (
    <View style={styles.Container}>
      <Image source={icon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  icon: {
    width: widthPixel(110),
    height: heightPixel(110),
    resizeMode: 'contain',
  },
  iconText: {
    fontSize: responsiveFontSize(1.4),
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
});

export default Appicon;
