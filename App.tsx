/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Wrapper from './src/components/wrapper';
// import ComText from './src/components/text';
// import Button from './src/components/button';
// import Input from './src/components/input';
import Input from './src/app/components/input'
import { Dimensions } from 'react-native';

const App = () => {
  return (
    // <View>
    <Wrapper backgoundColor="black" flex={1}>
      {/* <ComText
        content="Ask Us"
        color="white"
        medium
      /> */}
      <Input content="rishi" head={"ok"} height={60} width={Dimensions.get("screen").width} flex={1} />
    </Wrapper>
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



export default App;
