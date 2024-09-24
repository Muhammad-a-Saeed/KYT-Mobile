import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  widthPixel,
  heightPixel,
  routes,
} from '../../services';
import {useNavigation} from '@react-navigation/native';
import Button from '../button';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const ReferrelAlert = ({
  visible,
  onClose,
  backgroundImage,
  icon,
  congratsText,
  descriptionText,
  medalText,
  onPress,
  onText,
}) => {
  const navigation = useNavigation();

  if (!visible) return null;

  const handleRedeem = () => {
    navigation.navigate(routes.starhistory);
    // onClose();
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0.5)"
          barStyle="light-content"
        />
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}>
          <View style={styles.content}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.congratText}>{congratsText}</Text>
            <Text style={styles.descriptionText}>{descriptionText}</Text>
            <Text style={styles.medaltext}>{medalText}</Text>
            <Pressable onPress={onPress} style={styles.redeemButton}>
              <Button onPress={onClose} width={widthPixel(280)} height={48}>
                {onText}
              </Button>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundImage: {
    width: widthPixel(350),
    minHeight: heightPixel(370),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    width: widthPixel(180),
    height: heightPixel(180),
    resizeMode: 'cover',
  },
  congratText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.6),
    color: colors.black,
    // marginBottom: 10,
  },
  descriptionText: {
    fontFamily: fontFamily.appTextItalic,
    fontSize: responsiveFontSize(1.9),
    color: colors.mediumblack,
    textAlign: 'center',
  },
  medaltext: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.9),
    color: colors.theme,
    paddingBottom: 10,
  },

  laterText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
    color: colors.mediumblack,
  },
});

export default ReferrelAlert;
