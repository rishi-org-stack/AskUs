import React, { ReactElement } from 'react'
import { Dimensions, TextInput } from 'react-native'
import Text from '../../../components/text'
import Wrapper from '../../../components/containers/wrapper'
import Button from '../../components/button'
import Input from '../../components/input'
import { colors } from '../../theme'
import TouchableContainer from '../../../components/containers/TouchableWrapper'
import Icon from "../../../asset";
import { StackNavigationProp } from '@react-navigation/stack'
import { useMutation } from 'react-query'
import { VerifyOtpRequest } from '../../../types/interfaces'
import { VerifyOtp } from '../../../services'
import idState from '../../state/id'
import { getData, storeData } from '../../../cache/user'
import tokenState from '../../state/token'
import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators'

interface Props{
    navigation: StackNavigationProp<any,any>
}
function OTPScreen(p:Props): ReactElement {
    const [otp, setotp] = React.useState('')
    const [id, setid] = React.useState(0)
    const [data, setdata] = React.useState()
    const [posted, setposted] = React.useState(false)
    const [pres, setpres] = React.useState(false)
    const pin1 = React.useRef<TextInput>(null)
    const pin2 = React.useRef<TextInput>(null)
    const pin3 = React.useRef<TextInput>(null)
    const pin4 = React.useRef<TextInput>(null)
    const pin5 = React.useRef<TextInput>(null)
    const pin6 = React.useRef<TextInput>(null)

    React.useEffect(() => {

        pin1.current?.focus()
        setid(idState.id.get())
        let cacheRes = getData()
        Promise.resolve(cacheRes).then(
          (d)=>{
            if (d !==null){
                setpres(true)
            }
            console.log(d);
            
          }
        )
        
        if (posted){
            console.log("token: ", data!['data']);
            
            tokenState.token.set(data!['data'])
            console.log("comparison: ", data!['data']== tokenState.get());
            
            let storeRes = storeData(String(data!['data']))
            Promise.
                    resolve(storeRes).
                    then(d=>console.log("cache store res",d)).
                    catch(e=>console.log("error in cache",e))
                pres ? p.navigation.navigate('HomeRoute')
                :
                p.navigation.navigate('Details')
        }

        
    }, [posted])

    const mutation = useMutation((req: VerifyOtpRequest) => {

        return VerifyOtp(req)
   
      },{
          onSuccess:(data)=>{
            setdata(data)
            console.log(data)
            setposted(true)
          },
          onError:()=>{
              console.log("error");
              
          }
    })
    return (
        <Wrapper flex={1} backgoundColor={colors.background}>
            <Wrapper center alignItems='center'>
                <Text
                    bold
                    large
                >
                    Welcome to AskUs

                </Text>
            </Wrapper>
            <Wrapper flex={1} center alignItems='center'>
                <Wrapper row >
                    <Input
                        ref={pin1}
                        backgroundColor={colors.lightColor}
                        width={50}
                        radius={5}
                        marginL={5}
                        marginR={5}
                        marginB={20}
                        maxLength={1}
                        type={'numeric'}
                        onChangeText={(text) => {
                            setotp(otp+text)
                            pin2.current?.focus();
                        }}
                    />
                    <Input
                        ref={pin2}
                        backgroundColor={colors.lightColor}
                        width={50}
                        radius={5}
                        marginL={5}
                        marginR={5}
                        maxLength={1}
                        type={'numeric'}
                        onChangeText={(text) => {
                            // setpin2Text(text)
                            setotp(otp+text)
                            pin3.current?.focus()
                        }} />
                    <Input
                        ref={pin3}
                        backgroundColor={colors.lightColor}
                        width={50}
                        radius={5}
                        marginL={5}
                        marginR={5}
                        maxLength={1}
                        type={'numeric'}
                        onChangeText={(text) => {
                            // setpin3Text(text)
                            setotp(otp+text)
                            pin4.current?.focus()
                        }} />
                    <Input
                        ref={pin4}
                        backgroundColor={colors.lightColor}
                        width={50}
                        radius={5}
                        marginL={5}
                        marginR={5}
                        maxLength={1}
                        type={'numeric'}
                        onChangeText={(text) => {
                            // setpin4Text(text)
                            setotp(otp+text)
                            pin5.current?.focus()
                        }} />
                    <Input
                        ref={pin5}
                        backgroundColor={colors.lightColor}
                        width={50}
                        radius={5}
                        marginL={5}
                        marginR={5}
                        maxLength={1}
                        type={'numeric'}
                        onChangeText={(text) => {
                            // setpin5Text(text)
                            setotp(otp+text)
                            pin6.current?.focus()
                        }} />
                    <Input
                        ref={pin6}
                        backgroundColor={colors.lightColor}
                        width={50}
                        radius={5}
                        marginL={5}
                        marginR={5}
                        maxLength={1}
                        type={'numeric'}
                        onChangeText={(text) => {
                            // setpin6Text(text)
                            setotp(otp+text)

                            
                        }} />
                </Wrapper>
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
                        mutation.mutate({"id": id, "otp": otp})
                        
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

export default OTPScreen;
