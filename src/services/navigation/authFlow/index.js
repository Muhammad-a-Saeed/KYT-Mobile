import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import { routes } from '../../constants';
import * as Auth from '../../../screens/authFlow';

const AuthStack = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName={routes.signup} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}>
            <AuthStack.Screen name={routes.splash} component={Auth.Splash} />
            <AuthStack.Screen name={routes.onboarding} component={Auth.onboarding} />
            <AuthStack.Screen name={routes.signin} component={Auth.Signin} />
            <AuthStack.Screen name={routes.signup} component={Auth.Signup} />
            <AuthStack.Screen name={routes.forgetpasword} component={Auth.forgetpasword} />
            <AuthStack.Screen name={routes.otpscreen} component={Auth.Otpscreen} />
            <AuthStack.Screen name={routes.resetpasword} component={Auth.Resetpasword} />
            <AuthStack.Screen name={routes.profilesetup} component={Auth.ProfileSetup} />
            <AuthStack.Screen name={routes.addaddress} component={Auth.AddAddress} />
            <AuthStack.Screen name={routes.mapscreen} component={Auth.MapScreen} />


        </AuthStack.Navigator>
    )
}
