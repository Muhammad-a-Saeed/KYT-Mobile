import React, {Component} from 'react';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../../constants';
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator();
export class NotificationStack extends Component {
  render() {
    return (
      <MyStack.Navigator
        initialRouteName={routes.redeemreward}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen
          name={routes.redeemreward}
          component={App.RedeemReward}
        />
      </MyStack.Navigator>
    );
  }
}
