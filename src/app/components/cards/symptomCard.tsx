import React from 'react'
import { Text, Wrapper } from '../../../components'
import { colors } from '../../theme'

interface Props {
    
}

const SymptomCard = (props: Props) => {
    return (
        <Wrapper height={100} width={220} backgoundColor={colors.lightColor} alignItems='center' radius={20} center>
           
            <Wrapper height={"80%"}width={"90%"} row >
                <Wrapper flex={2} center>
                    <Text normal >
                        incurable
                    </Text>
                    <Text>
                        Asthma
                    </Text>
                </Wrapper>
                <Wrapper flex={1} backgoundColor='red'>

                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default SymptomCard
