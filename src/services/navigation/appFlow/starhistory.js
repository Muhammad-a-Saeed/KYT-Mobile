import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../../constants';
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator();
export class ProfileStack extends Component {
  render() {
    return (
      <MyStack.Navigator
        initialRouteName={routes.starhistory}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name={routes.starhistory} component={App.StarHistory} />
      </MyStack.Navigator>
    );
  }
}
