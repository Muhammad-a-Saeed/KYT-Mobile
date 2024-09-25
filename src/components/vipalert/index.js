import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {colors, fontFamily, widthPixel, heightPixel} from '../../services';

const Vipalert = ({visible, onClose, backgroundImage, icon, text1, text2}) => {
  if (!visible) return null;

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
            <Text style={styles.boldText}>{text1}</Text>
            <Text style={styles.semiBoldText}>{text2}</Text>
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
    height: heightPixel(350),
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
    marginBottom: 20,
  },
  boldText: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.5),
    color: colors.black,
    // marginBottom: 10,
  },
  semiBoldText: {
    fontFamily: fontFamily.appTextItalic,
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
    textAlign: 'center',
    padding: 12,
  },
});

export default Vipalert;
