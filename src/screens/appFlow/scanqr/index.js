import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {appIcons, colors} from '../../../services';
import {Header} from '../../../components';
import {styles} from './styles';

const ScanQR = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Scan QR'} />
      <View style={styles.wrapper}>
        <Image source={appIcons.qrscanner} style={styles.qr} />
      </View>
      <View style={styles.textmain}>
        <Text style={styles.t1}>
          QR Code Scanner should only be used for Cleaning Redemption Points
        </Text>
      </View>
    </View>
  );
};

export default ScanQR;
