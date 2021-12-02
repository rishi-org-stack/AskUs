import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value:string) => {
  try {
    await AsyncStorage.setItem('@token', value,(res)=>console.log("cache.ts",res)
    )
  } catch (e) {
    // saving error
  }
}

export const getData = async (): Promise<string|null>=> {
  // try {
    const value = await AsyncStorage.getItem('@token')
    // if(value !== null) {
    //   return value
    // }
    return value
  // } catch(e) {
  //   // error reading value
  // }
}
