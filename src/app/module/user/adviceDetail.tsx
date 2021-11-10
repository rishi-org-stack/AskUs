import React from 'react'
import { Text, Wrapper } from '../../../components'
import AskUsHeader from '../../components/header'
import { colors } from '../../theme'
import Icons from "../../../asset/index"
import { Dimensions, Image, Pressable, ScrollView, Text as RnText, TouchableOpacity } from 'react-native'
interface Props {
    
}

const AdviceDetail = (props: Props) => {
    return (
        <Wrapper backgoundColor={colors.background} flex={1}>
            <Wrapper row height={50} width='100%' alignItems='center'>
                <TouchableOpacity>
                    <Icons.Left height={20} width ={20}/>
                </TouchableOpacity>
            </Wrapper>
            <Wrapper flex={1} alignItems='flex-start'>
                <Text bold megaLarge marginL={10} marginR={10}>
                    Its a head header ok ok ok ook okoko okok ok
                </Text>
                <Wrapper row height={60} margin={1} width='100%' alignItems='center'>
                    <TouchableOpacity onPress={()=>{console.warn('TouchableOpacity')
                    }}>
                    <Image
                        source={
                                require('../../../asset/pTest1.jpg')
                                }
                        style={{
                            height:55,
                            width:55,
                            borderRadius:10
                            }}
                    />
                    </TouchableOpacity>

                    <Wrapper height={55} marginL={10}>
                        <Text medium>
                            ok its 
                        </Text>
                        <Text marginT={5} verySmall>
                            2m ago
                        </Text>
                    </Wrapper>
                    
                </Wrapper>
                {/* //TODO: code aahead is not istyled well to much buggy fix import PropTypes from 'prop-types' */}
                
                {/* <TouchableOpacity onPress={()=>console.warn("Like")
                } style={{
                                top:400,
                                left:Dimensions.get('screen').width-100,
                                backgroundColor:"red",
                                height:30,
                                width:100
                            }}>
                                <Text>
                                    like button
                                </Text>
                            </TouchableOpacity> */}
                {/* <ScrollView>
                <Wrapper  width='100%'>
                    {/* TODO: there is a bug that lower content is not scrollable */}
                    {/* <Image
                        source={
                            require('../../../asset/pTest1.jpg')
                        }
                        style={{
                            height:"30%",
                            width:'100%',
                            borderRadius:10
                            }}
                    /> */} 
                    {/* <Wrapper flex={1} > */}
                        {/* <ScrollView> */}
                            {/* <Text margin={10}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus aperiam iste ab. A nulla doloribus reiciendis officia, quia et tempore praesentium incidunt, repellendus ratione perspiciatis dolore aliquam? Necessitatibus, quos.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nesciunt eligendi. Dolorem reiciendis voluptate minima quas, est repellendus qui at aut perspiciatis aliquid labore accusantium, excepturi fuga eveniet, debitis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus molestiae doloremque optio ab itaque amet, qui dolores sequi dicta voluptatum quae saepe est repudiandae provident ipsa ex possimus cumque?.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit ut obcaecati temporibus veritatis sed labore sequi eius illum! Voluptatem magni molestias architecto quam at corrupti reprehenderit ipsa consectetur vitae?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus aperiam iste ab. A nulla doloribus reiciendis officia, quia et tempore praesentium incidunt, repellendus ratione perspiciatis dolore aliquam? Necessitatibus, quos.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nesciunt eligendi. Dolorem reiciendis voluptate minima quas, est repellendus qui at aut perspiciatis aliquid labore accusantium, excepturi fuga eveniet, debitis.
                                Lorem ipsum 2dolor sit amet consectetur adipisicing elit. Temporibus accusamus molestiae doloremque optio ab itaque amet, qui dolores sequi dicta voluptatum quae saepe est repudiandae provident ipsa ex possimus cumque?.
                                Lorem ipsum 2dolor sit amet consectetur adipisicing elit. Quasi sit ut obcaecati temporibus veritatis sed labore sequi eius illum! Voluptatem magni molestias architecto quam at corrupti reprehenderit ipsa consectetur vitae?
                                Lorem ipsum 2dolor sit amet consectetur adipisicing elit. Reiciendis possimus aperiam iste ab. A nulla doloribus reiciendis officia, quia et tempore praesentium incidunt, repellendus ratione perspiciatis dolore aliquam? Necessitatibus, quos.
                                Lorem ipsum 2dolor sit amet, consectetur adipisicing elit. Molestias, nesciunt eligendi. Dolorem reiciendis voluptate minima quas, est repellendus qui at aut perspiciatis aliquid labore accusantium, excepturi fuga eveniet, debitis.
                                Lorem ipsum 2dolor sit amet consectetur adipisicing elit. Temporibus accusamus molestiae doloremque optio ab itaque amet, qui dolores sequi dicta voluptatum quae saepe est repudiandae provident ipsa ex possimus cumque?.
                                Lorem ipsum 2 dolor sit amet consectetur adipisicing elit. Quasi sit ut obcaecati temporibus veritatis sed labore sequi eius illum! Voluptatem magni molestias architecto quam at corrupti reprehenderit ipsa consectetur vitae?
                            </Text>
                             */}
                        {/* </ScrollView> */}
                    {/* </Wrapper> */}
                {/* </Wrapper>
                </ScrollView>*/}
            </Wrapper>
            {/* </ScrollView>  */}

        </Wrapper>
    )
}

export default AdviceDetail

