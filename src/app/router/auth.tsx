import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailScreen from '../module/auth/email';
import OTPScreen from './../module/auth/otp';

interface Props {

}

const Stack = createNativeStackNavigator()


const defaultNavigationSeetings = {
    headerShown: false
}

const AuthRoute = (props: Props) => {
    return (
        <Stack.Navigator initialRouteName={'Email'}>
            <Stack.Screen name="Email" component={EmailScreen} options={defaultNavigationSeetings} />
            <Stack.Screen name="OTP" component={OTPScreen} options={defaultNavigationSeetings} />
        </Stack.Navigator>
    )
}

export default AuthRoute
