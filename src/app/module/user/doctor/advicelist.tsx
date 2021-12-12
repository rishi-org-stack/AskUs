import React from 'react'
import { Text, Wrapper } from '../../../../components'
import TouchableContainer from '../../../../components/containers/TouchableWrapper'
import { TopDownCard } from '../../../components/cards/topDownCars'
import { colors } from '../../../theme'
import Icons from "../../../../asset"
import AskUsHeader from '../../../components/header'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
interface Props {
    navigation:DrawerNavigationHelpers
}
const AdviceComp=()=>{
    return(
        <TouchableContainer
                            // key={i.toString()+"_card_advice"}
                        >
                         
                            <TopDownCard 
                                topComp={
                                <TouchableContainer height={'15%'} >
                                    <Text marginL={20}>
                                       Dr ok
                                    </Text>
                                </TouchableContainer>
                                }
                                downComp={
                                    <Wrapper 
                                        height={'15%'} 
                                        center
                                        >
                                        <Text marginL={20}> Nov 30 </Text>
                                    </Wrapper>
                                }
                                marginB={10}
                            >
                                <TouchableContainer 
                                    height={"70%"} 
                                    width={"100%"}
                                    LeftComponent={<Icons.Advice height={'100%'} width={'100%'}/>}
                                    >
                                    pllp
                                </TouchableContainer>
                            </TopDownCard>
                        </TouchableContainer>
    )
}
const Advicelist = (props: Props) => {
    return (
        <Wrapper flex={1} backgoundColor={colors.background}>
            <AskUsHeader nav={props.navigation}/>
            <FlatList  
                data={[1,2,3,4,5,6,7,8,9,10]}
                renderItem={()=><AdviceComp/>}
                style={{
                    marginTop:10
                }}
                />
              
        </Wrapper>
    )
}

export default Advicelist
