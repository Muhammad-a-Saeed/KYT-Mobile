import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {appIcons, colors, fontFamily, heightPixel, widthPixel} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
const AddButton = props => {
  const {style, disable, onPress, children} = props;
  return (
    <TouchableOpacity
      style={[styles.topContainer]}
      onPress={onPress}>
      <TouchableOpacity style={styles.container}   onPress={onPress} >
        <Image style={styles.addiconstyle} source={appIcons.addicon} />
        <Text style={styles.label}>{children}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    width: widthPixel(350),
    height: 50,
    marginBottom: 5,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.black
  },
  container: {
    // width:'90%',
    flexDirection:'row',
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    gap:10,
    
  },
  label: {
    color: colors.white,
    fontFamily: fontFamily.appTextItalic,
    fontSize: 16,
    textAlign:'center',
  },
  addiconstyle:{
    width: widthPixel(22),
    height: heightPixel(20),
    resizeMode: 'contain',
    marginTop:-3,
  },
});

export default AddButton;
