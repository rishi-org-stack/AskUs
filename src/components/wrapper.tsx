import React, { ReactChildren } from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
    row?: boolean;
    center?: boolean;
    right?: boolean;
    flex?: number;
    backgoundColor?: string;
    children?: React.ReactNode;
}
export default function Wrapper(props: Props) {
    return (
        <View style={[
            props.row
            &&
            styles.row,
            props.center
            && styles.center, { flex: props.flex, backgroundColor: props.backgoundColor }
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
    row: {
        flexDirection: 'row'
    }
})