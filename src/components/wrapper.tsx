import React, { ReactChildren } from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
    row?: boolean;
    center?: boolean;
    centerV?: boolean;
    centerH?: boolean;
    right?: boolean;
    flex?: number;
    backgoundColor?: string;
    margin?: number;
    children?: React.ReactNode;
    style?: object;
}
export default function Wrapper(props: Props) {
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
            { flex: props.flex, backgroundColor: props.backgoundColor, margin: props.margin },
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