import React, { ReactChildren } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle , Animated} from 'react-native'
import { colors } from '../../app/theme';

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
    height?: number| string | Animated.Value;
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
    console.log(props.height)
    return (
        <Animated.View style={[
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
                backgroundColor:props.backgoundColor, 
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
        </Animated.View>
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
          // borderRadius:50, 

export type{
    Props
}