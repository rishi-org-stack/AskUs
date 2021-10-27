import React from 'react';
import { Text as RnText } from 'react-native';

interface Props {
    children?: React.ReactChildren|string;
    color?: string;
    large?: boolean;
    medium?: boolean;
    small?: boolean;
    bold?: boolean;
    weight?: string;
    normal?: boolean;
    marginT?:number;
    marginL?:number;
    marginR?:number;
    marginB?:number;
    lines?:number
}
function Text(props: Props) {
    return (
        <RnText style={[{
            fontSize: props.large && large || props.medium && medium || small,
            color: props.color ==  undefined?'white':props.color,
            textAlign: 'center',
            fontWeight: props.bold && 'bold' || props.normal && 'normal' || '600',
            marginTop:props.marginT,
            marginBottom:props.marginB,
            marginLeft:props.marginL,
            marginRight:props.marginR
        },]}
        numberOfLines={props.lines}
        >
            {props.children}
        </RnText>
    )
}

const large = 20;
const medium = 18;
const small = 15;
export default Text
