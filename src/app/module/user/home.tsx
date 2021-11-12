import React from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icon, Text, Wrapper } from '../../../components'
import { Card } from '../../components/cards/card'
import AskUsHeader from '../../components/header'
import { colors } from '../../theme'
import Icons from "../../../asset/index"
interface Props {
    
}

const data=[
    {
        name:'Diet',
        file:<Icons.Diet width={50} height={50}/>
    },
    {
        name:"Ear",
        file:<Icons.Ear width={50} height={50}/>

    },
    {
        name:"Eyes",
        file:<Icons.Eyes width={50} height={50}/>},
    {
        name:"Pregnancy",
        file:<Icons.Pregnant width={50} height={50}/>   },
    {
        name:"Bone",
        file:<Icons.Bones width={40} height={40}/>    },
    {
        name:"Teeth",
        file:<Icons.Teeth width={40} height={40}/>},
    {
        name:"Vitamins",
        file:<Icons.Vitamins width={40} height={40}/>    },
    {
        name:"Embroy",
        file:<Icons.Embroy width={40} height={40}/>    },
    {
        name:"Alzheimer",
        file:<Icons.Alzheimer width={40} height={40}/>}
]
const adData =[
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    },
    {
        header:"disease is a disearce",
        content:"content is cotent which is not header i think soo wht you thinmfjjfd,n"
    }
]
const Home = (props: Props) => {
    return (
        <Wrapper backgoundColor={colors.background} flex={1}>
            <Wrapper flex={1}>
                <AskUsHeader/>
            </Wrapper>
            <Wrapper height={80} width='100%' center margin={10}>
                {/* TODO: make scroll vie a seprate compoennet such taht we need to pass only data and childeren compoennet */}
                <ScrollView horizontal={true} >
                    {
                        data.map((val,i)=>{ 
                            return( 
                                //Move it to another compoenent outside moodule dir
                                <TouchableOpacity key={i.toString()+"_part_by_filter"} style={{
                                    marginRight:10
                                }}>
                                    <Wrapper height={75} radius={20} width={100} backgoundColor={colors.lightColor} >
                                        <Wrapper height={50} width='100%' center alignItems='center' > 
                                                {val.file}

                                        </Wrapper>
                                        <Text>
                                            {val.name}
                                        </Text> 
                                    </Wrapper>
                                </TouchableOpacity> 
                            )
                        })
                    }
                 
                </ScrollView>
            </Wrapper>
            <Wrapper flex={12} marginL={10} marginR={10}>
                <ScrollView>
                    {
                        adData.map((val,i)=>{
                           return (
                                <TouchableOpacity
                                    key={i.toString()+"_card_advice"}
                                >
                                    <Card  
                                        marginB={10} 
                                        header={"ok"} 
                                        content={"ok"}
                                        leftComp={
                                        <Image
                                            source={
                                                require('../../../asset/pTest1.jpg')
                                            }
                                            style={{
                                                    height:"100%",
                                                    width:"100%",
                                                    borderRadius:10
                                                }}
                                        />
                                    }/>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>     
            </Wrapper>
        </Wrapper>
    )
}

export default Home
