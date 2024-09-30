import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const NotificationList = ({icon, title, description}) => {
  return (
    <View style={styles.notificationCard}>
      <Image
        source={appIcons.notificationicon}
        style={styles.notificationIcon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationCard: {
    width: widthPixel(350),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 16,
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  notificationIcon: {
    width: widthPixel(40),
    height: heightPixel(40),
    resizeMode: 'contain',
  },
  textContainer: {
    marginHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    // gap: 5,
  },
  titleText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
  },
  descriptionText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.6),
    color: colors.lightBlack,
  },
});

export default NotificationList;
