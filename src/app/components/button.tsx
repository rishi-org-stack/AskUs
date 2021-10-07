import { blockStatement } from '@babel/types'
import React, { ReactElement } from 'react'
import { Wrapper } from '../../components'
import { Button as RawButton, Text } from "../../components"
import { colors } from "../theme"
interface Props {
    onPress?: () => void;
    width?: number;
    height?: number;
    title: string;
    large?: boolean;
    small?: boolean;
    normal?: boolean;
    bold?: boolean;
    backgroundColor?: string;
    children?: React.ReactNode;
}
//TODO:import button commponent and wrap inside wrapper
function Button({ title, normal, height, large, small, backgroundColor, onPress, bold, width, children }: Props): ReactElement {
    return (
        // <Wrapper row center style={{
        // height: 70,
        // }}

        // >
        <RawButton
            backgoundColor={backgroundColor == undefined ? colors.buttonColor : backgroundColor}
            height={height == undefined ? 70 : height}
            width={width}
            onPress={onPress}
            center
        >
            <Wrapper row center style={{
                width: width,
                marginLeft: 20,
                marginRight: 20
            }}>
                <Text
                    content={title}
                    large={large}
                    small={small}
                    normal={normal}
                    bold={bold} />
                <Wrapper style={{
                    // marginLeft: 20,
                    // alignSelf: "f"
                }}>
                    {children}

                </Wrapper>

            </Wrapper>
        </RawButton >

        // </Wrapper >
    )
}

export default Button
