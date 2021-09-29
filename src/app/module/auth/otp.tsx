import React, { ReactElement } from 'react'
import { Dimensions, TextInput } from 'react-native'
import Text from '../../../components/text'
import Wrapper from '../../../components/wrapper'
import Button from '../../components/button'
import Input from '../../components/input'
import { colors } from '../../theme'
import langEng from './../../lang/eng';

function OTPScreen(): ReactElement {
    const [pin1Text, setpin1Text] = React.useState('')
    const [pin2Text, setpin2Text] = React.useState('')
    const [pin3Text, setpin3Text] = React.useState('')
    const [pin4Text, setpin4Text] = React.useState('')
    const [pin5Text, setpin5Text] = React.useState('')
    const [pin6Text, setpin6Text] = React.useState('')
    const pin1 = React.useRef<TextInput>(null)
    const pin2 = React.useRef<TextInput>(null)
    const pin3 = React.useRef<TextInput>(null)
    const pin4 = React.useRef<TextInput>(null)
    const pin5 = React.useRef<TextInput>(null)
    const pin6 = React.useRef<TextInput>(null)
    React.useEffect(() => {
        pin1.current?.focus()
    }, [])
    // let otp = ''
    return (
        <Wrapper flex={1} backgoundColor={colors.background}>
            <Wrapper flex={2} center>
                <Text
                    content="Welcome to AskUs"
                    bold
                    large
                />
            </Wrapper>
            <Wrapper flex={1} center>
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
                            setpin1Text(text);
                            // if (pin1Text != ''){
                            pin2.current?.focus();
                            // }
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
                            setpin2Text(text)
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
                            setpin3Text(text)
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
                            setpin4Text(text)
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
                            setpin5Text(text)
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
                            setpin6Text(text)
                            // pin6Text != undefined ?
                            // () => {
                            // otp =
                            // console.warn(otp)
                            // onDone()
                            // } : null
                            // pin3.current?.focus()
                            // React.alert()
                        }} />
                </Wrapper>
                <Button
                    title={langEng.submit}
                    bold
                    width={Dimensions.get('screen').width - 60}
                    onPress={() => {

                        console.log(pin1Text +
                            pin2Text +
                            pin3Text +
                            pin4Text +
                            pin5Text +
                            pin6Text)
                    }}
                />
            </Wrapper>
        </Wrapper>
    )
}

export default OTPScreen
