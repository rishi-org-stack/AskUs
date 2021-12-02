import React from 'react'
import {  Text, Wrapper } from '../../../components';
import { colors } from '../../theme';
import TouchableContainer from '../../../components/containers/TouchableWrapper';
import NewInput from '../../components/newInput';
import Icon from "../../../asset"
import { useMutation } from 'react-query';
import { Doctor as DocType} from '../../../types/interfaces';
import { UpdateUserDoctor } from '../../../services';
import { StackNavigationProp } from '@react-navigation/stack';
interface Props {
    navigation: StackNavigationProp<any,any>

}
//TODO: ADD  experience input  and experience in year input fix overapping if items
const DetailScreen = (p: Props) => {
    const [Doc, setDoc] = React.useState(true)

    React.useEffect(() => {
        
    }, []);

    
    return (

        <Wrapper flex={1} backgoundColor={colors.background} >
            <Wrapper 
                width={'100%'} 
                margin={20} 
                marginB={0} 
                alignItems='flex-start'
            >
                <Text bold large>
                    Tell AskUs more about you.
                </Text>
            </Wrapper>
            <Wrapper row margin={10} marginB={5}>
                <TouchableContainer 
                    flex={1}
                    alignItems='center'
                    Onpress={()=>setDoc(true)}
                    >
                        <Text 
                            marginL={5} 
                            marginR={5}
                            bold
                            medium
                            borderBW={Doc?1:0}
                            borderC='white'
                        > 
                            Doctor
                         </Text>
                </TouchableContainer>

                <TouchableContainer 
                    flex={1} 
                    centerMain 
                    alignItems='center'
                    Onpress={()=>setDoc(false)}
                > 
                
                        <Text 
                            
                            bold
                            medium
                            borderBW={!Doc?1:0}
                            borderC='white'
                        >
                            Patient
                        </Text>

                </TouchableContainer>
            </Wrapper>
            <Wrapper 
                height={1} 
                width={'95%'}
                backgoundColor='white' 
                style={{
                    alignSelf:'center'
            }}/>

            {
                Doc?<Doctor navigation={p.navigation}/>:<Patient/>
            }
            
        </Wrapper>

    )
};

const specialites = [
    "Allergy and immunology", "Anesthesiology", "Cardiology",
    "Dermatology", "endocrinology", "Neurology", "Obstetrics and gynecology", "Osteology", "Pathology", "Pediatrics"
    , "Psychiatry", "Urology"
]
const Patient = () => {
    let specs: string[] = []
    // let btColor = colors.background
    const [Male, setMale] = React.useState(true)
    const [totalSelected, settotalSelected] = React.useState(0)
    const [disabled, setdisabled] = React.useState(false)
    return (
        <Wrapper flex={1} alignItems='center' marginT={20}>
        <NewInput
            height={37}
            width={'80%'}
            placeholder='name'
            borderC='white'
            borderB={0.8}
            LeftComponent={
                <Icon.Name height={'100%'} width={'100%'}/>
            }
        />
        <Wrapper row width={'100%'}>
            <Wrapper flex={1} alignItems='center'>
            <NewInput
                height={37}
                width={40}
                placeholder='age'
                borderC='white'
                borderB={0.8}
                type='number-pad'
            />
            </Wrapper>
            
            <Wrapper flex={1} alignItems='center'>
            <NewInput
                height={37}
                width={40}
                placeholder='Sex'
                borderC='white'
                borderB={0.8}
                style={{
                    alignSelf:'flex-end'
                }}
                type='number-pad'
            />
            </Wrapper>
            
        </Wrapper>
        <Wrapper 
            flex={1} 
            width={'100%'} 
            marginT={10}>
            <Text 
                marginL={40} 
                marginB={5}>
                Concerned department's

            </Text>
            <Wrapper 
                height={1} 
                marginL={40} 
                width={'90%'} 
                style={{
                    backgroundColor:'white'
            }}/>
            <Wrapper 
                flex={1} 
                row 
                marginL={40}
                style={{
                    flexWrap:'wrap'
            }}>
                {   
                    specialites.map((val,i)=>{
                        const [curr, setcurr] = React.useState(colors.lightColor)
                        return(
                            <TouchableContainer 
                                alignItems='center' 
                                height={40}
                                width={130} 
                                margin={10} 
                                centerMain
                                radius={20}
                                Onpress={()=>{
                                    
                                    settotalSelected(totalSelected+1)
                                    setcurr(colors.buttonColor)
                                }} 
                                disabled={totalSelected===2}
                                style={{
                                backgroundColor:curr
                            }}>
                                <Text>
                                    {val}
                                </Text>
                            </TouchableContainer>                        )
                    })
                }
            </Wrapper>
            
        </Wrapper>
        <Wrapper 
            flex={0.2} 
            width={'100%'} 
            marginR={40}
            alignItems='flex-end' 
            center
            style={{
                // backgroundColor:'red'
        }}>
             <TouchableContainer 
                height={40} 
                width={100} 
                alignItems='center' 
                centerMain 
                radius={10}
                backgoundColor={colors.buttonColor}
                rightComponent={
                    <Icon.Right height={20} width={15}/>
                }
                >
                <Text>
                    Next
                </Text>
            </TouchableContainer> 
        </Wrapper>
        {/**/}
    </Wrapper>
    )
}
interface JuniorProp {
    navigation: StackNavigationProp<any,any>

}
const Doctor = (p:JuniorProp) => {
    // let btColor = colors.background
    const [exp, setexp] = React.useState('0')
    const [totalSelected, settotalSelected] = React.useState(0)
    // const [disabled, setdisabled] = React.useState(false)
    const [data, setdata] = React.useState()
    const [posted, setposted] = React.useState(false)
    const [name, setname] = React.useState('')
    const [age, setage] = React.useState(0)
    const [specs, setspecs] = React.useState<string[]>([])
    React.useEffect(()=>{
        if (posted){
            p.navigation.navigate('HomeRoute')
        }
    },[posted])
    const mutation = useMutation((req: DocType) => {

        return UpdateUserDoctor(req)
   
      },{
          onSuccess:(data)=>{
            setdata(data)
            console.log(data)
            setposted(true)
          },
          onError:()=>{
              console.log("error");
              
          }
    })
    return (
        <Wrapper flex={1} alignItems='center' marginT={20}>
        <NewInput
            height={37}
            width={'80%'}
            placeholder='name'
            borderC='white'
            borderB={0.8}
            OnChangeText={(text: string)=>setname(text)}
            LeftComponent={
                <Icon.Name height={'100%'} width={'100%'}/>
            }
        />
        <Wrapper row width={'100%'}>
            <Wrapper flex={1} alignItems='center'>
            <NewInput
                height={37}
                width={40}
                placeholder='age'
                borderC='white'
                borderB={0.8}
                OnChangeText={(text:string)=>{
                    let age = Number(text)
                    setage(age)
                    
                }}
                type='number-pad'
            />
            </Wrapper>
            
            <Wrapper flex={1} alignItems='center'>
            <NewInput
                height={37}
                width={40}
                placeholder='Exp'
                borderC='white'
                borderB={0.8}
                style={{
                    alignSelf:'flex-end'
                }}
                type='number-pad'
                OnChangeText={(text)=>setexp(text)}
            />
            </Wrapper>
            
        </Wrapper>
        <Wrapper 
            flex={1} 
            width={'100%'} 
            marginT={10}>
            <Text 
                marginL={40} 
                marginB={5}>
                Specialities : (select any 2 or atleast 1)
            </Text>
            <Wrapper 
                height={1} 
                marginL={40} 
                width={'90%'} 
                style={{
                    backgroundColor:'white'
            }}/>
            <Wrapper 
                flex={1} 
                row 
                marginL={40}
                style={{
                    flexWrap:'wrap'
            }}>
                {   
                    specialites.map((val,i)=>{
                        const [curr, setcurr] = React.useState(colors.lightColor)
                        const [prev, setprev] = React.useState(false)
                        const [Clicked, setClicked] = React.useState(false)
                        return(
                            <TouchableContainer 
                                key={i.toString()+"_speciality_card"}
                                alignItems='center' 
                                height={40}
                                width={130} 
                                margin={10} 
                                centerMain
                                radius={20}
                                Onpress={()=>{
                                    setspecs([...specs,val])
                                    settotalSelected(totalSelected+1)
                                    setClicked(!Clicked)
                                    setprev(true)
                                }} 
                                disabled={totalSelected===2 && prev}
                                style={{
                                backgroundColor:Clicked ? colors.buttonColor : colors.lightColor
                            }}>
                                <Text>
                                    {val}
                                </Text>
                            </TouchableContainer>                        )
                    })
                }
            </Wrapper>
            
        </Wrapper>
        <Wrapper 
            flex={0.2} 
            width={'100%'} 
            marginR={40}
            alignItems='flex-end' 
            center
            style={{
                // backgroundColor:'red'
        }}>
             <TouchableContainer 
                height={40} 
                width={100} 
                alignItems='center' 
                centerMain 
                radius={10}
                backgoundColor={colors.buttonColor}
                rightComponent={
                    <Icon.Right height={20} width={15}/>
                }
                Onpress={()=>{
                    console.log(exp);
                    
                    mutation.mutate({
                        age:age,
                        name:name,
                        exp_in_years:exp,
                        specialities:specs
                    })

                }}
                >
                <Text>
                    Next
                </Text>
            </TouchableContainer> 
        </Wrapper>
        {/**/}
    </Wrapper>
    )
}
export default DetailScreen;
