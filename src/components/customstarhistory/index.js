import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  appIcons, // Assuming you have the star and notification icons here
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {RedeemStar} from '..';

const Customstarhistory = ({icon, points, starType, description, date}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.notificationIcon} />

      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Image source={appIcons.staricon} style={styles.starIcon} />
          <Text style={styles.titleText}>
            {points} {starType}
          </Text>
        </View>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>

      <Text style={styles.dateText}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPixel(350),
    height: heightPixel(75),
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 16,
    elevation: 2,
  },
  notificationIcon: {
    width: widthPixel(40),
    height: heightPixel(40),
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: widthPixel(15),
    height: heightPixel(15),
    resizeMode: 'contain',
    marginRight: 5,
  },
  titleText: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.mediumblack,
    marginTop: 5,
  },
  descriptionText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightText,
  },
  dateText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightText,
  },
});

export default Customstarhistory;
