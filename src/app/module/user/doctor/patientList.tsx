import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import React from 'react'
import {  Text, Wrapper } from '../../../../components';
import { colors } from '../../../theme';
import PatientShortCard from '../../../components/cards/patientShortCard';
import { Patient } from '../../../../types/interfaces';
import { ScrollView } from 'react-native';
import AskUsHeader from '../../../components/header';
import { useQuery } from 'react-query';
import { GetFollowedByPatients } from '../../../../services';
import tokenState from '../../../state/token';
interface Props {
    navigation:DrawerNavigationHelpers;
}
const data:Patient[]=[ {
    age:12,
    concerned_secialities:[],
    height:23,
    name:'Rishi Jha',
    sex:'M',
    weight:87
},

{
    age:12,
    concerned_secialities:[],
    height:23,
    name:'Rishi Jha',
    sex:'M',
    weight:87
},
{
    age:12,
    concerned_secialities:[],
    height:23,
    name:'Rishi Jha',
    sex:'M',
    weight:87
},

{
    age:12,
    concerned_secialities:[],
    height:23,
    name:'Rishi Jha',
    sex:'M',
    weight:87
},

{age:12,
    concerned_secialities:[],
    height:23,
    name:'Rishi Jha',
    sex:'M',
    weight:87
},

{age:12,
    concerned_secialities:[],
    height:23,
    name:'Rishi Jha',
    sex:'M',
    weight:87
},

{age:12,
    concerned_secialities:[],
    height:23,
    name:'Rishi Jha',
    sex:'M',
    weight:87
},

{age:12,
    concerned_secialities:[],
    height:23,
    name:'Rishi Jha',
    sex:'M',
    weight:87
},

{age:12,
    concerned_secialities:[],
    height:23,
    name:'Madhav mishra',
    sex:'M',
    weight:87
}
]
const PatientList = (props: Props) => {
    const [plist, setplist] = React.useState([])
    React.useEffect(()=>{
        Promise.resolve(GetFollowedByPatients(tokenState.token.get())).then(d=>{
            setplist(d["data"])
        }).catch(e=>{
            console.log('====================================');
            console.log(e);
            console.log('====================================');
        })
    },[])

    return (
        <Wrapper center flex={1} backgoundColor={colors.background}>
            <AskUsHeader nav={props.navigation}/>
            <Text marginL={20}>
                You have {data.length.toString()} patients who needs your help
            </Text>
            <ScrollView >
                {
                    plist==[]?
                    data.map((val,i)=>{
                        return(
                            <PatientShortCard
                            onPress={()=>props.navigation.navigate('PatientViewforDoc')}
                             patient={val} 
                             key={i.toString()+"_patient_card"}
                            />
                        )
                    })
                    :
                    plist.map((val,i)=>{
                        return(
                            <PatientShortCard
                            onPress={()=>props.navigation.navigate('PatientViewforDoc')}
                            patient={val["user"]} 
                             key={i.toString()+"_patient_card"}
                        
                            />
                        )
                    })
                }
            </ScrollView>
        </Wrapper>
    )
}

export default PatientList
