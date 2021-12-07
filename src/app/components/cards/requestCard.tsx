import React from 'react'
import { Text, Wrapper } from '../../../components'
import TouchableContainer from '../../../components/containers/TouchableWrapper'
import Icon from "../../../asset"
import { colors } from '../../theme'
interface Props {
    
}

const RequestCard = (props: Props) => {
    return (
        <Wrapper 
            height={100} 
            width={'90%'}
            radius={10} 
            row
            backgoundColor={colors.lightColor}
            style={{
                alignSelf:'center'
            }}
        >
            <Wrapper flex={1} backgoundColor='red'>

            </Wrapper>
            <Wrapper flex={3}>
                <Wrapper 
                    flex={1} 
                    center 
                    // alignItems='center'
                >
                    <Text marginL={10}>
                        Rishi Jha
                    </Text>
                    <Text marginL={10}>
                        cardiologist, dermatologist
                    </Text>
                </Wrapper>
                <Wrapper
                    flex={1} 
                    row
                    marginL={10}
                    // center
                >
                    <TouchableContainer 
                        height={'70%'} 
                        width={80} 
                        backgoundColor={colors.buttonColor}
                        centerMain
                        rightComponent={
                            <Icon.Plus height={15} width={15} />
                        }
                        radius={10}
                        marginR={10}
                        style={{
                            alignSelf:'center'
                        }}
                        >
                        Add
                    </TouchableContainer>

                    <TouchableContainer 
                        height={'70%'} 
                        width={100} 
                        backgoundColor={colors.buttonColor}
                        centerMain
                        rightComponent={
                            <Icon.Minus 
                                height={15} 
                                width={15} 
                                style={{
                                    alignSelf:'center'
                                }}
                                />
                        }
                        radius={10}
                        style={{
                            alignSelf:'center'
                        }}
                        >
                        Remove
                    </TouchableContainer>
                </Wrapper>
                
            </Wrapper>
        </Wrapper>
    )
}

export default RequestCard
