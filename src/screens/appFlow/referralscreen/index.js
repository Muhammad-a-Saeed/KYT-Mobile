import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontFamily,
  colors,
  appIcons,
  routes,
} from '../../../services'; // Assuming you have these utilities
import * as Progress from 'react-native-progress';
import {Button} from '../../../components';
import {styles} from './styles';

const ReferralScreen = ({navigation}) => {
  const [medalIndex, setMedalIndex] = useState(0); // 0: Bronze, 1: Silver, 2: Gold
  const medals = [
    {name: 'Bronze', image: appIcons.bronze, referrals: '1/5'},
    {name: 'Silver', image: appIcons.silver, referrals: '3/5'},
    {name: 'Gold', image: appIcons.gold, referrals: '5/5'},
  ];

  const handleNextMedal = () => {
    console.log('qwertyu', medalIndex);

    if (medalIndex < medals.length - 1) {
      setMedalIndex(medalIndex + 1);
    }
  };

  const handlePrevMedal = () => {
    console.log('qwertyu', handlePrevMedal);
    if (medalIndex > 0) {
      setMedalIndex(medalIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Text */}
      <Text style={styles.medalTitle}>{medals[medalIndex].name}</Text>
      <Text style={styles.subText}>
        Each Referral Earns You a $50 Gift Card
      </Text>

      <TouchableOpacity style={styles.imageWrapper}>
        <Pressable style={styles.leftIndicator} onPress={handlePrevMedal}>
          <Image source={appIcons.rightmedal} style={styles.indicatorIcon} />
        </Pressable>

        <Image source={medals[medalIndex].image} style={styles.medalImage} />

        <Pressable style={styles.rightIndicator} onPress={handleNextMedal}>
          <Image source={appIcons.leftmedal} style={styles.indicatorIcon} />
        </Pressable>
      </TouchableOpacity>

      <Text style={styles.centerText}>Number of People You Referred</Text>
      <Text style={styles.referralCount}>{medals[medalIndex].referrals}</Text>

      <Progress.Bar
        styleAttr="Horizontal"
        indeterminate={false}
        width={250}
        progress={medalIndex / (medals.length - 1)}
        color={colors.theme}
        style={styles.progressBar}
      />

      <View style={styles.pv30}>
        <Button onPress={() => navigation.navigate(routes.invitefriend)}>
          Invite Friends
        </Button>
      </View>
    </View>
  );
};

export default ReferralScreen;
