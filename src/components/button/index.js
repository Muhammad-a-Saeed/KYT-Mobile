import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fontFamily, widthPixel,} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
const Button = props => {
  const {style, disable, onPress, children} = props;
  return (
  
      <LinearGradient style={[styles.topContainer]}
      start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#6D6010','#D1AA66','#6D6010',]}
      >
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
    width:widthPixel(350),
    height: 60,
    marginBottom: 5,
    borderRadius:18,
    
  },
  container: {
    // width:'90%',
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    // flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth:1,
    // borderRadius:18,
  },
  label: {
    color: colors.white,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
  },
});

export default Button;
