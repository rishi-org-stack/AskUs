import React from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icon, Text, Wrapper } from '../../../components'
import { Card } from '../../components/cards/card'
import AskUsHeader from '../../components/header'
import { colors } from '../../theme'
import Icons from "../../../asset/index"
import TouchableContainer from '../../../components/containers/TouchableWrapper'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import { TopDownCard } from '../../components/cards/topDownCars'
import { useQuery } from 'react-query'
import { GetFollowedByPatients, GetUser } from '../../../services'
interface Props {
    navigation: DrawerNavigationHelpers
}
 
const data=[
    {
        name:'Diet',
        file:<Icons.Diet width={30} height={30}/>
    },
    {
        name:"Ear",
        file:<Icons.Ear width={30} height={30}/>

    },
    {
        name:"Eyes",
        file:<Icons.Eyes width={30} height={30}/>},
    {
        name:"Pregnancy",
        file:<Icons.Pregnant width={30} height={30}/>   },
    {
        name:"Bone",
        file:<Icons.Bones width={30} height={30}/>    },
    {
        name:"Teeth",
        file:<Icons.Teeth width={30} height={30}/>},
    {
        name:"Vitamins",
        file:<Icons.Vitamins width={30} height={30}/>    },
    {
        name:"Embroy",
        file:<Icons.Embroy width={30} height={30}/>    },
    {
        name:"Alzheimer",
        file:<Icons.Alzheimer width={30} height={30}/>}
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
    //   if (res.isLoading){
    //       return(
    //           <Wrapper flex={1} backgoundColor={colors.background}>
    //           <Text>
    //                 loading.......
    //           </Text>
    //           </Wrapper>
    //       )
    //   }
    //   if (res.isError){
    //       return(
    //                 <Wrapper flex={1} backgoundColor={colors.background}>
    //                     <Text>
    //                         error
    //                     </Text>
    //                 </Wrapper>
    //       )
        
    //   }
    return (
        
        <Wrapper backgoundColor={colors.background} flex={1}>
            {/* <Wrapper > */}
                <AskUsHeader nav={props.navigation}/>
            {/* </Wrapper> */}
            <ScrollView>
            
            <Wrapper height={80} width='100%' center margin={10}>
                {/* TODO: make scroll vie a seprate compoennet such taht we need to pass only data and childeren compoennet */}
                <ScrollView horizontal={true} style={{marginRight:10}} >
                    {
                        data.map((val,i)=>{ 
                            const [selected, setselected] = React.useState(false)
                        //console.log('====================================');
                            // co nsole.log(res.data["data"]);
                            // console.log('====================================');
                            return( 
                                //Move it to another compoenent outside moodule dir
                                <TouchableContainer 
                                    alignItems='center' 
                                    key={i.toString()+"_part_by_filter"} 
                                    LeftComponent={
                                        <Wrapper marginL={10}>
                                            {val.file}
                                        </Wrapper>
                                    }
                                    centerMain
                                    height={60}
                                    radius={10}
                                    style={{
                                        marginRight:10,
                                        backgroundColor:selected?colors.buttonColor:colors.lightColor,
                                        
                                }}
                                Onpress={()=>{
                                    setselected(!selected)
                                }}
                                >
                                    <Text marginL={20} marginR={20}>
                                        {val.name}
                                    </Text>
                                </TouchableContainer> 
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
                            <TouchableContainer
                            key={i.toString()+"_card_advice"}
                            style={{marginBottom:15}}
                        >
                            {/* <Card  
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
                                
                            }/> */}
                            <TopDownCard 
                                topComp={
                                <TouchableContainer  style={{width:"100%",flexDirection:"row"}}>
                                    <Image source={require("./../../../asset/doctor.png")} style={{width:35,height:35,margin:10,marginLeft:20}} />
                                    <Text style={{marginLeft:70,marginTop:-40,marginBottom:15}}>
                                       Dr OK
                                    </Text>
                                </TouchableContainer>
                                }
                                downComp={
                                    <Wrapper 
                                        height={'15%'} 
                                        center
                                        >
                                        <Text marginL={20} style={{alignSelf:"flex-end",marginRight:10,fontWeight:"100",fontSize:10}}> Nov 30 </Text>
                                    </Wrapper>
                                }
                                marginB={10}
                            >
                                <TouchableContainer 
                                    height={"55%"} 
                                    width={"100%"}
                                    marginT={6}
                                    LeftComponent={<Icons.Advice height={'100%'} width={'100%'}/>}
                                    >
                                   <Text style={{margin:3}}>
                                       Heading
                                   </Text>
                                    <Text style={{fontWeight:"normal",color:"#808080",fontSize:13,width:"85%"}}>
                                    This the place where we find the advice of given by the Doctor who posted this article
                                </Text>
                                </TouchableContainer>
                               
                            </TopDownCard>
                        </TouchableContainer>
                            )
                        })
                    }
                </ScrollView> 
                
            </Wrapper>
            </ScrollView>

            {/* <Wrapper width={'100%'} height={60}/> */}
        </Wrapper>
    )
}

export default Home
