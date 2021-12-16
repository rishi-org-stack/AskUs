import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import React from 'react'
import { ScrollView } from 'react-native'
import { Wrapper } from '../../../../components'
import TouchableContainer from '../../../../components/containers/TouchableWrapper'
import { SentToMe } from '../../../../services'
import RequestCard from '../../../components/cards/requestCard'
import AskUsHeader from '../../../components/header'
import tokenState from '../../../state/token'
import { colors } from '../../../theme'

interface Props {
    navigation: DrawerNavigationHelpers
}

const docreqs=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
]

const patientreqs=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
]
const RequestList = (props: Props) => {
    const [docreq, setDocreq] = React.useState(true)
    const [fdList, setfdList] = React.useState([])
    React.useEffect(()=>{
        Promise.resolve(SentToMe(tokenState.token.get())).then(d=>{
        console.log('====================================');
        console.log(d["data"]);
        setfdList(d["data"])
        console.log('====================================');
    }).catch(e=>{
        console.log({err:e});
        
    })
    },[])
    return (
        <Wrapper
            flex={1}
            backgoundColor={colors.background}
        >
            <AskUsHeader nav={props.navigation}/>
            <Wrapper row width={'100%'} marginB={5} marginT={5}>
                <Wrapper flex={1}>
                    <TouchableContainer 
                        backgoundColor={colors.buttonColor} 
                        width={70}
                        height={30}
                        radius={5}
                        centerMain
                        Onpress={()=>{
                            setDocreq(true)
                        }}
                        style={{
                            alignSelf:'center'
                        }}
                    >
                        Doctor
                    </TouchableContainer>
                </Wrapper>
                <Wrapper 
                    flex={1} >
                    <TouchableContainer 
                        backgoundColor={colors.buttonColor} 
                        width={70}
                        height={30}
                        radius={5}
                        centerMain
                        Onpress={()=>{
                            setDocreq(false)
                        }}
                        style={{
                            alignSelf:'center'
                        }}
                    >
                        Patient
                    </TouchableContainer>
                </Wrapper>
                
            </Wrapper>
            {
                docreq?
                DocReq(fdList)
                :
                PatientReq(fdList)

            }
        </Wrapper>
    )
}

const DocReq =(list:never[])=>{
    return(
        <ScrollView>
            {
                list==undefined?
                docreqs.map((_,i)=>{
                    return(
                        <Wrapper margin={10} key={i.toString()+"_doctor_request_card"}>
                            <RequestCard/>
                        </Wrapper>
                    )
                })
                :
                list.map((_,i)=>{
                    return(
                        <Wrapper margin={10} key={i.toString()+"_doctor_request_card"}>
                            <RequestCard/>
                        </Wrapper>
                    )
                })
            }
        </ScrollView>
    )
}

const PatientReq =(list:never[])=>{
    return(
        <ScrollView>
            {
                list==undefined?
                patientreqs.map((_,i)=>{
                    return(
                        <Wrapper margin={10} key={i.toString()+"_patient_request_card"}>
                            <RequestCard/>
                        </Wrapper>
                    )
                })
                :
                list.map((_,i)=>{
                    return(
                        <Wrapper margin={10} key={i.toString()+"_patient_request_card"}>
                            <RequestCard/>
                        </Wrapper>
                    )
                })
            }
        </ScrollView>
    )
}

export default RequestList
