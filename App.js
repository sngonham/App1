import React, { Component } from 'react';
import {Text} from "react-native";
import Login from './SignIn.js';
import SignUpScreen from './SignUpScreen.js';
import Home from './Home.js';
import Enquiries from './Enquiries.js';
import MyHouse from './MyHouse.js';
import Complaints from './Complaints.js';
import Emergency from './Emergency.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from  '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewHouseContinue from './NewHouseContinue.js';
import NewHouse from './NewHouse.js';
import House from './House.js';
import Members from './Members.js';
import UpdateMember from './UpdateMember.js';
import NewMember from './NewMember.js';


const MyTheme = {
  dark: true,
  colors: {
    primary: 'black',
    background: 'rgb(242, 242, 242)',
    card: 'green',
    text: 'white',
    border: 'black',
    notification: 'black',
  },
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = ({ navigation }) =>{
  
   return (    
     <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
      <Stack.Screen name="Sign In" options={{ headerLeft: false }} component={Login} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Root" options={{ headerShown: false }} component={Root} />        
      <Stack.Screen name="Enquiries" component={Enquiries} />
      <Stack.Screen name="Complaints" component={Complaints} />
      <Stack.Screen name="My House" component={MyHouse} />
      <Stack.Screen name="New House Continue" options={{ title: "New House" }} component={NewHouseContinue} />
      <Stack.Screen name="New House" component={NewHouse} />
      <Stack.Screen name="House" component={House} />
      <Stack.Screen name="Members" component={Members} options={{ title: "House Members" }} />
      <Stack.Screen name="UpdateMember" options={{ title: "Member Details" }} component={UpdateMember} />
      <Stack.Screen name="NewMember" options={{ title: "New Member" }} component={NewMember} />
      <Stack.Screen name="Emergency" component={Emergency} />
      </Stack.Navigator>
    </NavigationContainer>
   );

   function Root() {
    return (
      <Drawer.Navigator>
      <Drawer.Screen name="MSDI" options={{ title: "Profile" }} component={Home} />
      <Drawer.Screen name="MSDI3" options={{ title: "Notification" }}  component={Home} />
      <Drawer.Screen name="MSDI2" options={{ title: "Help" }}  component={Home} />
      <Drawer.Screen name="Sign In" options={{ drawerIcon: null,headerLeft: false,drawerLabel:"Log Out",title:"Sign In" }}  component={Login} />
      </Drawer.Navigator>
    );
  }
};

export default App 

