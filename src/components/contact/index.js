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

const ContactItem = ({
  profileImage,
  userName,
  isSelected,
  onSelectionChange,
}) => {
  // const [isSelected, setIsSelected] = useState(false);

  // const handleSelection = () => {
  //   setIsSelected(!isSelected);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Image source={profileImage} style={styles.profileImage} />

        <Text style={styles.userName}>{userName}</Text>
      </View>
      <TouchableOpacity
        onPress={onSelectionChange}
        style={styles.markIconContainer}>
        <Image
          source={isSelected ? appIcons.tick : appIcons.untick}
          style={styles.markIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: widthPixel(350),
    // height: heightPixel(45),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  innercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: widthPixel(40),
    height: heightPixel(40),
    resizeMode: 'contain',
    marginRight: 15,
  },
  userName: {
    fontSize: responsiveFontSize(1.9),
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextRegular,
  },
  markIconContainer: {
    alignItems: 'center',
  },
  markIcon: {
    width: widthPixel(20),
    height: widthPixel(20),
    resizeMode: 'contain',
  },
});

export default ContactItem;
