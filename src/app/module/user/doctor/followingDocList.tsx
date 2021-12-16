import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import React from 'react'
import { ScrollView } from 'react-native';
import { Wrapper } from '../../../../components';
import TouchableContainer from '../../../../components/containers/TouchableWrapper';
import { GetFollowingDoctors } from '../../../../services';
import FollowingDocCard from '../../../components/cards/followingDoc';
import AskUsHeader from '../../../components/header';
import tokenState from '../../../state/token';
import { colors } from '../../../theme';

interface Props {
    navigation:DrawerNavigationHelpers
}

const data =[1,,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const FollowingDocList = (props: Props) => {
    const [fdList, setfdList] = React.useState([])
    React.useEffect(()=>{
        Promise.resolve(GetFollowingDoctors(tokenState.token.get())).then(d=>{
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
            <ScrollView>
                {
                    fdList==undefined?
                    
                    data.map((_,i)=>{
                        return(
                            <TouchableContainer 
                                marginB={10} 
                                key={
                                    i.toString()+
                                "_doc_following_card"}
                                >
                                <FollowingDocCard/>
                            </TouchableContainer>
                        )
                    })
                    :
                    fdList.map((_,i)=>{
                        return(
                            <TouchableContainer 
                                marginB={10} 
                                key={
                                    i.toString()+
                                "_doc_following_card"}
                                >
                                <FollowingDocCard/>
                            </TouchableContainer>
                        )
                    })
                }
            </ScrollView>
            
        </Wrapper>
    )
}

export default FollowingDocList;
