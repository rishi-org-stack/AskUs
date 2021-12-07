import React from 'react'
import { Wrapper, Text } from '../../../components'
// import  from '../../../components/containers/TouchableWrapper'
import { colors } from '../../theme'

interface Props {
    
}

const FollowingDocCard = (props: Props) => {
    return (
        <Wrapper
            width={'90%'}
            height={120}
            radius={10}
            row
            backgoundColor={colors.lightColor}
            style={{
                alignSelf:'center'
            }}
        >
            <Wrapper flex={1}/>
            <Wrapper flex={4} marginL={5} marginT={5}>
                <Wrapper flex={1} marginL={5} style={{
                    borderBottomWidth:1,
                    borderColor:'white'
                }}>
                    <Text> 
                        Dr. hu na mishra
                    </Text>
                    <Text>
                        cardiologist, microbiologist
                    </Text>
                </Wrapper>
                <Wrapper flex={1} alignItems='center'>
                    <Text>
                        liked/posted advice{'\n'}
                        65/76
                    </Text>
                    {/* <Text marginT={5}>
                        65/98
                    </Text> */}
                </Wrapper>

            </Wrapper>
        </Wrapper> 
    )
}

export default FollowingDocCard
