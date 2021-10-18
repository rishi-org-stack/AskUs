import React from 'react'
import { View } from 'react-native'
import { Wrapper, Text } from '../../components'
import { colors } from '../theme'

interface Props {
    header?:string
    content?:string
    margin?:number
    marginB?:number
}

export const Card = (props: Props) => {
    return (
        <Wrapper 
            style={{
                width:"100%"
            }} height={130}
            backgoundColor={colors.lightColor} 
            radius={10}
            row
            margin={props.margin}
            marginB={props.marginB}
            >
                <Wrapper flex={1} backgoundColor="red" radius={10}>

                </Wrapper>
                <Wrapper flex={2} alignItems='flex-start' margin={10}>
                    <Text bold medium lines={2} marginB={10}>
                        {props.header}
                    </Text>
                    <Text marginB={5} lines={4}>
                        {props.content}
                    </Text>
                </Wrapper>
           
        </Wrapper>
    )
}
