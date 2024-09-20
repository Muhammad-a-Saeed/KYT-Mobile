import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const ReferralItem = ({userName, medalType, score, medal}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.userName}>{userName}</Text>
        <View style={styles.medalContainer}>
          <Image source={medal} style={styles.medalIcon} />
          <Text style={styles.medalText}>{medalType}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.scoreText}>{score}</Text>
        <Image source={appIcons.staricon} style={styles.starIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPixel(350),
    height: heightPixel(76),
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  leftSection: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
  },
  medalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 5,
  },
  medalIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginRight: 5,
  },
  medalText: {
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightBlack,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    // fontSize: 18,
    fontSize: responsiveFontSize(2.2),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    paddingRight: 3,
  },
  starIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginTop: -8,
  },
});

export default ReferralItem;
