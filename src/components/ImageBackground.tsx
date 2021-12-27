import React, { ReactElement }  from 'react';
import { StyleProp, ImageBackground as RnImageBackground, TextStyle } from 'react-native';

interface Props {
    children?: React.ReactNode;
}
function ImageBackground(props: Props) {
    return (
        <RnImageBackground source={require("../asset/auth_back.jpg")}  resizeMode="cover" style={{opacity:0.3,width:"100%",height:"100%",position:"absolute"}}>
            {props.children}
        </RnImageBackground>
    )
}


export default ImageBackground
