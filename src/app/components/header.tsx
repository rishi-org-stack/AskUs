import React, { useRef } from 'react'
import { Image, TextInput, TouchableOpacity } from 'react-native';
import { Wrapper } from '../../components';
import { colors } from '../theme';
import Input from './input';
import Icons from "../../asset/index"
interface Props {
    onPressInput?: () => void;
}


const AskUsHeader = (props: Props) => {
    // const [isNotif, setIsNotif] = React.useState(false)
    const inputPin =React.useRef<TextInput>(null)
    // React.useEffect(()=>{
    //     setTimeout(setIsNotif(!isNotif),5000)
    // },[isNotif])
    return (
        <Wrapper row height={50} alignItems='center'>
            <Wrapper height={40} marginL={10} width={40} radius={50} backgoundColor="red"/>
            <Wrapper flex={2} height='100%' center marginL={10} marginR={10} >
                <TouchableOpacity onPress={()=>{
                    inputPin.current?.focus();
                    props.onPressInput!==undefined 
                    && 
                    props.onPressInput();
                    
                }}>
                    <Wrapper row radius={35} style={{
                        borderWidth:1,
                        borderColor:"white"
                    }}>
                        <Wrapper height={35} alignItems='center' center width={35} radius={35}>
                           
                            <Icons.Search height={20} width={20} fill={'white'}/>
                        </Wrapper>
                        <Wrapper flex={1}>
                            <TextInput 
                             ref={inputPin}
                                placeholder="ok" 
                                placeholderTextColor="white" 
                                style={{
                                    height:35,
                                    color:"white"
                            }}/>
                        </Wrapper>
                        
                    </Wrapper>
                    
                </TouchableOpacity>
            </Wrapper>
            <Wrapper flex={1}  height="100%" row>
                <Wrapper flex={1} center alignItems='center'>
                        <TouchableOpacity>
                            <Icons.Bell height={25} width={25} />
                        </TouchableOpacity>
                </Wrapper>
                <Wrapper flex={1} center>
                    <TouchableOpacity>
                        <Wrapper height={40}  width={40} radius={50} backgoundColor="red"/>
                    </TouchableOpacity>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default AskUsHeader;