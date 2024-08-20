import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fontFamily, widthPixel,} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
const Button = props => {
  const {style, disable, onPress, children} = props;
  return (
    <LinearGradient start={{x: 0, y: 10}} end={{x: 1, y: -13}} colors={['#D1AA66']} style={styles.topContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}>
        <Text style={styles.label}>{children}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    width: widthPixel(390),
    height: 60,
    marginBottom: 5,
    
  },
  container: {
    width:'90%',
    height: 60,
   
    borderRadius: 18,
    alignItems: 'center',
    alignSelf: 'center',
    // flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
  },
});

export default Button;
