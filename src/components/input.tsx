import React from 'react'
import { KeyboardTypeOptions, Text, TextInput } from 'react-native'
interface inputProps {
    content?: string;
    contentColor?: string;
    placeholderColor?: string;
    type?: KeyboardTypeOptions;
    // ref?: React.RefObject<TextInput>;
    // backgroundColor?: string;
    height?: number
    width?: number;
    radius?: number;
    style?: object;
    flex?: number;
    marginR?: number;
    marginL?: number;
    maxLength?: number;
    onChangeText?: (text: string) => void;
}

const Input = React.forwardRef<TextInput, inputProps>((props, ref) => {
    // const ok = React.useRef<TextInput>(null)
    return (
        <TextInput
            ref={ref}
            placeholder={props.content}
            placeholderTextColor={props.placeholderColor}
            style={[{
                // backgroundColor: "red",//props.backgroundColor,
                height: props.height,
                width: props.width,
                borderRadius: props.radius,
                color: props.contentColor ==undefined?'white':props.contentColor,
                flex: props.flex,

            }, props.style]}
            onChangeText={props.onChangeText}
            maxLength={props.maxLength}
            keyboardType={props.type}
        >
        </TextInput>

    )
});

export default Input;
