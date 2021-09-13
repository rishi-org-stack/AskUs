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
import ComText from './src/components/text';
import Button from './src/components/button';
import Input from './src/components/input';

const App = () => {
  return (
    // <View>
    <Wrapper center backgoundColor="black" flex={1}>
      <ComText
        content="Ask Us"
        color="white"
        medium
      />
      <Input />
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
