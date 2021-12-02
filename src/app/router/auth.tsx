import React from 'react'
import EmailScreen from '../module/auth/email';
import OTPScreen from './../module/auth/otp';
import DetailScreen from '../module/user/details';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeRoute  from './home';

const Stack = createStackNavigator();
const defaultNavigationSeetings = {
    headerShown: false
}

const RegisterRoute = () => {
    return (
        <Stack.Navigator initialRouteName={'Email'}>
            <Stack.Screen name="Email" component={EmailScreen} options={defaultNavigationSeetings} />
            <Stack.Screen name="OTP" component={OTPScreen} options={defaultNavigationSeetings} />
            <Stack.Screen name="Details" component={DetailScreen} options={defaultNavigationSeetings} />
            <Stack.Screen name="HomeRoute" component={HomeRoute} options={defaultNavigationSeetings} />
    
        </Stack.Navigator>
    )
}

const LoginRoute = () => {
    return (
        <Stack.Navigator initialRouteName={'Email'}>
            <Stack.Screen name="Email" component={EmailScreen} options={defaultNavigationSeetings} />
            <Stack.Screen name="OTP" component={OTPScreen} options={defaultNavigationSeetings} />
            <Stack.Screen name="HomeRoute" component={HomeRoute} options={defaultNavigationSeetings} />
        </Stack.Navigator>
    )
}
interface Props {
    pres:boolean    
}
const RootRouter = (p:Props)=>{
    React.useEffect(()=>{
        console.log("root speaking: ", p.pres);
        
    },[])
    return (
        p.pres?
        <LoginRoute/>
        :
        <RegisterRoute/>
    )
}
export default RootRouter;
