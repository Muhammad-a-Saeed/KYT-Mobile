import React from 'react';
import {View, Text, StatusBar, ScrollView, Image, FlatList} from 'react-native';

import {appIcons, colors} from '../../../services';
import {Custumredeemreward, Header} from '../../../components';
import {styles} from './styles';
import NotificationList from '../../../components/custumlist';

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
