import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  appIcons,
  colors,
  widthPixel,
  heightPixel,
  fontFamily,
  wp,
} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const CustomRanking = ({profileImage, profileName, starRating}) => {
  return (
    <View style={styles.container}>
      <Image source={appIcons.rankbackground} style={styles.backgroundImage} />

      <View style={styles.content}>
        <Image source={profileImage} style={styles.profileImage} />

        <View style={styles.nameAndRating}>
          <Text style={styles.profileName}>{profileName}</Text>
        </View>

        <View style={styles.starContainer}>
          <Text style={styles.starRating}>{starRating}</Text>
          <Image source={appIcons.staricon} style={styles.starIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // width: wp(100),
    width: widthPixel(350),

    height: heightPixel(72),
    borderRadius: 16,
    position: 'relative',
    alignItems: 'center',
    elevation: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: widthPixel(350),
    height: heightPixel(72),
    resizeMode: 'contain',

    // backgroundColor: colors.white,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  profileImage: {
    width: widthPixel(50),
    height: heightPixel(50),
    resizeMode: 'contain',
    // alignItems: 'center',
    marginLeft: 15,
    marginRight: 10,
  },
  nameAndRating: {
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontSize: responsiveFontSize(1.8),
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextItalic,
  },
  starContainer: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  starRating: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextRegular,
    color: colors.black,
    textAlign: 'right',
    marginRight: 15,
  },
  starIcon: {
    width: widthPixel(16),
    height: heightPixel(16),
    resizeMode: 'contain',
    marginRight: 15,
    marginTop: 2,
  },
});

export default CustomRanking;
