import React, { ReactElement, useState } from 'react'
import { Dimensions } from 'react-native'
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
interface Props {
    navigation: StackNavigationProp<any,any>
}
function EmailScreen(p:Props): ReactElement {
    const [email, setEmail] = useState("")
    const [posted, setposted] = useState(false)
    const [id, setid] = useState(0)
    // const [OtpRes, setOtpRes] = useState<VerifyOtpRequest>()
    const mutation = useMutation((req: OtpRequest) => {

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
            
            <Wrapper  center alignItems='center'>
                <Text
                    bold
                    large
                > Welcome</Text>
            </Wrapper>
            <Wrapper flex={1} center alignItems='center'>
                <Input
                    content={langEng.email}
                    backgroundColor={colors.lightColor}
                    width={Dimensions.get('screen').width - 40}
                    marginB={30}
                    onChangeText={(text) => setEmail(text)}
                >
                    <Icon.Mail height={20} width={20}/>
                </Input>
                
                <TouchableContainer 
                    height={40} 
                    width={100} 
                    alignItems='center' 
                    centerMain 
                    radius={10}
                    marginR={30}
                    backgoundColor={colors.buttonColor}
                    rightComponent={
                        <Icon.Right height={20} width={15}/>
                    }
                    style={{
                        alignSelf:'flex-end'
                    }}
                    Onpress={()=>{
                        mutation.mutate({email:email})
                        // idState.set({id:90})
                        // p.navigation.navigate('OTP');
                        
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
