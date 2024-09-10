import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {widthPixel, heightPixel, fontFamily, colors} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Custumredeemreward = ({
  starCount,
  rewardType,
  starIcon,
  shuffle,
  starBackgroundColor,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.starContainer,
          {backgroundColor: starBackgroundColor || colors.white},
        ]}>
        {shuffle ? (
          <>
            <Text style={styles.starCount}>{starCount}</Text>
            <Image source={starIcon} style={styles.starIcon} />
          </>
        ) : (
          <>
            <Image source={starIcon} style={styles.starIcon} />
            <Text style={styles.starCount}>{starCount}</Text>
          </>
        )}
      </View>

      <Text style={styles.rewardType}>{rewardType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPixel(350),
    height: heightPixel(60),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
    elevation: 2,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    width: widthPixel(70),
    height: heightPixel(60),
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    gap: 5,
    paddingHorizontal: 5,
    backgroundColor: colors.gold,
  },
  starIcon: {
    width: widthPixel(16),
    height: heightPixel(16),
    resizeMode: 'contain',
  },
  starCount: {
    fontSize: responsiveFontSize(2.2),
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextSemiBold,
    paddingTop: 7,
  },
  rewardType: {
    flex: 5,
    fontSize: responsiveFontSize(1.6),
    marginLeft: 20,
    color: colors.lightText,
    fontFamily: fontFamily.appTextRegular,
    textAlign: 'left',
  },
  twoLineText: {
    flexWrap: 'wrap',
  },
});

export default Custumredeemreward;
