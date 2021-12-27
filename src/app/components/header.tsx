import React, { useRef } from 'react'
import { Image, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Wrapper } from '../../components';
import { colors } from '../theme';
import Input from './input';
import Icons from "../../asset/index"
import TouchableContainer from '../../components/containers/TouchableWrapper';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
interface Props {
    onPressInput?: () => void;
    nav:DrawerNavigationHelpers
    // onPressMenu?: ()=>void;
}


const AskUsHeader = (props: Props) => {
    // const [isNotif, setIsNotif] = React.useState(false)
    const inputPin =React.useRef<TextInput>(null)
    // React.useEffect(()=>{
    //     setTimeout(setIsNotif(!isNotif),5000)
    // },[isNotif])
    return (
        <Wrapper row height={60} alignItems='center' style={{justifyContent:"space-around",elevation:13}}>
            <TouchableContainer 
                height={40} 
                marginL={10} 
                width={40} 
                radius={50} 
                alignItems='center'
                // backgoundColor="red"
                Onpress={()=>props.nav.openDrawer()}
                centerMain
                >
                    <Icons.Ham height={20} width={20}/>
                </TouchableContainer>
            <Wrapper flex={4} height='100%' center marginL={10} marginR={10} >
                <TouchableOpacity onPress={()=>{
                    inputPin.current?.focus();
                    props.onPressInput!==undefined 
                    && 
                    props.onPressInput();
                    
                }}>
                    <Wrapper row radius={5} style={{
                        borderWidth:1,
                        borderColor:"#808080",
                        width:'90%',
                        alignSelf:"center"
                    }}>
                        <Wrapper height={35} alignItems='center' center width={35} radius={35}>
                           
                            <Icons.Search height={20} width={20} fill={'white'}/>
                        </Wrapper>
                        <Wrapper flex={1}>
                            <TextInput 
                             ref={inputPin}
                                placeholder="Search" 
                                placeholderTextColor="#808080" 
                                style={{
                                    height:35,
                                    color:"white",
                                  
                            }}/>
                        </Wrapper>
                        
                    </Wrapper>
                    
                </TouchableOpacity>
            </Wrapper>
            <TouchableContainer height={'100%'} width={30} style={{marginRight:10}} centerMain>
                <Icons.Bell  height={20} width={20}/>
            </TouchableContainer>
        </Wrapper>
    )
}

export default AskUsHeader;