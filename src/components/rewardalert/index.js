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

const RewardAlert = ({
  visible,
  onClose,
  backgroundImage,
  icon,
  congratsText,
  descriptionText,
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
            <Pressable onPress={onPress} style={styles.redeemButton}>
              <Button onPress={onClose} width={widthPixel(280)} height={48}>
                {onText}
              </Button>
            </Pressable>
            <Pressable onPress={onClose}>
              <Text style={styles.laterText}>Later</Text>
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
    height: heightPixel(370),
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
    width: widthPixel(150),
    height: heightPixel(150),
    // marginBottom: 10,
    resizeMode: 'contain',
  },
  congratText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 22,
    color: colors.black,
    // marginBottom: 10,
  },
  descriptionText: {
    fontFamily: fontFamily.appTextItalic,
    fontSize: 16,
    color: colors.mediumblack,
    textAlign: 'center',
    padding: 12,
    marginBottom: 10,
  },

  laterText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
    color: colors.mediumblack,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default RewardAlert;
