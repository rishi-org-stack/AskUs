//left side mai ek tab bar banwo
//jo ki pattients upcoming and out going requestconnected doctor tk jane mai madat kre
//TODO:willchange it thinking about it
import React from 'react';
import {Text, Wrapper} from '../../../../components';
import {colors} from '../../../theme';
import Icons from '../../../../asset/index';
import {Dimensions, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { TopDownCard } from '../../../components/cards/topDownCars';
import TouchableContainer from '../../../../components/containers/TouchableWrapper';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import SymptomCard from '../../../components/cards/symptomCard';
import Icon from "../../../../asset"
import { FlatList } from 'react-native-gesture-handler';
const symptoms=[
  {
    symptom:"pain"
  },
  {
    symptom:"mpre pain"
  },
  {
    symptom:"mpre pain"
  },
  {
    symptom:"less pain"
  },
  {
    symptom:"very pain"
  },
  {
    symptom:"much pain"
  },
  {
    symptom:"alot pain"
  },
  {
    symptom:"more more pain"
  }
]

const headers=[
  {
    header:"bilogy is biology"
  },
  {
    header:"Blood Test"
  },
  {
    header:"Blood Test"
  },
  {
    header:"Blood Test"
  },
  {
    header:"Blood Test"
  },
  {
    header:"Blood Test"
  },
  {
    header:"Blood Test"
  },
  {
    header:"Blood Test"
  },
  {
    header:"Blood Test"
  },
  {
    header:"Blood Test"
  }
]

const advices=[
  {
    header:"bilogy is biology",
    content:"gfgdydrydtd"
  },
  {
    header:"Blood Test",
    content:"gfgdydrydtd"

  },
  {
    header:"Blood Test",
    content:"gfgdydrydtd"

  },
  {
    header:"Blood Test",
    content:"gfgdydrydtd"

  },
  {
    content:"gfgdydrydtd",

    header:"Blood Test"
  },
  {
    header:"Blood Test",
    content:"gfgdydrydtd"

  },
  {
    header:"Blood Test",
    content:"gfgdydrydtd"

  },
  {
    header:"Blood Test",
    content:"gfgdydrydtd"

  },
  {
    header:"Blood Test",
    content:"gfgdydrydtd"

  },
  {
    header:"Blood Test",
    content:"gfgdydrydtd"

  }
] 
interface Props {
  navigation:DrawerNavigationHelpers
}
const DoctorPatientProfileView = (props: Props) => {
  const [history,setHistory]=React.useState(true)
  const [historyClicked, sethistoryClicked] = React.useState(false)
  const [adviceClicked, setadviceClicked] = React.useState(false)
  return (
    <Wrapper backgoundColor={colors.background} flex={1} alignItems='center'>
    <ScrollView style={{flex:1}}>
      <Wrapper height={50} width={50} radius={10} backgoundColor='red'>

      </Wrapper>
      <Text bold large>
          Jane WiliamSon
      </Text>
      <Wrapper height={80} row width={'90%'}>
        <Wrapper flex={1} alignItems='center'>
          <Text marginT={20}>
            Age
          </Text>
          <Text marginT={10}>
            34
          </Text>
        </Wrapper>
        <Wrapper flex={1} alignItems='center'>
          <Text marginT={20}>
            Height
          </Text>
          <Text marginT={10}>
            34
          </Text>
        </Wrapper>
        <Wrapper flex={1} alignItems='center'>
          <Text marginT={20}>
            Weight
          </Text>
          <Text marginT={10}>
            34
          </Text>
        </Wrapper>
        <Wrapper flex={1} alignItems='center'>
          <Text marginT={20}>
            Blood
          </Text>
          <Text marginT={10}>
            34
          </Text>
        </Wrapper>
        
      </Wrapper>

      <Wrapper width={'90%'} marginT={20}>
        <Text>
          Chronic
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            symptoms.map((_,i)=>{
              return(
                <Wrapper marginR={10}>
                  <SymptomCard key={i.toString()}/>
                </Wrapper>
              )
            })
          }
        </ScrollView>
      </Wrapper>

      <TouchableContainer
       width={'90%'} 
       radius={20} 
       height={60} 
       centerMain
       marginT={20}
       backgoundColor={colors.lightColor}
       Onpress={()=>sethistoryClicked(!historyClicked)}
       rightComponent={
         <Wrapper
          height={40}
          // backgoundColor='red' 
          width={40}
          marginR={20}
          center
          alignItems='center'
          style={{alignSelf:'center'}}
          >
            {
              historyClicked?<Icon.Down height={13} width={15}/>:
              <Icon.Up height={13} width={15}/>

            }
         </Wrapper>
       }
       >
         <Text marginL={20}>
           Treatment history
         </Text>
      
      </TouchableContainer>
       {
         historyClicked&&
         <HistoryView/>
       }
      <TouchableContainer
       width={'90%'} 
       radius={20} 
       height={60} 
       centerMain
       marginT={20}
       backgoundColor={colors.lightColor}
       rightComponent={
         <Wrapper
          height={40}
          // backgoundColor='red' 
          width={40}
          marginR={20}
          center
          alignItems='center'
          style={{alignSelf:'center'}}
          >
            <Icon.Up height={13} width={15}/>
         </Wrapper>
       }
       >
         <Text marginL={20}>
           Advice
         </Text>
      
      </TouchableContainer>
      </ScrollView>
    </Wrapper>
  );
};
// TODO needs fixationin style


const HistoryView=()=>{
  return(
    // <ScrollView
    //   style={{
    //     width:"100%",
    //     // flex:1,
    //     marginTop:10
    //     // alignSelf:'baseline'
    //   }}
    //   contentContainerStyle={{
    //     alignItems:'center'
    //   }}
    // >
    //   {
    //     symptoms.map((_,i)=>{
    //       return(
    //             <Wrapper
    //             key={i.toString()+"_history_card"}
    //              width={'90%'} 
    //              backgoundColor='red' 
    //              marginB={20}>
    //               <Text>
    //                 Mar 11, 2020
    //               </Text>
    //               <Text bold large>
    //                 Genral
    //               </Text>
    //               <Wrapper row>
    //                 <Wrapper 
    //                   marginT={20} 
    //                   height={30} 
    //                   width={30}
    //                   radius={5} 
    //                   backgoundColor='pink'>

    //                 </Wrapper>
    //                 <Text 
    //                   marginL={10} 
    //                   bold 
    //                   large 
    //                   style={{alignSelf:'center'}}>
    //                     Dr hu na mishra
    //                 </Text>
    //               </Wrapper>
    //             </Wrapper>
    //       )
    //     })
    //   }
      
    //  </ScrollView>
    <FlatList
    data={symptoms}
    renderItem={()=>

      <Wrapper
                // key={i.toString()+"_history_card"}
                 width={'90%'} 
                 backgoundColor='red' 
                 marginB={20}>
                  <Text>
                    Mar 11, 2020
                  </Text>
                  <Text bold large>
                    Genral
                  </Text>
                  <Wrapper row>
                    <Wrapper 
                      marginT={20} 
                      height={30} 
                      width={30}
                      radius={5} 
                      backgoundColor='pink'>

                    </Wrapper>
                    <Text 
                      marginL={10} 
                      bold 
                      large 
                      style={{alignSelf:'center'}}>
                        Dr hu na mishra
                    </Text>
                  </Wrapper>
                </Wrapper>
    }
    />
  )
}
export default DoctorPatientProfileView;
