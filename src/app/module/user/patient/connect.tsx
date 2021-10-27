import React from 'react'
import { Image, ScrollView } from 'react-native'
import { Text, Wrapper, Button } from '../../../../components'
import Card from '../../../components/cards/connect'
import { colors } from '../../../theme'

interface Props {
    
}

const data= [
    {
        speciality:'MBBS, cardiologist'
    },
    {
        speciality:'MBBS, osteologisr'
    },
    {
        speciality:'MBBS, dermatologist'
    },
    {
        speciality:'MBBS, neurologist'
    },
    {
        speciality:'MBBS, diabetician'
    },
    {
        speciality:'MBBS, cardiologist'
    },
    {
        speciality:'MBBS, cardiologist'
    }
]
const ConnectScreen = (props: Props) => {
    return (
        <Wrapper backgoundColor={colors.background} flex={1}>
            <Wrapper flex={1}>
            </Wrapper> 
            <Wrapper flex ={10} margin={15}>
                <ScrollView style={{
                    width:'100%'
                }}>
                    {
                        data.map((val,i)=>{
                            return(
                                <Card 
                                    key={i.toString()+"_doc_card"}
                                    marginB={10}
                                    header="ok"
                                    content={val.speciality}
                                    leftComp={
                                        <Image
                                            source={
                                                require('../../../../asset/pTest1.jpg')
                                            }
                                            style={{
                                                height:"80%",
                                                width:"80%",
                                                borderRadius:50
                                            }}
                                        />
                                    }
                                    downComp={
                                        <Wrapper alignItems='center'>
                                            <Wrapper height={0.5} width ='99%' backgoundColor="white"/>
                                            <Wrapper height="100%" row>
                                                <Wrapper flex={2} center style={{
                                                    alignItems:"flex-start"
                                                }}>
                                                    <Text marginL={10}>
                                                        okkkkkkkk
                                                    </Text>
                                                </Wrapper>
                                                <Wrapper flex={1} center>
                                                    <Button
                                                        marginR={10}
                                                        backgoundColor={colors.buttonColor}
                                                        >
                                                            <Text marginT={5} marginB={5}>
                                                                ok
                                                            </Text>
                                                            
                                                    </Button>
                                                </Wrapper>
                                            </Wrapper>
                                        </Wrapper>
                                        
                                    }
                                />
                            )
                        })
                    }
                </ScrollView>
                
            </Wrapper>
            <Wrapper flex={1} row style={{
                alignSelf:"baseline"
            }}>
                <Wrapper flex={1} style={{
                    alignItems:'flex-start',
                    alignSelf:"baseline"
                }}>
                    <Button
                        width="50%"
                        marginL={10}
                        backgoundColor={colors.buttonColor}
                        >
                        <Text marginT={10} marginB={10}>
                            Next
                        </Text>
                    </Button>
                </Wrapper>
                
                <Wrapper flex={1} style={{
                    alignItems:"flex-end"
                }}>
                    <Button
                        width="50%"
                        marginR={10}
                        backgoundColor={colors.buttonColor}
                        >
                        <Text marginT={10} marginB={10}>
                            Skip
                        </Text>
                    </Button>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default ConnectScreen;