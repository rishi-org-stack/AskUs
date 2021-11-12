import React from 'react';
import {Text, Wrapper} from '../../../../components';
import {colors} from '../../../theme';
import Icons from '../../../../asset/index';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { TopDownCard } from '../../../components/cards/topDownCars';

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
interface Props {}
const PatientProfile = (props: Props) => {
  const [history,setHistory]=React.useState(true)
  return (
    <Wrapper backgoundColor={colors.background} flex={1}>
      {/* // header with back icon */}
      <Wrapper row height={30} alignItems="center" width="100%">
        <TouchableOpacity>
          <Icons.Left height={20} width={20} />
        </TouchableOpacity>
      <Wrapper flex={1} />
    </Wrapper>
      {/* header ends */}

      {/* body */}
      <Wrapper flex={1} row backgoundColor={colors.lightColor}>
        <Wrapper flex={1} 
                backgoundColor={colors.background} 
                margin={20} 
                radius={20}>

        </Wrapper>
        <Wrapper flex={1} marginT={20} marginB={20}>
          <Text marginB={5}>
            Name:{"  "}Name is name
          </Text>
          <Text marginB={5}>
            Age:{"  "}56{"\t\t\t"} Sex:{"  "}Male
          </Text>
          <Text>
            Symtoms: 
          </Text>
          <ScrollView>
          {
              symptoms.map((val,i)=>{
                  return(
                    
                      <Wrapper backgoundColor={colors.buttonColor} style={{
                        alignSelf: "baseline"
                      }}
                      radius={10}
                      marginB={5}
                      marginT={5}
                      key={i.toString()+"_symptom_card"}
                      >
                        <Text marginR={30}>
                          {"\t\t\t"+val.symptom}
                        </Text>
                      </Wrapper>
                    
                    
                  )
                })
           
          }
          </ScrollView>
        </Wrapper>
      </Wrapper>
      <Wrapper flex={1.5} backgoundColor={colors. background}>
        {/* TODO: make report and personnel advice clickable and change personnel advice icon ,content should change on clicking both */}
        <Wrapper 
          height={60} 
          width='100%' 
          backgoundColor={colors.buttonColor} radius={10} style={{
            borderWidth:1,
            borderColor:"white"
          }}
          row>
            <TouchableOpacity style={{
              flex:1,
              alignItems:'center'
            }}
            onPress={()=>setHistory(true)}
            >
                <Icons.History height={40}/>
                <Text verySmall bold>
                    Reports
                </Text>
            </TouchableOpacity>


            <TouchableOpacity style={{
              flex:1,
              alignItems:'center',
              borderLeftWidth:1,
              borderColor:'white'
            }}
            onPress={()=>setHistory(false)}
            >
              <Icons.Advice height={40}/>
              <Text verySmall bold>
                  Personnel Advices
              </Text>
            </TouchableOpacity>
          </Wrapper>
          {
            history?<HistoryView/>
            :
            <AdviceView/>
          }
      </Wrapper>
    </Wrapper>
  );
};
// TODO needs fixationin style
const HistoryView  =()=>{
  return(
      <ScrollView style={{
      flexWrap: 'wrap',
      // flex:1,
      backgroundColor:'green',
      flexDirection:'row'
    }}
    
    >
      {
        headers.map((val,i)=>{
          return(
            <Wrapper height={200} width={150} >
              <Text>
                {val.header}
              </Text>
              <Wrapper  height={150} width={150}backgoundColor='red'/>
            </Wrapper>
          )
        })
      }
      </ScrollView>
  )
}

const AdviceView=()=>{
  return(
    <ScrollView
      style={{
        flex:1,
        marginTop:10
      }}
    >
      {
        advices.map((adv,i)=>{
          return(
            <TopDownCard
              marginB={10} 
              header={adv.header} 
              content={adv.content}
              topComp={
                <Wrapper height={30}
                  width='90%'
                  style={{
                    borderBottomWidth:1,
                    borderColor:'white',
                    alignSelf:'center'
                  }}
                  // center
                  alignItems='flex-start'
                  row
                  >
                    <Text marginR={10}>
                      Dr: delhi wale
                    </Text>
                    <Text>
                      posted on: 9/9/21
                    </Text>
                  </Wrapper>
              }
              leftComp={
                <Wrapper height='100%' width='100%' backgoundColor='green'>

                </Wrapper>
              }
            />
          )

        })
      }
      
    </ScrollView>
  )
}
export default PatientProfile;
