import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  routes,
  widthPixel,
} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Button from '../button';
import {useNavigation} from '@react-navigation/native';

const Alert = ({
  visible,
  onClose,
  message,
  title,
  leftIcon,
  onPress,
  buttons,
}) => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    onClose();
    navigation.navigate(routes.homeScreen);
  };
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <StatusBar
        backgroundColor="rgba(0, 0, 0, 0.5)"
        barStyle="light-content"
      />
      <View style={styles.maincontainer}>
        <View style={styles.main}>
          <View style={styles.centerview}>
            <View style={styles.content}>
              <ImageBackground
                source={appIcons.alertbackground}
                style={styles.backgroundImage}
                imageStyle={styles.imageStyle}>
                <View style={styles.head}>
                  {leftIcon && (
                    <TouchableOpacity
                      style={styles.procompalert}
                      onPress={onClose}>
                      <Image
                        style={styles.iconStyle}
                        source={appIcons.procompalert}
                      />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={onClose}>
                    <Text style={styles.hint}>{title}</Text>
                  </TouchableOpacity>
                </View>

                {leftIcon && (
                  <TouchableOpacity
                    onPress={handleContinuePress}
                    style={styles.pv30}>
                    <Button
                      onPress={onClose}
                      width={widthPixel(280)}
                      height={50}>
                      CONTINUE
                    </Button>
                  </TouchableOpacity>
                )}
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  main: {
    flex: 1,
    alignSelf: 'center',
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  centerview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPixel(350),
    height: heightPixel(440),
    // marginLeft: -19,
    // padding:50,
  },
  content: {
    padding: 10,
    backgroundColor: colors.theme,
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  procompalert: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: widthPixel(190),
    marginTop: widthPixel(25),
    height: widthPixel(170),
    resizeMode: 'contain',
  },
  head: {
    // flexDirection: 'row',
  },
  hint: {
    width: widthPixel(290),
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.black,
    fontSize: responsiveFontSize(2.2),
    marginTop: 20,
    marginLeft: 10,
    textAlign: 'center',
  },
  pv30: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Alert;
