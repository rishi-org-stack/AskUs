import React, { ReactChildren } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

interface Props {
    row?: boolean;
    center?: boolean;
    centerV?: boolean;
    centerH?: boolean;
    right?: boolean;
    radius?:number;
    radiusBR?:number;
    radiusBL?:number;
    radiusTR?:number;
    radiusTL?:number;
    flex?: number;
    alignItems?:"flex-start"|"flex-end"|"center";
    backgoundColor?: string;
    margin?: number;
    marginB?: number;
    marginT?: number;
    marginL?: number;
    marginR?: number;
    height?: number| string;
    width?: number| string;
    borderW?:number;
    borderB?:number;
    borderT?:number;
    borderL?:number;
    borderR?:number;
    borderC?:string
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
function Container(props: Props) {
    return (
        <View style={[
            props.row
            &&
            styles.row,
            props.center
            && styles.center,
            props.centerV
            && styles.centerV,
            props.centerH
            && styles.centerH,
            { 
                flex: props.flex, 
                backgroundColor: props.backgoundColor, 
                margin: props.margin, 
                borderRadius:props.radius,
                marginBottom: props.marginB,
                marginLeft: props.marginL,
                marginRight: props.marginR,
                marginTop: props.marginT,
                height: props.height ,
                width: props.width,
                alignItems:props.alignItems,
                borderWidth:props.borderW,
                borderColor:props.borderC,
                borderLeftWidth:props.borderL,
                borderRightWidth:props.borderL,
                borderBottomWidth:props.borderB,
                borderTopWidth:props.borderT,
                borderBottomLeftRadius:props.radiusBL,
                borderBottomRightRadius:props.radiusBR,
                borderTopLeftRadius:props.radiusTL,
                borderTopRightRadius:props.radiusTR
            },
            props.style,
            {

            }
        ]} >
            {props.children}
        </ View>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerH: {
        // justifyContent: 'center',
        alignItems: 'center'
    },
    centerV: {
        justifyContent: 'center',
        // alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    }
})

export {
    Container
}

export type{
    Props
}