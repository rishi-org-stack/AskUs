import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { SafeAreaView } from "react-native";
import { Wrapper, Text } from "../../components";
import Home from "../module/user/home";
import Icon from "../../asset";
import { colors } from "../theme";
import { ScrollView } from "react-native-gesture-handler";
import ProfileDoc from "../module/user/doctor/profile";
import TouchableContainer from "../../components/containers/TouchableWrapper";
import DoctorProfileView from "../module/user/doctor/patient";
import PatientList from "../module/user/doctor/patientList";
import RequestList from "../module/user/doctor/requestList";
import FollowingDocList from "../module/user/doctor/followingDocList";

const Drawer= createDrawerNavigator()

const DrawNav=()=>{
    return(
      <Drawer.Navigator
        drawerContent={(p)=> <SideBar {...p}/>}
        screenOptions={{
          headerShown:false
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home} />

          <Drawer.Screen
          name="Profile"
          component={ProfileDoc} />

          <Drawer.Screen
          name="MyPatients"
          component={PatientList} />
          <Drawer.Screen
          name="MyRequests"
          component={RequestList} />
          <Drawer.Screen
          name="DocsFollowing"
          component={FollowingDocList} />
      </Drawer.Navigator>
    )
}

const SideBar =(p:DrawerContentComponentProps)=>{
//   const user = useGetUser(db,1)

    return(
      <SafeAreaView 
        style={{ 
          flex: 1,
          backgroundColor:colors.lightColor
        }}>
        <DrawerContentScrollView>
          <TouchableContainer 
            marginL={20} 
            marginT={10}
            Onpress={()=>{
                p.navigation.navigate('Profile')
            }}
            >
            <Wrapper
                height={40} 
                width={40} 
                radius={50} 
                style={{
                backgroundColor:'red'
                }}
            />
  
              <Text  bold >
               rishi
              </Text>
          </TouchableContainer> 
        <Wrapper 
            marginT={5} 
            height={1} 
            width={'100%'} 
            style={{
                backgroundColor:'white'
          }}/>
          <ScrollView>

            <DrawerItem 
              label={()=><Text>Home</Text>} 
              onPress={function (): void {
                p.navigation.navigate('Home')
              }}
              icon={
                (p)=><Icon.Home 
                        height={20} 
                        width={20}/>
              }
            />

            <DrawerItem 
              label={()=><Text>Requests</Text>} 
              onPress={function (): void {
                p.navigation.navigate('MyRequests')
              }}
              icon={
                (p)=><Icon.Request 
                        height={20} 
                        width={20}/>
              }
            />
  
            <DrawerItem 
              label={()=><Text>My Requests</Text>} 
              onPress={function (): void {
                //   MigDown(db)
              }}
              icon={
                  //Addrequest icon
                (p)=><Icon.SentRequest 
                        height={20} 
                        width={20}/>
              }
          
            />
            <DrawerItem 
              label={()=><Text>My Patients</Text>} 
              onPress={function (): void {
                p.navigation.navigate("MyPatients")
              }}
              icon={
                  //Addrequest icon
                (p)=><Icon.Patient 
                        height={20} 
                        width={20}/>
              }
          
            />
            <DrawerItem 
              label={()=><Text>Docs Following</Text>} 
              onPress={function (): void {
                //   MigDown(db)
                p.navigation.navigate('DocsFollowing')
              }}
              icon={
                  //Addrequest icon
                (p)=><Icon.Doctor 
                        height={20} 
                        width={20}/>
              }
          
            />
            <Text marginB={2} marginL={10}>
                Advice
            </Text>
            <Wrapper height={1} width={'100%'} backgoundColor="white"/>
            
            <DrawerItem 
              label={()=><Text>My Advices</Text>} 
              onPress={function (): void {
              }}
              icon={
                (p)=><Icon.Advice 
                        height={20} 
                        width={20}/>
              }
          
            />

            <DrawerItem 
            
              label={()=><Text>Liked Advices</Text>} 
              onPress={function (): void {
              }}
              icon={
                (p)=><Icon.Bell 
                        height={20} 
                        width={20}/>
              }
          
            />
        </ScrollView>
        </DrawerContentScrollView>
        <DrawerItem 
          label={()=><Text>Sign Out</Text>}
           onPress={()=> {
            // deleteData(db,1)
            }}
            icon={
              ()=>
                <Icon.LogOut height={20} width={20}/>
            }
          />
      </SafeAreaView>
    )
}
export default DrawNav;