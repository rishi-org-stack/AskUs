import React from 'react'
import { Text, Wrapper } from '../../../components'
import TouchableContainer from '../../../components/containers/TouchableWrapper'
import Icon from "../../../asset"
import { colors } from '../../theme'
import { Patient } from '../../../types/interfaces'
interface Props {
    onPressAddNote?:()=>void;
    onPressRemove?:()=>void;
    patient?:Patient
}

const PatientShortCard = (props: Props) => {
    return (
        <TouchableContainer
             height={200} 
             width={'90%'} 
             radius={15}
             style={{
                 backgroundColor:colors.lightColor,
                 alignSelf:'center'
             }}
             margin={10}
             >
                 <Wrapper
                    width={'100%'}
                    height={'60%'}
                    row
                   style={{
                    borderBottomWidth:1,
                    borderColor:'white'
                   }}
                 >
                     <Wrapper 
                        flex={1}
                        
                     >
                         <Wrapper flex={2}/>
                         <Text style={{
                             alignSelf:'center'
                         }} >
                            {props.patient?.name}
                         </Text>
                     </Wrapper>
                      <Wrapper 
                        flex={2}
                        
                     >
                         <Wrapper 
                            flex={1.3} 
                            row
                            style={{
                                borderBottomWidth:1,
                                borderColor:'white'
                               }}
                            >
                            <TouchableContainer
                                height={40}
                                width={40}
                                radius={50}
                                marginL={10}
                                backgoundColor={colors.buttonColor}
                                centerMain
                                alignItems='center'
                                style={{
                                    alignSelf:'center'
                                }}
                             >
                                 <Icon.Plus height={20} width={20}/>
                            </TouchableContainer>
                            <Wrapper flex={1} center >

                            <TouchableContainer
                                height={'80%'}
                                width={80}
                                radius={10}
                                centerMain
                                backgoundColor={colors.buttonColor}
                                marginR={10}
                                style={{
                                    alignSelf:'flex-end',
                                }}
                             >
                                 Remove
                            </TouchableContainer>
                            </Wrapper>

                         </Wrapper>
                         <Wrapper row flex={1.5}>
                            <Wrapper flex={1} alignItems='center'>
                                <Text>
                                   {props.patient?.age.toString()}
                                </Text>
                                <Text>
                                    Age
                                </Text>
                            </Wrapper>
                            <Wrapper flex={1} alignItems='center'>
                                <Text>
                                    9{/*props.patient?.height.toString()*/}
                                </Text>
                                <Text>
                                    height
                                </Text>
                            </Wrapper>
                            <Wrapper flex={1} alignItems='center'>
                                <Text>
                                   no{/*props.patient?.weight.toString()*/}
                                </Text>
                                <Text>
                                    Weight
                                </Text>
                            </Wrapper>
                         </Wrapper>
                     </Wrapper>
                     
                 </Wrapper>
                <TouchableContainer 
                    marginT={5}
                    // height={'38%'} 
                    width={'90%'} 
                    
                    style={{
                        alignSelf:'center',
                        
                    }}
                    >
                        <Text>
                            Diagnosed with osteoprosis because of vit D deficence age 20 name rishi
                        </Text>
                </TouchableContainer>
            </TouchableContainer>
    )
}

export default PatientShortCard
