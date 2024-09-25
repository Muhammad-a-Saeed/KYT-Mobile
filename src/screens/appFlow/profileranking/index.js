import React from 'react';
import {View, FlatList} from 'react-native';
import {appIcons} from '../../../services';
import {styles} from './styles';
import {CustomRanking, Head} from '../../../components';

const ProfileRanking = ({navigation}) => {
  const profileData = [
    {
      id: '1',
      profileImage: appIcons.p1,
      profileName: 'John Doe',
      starRating: 1750,
    },
    {
      id: '2',
      profileImage: appIcons.p2,
      profileName: 'Jane Smith',
      starRating: 1500,
    },
    {
      id: '3',
      profileImage: appIcons.p1,
      profileName: 'John Doe',
      starRating: 1000,
    },
    {
      id: '4',
      profileImage: appIcons.p2,
      profileName: 'Jane Smith',
      starRating: 800,
    },
    {
      id: '5',
      profileImage: appIcons.p1,
      profileName: 'John Doe',
      starRating: 750,
    },
    {
      id: '6',
      profileImage: appIcons.p2,
      profileName: 'Jane Smith',
      starRating: 500,
    },
    {
      id: '7',
      profileImage: appIcons.p1,
      profileName: 'John Doe',
      starRating: 450,
    },
    {
      id: '8',
      profileImage: appIcons.p2,
      profileName: 'Jane Smith',
      starRating: 350,
    },
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
      <Head
        backgroundImage={appIcons.Header}
        leftArrowIcon={appIcons.goback}
        logo={appIcons.head1}
        title="LeaderBoard"
      />
      <View style={styles.wrapper}>
        <FlatList
          data={profileData}
          renderItem={renderProfileItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={true}
        />
      </View>
      <View style={styles.bottomSection}>
        <CustomRanking
          profileImage={appIcons.p2}
          profileName="Sarah Martinez"
          starRating="300"
        />
      </View>
    </View>
  );
};

export default ProfileRanking;
