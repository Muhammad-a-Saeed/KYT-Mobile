import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const CustomLinks = ({icon, label}) => {
  return (
    <View style={styles.Container}>
      <Image
        source={icon} // Replace this with the actual WhatsApp icon path
        style={styles.icon}
      />
      <Text style={styles.iconText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    width: widthPixel(35),
    height: heightPixel(35),
    marginBottom: 8,
  },
  iconText: {
    fontSize: responsiveFontSize(1.4),
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
});

export default CustomLinks;
