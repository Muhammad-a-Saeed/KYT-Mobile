import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator()
export class ReportStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.report} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.report} component={App.Report} />
            </MyStack.Navigator>
        )
    }
}
