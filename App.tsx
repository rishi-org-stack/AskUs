// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * Generated with the TypeScript template
//  * https://github.com/react-native-community/react-native-template-typescript
//  *
//  * @format
//  */

import React from 'react';
import {
  NavigationContainer,

} from '@react-navigation/native';
import styles from "./styles.json"
// import Button from './src/app/components/button';
// import EmailScreen from './src/app/module/auth/otp';
// import AuthRoute from './src/app/router/auth';
import DetailScreen from './src/app/module/user/details';
import Profile from './src/app/module/user/patient/connect';
import { create } from 'tailwind-rn';
import { View } from 'react-native';

const {tailwind} = create(styles)
//TODO:cerate email screen
const App = () => {
  return (
    <NavigationContainer >
      <Profile />
    </NavigationContainer>
  )
};


export default App;