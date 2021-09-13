import React from 'react';
import { Text as RnText } from 'react-native';

interface Props {
    content: string;
    color?: string;
    large?: boolean;
    medium?: boolean;
    small?: boolean;
}
function Text(props: Props) {
    return (
        <RnText style={[{
            fontSize: props.large && large || props.medium && medium || small,
            color: props.color
        }]}>
            {props.content}
        </RnText>
    )
}

const large = 20;
const medium = 18;
const small = 15;
export default Text
