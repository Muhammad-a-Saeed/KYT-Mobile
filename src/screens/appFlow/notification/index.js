import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import {appIcons, colors} from '../../../services';
import {Header} from '../../../components';
import {styles} from './styles';
import NotificationList from '../../../components/custumlist';

const Notification = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Notification'} />
      <View style={styles.maincontainer}>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <Text style={styles.Today}>Today</Text>
          <NotificationList
            icon={appIcons.notificationicon}
            title="$50 Earned"
            description="Ref a friend at Bronze tierRef a friend at Bronze tierRef a friend at Bronze tierRef a friend at Bronze tier"
          />
          <NotificationList
            icon={appIcons.notificationicon}
            title="$50 Earned"
            description="Ref a friend at Bronze tier"
          />
          <NotificationList
            icon={appIcons.notificationicon}
            title="80 Star Earned"
            description="Ref a friend at Bronze tier"
          />
          <Text style={styles.Today}>Yesterday</Text>
          <NotificationList
            icon={appIcons.notificationicon}
            title="$50 Earned"
            description="Ref a friend at Bronze tier"
          />
          <NotificationList
            icon={appIcons.notificationicon}
            title="$50 Earned"
            description="Ref a friend at Bronze tier"
          />
          <NotificationList
            icon={appIcons.notificationicon}
            title="80 Star Earned"
            description="Ref a friend at Bronze tier"
          />
          <Text style={styles.Today}>Recent</Text>
          <NotificationList
            icon={appIcons.notificationicon}
            title="$50 Earned"
            description="Ref a friend at Bronze tier"
          />
          <NotificationList
            icon={appIcons.notificationicon}
            title="$50 Earned"
            description="Ref a friend at Bronze tier"
          />
          <NotificationList
            icon={appIcons.notificationicon}
            title="80 Star Earned"
            description="Ref a friend at Bronze tier"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Notification;
