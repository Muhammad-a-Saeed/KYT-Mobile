import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel, wp} from '../../services';
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
    width: wp(25),
    height: wp(25),
    resizeMode: 'contain',
  },
  iconText: {
    fontSize: responsiveFontSize(1.4),
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
});

export default Appicon;
