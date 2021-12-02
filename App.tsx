import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,

} from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';
import RootRouter from './src/app/router/auth';
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from 'react-query';
import { getData } from './src/cache/user';
import { UpdateUserDoctor } from './src/services';
import { colors } from './src/app/theme';
import Home from './src/app/module/user/home';
import HomeRoute from './src/app/router/home';

// import Config from "react-native-config";
//TODO:cerate email screen
const App = () => {
  const [pres, setpres] = React.useState(false)
  
  const queryClient=new QueryClient()
  React.useEffect(()=>{
    let cacheRes = getData()
    Promise.resolve(cacheRes).then(
      (d)=>{
        console.log(d);
        
      }
    )
   
  },[])
  return (
    // <QueryClientProvider client={queryClient}>
    // <NavigationContainer >
    //   <KeyboardAvoidingView style={{
    //     flex:1,
    //     // backgroundColor:'red'
    //   }}>
    //     <RootRouter pres={pres}/>
    //   </KeyboardAvoidingView>
    // </NavigationContainer>
    // </QueryClientProvider>
    <NavigationContainer>
    <HomeRoute/>

    </NavigationContainer>
  )
};


export default App;