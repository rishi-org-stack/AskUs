import { Container, Props } from "./containers/container";

import React, { ReactElement } from 'react'
import { KeyboardTypeOptions, Text, TextInput, TouchableOpacity } from "react-native";
import { Wrapper } from ".";

interface TProps {
    OnChangeText?: (text:string)=>void;
    rightComponent?:React.ReactNode;
    LeftComponent?:React.ReactNode;
    placeholder:string;
    color?:string;
    type?:KeyboardTypeOptions

}
type TouchProps = TProps & Props
function NewInput(p: TouchProps): ReactElement {
    return (
            <Wrapper {...p} row  alignItems='flex-end'>
                {
                    p.LeftComponent ?
                    <Wrapper   height={'100%'} marginR={5} width={"10%"}>
                    {p.LeftComponent}

                    </Wrapper>
                    :null
                }
                
                
                <Wrapper flex={1} height={'100%'} >
                    <TextInput  
                        placeholder={p.placeholder} 
                        placeholderTextColor={p.color}
                        style={{
                            color:p.color,
                            height:'100%',
                        }}
                        onChangeText={p.OnChangeText}
                        keyboardType={p.type}
                    />
                </Wrapper>

                
            </Wrapper>
        
    )
}

export { NewInput};
export type{
    TouchProps
}