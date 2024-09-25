import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const ProfileList = ({icon, label, onpress, color = colors.mediumblack}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      <View style={styles.innercontainer}>
        <Image source={icon} style={styles.profileImage} />

        <Text style={{...styles.userName, color}}>{label}</Text>
      </View>
      <TouchableOpacity style={styles.markIconContainer}>
        <Image source={appIcons.right} style={styles.markIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 10,
  },
  innercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: widthPixel(25),
    height: heightPixel(25),
    resizeMode: 'contain',
    marginRight: 15,
  },
  userName: {
    fontSize: responsiveFontSize(1.8),
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextItalic,
  },
  markIconContainer: {
    alignItems: 'center',
  },
  markIcon: {
    width: widthPixel(30),
    height: widthPixel(30),
    resizeMode: 'contain',
  },
});

export default ProfileList;
