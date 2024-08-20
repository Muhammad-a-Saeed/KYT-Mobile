import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import { routes } from '../../constants';
import * as Auth from '../../../screens/authFlow';

const AuthStack = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName={routes.splash} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}>
            <AuthStack.Screen name={routes.splash} component={Auth.Splash} />
            <AuthStack.Screen name={routes.signin} component={Auth.Signin} />
            <AuthStack.Screen name={routes.signup} component={Auth.Signup} />
            <AuthStack.Screen name={routes.onboarding} component={Auth.onboarding} />
        </AuthStack.Navigator>
    )
}
