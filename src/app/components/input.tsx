import React from 'react'
import { Dimensions } from 'react-native';
import { Input as RawInput, Wrapper, Text } from "../../components/index"
interface Props {
    content: string;
    head: string;
    contentColor?: string;
}
function Input(props: Props) {
    return (
        <Wrapper flex={1} style={{
            backgroundColor: "transparent",
        }}>
            <Wrapper style={{
                marginBottom: 5,
                marginLeft: 10
            }}>
                <Text content={props.head} color="white" />
            </Wrapper>
            <Wrapper flex={1} style={{
                borderWidth: 1,
                borderColor: "#FFFFFF",
                borderRadius: 14
            }}>
                <RawInput
                    content={props.content}
                    backgroundColor={"transparent"}
                    contentColor={'#FFFFFF'}
                    style={{
                        marginLeft: 10
                    }}
                />
            </Wrapper>

        </Wrapper>

    )
}

export default Input;