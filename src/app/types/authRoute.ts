import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = { Email: undefined; OTP: undefined; };

export type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Email'>