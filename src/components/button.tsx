import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Wrapper from './wrapper'
interface Props {
    row?: boolean;
    center?: boolean;
    right?: boolean;
    flex?: number;
    backgoundColor?: string;
    children?: React.ReactNode;
    onPress?: () => void

}
function Button(props: Props) {
    return (
        <TouchableOpacity style={[
            props.row
            &&
            styles.row,
            props.center
            && styles.center, { flex: props.flex, backgroundColor: props.backgoundColor }
        ]} onPress={props.onPress}>
            <Wrapper>
                {props.children}
            </Wrapper>
        </TouchableOpacity>
    )
}

export default Button


const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    }
})