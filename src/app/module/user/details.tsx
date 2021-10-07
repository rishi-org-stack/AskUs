import React from 'react'
import { Icon, Wrapper } from '../../../components';
import { colors } from '../../theme';
import Button from '../../components/button'
import Input from '../../components/input'
import langEng from './../../lang/eng';
import { Dimensions, Keyboard, ScrollView, Text } from 'react-native';
import { tSExternalModuleReference } from '@babel/types';

interface Props {

}
//TODO: ADD  experience input  and experience in year input fix overapping if items
const DetailScreen = (props: Props) => {
    const [Doc, setDoc] = React.useState(true)
    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return (
        <Wrapper flex={1} backgoundColor={colors.background}>
            <Wrapper flex={1}>

            </Wrapper>
            <Wrapper flex={isKeyboardVisible ? 10 : 8} margin={10}>
                <Wrapper row flex={1}
                >
                    <Wrapper flex={1} center>
                        <Button
                            title={langEng.doctor}
                            bold
                            width={Dimensions.get('screen').width - 250}
                            // backgroundColor={colors.background}
                            onPress={() => { setDoc(true) }}
                        />
                    </Wrapper>
                    <Wrapper flex={1} center>
                        <Button
                            title={langEng.patient}
                            bold
                            width={Dimensions.get('screen').width - 250}
                            // backgroundColor={colors.background}
                            onPress={() => { setDoc(false) }}
                        />
                    </Wrapper>
                </Wrapper>
                <Wrapper flex={7} center>

                    {/* <Text> */}
                    {/* Inputs will be here */}
                    {/* </Text> */}
                    {
                        Doc ? <Doctor /> : <Patient />
                    }

                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
};

const specialites = [
    "Allergy and immunology", "Anesthesiology", "Cardiology",
    "Dermatology", "endocrinology", "Neurology", "Obstetrics and gynecology", "Osteology", "Pathology", "Pediatrics"
    , "Psychiatry", "Urology"
]
const Patient = () => {
    const [Male, setMale] = React.useState(true)
    return (
        <Wrapper flex={1} >
            {/* <Text> */}
            {/* Patients */}
            {/* </Text> */}
            <Input
                content="Name"
                backgroundColor={colors.lightColor}
                width={Dimensions.get('screen').width - 40}
                marginB={10}
            // onChangeText={(text) => setEmail(text)}
            />
            <Wrapper row >
                <Wrapper flex={1}>
                    <Input
                        content="Age"
                        backgroundColor={colors.lightColor}
                        width={Dimensions.get('screen').width / 5}
                        marginB={10}
                        maxLength={2}
                        type='number-pad'
                    />
                </Wrapper>
                <Wrapper row flex={1}>
                    {/* <Input
                        content="Sex"
                        backgroundColor={colors.lightColor}
                        width={Dimensions.get('screen').width / 5}
                        marginB={10}
                        maxLength={6}
                    // type='number-pad'
                    /> */}
                    <Wrapper flex={1}>
                        <Button
                            title="Male"
                            width={80}
                            backgroundColor={Male ? undefined : colors.lightColor}
                            onPress={() => {
                                setMale(true)
                            }}
                        />
                    </Wrapper>
                    <Wrapper flex={1}>
                        <Button
                            title="Female"
                            width={80}
                            backgroundColor={Male ? colors.lightColor : undefined}
                            onPress={() => {
                                setMale(false)
                            }}
                        />
                    </Wrapper>

                </Wrapper>


            </Wrapper>
            <Wrapper centerH >
                <Button
                    title='Next'
                    width={Dimensions.get('screen').width - 40}
                />
            </Wrapper>
        </Wrapper>
    )
}

const Doctor = () => {
    let specs: string[] = []
    // let btColor = colors.background
    const [Male, setMale] = React.useState(true)
    const [BtColor, setBtColor] = React.useState(colors.background)
    return (
        <Wrapper flex={1} >
            <Input
                content="Name"
                backgroundColor={colors.lightColor}
                width={Dimensions.get('screen').width - 40}
                marginB={10}
            />
            <Wrapper row >
                <Wrapper flex={1}>
                    <Input
                        content="Age"
                        backgroundColor={colors.lightColor}
                        width={Dimensions.get('screen').width / 5}
                        marginB={10}
                        maxLength={2}
                        type='number-pad'
                    />
                </Wrapper>
                <Wrapper row flex={1}>
                    <Wrapper flex={1}>
                        <Button
                            title="Male"
                            width={80}
                            backgroundColor={Male ? undefined : colors.lightColor}
                            onPress={() => {
                                setMale(true)
                            }}
                        />
                    </Wrapper>
                    <Wrapper flex={1}>
                        <Button
                            title="Female"
                            width={80}
                            backgroundColor={Male ? colors.lightColor : undefined}
                            onPress={() => {
                                setMale(false)
                            }}
                        />
                    </Wrapper>

                </Wrapper>


            </Wrapper>
            <Wrapper row flex={1} style={{
                flexWrap: 'wrap'
            }}>

                {
                    specialites.map((vl, i) => {
                        return (
                            <Wrapper key={i.toString() + "_container"} style={{
                                margin: 5
                            }}>
                                <Button
                                    key={i.toString() + "_speciality"}
                                    title={vl}
                                    height={30}
                                    small
                                    backgroundColor={BtColor}
                                    onPress={() => { !specs.includes(vl) && specs.push(vl); setBtColor(colors.buttonColor) }}
                                />
                            </Wrapper>

                        )
                    })

                }
            </Wrapper>
            <Wrapper centerH style={{

            }}>

                <Button
                    title='Pext'
                    width={Dimensions.get('screen').width - 40}
                    onPress={() => console.log(specs)}
                />
            </Wrapper>

        </Wrapper>
    )
}
export default DetailScreen;
