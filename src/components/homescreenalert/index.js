import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {appIcons, colors, fontFamily, routes, widthPixel} from '../../services';
import Button from '../button';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const HomescreenAlert = ({
  visible,
  onClose,
  image,
  appIcons,
  onPress,
  star,
  starCount,
  message,
  buttonText,
}) => {
  if (!visible) return null;

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.blurContainer}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0.5)"
          barStyle="light-content"
        />
        <View style={styles.alertContainer}>
          <Image source={image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.starText}>{starCount}</Text>
            <Image source={star} style={styles.starIcon} />
          </View>
          <Text style={styles.congratulationText}>{message}</Text>
          <TouchableOpacity style={styles.pv30} onPress={onClose}>
            <Button onPress={onClose} width={widthPixel(280)} height={50}>
              {buttonText}
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  alertContainer: {
    width: 350,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 206,
    height: 95,
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // marginBottom: 10,
  },
  starText: {
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextItalic,
    fontSize: responsiveFontSize(2.6),
    paddingTop: 6,
    marginRight: 3,
  },
  starIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  congratulationText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    fontFamily: fontFamily.appTextItalic,
    marginBottom: 10,
  },
  pv30: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default HomescreenAlert;
