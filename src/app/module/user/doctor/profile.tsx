import React from 'react'
import {  Text, Wrapper } from '../../../../components'
import TouchableContainer from '../../../../components/containers/TouchableWrapper'
import { colors } from '../../../theme'
import Icon from '../../../../asset'
import AskUsHeader from '../../../components/header'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
interface Props {
  navigation:DrawerNavigationHelpers
}

const ProfileDoc = (props: Props) => {
  return (
    <Wrapper flex={1} backgoundColor={colors.background}>
      {/* <AskUsHeader nav={props.navigation}/> */}
      <TouchableContainer 
        width={'100%'} 
        height={30} 
        LeftComponent={
          <TouchableContainer 
            Onpress={()=>{
              props.navigation.navigate('Home')
            }}
          >
          <Icon.Left
           height={20}
            width={20}
            style={{
              marginLeft:20
            }}
            />
          </TouchableContainer>
        }
        />
      <Wrapper 
        flex={1} 
        width={'90%'}
        backgoundColor={colors.lightColor} 
        radius={30}
        style={{
          alignSelf:'center'
        }}
        >
          <Wrapper flex={4} row>
            
          </Wrapper>
          <Wrapper 
            flex={1} 
            alignItems='center' 
            >
            <Wrapper 
              width={"80%"} 
              height={'100%'} 
              row>
              <Wrapper flex={1}row alignItems='center'>
                <Wrapper flex={1} alignItems='center'>
                  <Text>
                    54
                  </Text>
                  <Text>
                    Ecperience
                  </Text>
                </Wrapper>
                {/* TODO: replace vertical view with component */}
                <Wrapper 
                  height={'60%'} 
                  width={1} 
                  backgoundColor='white'/>
              </Wrapper>
              <Wrapper flex={1} row alignItems='center'>
                <Wrapper flex={1} alignItems='center'>
                  <Text>
                    54
                  </Text>
                  <Text>
                    following
                  </Text>
                </Wrapper>
                <Wrapper 
                  height={'60%'} 
                  width={1} 
                  backgoundColor='white'/>
              </Wrapper>
              <Wrapper flex={1} row alignItems='center'>
                <Wrapper flex={1} alignItems='center'>
                  <Text>
                    54
                  </Text>
                  <Text>
                    followed by
                  </Text>
                </Wrapper>
  
              </Wrapper>

            </Wrapper>
          </Wrapper>
      </Wrapper>
      <Wrapper flex={1} marginT={20}>
        <Wrapper row flex={1}>
          <TouchableContainer 
            flex={1} 
            alignItems='center' 
            centerMain 
            margin={10}
            marginL={20}
            marginR={20}
            // backgoundColor='red'
            radius={10}
            style={{
              shadowColor: 'white',
              shadowOpacity: 2,
              elevation: 10,
              shadowRadius: 10 ,
              shadowOffset : { width: 1, height: 10},
              backgroundColor:colors.buttonColor
            }}
          Onpress={()=>props.navigation.navigate('DocsFollowing')}
            >
              <Icon.Doctor height={30}/>
            <Text>
              following
            </Text>
          </TouchableContainer>
          <TouchableContainer
            flex={1} 
            alignItems='center' 
            centerMain 
            margin={10}
            marginL={20}
            marginR={20}
            radius={10}
            Onpress={()=>props.navigation.navigate('MyPatients')}
            style={{
              shadowColor: 'white',
              shadowOpacity: 2,
              elevation: 10,
              shadowRadius: 10 ,
              shadowOffset : { width: 1, height: 10},
              backgroundColor:colors.buttonColor
            }}
            >
              <Icon.Patient height={30}/>            
              <Text>
                patients
              </Text>
          </TouchableContainer>
        </Wrapper>

        <Wrapper row flex={1}>
          <TouchableContainer 
            flex={1} 
            alignItems='center' 
            centerMain 
            margin={10}
            marginL={20}
            marginR={20}
            // backgoundColor='red'
            radius={10}
            style={{
              shadowColor: 'white',
              shadowOpacity: 2,
              elevation: 10,
              shadowRadius: 10 ,
              shadowOffset : { width: 1, height: 10},
              backgroundColor:colors.buttonColor
            }}
            >
              <Icon.Advice height={30} />
            <Text>
              my advices
            </Text>
          </TouchableContainer>
          <TouchableContainer 
            flex={1} 
            alignItems='center' 
            centerMain 
            margin={10}
            marginL={20}
            marginR={20}
            radius={10}
            style={{
              shadowColor: 'white',
              shadowOpacity: 2,
              elevation: 10,
              shadowRadius: 10 ,
              shadowOffset : { width: 1, height: 10},
              backgroundColor:colors.buttonColor
            }}
            >
              <Icon.Advice height={30} />
              <Text>
                liked advices
              </Text>
          </TouchableContainer>
        </Wrapper>

        <Wrapper row flex={1}>
          <TouchableContainer 
            flex={1} 
            alignItems='center' 
            centerMain 
            margin={10}
            marginL={20}
            marginR={20}
            radius={10}
            style={{
              shadowColor: 'white',
              shadowOpacity: 2,
              elevation: 10,
              shadowRadius: 10 ,
              shadowOffset : { width: 1, height: 10},
              backgroundColor:colors.buttonColor
            }}
            Onpress={()=> props.navigation.navigate('MyRequests')}
            >
              <Icon.Request height={30}/>
            <Text>
              Requests
            </Text>
          </TouchableContainer>
          <TouchableContainer 
            flex={1} 
            alignItems='center' 
            centerMain 
            margin={10}
            marginL={20}
            marginR={20}
            radius={10}
            style={{
              shadowColor: 'white',
              shadowOpacity: 2,
              elevation: 10,
              shadowRadius: 10 ,
              shadowOffset : { width: 1, height: 10},
              backgroundColor:colors.buttonColor
            }}
            >
              <Icon.Invite height={30} />
            <Text>
              invite Patient
            </Text>
          </TouchableContainer>
        </Wrapper>

        <Wrapper row flex={1}/>
      </Wrapper>
    </Wrapper>
  )
}

export default ProfileDoc
