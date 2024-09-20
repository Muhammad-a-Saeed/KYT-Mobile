import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../../constants';
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator();
export class NotificationStack extends Component {
  render() {
    return (
      <MyStack.Navigator
        initialRouteName={routes.privacypolicy}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen
          name={routes.privacypolicy}
          component={App.PrivacyPolicy}
        />
      </MyStack.Navigator>
    );
  }
}
