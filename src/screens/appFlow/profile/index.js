import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import {appIcons, colors, routes} from '../../../services';
import {Header, ProfileList} from '../../../components';
import {styles} from './styles';

const Profile = ({navigation}) => {
  const [profilelist, setprofilelist] = useState([
    {
      id: '1',
      icon: appIcons.frinds,
      label: 'Friends',
      route: routes.friend,
    },
    {id: '2', icon: appIcons.loc, label: 'Location', route: routes.addaddress},
    {
      id: '3',
      icon: appIcons.appicon,
      label: 'Appicon',
      route: routes.appiconscreen,
    },
    {
      id: '4',
      icon: appIcons.acountblance,
      label: 'Account Balance',
      route: routes.accountbalance,
    },
    {
      id: '5',
      icon: appIcons.chngepass,
      label: 'Change Password',
      route: routes.changepassword,
    },
    {
      id: '6',
      icon: appIcons.pronotification,
      label: 'Notification Preferences',
      route: routes.settingnotification,
    },
    {
      id: '7',
      icon: appIcons.privacydata,
      label: 'Privacy & Data',
      route: routes.privacypolicy,
    },
  ]);
  const handleonPress = route => {
    navigation.navigate(route);
  };
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Profile'} />
      <View style={styles.wrapper}>
        <View style={styles.pictureContainer}>
          <Image
            source={appIcons.profilebackground}
            style={styles.profilePicture}
          />
          <TouchableOpacity
            style={styles.editIcon}
            onPress={() => navigation.navigate(routes.profilesetup)}>
            <Image source={appIcons.edit} style={styles.editIconImage} />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <View style={styles.userInfoBackground} />
            <View style={styles.userInfoContent}>
              <View style={styles.userInfoInner}>
                <Text style={styles.userName}>Sarrah Manhata</Text>
                <Text style={styles.userEmail}>sarrahmanhata@gmail.com</Text>
              </View>
              <View style={styles.idmain}>
                <Text style={styles.userId}>#11100</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flatlist}>
          <ScrollView contentContainerStyle={styles.listContainer}>
            {profilelist.map(item => (
              <ProfileList
                key={item.id}
                icon={item.icon}
                label={item.label}
                onpress={() => handleonPress(item.route)}
              />
            ))}
            <View style={styles.cardContainer}>
              <Text style={styles.mainText}>Help & Policies</Text>
              <TouchableOpacity style={styles.innercardContainer}>
                <Text style={styles.cardText}>Help</Text>
                <Image source={appIcons.right} style={styles.arrowIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.innercardContainer}>
                <Text style={styles.cardText}>Application Terms</Text>
                <Image source={appIcons.right} style={styles.arrowIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.innercardContainer}>
                <Text style={styles.cardText}>Privacy Notice</Text>
                <Image source={appIcons.right} style={styles.arrowIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.innercardContainer}>
                <Text style={styles.cardText}>Delete Account</Text>
                <Image source={appIcons.right} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
            <View>
              <ProfileList
                icon={appIcons.logout}
                label="Logout"
                color={colors.textRed}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Profile;
