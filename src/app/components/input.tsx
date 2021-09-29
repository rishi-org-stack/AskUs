import React from 'react'
import { Dimensions, KeyboardTypeOptions, TextInput } from 'react-native';
import { Input as RawInput, Wrapper, Text } from "../../components/index"
interface Props {
    content?: string;
    head?: string;
    backgroundColor: string;
    contentColor?: string;
    // ref?: React.RefObject<TextInput>;
    width?: number
    children?: React.ReactNode;
    margin?: number;
    marginL?: number;
    marginB?: number;
    marginT?: number;
    marginR?: number;
    maxLength?: number;
    radius?: number;
    type?: KeyboardTypeOptions;
    onChangeText?: (text: string) => void;
}
const Input = React.forwardRef<TextInput, Props>((props, ref) => {
    return (
        <Wrapper style={{
            marginBottom: props.marginB == undefined ? 5 : props.marginB,
            width: props.width == undefined ? Dimensions.get('screen').width : props.width,
            marginLeft: props.marginL == undefined ? 20 : props.marginL,
            marginRight: props.marginR == undefined ? 20 : props.marginR,
            marginTop: props.marginT == undefined ? 5 : props.marginT,
            margin: props.margin == undefined ? 0 : props.margin
        }}>
            <Wrapper style={{
                borderRadius: props.radius == undefined ? 30 : props.radius,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: props.backgroundColor
            }}>
                <Wrapper style={{
                    marginLeft: 10
                }}>
                    {props.children}
                </Wrapper>
                <RawInput
                    ref={ref}
                    content={props.content}
                    contentColor={props.contentColor}
                    placeholderColor={"white"}
                    style={{
                        marginLeft: 10
                    }}
                    height={70}
                    width={props.width == undefined ? Dimensions.get('screen').width : props.width}
                    onChangeText={props.onChangeText}
                    maxLength={props.maxLength}
                    type={props.type}
                // flex={1}
                />
            </Wrapper>

        </Wrapper>

    )
});

export default Input;