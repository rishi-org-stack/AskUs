import React from 'react'
import { Text, TextInput } from 'react-native'

function Input() {
    return (
        <TextInput
            style={{
                backgroundColor: "red",
                height: 60,
                width: 400, borderRadius: 20
            }}
        >
            <Text >ok</Text>
        </TextInput>
    )
}

export default Input
