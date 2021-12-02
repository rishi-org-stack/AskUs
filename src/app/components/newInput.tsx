import React from 'react'
import{ NewInput  as RawNewInput, TouchProps as RawProps }from "../../components/newInput";

type InputProps=RawProps

export default function NewInput (p:InputProps){
    return(
        <RawNewInput {...p} color="white" style={{
            
        }} />
    )
}