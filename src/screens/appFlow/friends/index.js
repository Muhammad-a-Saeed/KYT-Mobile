import React from 'react';
import {View, Text, StatusBar, ScrollView, Image, FlatList} from 'react-native';

import {appIcons, colors, fontFamily, widthPixel} from '../../../services';
import {Button, Header} from '../../../components';
import {styles} from './styles';
import ReferralItem from '../../../components/referrelcard';

const FriendScreen = ({navigation}) => {
  const referralData = [
    {
      id: '1',
      userName: 'John Deo',
      medal: appIcons.bronze,
      medalType: 'Bronze',
      score: '80',
    },
    {
      id: '2',
      userName: 'Jane Doe',
      medal: appIcons.silver,
      medalType: 'Silver',
      score: '100',
    },
    {
      id: '3',
      userName: 'Alice Smith',
      medal: appIcons.gold,
      medalType: 'Gold',
      score: '150',
    },
  ];
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Friends'} />
      <View style={styles.wrapper}>
        <Text style={styles.referralText}>1 Referrals</Text>
        <View style={styles.row}>
          <Text style={styles.pointsText}>+15</Text>
          <Image source={appIcons.dollar} style={styles.coinIcon} />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.inviteLinkText}>My invite link</Text>
          <Button
            // onPress={() => navigation.navigate(routes.profileranking)}
            width={widthPixel(65)}
            height={32}
            backgroundColor={['#D1AA66', '#D1AA66']}
            fontSize={14}
            borderRadius={14}
            fontFamily={fontFamily.appTextRegular}>
            Copy
          </Button>
        </View>

        <Text style={styles.linkText}>
          http:/t.me/kyt_miror_app=r_6941423...
        </Text>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.referrelContainer}>
        <Text style={styles.referraltext}>My Referrals:</Text>
      </View>
      <View>
        <FlatList
          data={referralData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ReferralItem
              userName={item.userName}
              medal={item.medal}
              medalType={item.medalType}
              score={item.score}
            />
          )}
          contentContainerStyle={{paddingBottom: 20}}
        />
      </View>
    </View>
  );
};

export default FriendScreen;
