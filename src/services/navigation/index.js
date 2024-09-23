import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from '..';
import {AuthNavigation} from './authFlow';
import {
  AccountBalance,
  AddAddress,
  AppIcon,
  ChangePassword,
  ContactScreen,
  EarnStar,
  FriendScreen,
  HomeScreen,
  InviteFriend,
  Notification,
  PrivacyPolicy,
  Profile,
  ProfileRanking,
  ProfileSetup,
  QrGenerator,
  RedeemReward,
  ReferralScreen,
  ScanQR,
  SettingNotification,
  StarHistory,
} from '../../screens/appFlow';
import {MapScreen} from '../../screens/authFlow';
// import { TabNavigator } from './tabFlow/index'

const MyStack = createStackNavigator();
export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        initialRouteName={routes.signup}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name={routes.auth} component={AuthNavigation} />
        <MyStack.Screen name={routes.homeScreen} component={HomeScreen} />
        <MyStack.Screen name={routes.notification} component={Notification} />
        <MyStack.Screen name={routes.starhistory} component={StarHistory} />
        <MyStack.Screen name={routes.redeemreward} component={RedeemReward} />
        <MyStack.Screen name={routes.earnstar} component={EarnStar} />
        <MyStack.Screen name={routes.qrgenerator} component={QrGenerator} />
        <MyStack.Screen name={routes.scanqr} component={ScanQR} />
        {/* <MyStack.Screen name={routes.mapscreen} component={MapScreen} /> */}
        <MyStack.Screen
          name={routes.referralscreen}
          component={ReferralScreen}
        />
        <MyStack.Screen
          name={routes.profileranking}
          component={ProfileRanking}
        />
        <MyStack.Screen name={routes.invitefriend} component={InviteFriend} />
        <MyStack.Screen name={routes.contactscreen} component={ContactScreen} />
        <MyStack.Screen name={routes.profile} component={Profile} />
        <MyStack.Screen
          name={routes.accountbalance}
          component={AccountBalance}
        />
        <MyStack.Screen name={routes.friend} component={FriendScreen} />
        <MyStack.Screen
          name={routes.settingnotification}
          component={SettingNotification}
        />
        <MyStack.Screen name={routes.privacypolicy} component={PrivacyPolicy} />
        <MyStack.Screen name={routes.appiconscreen} component={AppIcon} />
        <MyStack.Screen name={routes.profilesetup} component={ProfileSetup} />
        <MyStack.Screen name={routes.addaddress} component={AddAddress} />
        <MyStack.Screen name={routes.mapscreen} component={MapScreen} />
        <MyStack.Screen
          name={routes.changepassword}
          component={ChangePassword}
        />

        {/* <MyStack.Screen name={routes.tab} component={TabNavigator} /> */}
      </MyStack.Navigator>
    </NavigationContainer>
  );
};
