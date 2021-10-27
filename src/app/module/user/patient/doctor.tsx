import React from 'react'
import { Image, ScrollView } from 'react-native';
import {  Button, Text, Wrapper } from '../../../../components';
import  Card from '../../../components/cards/advice';
import { colors } from '../../../theme';
// import Button from '../../../components/button'
// import Input from '../../../components/input'
// import langEng from '.././../../lang/eng';

interface Props {

}

const data=[
    {
        header:"header1",
        content1:"content1"
    },
    {
        header:"header1",
        content1:"content1"
    },
    {
        header:"header1",
        content1:"content1"
    },
    {
        header:"header1",
        content1:"content1"
    },
    {
        header:"header1",
        content1:"content1"
    },
    {
        header:"header1",
        content1:"content1"
    }
]
//TODO: ADD  experience input  and experience in year input fix overapping if items
const ProfileScreen = () => {
    
    return (

        <Wrapper flex={1} backgoundColor={colors.background}>
            {/* <Wrapper flex={1} backgoundColor='red'>
                {/* Header Section */}
            {/* </Wrapper> */} 
            <Wrapper flex={1}>
                <Wrapper flex={1} >
                    <Wrapper 
                        flex={1}
                        margin={10} 
                        radius={5}
                        marginB={0}>
                         
                            <Wrapper flex={1} row center alignItems='flex-end'>
                                <Wrapper 
                                    height="70%" 
                                    width="40%"
                                    backgoundColor={colors.lightColor} 
                                    alignItems='center'
                                    radius={10}
                                    >
                                    <Wrapper
                                        height="125%" 
                                        width="80%"
                                        style={{
                                            bottom:35
                                        }}
                                    >
                                        <Image
                                            source={
                                                require('../../../../asset/pTest2.jpg')
                                                }
                                            style={{
                                                height:"100%",
                                                width:"100%",
                                                borderRadius:10,
                                                backgroundColor:'transparent'
                                            }}
                                        />
                                    </Wrapper>
                                </Wrapper>
                                
                            </Wrapper>
                            <Wrapper  center marginB={10}>
                                <Text large>
                                    Dr. Abcdefg jha
                                </Text>
                                <Text >
                                    specility
                                </Text>
                            </Wrapper>
                    </Wrapper>
                
                    <Wrapper row  margin={10} marginB={0}marginT={4} >
                        <Wrapper 
                            flex={1} 
                            backgoundColor={colors.lightColor} 
                            radius={10}
                            marginR={20}
                            >
                            <Text small marginB={2}>Patients</Text>
                            <Text medium>132</Text>
                        </Wrapper>
                        <Wrapper 
                            flex={1} 
                            backgoundColor={colors.lightColor} 
                            radius={10}
                            >
                            <Text small marginB={2}>exp</Text>
                            <Text medium>13</Text>
                        </Wrapper>
                        <Wrapper 
                            flex={1} 
                            backgoundColor={colors.lightColor} 
                            radius={10}
                            marginL={20}
                            >
                            <Text small marginB={2}>Degrees</Text>
                            <Text medium>13 </Text>
                        </Wrapper>
                        
                    </Wrapper>
                </Wrapper>
                <Wrapper flex={1} alignItems='flex-start'
                margin={10}
                >

                    <Text marginB={10}> Top advices </Text>
                     <ScrollView style={{
                         width:'100%'
                     }}>
                        {
                            data.map((ob,i)=>{ 
                                return( 
                                    //TODO:make it clickable 
                                    // <Button onPress={()=>console.log('detail page')}> */}
                                    <Card  
                                        key={i.toString()+"_card_advice"}
                                        marginB={10} 
                                        header={ob.header} 
                                        content={ob.content1}
                                        leftComp={
                                                <Image
                                                    source={
                                                        require('../../../../asset/pTest1.jpg')
                                                    }
                                                    style={{
                                                        height:"100%",
                                                        width:"100%",
                                                        borderRadius:10
                                                    }}
                                                    />
                                        }/> 
                                        // </Button> */}
                                ) 
                             }) 
                        } 
                    </ScrollView> 
                </Wrapper>
            </Wrapper>
        </Wrapper>

    )
};

export default ProfileScreen;
