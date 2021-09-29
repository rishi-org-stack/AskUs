import { blockStatement } from '@babel/types'
import React, { ReactElement } from 'react'
import { Wrapper } from '../../components'
import { Button as RawButton, Text } from "../../components"
import { colors } from "../theme"
interface Props {
    onPress?: () => void;
    width?: number;
    title: string;
    large?: boolean;
    small?: boolean;
    normal?: boolean;
    bold?: boolean
}
//TODO:import button commponent and wrap inside wrapper
function Button({ title, normal, large, small, onPress, bold, width }: Props): ReactElement {
    return (
        <Wrapper style={{
            height: 90
        }}>
            <RawButton center backgoundColor={colors.buttonColor} height={70} onPress={onPress} width={width}>
                <Text content={title} large={large} small={small} normal={normal} bold={bold} />
            </RawButton>
        </Wrapper>
    )
}

export default Button
