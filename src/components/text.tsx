import React from 'react';
import { Text as RnText } from 'react-native';

interface Props {
    children?: React.ReactChildren[]|string[]| string;
    color?: string;
    large?: boolean;
    megaLarge?: boolean;
    medium?: boolean;
    small?: boolean;
    verySmall?: boolean;
    bold?: boolean;
    weight?: string;
    normal?: boolean;
    marginT?:number;
    margin?:number;
    marginL?:number;
    marginR?:number;
    marginB?:number;
    borderBW?:number;
    borderW?:number;
    borderC?: string;
    lines?:number
}
function Text(props: Props) {
    return (
        <RnText style={[{
            fontSize: props.large && large || props.megaLarge && MegaLarge ||props.medium && medium || props.verySmall && VerySmall || small,
            color: props.color ==  undefined?'white':props.color,
            // textAlign: 'center',
            fontWeight: props.bold && 'bold' || props.normal && 'normal' || '600',
            marginTop:props.marginT,
            marginBottom:props.marginB,
            marginLeft:props.marginL,
            marginRight:props.marginR,
            margin:props.margin,
            borderWidth:props.borderW,
            borderBottomWidth:props.borderBW,
            borderColor:props.borderC
        },]}
        numberOfLines={props.lines}
        >
            {props.children}
        </RnText>
    )
}

const large = 20;
const MegaLarge = 30;
const medium = 18;
const small = 15;
const VerySmall = 12;
export default Text
