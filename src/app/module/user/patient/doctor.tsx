import React from 'react'
import { ScrollView } from 'react-native';
import {  Button, Text, Wrapper } from '../../../../components';
import { Card } from '../../../components/card';
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
                         
                            <Wrapper flex={1}>
                                <Text>
                                    photo
                                </Text>
                            </Wrapper>
                            <Wrapper flex={1} center>
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
                            <Text small marginB={2}>
                                Patients
                            </Text>
                            <Text medium/>
                            <Text >
                                132
                            </Text>
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

                    <Text> Top addvices </Text>
                    <Text>advies</Text>
                     <ScrollView style={{
                         width:'100%'
                     }}>
                        {
                            data.map((ob,i)=>{ 
                                return( 
                                    //TODO:make it clickable 
                                    // <Button onPress={()=>console.log('detail page')}> */}
                                    <Card  marginB={10} header={ob.header} content={ob.content1}/> 
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
