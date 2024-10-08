import React from 'react';
import {View, Text, StatusBar, Image, FlatList} from 'react-native';
import {appIcons, colors, routes} from '../../../services';
import {Button, Custumredeemreward, Header} from '../../../components';
import {styles} from './styles';

const RedeemReward = ({navigation}) => {
  const rewardsData = [
    {
      id: '1',
      starCount: 80,
      rewardType: 'Complimentary Gift Bag',
      starIcon: appIcons.staricon,
    },
    {
      id: '2',
      starCount: 70,
      rewardType: '$30 Gift Card',
      starIcon: appIcons.staricon,
    },
    {
      id: '3',
      starCount: 50,
      rewardType: 'Free Coffee Mug',
      starIcon: appIcons.staricon,
    },
    {
      id: '4',
      starCount: 100,
      rewardType: 'VIP Event Pass',
      starIcon: appIcons.staricon,
    },
    {
      id: '5',
      starCount: 60,
      rewardType: 'Discount Coupon',
      starIcon: appIcons.staricon,
    },
  ];

  const renderItem = ({item}) => (
    <Custumredeemreward
      starCount={item.starCount}
      rewardType={item.rewardType}
      starIcon={item.starIcon}
      elevation="2"
    />
  );

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Redeem Reward'} />
      <View style={styles.centeredContent}>
        <Text style={styles.starLevelText}>My Stars</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>300</Text>
          <Image source={appIcons.staricon} style={styles.starIcon} />
        </View>
      </View>

      <View style={styles.backdiv}>
        <View style={styles.frontdiv}>
          <FlatList
            data={rewardsData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate(routes.qrgenerator)}>
              Redeem
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RedeemReward;
