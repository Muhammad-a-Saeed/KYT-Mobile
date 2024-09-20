import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../../constants';
import * as App from '../../../screens/appFlow';
import {MapScreen} from '../../../screens/authFlow';

const MyStack = createStackNavigator();
export class NotificationStack extends Component {
  render() {
    return (
      <MyStack.Navigator
        initialRouteName={routes.mapscreen}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name={routes.mapscreen} component={MapScreen} />
      </MyStack.Navigator>
    );
  }
}
