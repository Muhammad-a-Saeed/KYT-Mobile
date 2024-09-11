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
  borderRadius = 16,
  elevation = 2,
}) => {
  return (
    <View style={{...styles.container, borderRadius, elevation}}>
      <View
        style={[
          styles.starContainer,
          {flexDirection: shuffle ? 'row-reverse' : 'row'},
          {backgroundColor: starBackgroundColor || colors.white},
        ]}>
        <Text style={styles.starCount}>{starCount}</Text>
        <Image source={starIcon} style={styles.starIcon} />
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
    // flexDirection: 'row',
    alignItems: 'center',
    width: widthPixel(80),
    height: heightPixel(60),
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    gap: 5,
    paddingHorizontal: 5,
    backgroundColor: colors.gold,
    justifyContent: 'flex-end',
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
    textAlign: 'right',
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
