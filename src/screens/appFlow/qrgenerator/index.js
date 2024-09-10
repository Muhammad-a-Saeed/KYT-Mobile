import React from 'react';
import {View, Text, StatusBar, ScrollView, FlatList, Image} from 'react-native';

import {appIcons, colors} from '../../../services';
import {styles} from './styles';
import {CustomRanking, Head} from '../../../components';

const QrGenerator = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <Head
        backgroundImage={appIcons.Header}
        leftArrowIcon={appIcons.goback}
        logo={appIcons.head3}
        title="Congratulation"
      />
      <View style={styles.wrapper}>
        <Image source={appIcons.QR} style={styles.qr} />
        <View style={styles.textmain}>
          <Text style={styles.t1}>
            Please visit our clinic and claim your rewards via QR code
          </Text>
        </View>
      </View>
    </View>
  );
};

export default QrGenerator;
