import React from 'react'
import { Text, TextInput } from 'react-native'
interface inputProps {
    content: string;
    contentColor?: string;
    backgroundColor?: string;
    height?: number
    width?: number;
    radius?: number;
    style?: object;
    flex?: number;
}

function Input(props: inputProps) {
    return (
        <TextInput
            placeholder={props.content}
            style={[{
                backgroundColor: props.backgroundColor,
                height: props.height,
                width: props.width,
                borderRadius: props.radius,
                color: props.contentColor,
                flex: props.flex,

            }, props.style]}
        >
            {/* <Wrapper > */}
            {/* <Text style={{ paddingLeft: 50 }}>{props.content}</Text> */}
            {/* </Wrapper> */}

        </TextInput>

    )
}

export default Input;
