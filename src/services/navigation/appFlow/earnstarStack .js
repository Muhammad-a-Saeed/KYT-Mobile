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
        initialRouteName={routes.earnstar}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name={routes.earnstar} component={App.EarnStar} />
      </MyStack.Navigator>
    );
  }
}
