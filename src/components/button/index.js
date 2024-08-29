import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fontFamily, widthPixel} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
const Button = props => {
  const {
    style,
    disable,
    onPress,
    children,
    width = widthPixel(350),
    height = 60,
  } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={{...styles.topContainer, width: width, height: height}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#6D6010', '#D1AA66', '#6D6010']}>
        <TouchableOpacity
          style={{...styles.container, width, height}}
          onPress={onPress}>
          <Text style={styles.label}>{children}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    width: widthPixel(350),
    height: 60,
    marginBottom: 5,
    borderRadius: 18,
  },
  container: {
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.white,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
  },
});

export default Button;
