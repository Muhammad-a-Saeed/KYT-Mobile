import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from '..';
import {AuthNavigation} from './authFlow';
import {
  HomeScreen,
  Notification,
  ProfileRanking,
  StarHistory,
} from '../../screens/appFlow';
// import { TabNavigator } from './tabFlow/index'

const MyStack = createStackNavigator();
export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        initialRouteName={routes.homeScreen}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name={routes.auth} component={AuthNavigation} />
        <MyStack.Screen name={routes.homeScreen} component={HomeScreen} />
        <MyStack.Screen name={routes.notification} component={Notification} />
        <MyStack.Screen name={routes.starhistory} component={StarHistory} />
        <MyStack.Screen
          name={routes.profileranking}
          component={ProfileRanking}
        />

        {/* <MyStack.Screen name={routes.tab} component={TabNavigator} /> */}
      </MyStack.Navigator>
    </NavigationContainer>
  );
};
