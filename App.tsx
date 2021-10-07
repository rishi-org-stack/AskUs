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
import Wrapper from './src/components/wrapper';
// import ComText from './src/components/text';
// import Button from './src/components/button';
// import Input from './src/components/input';
import Input from './src/app/components/input'
import { colors } from "./src/app/theme"
import { Text } from 'react-native';
import EmailIcon from "./src/components/icon"
import {
  NavigationContainer,

} from '@react-navigation/native';
import Button from './src/app/components/button';
import EmailScreen from './src/app/module/auth/otp';
import AuthRoute from './src/app/router/auth';
import DetailScreen from './src/app/module/user/details';
//TODO:cerate email screen
const App = () => {
  return (
    <NavigationContainer >
      {/* <Wrapper
        backgoundColor={colors.background}
        flex={1}>


      </Wrapper> */}
      {/* <EmailScreen /> */}
      {/* <AuthRoute /> */}
      <DetailScreen />
    </NavigationContainer>

    // <View>
    // {/* <ComText
    // content="Ask Us"
    // color="white"
    // medium
    // /> */}
    //  {/* //width={Dimensions.get("screen").width} flex={1} /> */ }
    // {/* <Input content="rishi" head={"ok"} /> */ }
    // </Wrapper>
    // </View>
    // <Button onPress={() => console.log("button")} row center backgoundColor="black" flex={1}>
    //   <ComText
    //     content="Ask Us"
    //     color="white"
    //     medium
    //   />
    // </Button>
  )
};


// import React from 'react'
// import styled from 'styled-components/native'

// const Container = styled.View`
//   flex: 1;
//   background-color: #fff;
//   align-items: center;
//   justify-content: center;
// `

// const Title = styled.Text`
//   font-size: 24;
// `

// const App = () => {
//   // return {
//   return (
//     <Container>
//       <Title>Crowdbotics app</Title>
//     </Container>
//   )
//   // }
// }
export default App;
