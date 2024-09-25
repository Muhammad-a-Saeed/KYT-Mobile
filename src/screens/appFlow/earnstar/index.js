import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import {appIcons, colors} from '../../../services';
import {Custumredeemreward, Header} from '../../../components';
import {styles} from './styles';

const EarnStar = ({navigation}) => {
  const rewardsData = [
    {
      id: '1',
      starCount: 80,
      rewardType: 'Come to your next teeth Cleaning Appointment',
      starIcon: appIcons.staricon,
      shuffle: true,
      starBackgroundColor: colors.theme,
    },
    {
      id: '2',
      starCount: 70,
      rewardType: '$30 Gift Card',
      starIcon: appIcons.staricon,
      shuffle: true,
      starBackgroundColor: colors.theme,
    },
    {
      id: '3',
      starCount: 50,
      rewardType: 'Free Coffee Mug',
      starIcon: appIcons.staricon,
      shuffle: true,
      starBackgroundColor: colors.theme,
    },
    {
      id: '4',
      starCount: 100,
      rewardType: 'VIP Event Pass',
      starIcon: appIcons.staricon,
      shuffle: true,
      starBackgroundColor: colors.theme,
    },
    {
      id: '5',
      starCount: 60,
      rewardType: 'Discount Coupon',
      starIcon: appIcons.staricon,
      shuffle: true,
      starBackgroundColor: colors.theme,
    },
    {
      id: '6',
      starCount: 60,
      rewardType: 'Discount Coupon',
      starIcon: appIcons.staricon,
      shuffle: true,
      starBackgroundColor: colors.theme,
    },
    {
      id: '7',
      starCount: 60,
      rewardType: 'Discount Coupon',
      starIcon: appIcons.staricon,
      shuffle: true,
      starBackgroundColor: colors.theme,
    },
    {
      id: '8',
      starCount: 1000,
      rewardType: 'Discount Coupon',
      starIcon: appIcons.staricon,
      shuffle: true,
      starBackgroundColor: colors.theme,
    },
  ];

  const renderItem = ({item}) => (
    <Custumredeemreward
      starCount={item.starCount}
      rewardType={item.rewardType}
      starIcon={item.starIcon}
      shuffle={item.shuffle}
      starBackgroundColor={item.starBackgroundColor}
    />
  );

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Ways to earn star'} />
      <ImageBackground
        source={appIcons.head2}
        style={styles.centeredImageBackground}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.starLevelText}>My Stars</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>300</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.iconTextContainer}>
        <Image source={appIcons.ticksquare} style={styles.ticksquare} />
        <Text style={styles.iconText}>Keep Your Teeth and Get Rewarded!</Text>
      </View>

      <View style={styles.backdiv}>
        <FlatList
          data={rewardsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default EarnStar;
