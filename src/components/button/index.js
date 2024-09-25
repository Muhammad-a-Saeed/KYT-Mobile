import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fontFamily, widthPixel} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
const Button = props => {
  const {
    style,
    disable,
    onPress,
    children,
    width = widthPixel(350),
    height = 50,
    backgroundColor = ['#6D6010', '#D1AA66', '#6D6010'],
    labelColor = colors.white,
    borderColor = colors.transparent,
    borderWidth = 0,
    borderRadius = 18,
    fontSize = 16,
    fontFamily: customFontFamily = fontFamily.appTextSemiBold,
  } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={{
          ...styles.topContainer,
          width: width,
          height: height,
          borderColor,
          borderWidth,
          borderRadius,
          fontSize,
        }}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={backgroundColor}>
        <TouchableOpacity
          style={{...styles.container, width, height}}
          onPress={onPress}>
          <Text
            style={{
              ...styles.label,
              color: labelColor,
              fontSize: fontSize,
              fontFamily: customFontFamily,
            }}>
            {children}
          </Text>
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
    borderWidth: 0,
    borderColor: colors.transparent,
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
