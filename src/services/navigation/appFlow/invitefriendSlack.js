import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../../constants';
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator();
export class ProfileStack extends Component {
  render() {
    return (
      <MyStack.Navigator
        initialRouteName={routes.invitefriend}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen
          name={routes.invitefriend}
          component={App.InviteFriend}
        />
      </MyStack.Navigator>
    );
  }
}
