import React from 'react';
import {View, Text, StatusBar, ScrollView, FlatList} from 'react-native';

import {appIcons, colors} from '../../../services';
import {styles} from './styles';
import {CustomRanking, Head} from '../../../components';

const ProfileRanking = ({navigation}) => {
  const profileData = [
    {
      id: '1',
      profileImage: appIcons.p1, // Adjust this to your image source
      profileName: 'John Doe',
      starRating: 1750,
    },
    {
      id: '2',
      profileImage: appIcons.p2,
      profileName: 'Jane Smith',
      starRating: 1500,
    },
    // Add more profiles as needed
  ];

  const renderProfileItem = ({item}) => (
    <CustomRanking
      profileImage={item.profileImage}
      profileName={item.profileName}
      starRating={item.starRating}
    />
  );
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Head
        backgroundImage={appIcons.Header}
        leftArrowIcon={appIcons.goback}
        logo={appIcons.coin1}
        title="Redeem History"
      />
      <View style={styles.wrapper}>
        <FlatList
          data={profileData}
          renderItem={renderProfileItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer} // Optional styling for FlatList
        />
      </View>
    </View>
  );
};

export default ProfileRanking;
