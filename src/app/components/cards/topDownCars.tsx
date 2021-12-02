import React from 'react'
import { Wrapper } from '../../../components'
import { colors } from '../../theme';
import { Card, Props as CardProps } from './card'

interface ConnectProps {
    topComp?: React.ReactElement;
    downComp?: React.ReactElement;
    marginB?:number;
    children?:React.ReactNode
}

type Props= CardProps & ConnectProps;

export const TopDownCard = (props: Props) => {
    return (
    <Wrapper
        height={180}
        backgoundColor={colors.lightColor} 
        radius={10}
        marginB={props.marginB}
    >
        {props.topComp}
        {/* <Card {...props} marginB={0}/> */}
        {props.children}
        {/* {
            props.downComp!=undefined &&
            <Wrapper height={45}> */}
                {props.downComp}
            {/* </Wrapper>
        } */}

    </Wrapper>
    )
}
