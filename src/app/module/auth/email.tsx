import React, { ReactElement, useState ,useRef,useEffect} from 'react'
import { Dimensions,Animated,Keyboard } from 'react-native'
import { Text, Wrapper } from '../../../components'
import Input from '../../components/input'
import { colors } from '../../theme'
import langEng from './../../lang/eng';
import Icon from "../../../asset";
import { StackNavigationProp } from '@react-navigation/stack'
import TouchableContainer from '../../../components/containers/TouchableWrapper'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { GetFollowedByPatients, GetOtp, GetUser } from '../../../services'
import { OtpRequest, VerifyOtpRequest } from '../../../types/interfaces'
import idState from '../../state/id'
import ImageBackground from '../../../components/ImageBackground'
interface Props {
    navigation: StackNavigationProp<any,any>
}
function EmailScreen(p:Props): ReactElement {
    const [email, setEmail] = useState("") 
    const [posted, setposted] = useState(false)
    const Height = useRef(new Animated.Value(Dimensions.get('window').height*0.75)).current
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
 
    const [id, setid] = useState(0)
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
          console.log("Keyboard up")
          Animated.timing(Height, {
            toValue: Dimensions.get('window').height*0.15,
            duration: 500,
            useNativeDriver:false
          }).start();      
        }); 
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            console.log("Keyboard down")
            Animated.timing(Height, {
                toValue: Dimensions.get('window').height*0.75,
                duration: 500,
                useNativeDriver:false
              }).start();  
        });
    })
    // const [OtpRes, setOtpRes] = useState<VerifyOtpRequest>()
    const mutation = useMutation((req: OtpRequest) => {
          console.log("hello")
        return GetOtp(req)
   
      },{
          onSuccess:(data,vars)=>{
            console.log(data)
            setid(data['data']['id'])
            setposted(true)
          },
          onError:()=>{
              console.log("error");
              
          }
      })
    React.useEffect(()=>{
        if (posted){
            p.navigation.navigate('OTP');
            idState.set({id:id})
             
        }
        return (
            setposted(false)
        )
    },[posted])

 
    return (
        <Wrapper flex={1} backgoundColor={colors.background}>
             
            <Wrapper backgoundColor={colors.lightColor} height={Height} center alignItems='center'>
            <ImageBackground>
            </ImageBackground>
            <Text
                    bold
                    large 
                > WELCOME</Text> 
            </Wrapper>
            
            
            <Wrapper flex={1} center alignItems='center'>
                <Input
                    content={langEng.email}
                    backgroundColor={colors.lightColor}
                    width={Dimensions.get('screen').width - 40}
                    marginB={30}
                    radius={5}
                    
                    onChangeText={(text) => setEmail(text)}
                >
                    <Icon.Mail height={20} width={20}/>
                </Input>
                
                <TouchableContainer 
                    height={40} 
                    width={100} 
                    alignItems='center' 
                    centerMain 
                    radius={5}
                    marginR={30}
                    backgoundColor={colors.buttonColor}
                    rightComponent={
                        <Icon.Right height={20} width={15}/>
                    }
                    style={{
                        alignSelf:'flex-end'
                    }}
                    Onpress={()=>{
                       // mutation.mutate({email:email})
                        // idState.set({id:90})
                         p.navigation.navigate('OTP');
                        
                    }}
                    >
                    <Text>
                        Next
                    </Text>
                </TouchableContainer> 

            </Wrapper>
        </Wrapper>
    )
}

export default EmailScreen
