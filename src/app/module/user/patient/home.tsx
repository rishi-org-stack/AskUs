import React from 'react'
import { Wrapper } from '../../../../components'
import { Card } from '../../../components/cards/card'
import { colors } from '../../../theme'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <Wrapper backgoundColor={colors.background} flex={1}>
            <Card header={'ok'}/> 
        </Wrapper>
    )
}

export default Home
