import { useNavigation } from '@react-navigation/native'
import React, { ReactElement, useState } from 'react'
import { Dimensions } from 'react-native'
import { Icon, Text, Wrapper } from '../../../components'
import Button from '../../components/button'
import Input from '../../components/input'
import { colors } from '../../theme'
import { authScreenProp } from '../../types/authRoute'
import langEng from './../../lang/eng';

interface Props {
    // navigation?: any
}
function EmailScreen(): ReactElement {
    const [email, setEmail] = useState("")
    const nav = useNavigation<authScreenProp>()
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
                <Input
                    content="ok"
                    backgroundColor={colors.lightColor}
                    width={Dimensions.get('screen').width - 40}
                    marginB={30}
                    onChangeText={(text) => setEmail(text)}
                >
                    <Icon.EmailIcon color="blue" />
                </Input>
                <Button
                    title={langEng.next}
                    bold
                    width={Dimensions.get('screen').width - 60}
                    onPress={() => { console.warn(email); nav.navigate('OTP') }}
                />
            </Wrapper>
        </Wrapper>
    )
}

export default EmailScreen
