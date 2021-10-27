import React from 'react'
import { Wrapper } from '../../../components'
import { colors } from '../../theme';
import { Card, Props as CardProps } from './card'

interface ConnectProps {
    downComp?: React.ReactElement;
    marginB?:number;
}

type Props= CardProps & ConnectProps;

const ConnectCard = (props: Props) => {
    return (
        <Wrapper
            height={180}
            backgoundColor={colors.lightColor} 
            radius={10}
            marginB={props.marginB}
        >
            <Card {...props} marginB={0}/>
            <Wrapper height={45}>
                {props.downComp}
            </Wrapper>
        </Wrapper>
    )
}

export default ConnectCard
