import React from 'react'
import { View } from 'react-native'
import { Wrapper, Text } from '../../../components'
import { colors } from '../../theme'

interface Props {
    header?:string
    content?:string
    margin?:number
    marginB?:number;
    leftComp?:React.ReactElement;
}

const Card = (props: Props) => {
    return (
            <Wrapper 
                row
                margin={props.margin}
                marginB={props.marginB}
                style={{
                    width:"100%"
                }}
                height={130}
                backgoundColor={colors.lightColor} 
                radius={10}
                >
                    {
                        props.leftComp!==undefined &&
                        <Wrapper 
                            style={{
                                alignItems:'center',
                                justifyContent:'center'
                            }} 
                            flex={1} 
                            radius={10}
                            // backgoundColor='red'
                            // centerH
                            // center
                            // centerV
                            >
                            {props.leftComp}
                        </Wrapper>
                    }
            
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

export {
    Card
}
export type { Props }
