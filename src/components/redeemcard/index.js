import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Button from '../button';
import Rightarrow from 'react-native-svg';

const RedeemCard = ({
  backgroundImage,
  title,
  description,
  titleColor,
  descriptionColor,
  buttonLabelColor,
  buttonBackgroundColor,
  buttonText,
}) => {
  const Rightarrow = appIcons.arrowright;
  return (
    <View style={styles.topContainer}>
      <ImageBackground source={backgroundImage} style={styles.cardMain}>
        <Text style={[styles.titleText, {color: titleColor}]}>{title}</Text>
        <Text style={[styles.descriptionText, {color: descriptionColor}]}>
          {description}{' '}
        </Text>
        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate(routes.homeScreen)}
            width={widthPixel(110)}
            height={35}
            backgroundColor={buttonBackgroundColor} //{['#205A5D', '#205A5D']}
            labelColor={buttonLabelColor}
            borderRadius={14}
            fontSize={13}
            fontFamily={fontFamily.appTextSemiBold}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  {
                    fontFamily: fontFamily.appTextSemiBold,
                    fontSize: 12,
                    color: '#fff',
                  },
                  {color: buttonLabelColor},
                ]}>
                {buttonText}
              </Text>
              <Image
                source={appIcons.rightarrow}
                style={{
                  width: 15,
                  height: 12,
                  marginLeft: 5,
                  marginTop: -4,
                }}
                resizeMode="contain"
              />
            </View>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    // Center the card if needed
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cardMain: {
    width: widthPixel(355),
    minHeight: heightPixel(230),
    borderRadius: 16,
    overflow: 'hidden',
  },
  titleText: {
    position: 'absolute',
    top: 20,
    left: 15,
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(3.1),
    color: colors.mediumblack,
  },
  descriptionText: {
    position: 'absolute',
    top: 70,
    left: 15,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.6),
    color: colors.lightBlack,
    width: '60%',
  },
  button: {
    position: 'absolute',
    bottom: 25,
    left: 15,
  },
});

export default RedeemCard;
