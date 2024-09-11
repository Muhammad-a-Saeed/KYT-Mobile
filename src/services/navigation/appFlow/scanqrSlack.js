import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../../constants';
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator();
export class NotificationStack extends Component {
  render() {
    return (
      <MyStack.Navigator
        initialRouteName={routes.scanqr}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name={routes.scanqr} component={App.ScanQR} />
      </MyStack.Navigator>
    );
  }
}
